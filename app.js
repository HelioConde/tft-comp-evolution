const DEMO_MATCHES = [
  {id:'demo-08',patch:'Patch C',playedAt:'2026-10-05T22:10:00Z',placement:2,stage:'6-1',compName:'Feiticeiros Flex',traits:['Feiticeiro','Guardião','Místico'],augments:['Eco Arcano','Bolsa de Itens','Nível Alto'],level:9,goldLeft:8,units:[
    {name:'Ahri',stars:2,items:['Cajado','Mana','Crítico'],row:3,col:3},{name:'Shen',stars:2,items:['Armadura','Vida'],row:0,col:3},{name:'Neeko',stars:2,items:['Vida'],row:0,col:2},{name:'Lulu',stars:2,items:['Mana'],row:2,col:5},{name:'Janna',stars:2,items:[],row:2,col:1},{name:'Morgana',stars:2,items:['Poder'],row:3,col:5},{name:'Garen',stars:1,items:[],row:0,col:5},{name:'Kennen',stars:2,items:[],row:1,col:2}]},
  {id:'demo-07',patch:'Patch C',playedAt:'2026-10-05T19:40:00Z',placement:5,stage:'5-5',compName:'Feiticeiros Flex',traits:['Feiticeiro','Guardião'],augments:['Eco Arcano','Economia','Itemização'],level:8,goldLeft:3,units:[
    {name:'Ahri',stars:2,items:['Cajado','Mana'],row:3,col:2},{name:'Shen',stars:2,items:['Armadura'],row:0,col:2},{name:'Neeko',stars:1,items:['Vida'],row:0,col:4},{name:'Lulu',stars:2,items:[],row:2,col:5},{name:'Morgana',stars:1,items:['Poder'],row:3,col:5},{name:'Garen',stars:1,items:[],row:0,col:6},{name:'Kennen',stars:2,items:[],row:1,col:1},{name:'Jinx',stars:1,items:[],row:3,col:0}]},
  {id:'demo-06',patch:'Patch C',playedAt:'2026-10-04T23:20:00Z',placement:1,stage:'6-5',compName:'Atiradores Tempo',traits:['Atirador','Brutamontes','Sentinela'],augments:['Ritmo','Componentes','Experiência'],level:9,goldLeft:14,units:[
    {name:'Jinx',stars:3,items:['Velocidade','Crítico','Dano'],row:3,col:1},{name:'Garen',stars:2,items:['Vida','Armadura'],row:0,col:1},{name:'Vi',stars:2,items:['Vida'],row:0,col:3},{name:'Caitlyn',stars:2,items:['Dano'],row:3,col:5},{name:'Shen',stars:2,items:[],row:0,col:5},{name:'Lulu',stars:2,items:[],row:2,col:6},{name:'Kennen',stars:2,items:[],row:1,col:4},{name:'Neeko',stars:2,items:[],row:1,col:2}]},
  {id:'demo-05',patch:'Patch B',playedAt:'2026-10-03T22:00:00Z',placement:3,stage:'6-1',compName:'Atiradores Tempo',traits:['Atirador','Brutamontes'],augments:['Ritmo','Economia','Dano'],level:8,goldLeft:6,units:[
    {name:'Jinx',stars:2,items:['Velocidade','Crítico'],row:3,col:1},{name:'Garen',stars:2,items:['Vida'],row:0,col:1},{name:'Vi',stars:2,items:['Armadura'],row:0,col:3},{name:'Caitlyn',stars:2,items:['Dano'],row:3,col:5},{name:'Shen',stars:1,items:[],row:0,col:5},{name:'Lulu',stars:2,items:[],row:2,col:6},{name:'Kennen',stars:1,items:[],row:1,col:4},{name:'Morgana',stars:1,items:[],row:2,col:3}]},
  {id:'demo-04',patch:'Patch B',playedAt:'2026-10-02T20:25:00Z',placement:7,stage:'5-1',compName:'Reroll Guardiões',traits:['Guardião','Duelista'],augments:['Reroll','Vida','Componentes'],level:7,goldLeft:1,units:[
    {name:'Kennen',stars:3,items:['Poder','Vida'],row:1,col:2},{name:'Shen',stars:2,items:['Armadura'],row:0,col:2},{name:'Garen',stars:2,items:['Vida'],row:0,col:4},{name:'Yasuo',stars:2,items:['Dano'],row:1,col:4},{name:'Lulu',stars:2,items:[],row:3,col:6},{name:'Neeko',stars:1,items:[],row:0,col:6},{name:'Jinx',stars:1,items:[],row:3,col:0}]},
  {id:'demo-03',patch:'Patch B',playedAt:'2026-10-01T18:10:00Z',placement:4,stage:'5-6',compName:'Feiticeiros Flex',traits:['Feiticeiro','Místico'],augments:['Mana','Economia','Nível Alto'],level:8,goldLeft:10,units:[
    {name:'Ahri',stars:2,items:['Mana','Poder'],row:3,col:3},{name:'Shen',stars:2,items:['Vida'],row:0,col:3},{name:'Lulu',stars:2,items:['Mana'],row:2,col:5},{name:'Janna',stars:1,items:[],row:2,col:1},{name:'Morgana',stars:2,items:['Poder'],row:3,col:5},{name:'Garen',stars:1,items:[],row:0,col:5},{name:'Kennen',stars:2,items:[],row:1,col:2},{name:'Neeko',stars:1,items:[],row:0,col:1}]},
  {id:'demo-02',patch:'Patch A',playedAt:'2026-09-29T21:45:00Z',placement:6,stage:'5-3',compName:'Reroll Guardiões',traits:['Guardião','Duelista'],augments:['Reroll','Economia','Vida'],level:7,goldLeft:4,units:[
    {name:'Kennen',stars:3,items:['Poder'],row:1,col:3},{name:'Shen',stars:2,items:['Armadura'],row:0,col:3},{name:'Garen',stars:2,items:['Vida'],row:0,col:5},{name:'Yasuo',stars:2,items:['Dano'],row:1,col:5},{name:'Lulu',stars:1,items:[],row:3,col:6},{name:'Neeko',stars:1,items:[],row:0,col:1},{name:'Jinx',stars:1,items:[],row:3,col:0}]},
  {id:'demo-01',patch:'Patch A',playedAt:'2026-09-28T18:15:00Z',placement:8,stage:'4-7',compName:'Atiradores Tempo',traits:['Atirador'],augments:['Dano','Componentes','Economia'],level:7,goldLeft:0,units:[
    {name:'Jinx',stars:2,items:['Velocidade'],row:3,col:2},{name:'Garen',stars:2,items:['Vida'],row:0,col:2},{name:'Vi',stars:1,items:[],row:0,col:4},{name:'Caitlyn',stars:1,items:['Dano'],row:3,col:5},{name:'Shen',stars:1,items:[],row:0,col:6},{name:'Lulu',stars:1,items:[],row:2,col:6},{name:'Kennen',stars:1,items:[],row:1,col:4}]}
];

const STORAGE_KEY='tft-comp-evolution-matches-v1';
const core=window.TFTCompCore;
const patchFilter=document.querySelector('#patch-filter');
const compFilter=document.querySelector('#comp-filter');
const compareA=document.querySelector('#compare-a');
const compareB=document.querySelector('#compare-b');
const timeline=document.querySelector('#timeline');
const evolutionList=document.querySelector('#evolution-list');
const comparison=document.querySelector('#comparison');
let matches=[];

function escapeHtml(value=''){return String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));}
function showToast(message){const el=document.querySelector('#toast');el.textContent=message;el.classList.add('on');setTimeout(()=>el.classList.remove('on'),1800);}
function stars(count){return '★'.repeat(Math.min(3,Math.max(1,Number(count)||1)));}
function formatPlayedAt(value){return new Date(value).toLocaleDateString('pt-BR',{day:'2-digit',month:'short'})+' · '+new Date(value).toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});}

function loadMatches(){
  try{
    const stored=JSON.parse(localStorage.getItem(STORAGE_KEY)||'null');
    const validated=core.validateMatches(stored);
    if(validated.ok){matches=validated.matches;return;}
  }catch{}
  matches=core.validateMatches(DEMO_MATCHES).matches;
}

function currentMatches(){
  return matches.filter(match=>(patchFilter.value==='all'||match.patch===patchFilter.value)&&(compFilter.value==='all'||match.compName===compFilter.value));
}

function fillFilters(){
  const patches=[...new Set(matches.map(m=>m.patch))];
  const comps=[...new Set(matches.map(m=>m.compName))];
  const oldPatch=patchFilter.value,oldComp=compFilter.value;
  patchFilter.innerHTML='<option value="all">Todos</option>'+patches.map(v=>'<option>'+escapeHtml(v)+'</option>').join('');
  compFilter.innerHTML='<option value="all">Todas</option>'+comps.map(v=>'<option>'+escapeHtml(v)+'</option>').join('');
  if(patches.includes(oldPatch))patchFilter.value=oldPatch;
  if(comps.includes(oldComp))compFilter.value=oldComp;
}

function renderStats(filtered){
  document.querySelector('#stat-average').textContent=filtered.length?core.averagePlacement(filtered).toFixed(2)+'º':'—';
  document.querySelector('#stat-top4').textContent=filtered.length?Math.round(core.top4Rate(filtered)*100)+'%':'—';
  document.querySelector('#stat-comps').textContent=String(new Set(filtered.map(m=>m.compName)).size);
  document.querySelector('#stat-games').textContent=String(filtered.length);
}

function renderTimeline(filtered){
  document.querySelector('#timeline-count').textContent=filtered.length+' partida'+(filtered.length===1?'':'s');
  timeline.innerHTML=filtered.length?filtered.map(match=>`
    <article class="match-card">
      <div class="placement ${match.placement<=4?'top4':'bottom'}"><strong>#${match.placement}</strong></div>
      <div class="match-main">
        <div class="match-title"><strong>${escapeHtml(match.compName)}</strong><span class="patch-tag">${escapeHtml(match.patch)}</span></div>
        <div class="traits">${match.traits.map(t=>`<span class="trait">${escapeHtml(t)}</span>`).join('')}</div>
      </div>
      <div class="match-meta">${formatPlayedAt(match.playedAt)}<br>Nv. ${match.level} · ${match.goldLeft}g · ${escapeHtml(match.stage)}</div>
    </article>`).join(''):'<div class="muted">Nenhuma partida encontrada com estes filtros.</div>';
}

function renderEvolution(filtered){
  const stats=core.evolutionByComp(filtered);
  evolutionList.innerHTML=stats.length?stats.map(item=>{
    const score=Math.max(0,Math.min(100,Math.round((1-(item.averagePlacement-1)/7)*100)));
    return `<article class="evo-card"><div class="evo-top"><strong>${escapeHtml(item.name)}</strong><small>${item.games} jogos</small></div><div class="meter"><i style="width:${score}%"></i></div><small>Média ${item.averagePlacement.toFixed(2)}º · Top 4 ${Math.round(item.top4Rate*100)}% · ${item.patches.map(escapeHtml).join(', ')}</small></article>`;
  }).join(''):'<div class="muted">Sem dados suficientes neste filtro.</div>';
}

function renderBoard(match){
  const byCell=new Map(match.units.map(unit=>[`${unit.row}-${unit.col}`,unit]));
  let html='';
  for(let row=0;row<4;row++)for(let col=0;col<7;col++){
    const unit=byCell.get(`${row}-${col}`);
    html+=unit?`<div class="hex has-unit" data-stars="${unit.stars}" title="${escapeHtml(unit.name)} · ${stars(unit.stars)} · ${escapeHtml(unit.items.join(', ')||'sem itens')}"><span class="star-line">${stars(unit.stars)}</span><span class="unit-name">${escapeHtml(unit.name)}</span></div>`:'<div class="hex"></div>';
  }
  return html;
}

function compareOption(match){return `<option value="${escapeHtml(match.id)}">#${match.placement} · ${escapeHtml(match.compName)} · ${escapeHtml(match.patch)}</option>`;}

function fillCompare(){
  if(!matches.length){compareA.innerHTML=compareB.innerHTML='';return;}
  const a=compareA.value,b=compareB.value;
  compareA.innerHTML=matches.map(compareOption).join('');
  compareB.innerHTML=matches.map(compareOption).join('');
  compareA.value=matches.some(m=>m.id===a)?a:matches[Math.min(1,matches.length-1)].id;
  compareB.value=matches.some(m=>m.id===b)?b:matches[0].id;
  if(compareA.value===compareB.value&&matches.length>1)compareA.value=matches[1].id;
}

function renderComparison(){
  const a=matches.find(m=>m.id===compareA.value),b=matches.find(m=>m.id===compareB.value);
  const diff=core.compareMatches(a,b);
  if(!diff){comparison.innerHTML='<div class="muted">Escolha duas partidas.</div>';return;}
  const delta=diff.placementDelta===0?'igual':diff.placementDelta<0?Math.abs(diff.placementDelta)+' posição(ões) melhor':diff.placementDelta+' posição(ões) pior';
  comparison.innerHTML=`
    <div class="compare-metrics">
      <div class="metric"><span>Similaridade de unidades</span><strong>${Math.round(diff.unitSimilarity*100)}%</strong></div>
      <div class="metric"><span>Similaridade de traits</span><strong>${Math.round(diff.traitSimilarity*100)}%</strong></div>
      <div class="metric"><span>Resultado B vs A</span><strong>${delta}</strong></div>
      <div class="metric"><span>Núcleo mantido</span><strong>${diff.sharedUnits.length}</strong></div>
    </div>
    <div class="boards">
      <article class="board-card"><div class="board-card-head"><strong>A · #${a.placement} ${escapeHtml(a.compName)}</strong><span>${escapeHtml(a.patch)}</span></div><div class="board">${renderBoard(a)}</div></article>
      <article class="board-card"><div class="board-card-head"><strong>B · #${b.placement} ${escapeHtml(b.compName)}</strong><span>${escapeHtml(b.patch)}</span></div><div class="board">${renderBoard(b)}</div></article>
    </div>
    <div class="compare-changes">
      <div class="change-card"><span>Entraram</span><p>${diff.addedUnits.map(escapeHtml).join(', ')||'Nenhuma unidade nova'}</p></div>
      <div class="change-card"><span>Saíram</span><p>${diff.removedUnits.map(escapeHtml).join(', ')||'Nenhuma unidade saiu'}</p></div>
      <div class="change-card"><span>Traits mantidos</span><p>${diff.sharedTraits.map(escapeHtml).join(', ')||'Nenhum trait em comum'}</p></div>
    </div>
    <div class="insight"><strong>Leitura rápida:</strong> ${escapeHtml(diff.insight)}</div>`;
}

function renderAll(){
  fillFilters();
  const filtered=currentMatches();
  renderStats(filtered);renderTimeline(filtered);renderEvolution(filtered);fillCompare();renderComparison();
}

patchFilter.addEventListener('change',()=>{const filtered=currentMatches();renderStats(filtered);renderTimeline(filtered);renderEvolution(filtered);});
compFilter.addEventListener('change',()=>{const filtered=currentMatches();renderStats(filtered);renderTimeline(filtered);renderEvolution(filtered);});
compareA.addEventListener('change',renderComparison);
compareB.addEventListener('change',renderComparison);
document.querySelector('#open-import').addEventListener('click',()=>{document.querySelector('#import-panel').hidden=false;document.querySelector('#import-panel').scrollIntoView({behavior:'smooth'});});
document.querySelector('#close-import').addEventListener('click',()=>document.querySelector('#import-panel').hidden=true);
document.querySelector('#reset-data').addEventListener('click',()=>{localStorage.removeItem(STORAGE_KEY);matches=core.validateMatches(DEMO_MATCHES).matches;renderAll();showToast('Dados demonstrativos restaurados.');});
document.querySelector('#apply-import').addEventListener('click',()=>{
  const message=document.querySelector('#import-message');
  try{
    const parsed=JSON.parse(document.querySelector('#import-json').value);
    const validated=core.validateMatches(parsed);
    if(!validated.ok){message.textContent=validated.error;return;}
    matches=validated.matches;localStorage.setItem(STORAGE_KEY,JSON.stringify(matches));message.textContent=`${matches.length} partidas válidas importadas.`;renderAll();showToast('Partidas importadas.');
  }catch{message.textContent='JSON inválido. Confira vírgulas, aspas e colchetes.';}
});

loadMatches();
renderAll();
