(()=>{'use strict';
const FILES={adventure:'audio/explore_v05/adventure_loop.mp3',encounter:'audio/explore_v05/encounter_loop.mp3',battle:'audio/battle.mp3'};
const ENCOUNTER_SECONDS=10.031; // original MP3 container duration; decoded duration takes priority
window.ExploreLoopMusic={create({getContext,getDestination,onChange}){
 let mode='starter',phase='home',enabled=true,pageInactive=false,active=null,pending=null,serial=0,lastError='',fallbackTimer=0,loadTimer=0,cycles=0;
 const buffers=new Map(),loading=new Map(),failed=new Set();
 const desired=()=>mode==='walk'?'adventure':mode==='encounter'?'encounter':(['battle','facilityBattle'].includes(mode)&&['round','danger'].includes(phase))?'battle':null;
 const duration=()=>buffers.get('encounter')?.duration||ENCOUNTER_SECONDS;
 const playable=()=>enabled&&!document.hidden&&!pageInactive&&getContext()?.state==='running';
 function load(key){if(buffers.has(key))return Promise.resolve(buffers.get(key));if(loading.has(key))return loading.get(key);
  const ctx=getContext();if(!ctx)return Promise.reject(new Error('AudioContext is not ready'));
  const p=fetch(FILES[key]).then(r=>{if(!r.ok)throw new Error('HTTP '+r.status+' '+FILES[key]);return r.arrayBuffer()}).then(b=>new Promise((resolve,reject)=>ctx.decodeAudioData(b,resolve,reject))).then(buf=>{buffers.set(key,buf);loading.delete(key);failed.delete(key);return buf},e=>{loading.delete(key);failed.add(key);throw e});loading.set(key,p);return p;}
 function preload(){if(!getContext())return;for(const key of Object.keys(FILES))if(!failed.has(key))load(key).catch(()=>{});}
 function stop(){serial++;pending=null;clearTimeout(fallbackTimer);fallbackTimer=0;clearTimeout(loadTimer);loadTimer=0;if(active){const a=active;active=null;a.source.onended=null;try{a.source.stop()}catch(e){}try{a.source.disconnect();a.gain.disconnect()}catch(e){}}}
 function complete(token,audible){if(token!==serial||mode!=='encounter'||document.hidden||pageInactive)return;stop();cycles++;window.dispatchEvent(new CustomEvent('explore-encounter-cycle-end',{detail:{cycle:cycles,audible,duration:duration()}}));if(mode==='encounter')sync();onChange?.();}
 function silentCycle(){if(fallbackTimer)return;stop();const token=serial;fallbackTimer=setTimeout(()=>{fallbackTimer=0;complete(token,false)},duration()*1000);onChange?.();}
 function sync(){const ctx=getContext(),key=desired();if(!key||document.hidden||pageInactive){stop();return;}
  if(!playable()) {if(key==='encounter'){if(!fallbackTimer)silentCycle();}else stop();return;}
  if(active?.key===key||pending===key)return;
  if(key==='encounter'&&fallbackTimer)return; // finish the current silent reading interval before trying audio again
  if(failed.has(key)){if(key==='encounter')silentCycle();else stop();return;}
  stop();const token=serial;pending=key;lastError='';
  if(key==='encounter')loadTimer=setTimeout(()=>{if(token===serial){lastError='Encounter audio load timeout';silentCycle();}},4000);
  load(key).then(buffer=>{if(token!==serial||desired()!==key||!playable())return;
   clearTimeout(loadTimer);loadTimer=0;pending=null;const source=ctx.createBufferSource(),gain=ctx.createGain();source.buffer=buffer;source.loop=key!=='encounter';gain.gain.value=key==='battle'?.26:.38;source.connect(gain);gain.connect(getDestination());active={key,source,gain,startedAt:ctx.currentTime};if(key==='encounter')source.onended=()=>complete(token,true);source.start();onChange?.();
  }).catch(e=>{if(token!==serial)return;pending=null;lastError=String(e?.message||e);console.warn('Explore BGM:',lastError);if(key==='encounter')silentCycle();onChange?.();});}
 function changed(){sync();onChange?.();}
 window.addEventListener('explore-state-change',e=>{const next=e.detail.state;if(next!==mode&&next==='encounter'){cycles=0;failed.delete('encounter');}mode=next;changed()});
 window.addEventListener('arena-bgm-phase',e=>{phase=e.detail.phase;changed()});
 document.addEventListener('visibilitychange',changed);window.addEventListener('pagehide',()=>{pageInactive=true;changed()});window.addEventListener('pageshow',()=>{pageInactive=false;changed()});
 return {sync,preload,wants:()=>{const k=desired();return k==='adventure'||k==='encounter'||(k==='battle'&&active?.key==='battle')},setEnabled(v){enabled=!!v;changed()},get status(){return {desired:desired(),playing:active?.key||null,loading:pending,loaded:[...buffers.keys()],loop:!!active?.source.loop,error:lastError,cycles,silentEncounter:!!fallbackTimer,startedAt:active?.startedAt??null,position:active?getContext().currentTime-active.startedAt:null,durations:Object.fromEntries([...buffers].map(([k,b])=>[k,b.duration]))}}};
}};
})();
