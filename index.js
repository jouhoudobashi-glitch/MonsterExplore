import { DurableObject } from 'cloudflare:workers';
import {createMatch, input, snapshot, interrupt, validMonster, PROTOCOL} from './battle.js';

// Ver.0.16: original connection test + independent authoritative friend battle. No GPS or save-data handling.
const VERSION = '0.16';
const GAME_ORIGIN = 'https://jouhoudobashi-glitch.github.io';
const CODE = /^[1-9][0-9]{5}$/;
const text = (body, status = 200) => new Response(body, {
  status, headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'no-store' }
});
const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' }
});

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method !== 'GET') return text('Method not allowed', 405);
    if (url.pathname === '/health') return json({ ok: true, version: VERSION, mode: 'friend-battle', protocol: PROTOCOL });
    if (url.pathname === '/') return new Response(PAGE, {headers: {
      'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store',
      'content-security-policy': "default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; connect-src 'self' wss: ws:; base-uri 'none'; frame-ancestors 'none'; form-action 'none'",
      'x-content-type-options': 'nosniff', 'referrer-policy': 'no-referrer'
    }});
    const match = /^\/(room|battle)\/(\d{6})$/.exec(url.pathname);
    if (!match || !CODE.test(match[2])) return text('Not found', 404);
    if ((request.headers.get('Upgrade') || '').toLowerCase() !== 'websocket') return text('WebSocket required', 426);
    const origin=request.headers.get('Origin');
    if (match[1]==='room' ? origin!==url.origin : origin!==GAME_ORIGIN) return text('Origin not allowed', 403);
    if (!['create','join'].includes(url.searchParams.get('mode'))) return text('Invalid mode', 400);
    if(match[1]==='battle' && url.searchParams.get('v')!==String(PROTOCOL))return text('Protocol mismatch',426);
    return env.ROOMS.get(env.ROOMS.idFromName(match[1]==='battle'?'battle:'+match[2]:match[2])).fetch(request);
  }
};

export class BattleRoom extends DurableObject {
  active(except = null) {
    return this.ctx.getWebSockets().filter(s => s !== except && s.readyState === 1);
  }
  send(ws, obj) { try { if (ws.readyState === 1) ws.send(JSON.stringify(obj)); } catch (_) {} }
  broadcast(obj, except = null) { for (const ws of this.active(except)) this.send(ws, obj); }
  presence(except = null) { this.broadcast({type:'presence', count:this.active(except).length}, except); }
  lobby(except=null) {
    const players=this.active(except).map(w=>w.deserializeAttachment()).filter(Boolean).map(a=>({slot:a.slot,id:a.selected??null,ready:!!a.ready}));
    this.broadcast({type:'lobby',count:players.length,players},except);
  }
  async fetch(request) {
    const url = new URL(request.url);
    const mode = url.searchParams.get('mode');
    const code = url.pathname.split('/').pop(), battle=url.pathname.startsWith('/battle/');
    const peers = this.active();
    if (mode === 'create' && peers.length) return text('Code already in use', 409);
    if (mode === 'join' && !peers.length) return text('Room not found', 404);
    if (peers.length >= 2 || (battle&&peers.some(w=>w.deserializeAttachment()?.started))) return text('Room full or match started', 409);
    if(!peers.length){this.match=null;this.lastBroadcast=0;}
    const [client, server] = Object.values(new WebSocketPair());
    const occupied = new Set(peers.map(s => s.deserializeAttachment()?.slot));
    const slot = occupied.has(1) ? 2 : 1;
    this.ctx.acceptWebSocket(server);
    server.serializeAttachment({slot,code,kind:battle?'battle':'test',last:0,selected:null,ready:false,started:false});
    this.send(server, {type:'welcome', slot, code, version:VERSION, protocol:battle?PROTOCOL:0});
    if(battle)this.lobby();else this.presence();
    return new Response(null, {status:101, webSocket:client});
  }
  async webSocketMessage(ws, message) {
    if (typeof message !== 'string' || message.length > 256) { ws.close(1008,'Invalid message'); return; }
    const data = ws.deserializeAttachment();
    if (!data) { ws.close(1008,'Missing session'); return; }
    const now = Date.now();
    if (now - data.last < (data.kind==='battle'?45:400)) return;
    data.last = now;
    ws.serializeAttachment(data);
    let msg;
    try { msg = JSON.parse(message); } catch (_) { return; }
    if (!msg||typeof msg!=='object')return;
    if(data.kind!=='battle'){
      if(msg.type!=='test')return;
      const peers = this.active(ws);
      if (peers.length !== 1) { this.send(ws,{type:'error',message:'相手が接続していません。'}); return; }
      this.send(peers[0],{type:'received',from:data.slot});this.send(ws,{type:'sent'});return;
    }
    if(data.started&&!this.match){this.broadcast({type:'interrupted',reason:'restart'});return;}
    if(msg.type==='ready'&&!data.started&&!this.match){
      if(typeof msg.ready!=='boolean'||(msg.ready&&!validMonster(msg.id)))return;
      data.ready=msg.ready;data.selected=validMonster(msg.id)?msg.id:null;ws.serializeAttachment(data);this.lobby();
      const peers=this.active().sort((a,b)=>a.deserializeAttachment().slot-b.deserializeAttachment().slot);
      const selections=peers.map(w=>w.deserializeAttachment());
      if(peers.length===2&&selections.every(a=>a.ready&&validMonster(a.selected))){
        this.match=createMatch(selections.map(a=>a.selected),now);this.lastBroadcast=now;
        for(const w of peers){const a=w.deserializeAttachment();a.started=true;w.serializeAttachment(a);}
        this.broadcast(snapshot(this.match,now));
      }return;
    }
    if(msg.type==='ping'&&!data.started){this.send(ws,{type:'pong'});return;}
    if(msg.type!=='input'||!this.match||!data.started)return;
    const m=this.match,was=m.phase;
    if(m.phase==='ended'){this.send(ws,snapshot(m,now));return;}
    if(this.active().length!==2)interrupt(m,'disconnect');
    else if(m.phase==='battle'&&m.f.some(p=>now-p.lastInput>12000))interrupt(m,'timeout');
    else input(m,data.slot,msg,now);
    if(m.phase!==was||now-(this.lastBroadcast||0)>=75){this.lastBroadcast=now;this.broadcast(snapshot(m,now));}
  }
  departed(ws){const a=ws.deserializeAttachment();if(a?.kind==='battle'){
    if(this.match){interrupt(this.match,'disconnect');this.broadcast(snapshot(this.match,Date.now()),ws);}
    else if(a.started)this.broadcast({type:'interrupted',reason:'restart'},ws);
    else this.lobby(ws);
  }else this.presence(ws);}
  async webSocketClose(ws,code,reason,clean) { this.departed(ws);try{ws.close(code===1000?1000:1001,'Closed');}catch(_){} }
  async webSocketError(ws) { this.departed(ws);try { ws.close(1011,'Connection error'); } catch (_) {} }
}

const PAGE = `<!doctype html>
<html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><title>MONSTER EXPLORE 通信接続テスト</title>
<style>
:root{color-scheme:dark;font-family:system-ui,-apple-system,sans-serif;background:#111f26;color:#f2f6f3}*{box-sizing:border-box}body{margin:0;min-height:100svh;padding:24px 16px;display:flex;justify-content:center;background:radial-gradient(ellipse at 50% 0,#284c3d,#111f26 65%)}main{width:100%;max-width:440px}header{text-align:center;margin:18px 0 25px}h1{font-family:Georgia,serif;letter-spacing:.08em;font-size:29px;color:#f0d28d;margin:0 0 9px}h2{font-size:18px;margin:0 0 12px}p{line-height:1.65;font-size:14px;margin:8px 0;color:#c2d3cb}.sub{font-size:12px;letter-spacing:.12em;color:#b7c8b9}section{border:1px solid #3c6153;background:#1a3034;border-radius:16px;padding:16px;margin:12px 0}button,input{font:inherit;border-radius:10px;padding:13px 12px;min-height:48px}button{width:100%;font-weight:700;color:#172b2d;background:#e7c779;border:1px solid #e7c779;cursor:pointer}button.secondary{background:#263f44;color:#e6f0e9;border-color:#688075}button:disabled{opacity:.45;cursor:not-allowed}input{width:100%;background:#101d24;color:white;border:1px solid #67847b;font-size:24px;letter-spacing:.2em;text-align:center;margin:8px 0}label{font-size:13px;color:#d0ded7}.line{display:flex;gap:8px;margin-top:10px}.line button{flex:1}.status{font-size:18px;font-weight:700;color:#f0d28d;overflow-wrap:anywhere}.code{font-size:38px;font-weight:800;letter-spacing:.14em;color:#f0d28d;text-align:center;margin:12px 0;font-variant-numeric:tabular-nums}.ok{color:#9de9b1}.log{padding:0;list-style:none;max-height:140px;overflow:auto;font-size:13px;line-height:1.7;color:#c7d6d0}.log li{border-top:1px solid #314a47;padding:5px 0}small{display:block;color:#b3c3b9;line-height:1.6;margin:14px 0}[hidden]{display:none!important}
</style></head><body><main>
<header><div class="sub">ONLINE CONNECTION TEST · VER.0.15</div><h1>MONSTER EXPLORE</h1><h2>通信接続テスト</h2><p>2台のスマートフォンでこのページを開き、同じ部屋に接続してください。</p></header>
<section id="setup"><h2>部屋を作る</h2><button id="create">新しい部屋を作成</button><p>6桁のコードを相手に伝えてください。</p><hr style="border:0;border-top:1px solid #3c6153;margin:18px 0"><h2>部屋に入る</h2><label for="input">相手の6桁コード</label><input id="input" inputmode="numeric" autocomplete="off" maxlength="6" placeholder="123456" pattern="[0-9]{6}"><button class="secondary" id="join">コードで入室</button></section>
<section><h2>接続状態</h2><div id="status" class="status" role="status" aria-live="polite">未接続</div><div id="room" hidden><div id="code" class="code">------</div><p id="players">接続人数：0 / 2</p><div class="line"><button id="send" disabled>テスト信号を送る</button><button id="leave" class="secondary">退出</button></div></div><ul id="log" class="log" aria-live="polite"></ul></section>
<small>これは通信だけを確認する試験版です。モンスターの戦闘や育成機能はまだありません。位置情報・個人情報・セーブデータは送信しません。部屋コードは認証ではないため、知らない人には共有しないでください。</small>
</main><script>
const $=id=>document.getElementById(id);let ws=null, count=0,slot=0,timer=null;
function status(s,ok=false){$('status').textContent=s;$('status').className='status'+(ok?' ok':'')}
function log(s){const li=document.createElement('li');li.textContent=new Date().toLocaleTimeString()+'  '+s;$('log').prepend(li);while($('log').children.length>12)$('log').lastChild.remove()}
function busy(b){$('create').disabled=b;$('join').disabled=b;$('input').disabled=b}
function reset(){clearTimeout(timer);ws=null;count=0;slot=0;busy(false);$('setup').hidden=false;$('room').hidden=true;$('send').disabled=true}
function connect(code,mode){if(ws)return;if(!/^[1-9][0-9]{5}$/.test(code)){status('6桁のコードを入力してください');return}busy(true);status('接続中…');$('log').replaceChildren();const endpoint=new URL('/room/'+code,location.href);endpoint.protocol=location.protocol==='https:'?'wss:':'ws:';endpoint.searchParams.set('mode',mode);let current;try{current=new WebSocket(endpoint)}catch(e){reset();status('接続できませんでした');return}ws=current;let welcomed=false;timer=setTimeout(()=>{if(ws===current&&!welcomed){status('接続がタイムアウトしました');reset();current.close()}},12000);
current.onmessage=e=>{if(ws!==current)return;let m;try{m=JSON.parse(e.data)}catch{return}if(m.type==='welcome'){welcomed=true;clearTimeout(timer);slot=m.slot;$('setup').hidden=true;$('room').hidden=false;$('code').textContent=m.code;log('プレイヤー'+slot+' として入室')}else if(m.type==='presence'){count=m.count;$('players').textContent='接続人数：'+count+' / 2';$('send').disabled=count!==2;status(count===2?'2台の接続に成功！':'相手の入室を待っています',count===2);log('接続人数 '+count+'/2')}else if(m.type==='received'){log('相手からテスト信号を受信しました！');status('テスト信号を受信！',true)}else if(m.type==='sent'){log('相手にテスト信号を送信しました');status('テスト信号を送信！',true)}else if(m.type==='error'){log(m.message)}};
current.onclose=()=>{if(ws!==current)return;reset();status(welcomed?'接続が終了しました':mode==='create'?'部屋を作成できません。もう一度お試しください。':'入室できません。コード・相手の接続・満室をご確認ください。');log('接続終了')};current.onerror=()=>{if(ws===current)log('通信エラー')};}
$('create').onclick=()=>{const random=new Uint32Array(1);crypto.getRandomValues(random);connect(String(100000+random[0]%900000),'create')};$('join').onclick=()=>connect($('input').value.trim(),'join');$('input').addEventListener('input',()=>{$('input').value=$('input').value.replace(/[^0-9]/g,'').slice(0,6)});$('send').onclick=()=>{if(ws?.readyState===1&&count===2)ws.send(JSON.stringify({type:'test'}))};$('leave').onclick=()=>{const current=ws;reset();current?.close(1000,'Leave');status('退出しました')};window.addEventListener('pagehide',()=>{const current=ws;reset();current?.close(1000,'Page hidden')});
</script></body></html>`;
