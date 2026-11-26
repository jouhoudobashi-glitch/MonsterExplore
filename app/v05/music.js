(()=>{'use strict';
const FILES={adventure:'audio/explore_v05/adventure_loop.mp3',encounter:'audio/explore_v05/encounter_loop.mp3'};
// Keep the supplied audio unchanged. Only one exploration source can be active.
window.ExploreLoopMusic={create({getContext,getDestination,onChange}){
 let mode='starter',wildEnded=false,enabled=true,pageInactive=false,active=null,pending=null,serial=0,lastError='';
 const buffers=new Map(),loading=new Map();
 const desired=()=>mode==='walk'?'adventure':(mode==='encounter'||(mode==='battle'&&!wildEnded))?'encounter':null;
 function load(key){if(buffers.has(key))return Promise.resolve(buffers.get(key));if(loading.has(key))return loading.get(key);
  const ctx=getContext();if(!ctx)return Promise.reject(new Error('AudioContext is not ready'));
  const p=fetch(FILES[key]).then(r=>{if(!r.ok)throw new Error('HTTP '+r.status+' '+FILES[key]);return r.arrayBuffer()}).then(b=>new Promise((resolve,reject)=>ctx.decodeAudioData(b,resolve,reject))).then(buf=>{buffers.set(key,buf);loading.delete(key);return buf},e=>{loading.delete(key);throw e});loading.set(key,p);return p;}
 function preload(){if(!getContext())return;for(const key of Object.keys(FILES))load(key).catch(()=>{});}
 function stop(){serial++;pending=null;if(active){try{active.source.stop()}catch(e){}try{active.source.disconnect();active.gain.disconnect()}catch(e){}active=null;}}
 function sync(){const ctx=getContext(),key=desired();if(!key||!enabled||document.hidden||pageInactive||ctx?.state!=='running'){stop();return;}
  if(active?.key===key||pending===key)return;
  stop();const token=serial;pending=key;lastError='';load(key).then(buffer=>{if(token!==serial||desired()!==key||!enabled||document.hidden||pageInactive||ctx.state!=='running')return;
   pending=null;const source=ctx.createBufferSource(),gain=ctx.createGain();source.buffer=buffer;source.loop=true;gain.gain.value=.38;source.connect(gain);gain.connect(getDestination());source.start();active={key,source,gain};onChange?.();
  }).catch(e=>{if(token!==serial)return;pending=null;lastError=String(e?.message||e);console.warn('Explore BGM:',lastError);onChange?.();});}
 function changed(){sync();onChange?.();}
 window.addEventListener('explore-state-change',e=>{const next=e.detail.state;if(next==='encounter'||next==='walk'||next==='starter')wildEnded=false;mode=next;changed()});
 window.addEventListener('arena-battle-end',()=>{if(mode==='battle'){wildEnded=true;changed()}} ,{capture:true});
 document.addEventListener('visibilitychange',changed);window.addEventListener('pagehide',()=>{pageInactive=true;changed()});window.addEventListener('pageshow',()=>{pageInactive=false;changed()});
 return {sync,preload,wants:()=>!!desired(),setEnabled(v){enabled=!!v;changed()},get status(){return {desired:desired(),playing:active?.key||null,loading:pending,loaded:[...buffers.keys()],loop:!!active?.source.loop,error:lastError,durations:Object.fromEntries([...buffers].map(([k,b])=>[k,b.duration]))}}};
}};
})();
