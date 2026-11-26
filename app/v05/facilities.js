/* MONSTER EXPLORE 0.4: facility selection. The collection is owned by explore.js;
   battle state, EXP and championships are owned by the existing Arena engine. */
(()=>{'use strict';
const app=document.getElementById('exploreApp'),explore=window.__monsterExplore;
const panel=document.createElement('section');panel.id='exFacilityPanel';panel.className='exRoster exFacilityPanel';panel.hidden=true;
panel.setAttribute('aria-label','アリーナ施設');panel.innerHTML=`<div class="exRosterHead"><h2>アリーナ施設</h2><button type="button" id="exFacilityBack">探索へ戻る</button></div><p class="exNote">仲間を育て、より強い相手に挑もう。対戦相手はランダムです。</p><div class="exFacilityLayout"><div><h3>使用する仲間</h3><div class="exFacilityPlayer"><img id="exFacilityPortrait" alt=""><div><select id="exFacilityPlayer" aria-label="使用する仲間"></select><small id="exFacilityLevel"></small></div></div><p id="exFacilityRecords" class="exFacilityRecords"></p></div><div><h3>会場を選ぶ</h3><div class="exFacilityCards" id="exFacilityCards"></div></div></div><div class="exFacilityControls"><div class="exFacilityCounts" id="exFacilityCounts" role="group" aria-label="練習の対戦回数"><span>対戦回数</span><button type="button" data-count="1">1戦</button><button type="button" data-count="2">2戦</button><button type="button" data-count="3">3戦</button></div><p class="exFacilitySummary" id="exFacilitySummary"></p><button type="button" class="exPrimary exFacilityStart" id="exFacilityStart">対戦開始</button><p class="exFacilityHint" id="exFacilityOrientation" role="status"></p></div>`;app.appendChild(panel);
const q=id=>document.getElementById(id);
const venues=Object.freeze({
 easy:{name:'練習場',kind:'TRAINING',sub:'仲間のみ・HP回復',desc:'特殊移動なし',xp:'1戦10 EXP'},
 normal:{name:'実践練習',kind:'SPARRING',sub:'仲間のみ・HP回復',desc:'特殊移動あり',xp:'1戦20 EXP'},
 c:{name:'モンスターアリーナ',kind:'TOURNAMENT',sub:'全15種類・4回戦',desc:'特殊移動あり・毎戦回復',xp:'最大90 EXP'},
 master:{name:'アリーナマスターへの道',kind:'MASTER',sub:'全15種類・4回戦',desc:'特殊移動あり・HP持ち越し',xp:'最大500 EXP'}
});
let course='easy',count=1,player=null;
for(const [key,v] of Object.entries(venues)){const b=document.createElement('button');b.type='button';b.dataset.course=key;b.innerHTML=`<span class="facilityKind">${v.kind}</span><b>${v.name}</b><small>${v.sub}<br>${v.desc}<br>${v.xp}</small>`;b.onclick=()=>{course=key;render()};q('exFacilityCards').append(b);}
for(const b of q('exFacilityCounts').querySelectorAll('button'))b.onclick=()=>{count=Number(b.dataset.count);render()};
q('exFacilityPlayer').onchange=()=>{player=Number(q('exFacilityPlayer').value);render()};
q('exFacilityBack').onclick=()=>explore.closeFacilities();
q('exFacilityStart').onclick=()=>{const ok=explore.startFacility(player,course,count);if(!ok&&!panel.hidden)q('exFacilityOrientation').textContent='対戦を開始できません。仲間と画面の向きを確認してください。';};
function render(){if(panel.hidden)return;const snap=explore.snapshot,tournament=['c','master'].includes(course),portrait=matchMedia('(orientation:portrait) and (max-width:800px)').matches,valid=snap.owned.includes(player)&&snap.facilitiesUnlocked&&snap.state==='facility';
 if(valid){q('exFacilityPortrait').src=monsterPortrait(player);q('exFacilityLevel').textContent=`Lv.${window.__arenaGrowth.level(player)}・${types[mons[player].type].name}タイプ`;const record=window.__arenaGrowthRecords714?.stats?.[player]||{};q('exFacilityRecords').textContent=`アリーナ優勝 ${Number(record.C)||0}回 / マスター制覇 ${Number(record.M)||0}回`;}
 for(const b of q('exFacilityCards').children)b.setAttribute('aria-pressed',String(b.dataset.course===course));
 q('exFacilityCounts').hidden=tournament;for(const b of q('exFacilityCounts').querySelectorAll('button'))b.setAttribute('aria-pressed',String(Number(b.dataset.count)===count));
 const v=venues[course],pool=Math.max(0,snap.owned.length-1);q('exFacilitySummary').textContent=tournament?`${v.name}：全15種類（未捕獲も含む）の4回戦。施設の敵は従来のアリーナ仕様。勝っても捕獲はできません。${course==='master'?' HP回復なし。':' 毎戦HP回復。'}`:`${v.name}：使用中の1体を除く仲間${pool}種類からランダムに${count}戦。${pool<count?'相手が再登場する場合があります。 ':''}勝っても捕獲はできません。`;
 q('exFacilityStart').textContent=tournament?`${v.name}に挑戦`:`${v.name}を開始（${count}戦）`;q('exFacilityStart').disabled=!valid||portrait;q('exFacilityOrientation').textContent=portrait?'安全な場所で横画面にすると対戦を開始できます。':'';
}
function show(){const snap=explore.snapshot;if(!snap.facilitiesUnlocked||snap.state!=='facility')return false;player=snap.selected;course='easy';count=1;const sel=q('exFacilityPlayer');sel.replaceChildren();for(const id of snap.owned){const o=document.createElement('option');o.value=String(id);o.textContent=mons[id].name+' Lv.'+window.__arenaGrowth.level(id);sel.append(o);}sel.value=String(player);panel.hidden=false;panel.scrollTop=0;render();return true;}
function hide(){panel.hidden=true;}
window.__exploreFacilities={show,hide};window.addEventListener('resize',render);
})();
