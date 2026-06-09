const TYPE_COLORS={fire:'#F08030',water:'#6890F0',grass:'#78C850',electric:'#F8D030',psychic:'#F85888',ice:'#98D8D8',dragon:'#7038F8',dark:'#705848',fairy:'#EE99AC',normal:'#A8A878',fighting:'#C03028',flying:'#A890F0',poison:'#A040A0',ground:'#E0C068',rock:'#B8A038',bug:'#A8B820',ghost:'#705898',steel:'#B8B8D0'};
const TYPE_LABELS={fire:'Fuego',water:'Agua',grass:'Planta',electric:'Eléctrico',psychic:'Psíquico',ice:'Hielo',dragon:'Dragón',dark:'Siniestro',fairy:'Hada',normal:'Normal',fighting:'Lucha',flying:'Volador',poison:'Veneno',ground:'Tierra',rock:'Roca',bug:'Bicho',ghost:'Fantasma',steel:'Acero'};
const LIGHT_TYPES=new Set(['electric','ice','ground','fairy','normal','steel']);
const GEN_NAMES={I:'Gen I',II:'Gen II',III:'Gen III',IV:'Gen IV',V:'Gen V',VI:'Gen VI',VII:'Gen VII',VIII:'Gen VIII',IX:'Gen IX'};

const CRISMOCHI_IDS=new Set([1,2,3,4,5,6,7,8,12,13,25,26,29,30,35,36,37,38,39,40,43,45,49,50,51,52,53,54,58,59,60,61,77,78,79,80,86,87,92,93,94,98,104,105,108,113,116,118,119,120,121,130,131,132,133,134,135,136,143,144,145,146,147,148,149,150,151,152,153,154,161,162,170,172,173,174,175,176,179,180,181,182,183,184,186,187,188,189,194,195,196,197,200,202,203,209,213,215,216,220,222,225,226,231,234,238,241,242,243,244,245,249,251,252,253,254,255,257,258,261,262,263,267,270,273,278,280,281,282,284,285,286,287,293,296,298,300,301,311,312,315,316,321,325,327,333,334,341,350,351,353,358,359,360,363,364,366,368,370,380,381,382,383,384,385,387,390,393,396,399,401,403,404,405,406,407,414,415,416,417,418,420,421,422,427,428,429,431,433,438,439,440,441,446,447,448,456,457,458,468,470,471,478,479,480,481,482,483,488,489,490,492,493,494,495,496,497,498,501,506,509,510,511,513,514,515,516,517,518,522,523,531,535,540,542,546,547,548,549,556,557,570,571,572,573,574,575,576,577,578,579,581,582,583,584,585,586,587,590,591,592,594,607,608,609,613,620,640,643,644,648,650,651,653,654,655,656,657,658,659,661,666,667,669,670,671,672,673,674,676,677,678,684,685,686,694,698,699,700,702,703,704,705,706,708,710,711,714,716,717,719,720,722,725,726,728,729,730,742,743,744,745,747,753,754,755,756,759,760,761,762,763,764,769,771,775,777,778,786,788,789,792,793,795,797,801,802,803,810,813,816,819,827,828,829,830,831,832,833,835,840,841,842,848,852,855,856,857,858,864,868,869,872,873,876,877,897,899,906,907,908,909,912,915,921,922,923,924,925,926,927,928,929,932,938,955,957,958,959,963,964,971,973,974,978,980,981,985,1024]);
const POKEMON_GEN={1:'I',2:'I',3:'I',4:'I',5:'I',6:'I',7:'I',8:'I',9:'I',10:'I',11:'I',12:'I',13:'I',14:'I',15:'I',16:'I',17:'I',18:'I',19:'I',20:'I',21:'I',22:'I',23:'I',24:'I',25:'I',26:'I',27:'I',28:'I',29:'I',30:'I',31:'I',32:'I',33:'I',34:'I',35:'I',36:'I',37:'I',38:'I',39:'I',40:'I',41:'I',42:'I',43:'I',44:'I',45:'I',46:'I',47:'I',48:'I',49:'I',50:'I',51:'I',52:'I',53:'I',54:'I',55:'I',56:'I',57:'I',58:'I',59:'I',60:'I',61:'I',62:'I',63:'I',64:'I',65:'I',66:'I',67:'I',68:'I',69:'I',70:'I',71:'I',72:'I',73:'I',74:'I',75:'I',76:'I',77:'I',78:'I',79:'I',80:'I',81:'I',82:'I',83:'I',84:'I',85:'I',86:'I',87:'I',88:'I',89:'I',90:'I',91:'I',92:'I',93:'I',94:'I',95:'I',96:'I',97:'I',98:'I',99:'I',100:'I',101:'I',102:'I',103:'I',104:'I',105:'I',106:'I',107:'I',108:'I',109:'I',110:'I',111:'I',112:'I',113:'I',114:'I',115:'I',116:'I',117:'I',118:'I',119:'I',120:'I',121:'I',122:'I',123:'I',124:'I',125:'I',126:'I',127:'I',128:'I',129:'I',130:'I',131:'I',132:'I',133:'I',134:'I',135:'I',136:'I',137:'I',138:'I',139:'I',140:'I',141:'I',142:'I',143:'I',144:'I',145:'I',146:'I',147:'I',148:'I',149:'I',150:'I',151:'I',152:'II',153:'II',154:'II',155:'II',156:'II',157:'II',158:'II',159:'II',160:'II',161:'II',162:'II',163:'II',164:'II',165:'II',166:'II',167:'II',168:'II',169:'II',170:'II',171:'II',172:'II',173:'II',174:'II',175:'II',176:'II',177:'II',178:'II',179:'II',180:'II',181:'II',182:'II',183:'II',184:'II',185:'II',186:'II',187:'II',188:'II',189:'II',190:'II',191:'II',192:'II',193:'II',194:'II',195:'II',196:'II',197:'II',198:'II',199:'II',200:'II',201:'II',202:'II',203:'II',204:'II',205:'II',206:'II',207:'II',208:'II',209:'II',210:'II',211:'II',212:'II',213:'II',214:'II',215:'II',216:'II',217:'II',218:'II',219:'II',220:'II',221:'II',222:'II',223:'II',224:'II',225:'II',226:'II',227:'II',228:'II',229:'II',230:'II',231:'II',232:'II',233:'II',234:'II',235:'II',236:'II',237:'II',238:'II',239:'II',240:'II',241:'II',242:'II',243:'II',244:'II',245:'II',246:'II',247:'II',248:'II',249:'II',250:'II',251:'II',252:'III',253:'III',254:'III',255:'III',256:'III',257:'III',258:'III',259:'III',260:'III',261:'III',262:'III',263:'III',264:'III',265:'III',266:'III',267:'III',268:'III',269:'III',270:'III',271:'III',272:'III',273:'III',274:'III',275:'III',276:'III',277:'III',278:'III',279:'III',280:'III',281:'III',282:'III',283:'III',284:'III',285:'III',286:'III',287:'III',288:'III',289:'III',290:'III',291:'III',292:'III',293:'III',294:'III',295:'III',296:'III',297:'III',298:'III',299:'III',300:'III',301:'III',302:'III',303:'III',304:'III',305:'III',306:'III',307:'III',308:'III',309:'III',310:'III',311:'III',312:'III',313:'III',314:'III',315:'III',316:'III',317:'III',318:'III',319:'III',320:'III',321:'III',322:'III',323:'III',324:'III',325:'III',326:'III',327:'III',328:'III',329:'III',330:'III',331:'III',332:'III',333:'III',334:'III',335:'III',336:'III',337:'III',338:'III',339:'III',340:'III',341:'III',342:'III',343:'III',344:'III',345:'III',346:'III',347:'III',348:'III',349:'III',350:'III',351:'III',352:'III',353:'III',354:'III',355:'III',356:'III',357:'III',358:'III',359:'III',360:'III',361:'III',362:'III',363:'III',364:'III',365:'III',366:'III',367:'III',368:'III',369:'III',370:'III',371:'III',372:'III',373:'III',374:'III',375:'III',376:'III',377:'III',378:'III',379:'III',380:'III',381:'III',382:'III',383:'III',384:'III',385:'III',386:'III',387:'IV',388:'IV',389:'IV',390:'IV',391:'IV',392:'IV',393:'IV',394:'IV',395:'IV',396:'IV',397:'IV',398:'IV',399:'IV',400:'IV',401:'IV',402:'IV',403:'IV',404:'IV',405:'IV',406:'IV',407:'IV',408:'IV',409:'IV',410:'IV',411:'IV',412:'IV',413:'IV',414:'IV',415:'IV',416:'IV',417:'IV',418:'IV',419:'IV',420:'IV',421:'IV',422:'IV',423:'IV',424:'IV',425:'IV',426:'IV',427:'IV',428:'IV',429:'IV',430:'IV',431:'IV',432:'IV',433:'IV',434:'IV',435:'IV',436:'IV',437:'IV',438:'IV',439:'IV',440:'IV',441:'IV',442:'IV',443:'IV',444:'IV',445:'IV',446:'IV',447:'IV',448:'IV',449:'IV',450:'IV',451:'IV',452:'IV',453:'IV',454:'IV',455:'IV',456:'IV',457:'IV',458:'IV',459:'IV',460:'IV',461:'IV',462:'IV',463:'IV',464:'IV',465:'IV',466:'IV',467:'IV',468:'IV',469:'IV',470:'IV',471:'IV',472:'IV',473:'IV',474:'IV',475:'IV',476:'IV',477:'IV',478:'IV',479:'IV',480:'IV',481:'IV',482:'IV',483:'IV',484:'IV',485:'IV',486:'IV',487:'IV',488:'IV',489:'IV',490:'IV',491:'IV',492:'IV',493:'IV',494:'V',495:'V',496:'V',497:'V',498:'V',499:'V',500:'V',501:'V',502:'V',503:'V',504:'V',505:'V',506:'V',507:'V',508:'V',509:'V',510:'V',511:'V',512:'V',513:'V',514:'V',515:'V',516:'V',517:'V',518:'V',519:'V',520:'V',521:'V',522:'V',523:'V',524:'V',525:'V',526:'V',527:'V',528:'V',529:'V',530:'V',531:'V',532:'V',533:'V',534:'V',535:'V',536:'V',537:'V',538:'V',539:'V',540:'V',541:'V',542:'V',543:'V',544:'V',545:'V',546:'V',547:'V',548:'V',549:'V',550:'V',551:'V',552:'V',553:'V',554:'V',555:'V',556:'V',557:'V',558:'V',559:'V',560:'V',561:'V',562:'V',563:'V',564:'V',565:'V',566:'V',567:'V',568:'V',569:'V',570:'V',571:'V',572:'V',573:'V',574:'V',575:'V',576:'V',577:'V',578:'V',579:'V',580:'V',581:'V',582:'V',583:'V',584:'V',585:'V',586:'V',587:'V',588:'V',589:'V',590:'V',591:'V',592:'V',593:'V',594:'V',595:'V',596:'V',597:'V',598:'V',599:'V',600:'V',601:'V',602:'V',603:'V',604:'V',605:'V',606:'V',607:'V',608:'V',609:'V',610:'V',611:'V',612:'V',613:'V',614:'V',615:'V',616:'V',617:'V',618:'V',619:'V',620:'V',621:'V',622:'V',623:'V',624:'V',625:'V',626:'V',627:'V',628:'V',629:'V',630:'V',631:'V',632:'V',633:'V',634:'V',635:'V',636:'V',637:'V',638:'V',639:'V',640:'V',641:'V',642:'V',643:'V',644:'V',645:'V',646:'V',647:'V',648:'V',649:'V',650:'VI',651:'VI',652:'VI',653:'VI',654:'VI',655:'VI',656:'VI',657:'VI',658:'VI',659:'VI',660:'VI',661:'VI',662:'VI',663:'VI',664:'VI',665:'VI',666:'VI',667:'VI',668:'VI',669:'VI',670:'VI',671:'VI',672:'VI',673:'VI',674:'VI',675:'VI',676:'VI',677:'VI',678:'VI',679:'VI',680:'VI',681:'VI',682:'VI',683:'VI',684:'VI',685:'VI',686:'VI',687:'VI',688:'VI',689:'VI',690:'VI',691:'VI',692:'VI',693:'VI',694:'VI',695:'VI',696:'VI',697:'VI',698:'VI',699:'VI',700:'VI',701:'VI',702:'VI',703:'VI',704:'VI',705:'VI',706:'VI',707:'VI',708:'VI',709:'VI',710:'VI',711:'VI',712:'VI',713:'VI',714:'VI',715:'VI',716:'VI',717:'VI',718:'VI',719:'VI',720:'VI',721:'VI',722:'VII',723:'VII',724:'VII',725:'VII',726:'VII',727:'VII',728:'VII',729:'VII',730:'VII',731:'VII',732:'VII',733:'VII',734:'VII',735:'VII',736:'VII',737:'VII',738:'VII',739:'VII',740:'VII',741:'VII',742:'VII',743:'VII',744:'VII',745:'VII',746:'VII',747:'VII',748:'VII',749:'VII',750:'VII',751:'VII',752:'VII',753:'VII',754:'VII',755:'VII',756:'VII',757:'VII',758:'VII',759:'VII',760:'VII',761:'VII',762:'VII',763:'VII',764:'VII',765:'VII',766:'VII',767:'VII',768:'VII',769:'VII',770:'VII',771:'VII',772:'VII',773:'VII',774:'VII',775:'VII',776:'VII',777:'VII',778:'VII',779:'VII',780:'VII',781:'VII',782:'VII',783:'VII',784:'VII',785:'VII',786:'VII',787:'VII',788:'VII',789:'VII',790:'VII',791:'VII',792:'VII',793:'VII',794:'VII',795:'VII',796:'VII',797:'VII',798:'VII',799:'VII',800:'VII',801:'VII',802:'VII',803:'VII',804:'VII',805:'VII',806:'VII',807:'VII',808:'VII',809:'VII',810:'VIII',811:'VIII',812:'VIII',813:'VIII',814:'VIII',815:'VIII',816:'VIII',817:'VIII',818:'VIII',819:'VIII',820:'VIII',821:'VIII',822:'VIII',823:'VIII',824:'VIII',825:'VIII',826:'VIII',827:'VIII',828:'VIII',829:'VIII',830:'VIII',831:'VIII',832:'VIII',833:'VIII',834:'VIII',835:'VIII',836:'VIII',837:'VIII',838:'VIII',839:'VIII',840:'VIII',841:'VIII',842:'VIII',843:'VIII',844:'VIII',845:'VIII',846:'VIII',847:'VIII',848:'VIII',849:'VIII',850:'VIII',851:'VIII',852:'VIII',853:'VIII',854:'VIII',855:'VIII',856:'VIII',857:'VIII',858:'VIII',859:'VIII',860:'VIII',861:'VIII',862:'VIII',863:'VIII',864:'VIII',865:'VIII',866:'VIII',867:'VIII',868:'VIII',869:'VIII',870:'VIII',871:'VIII',872:'VIII',873:'VIII',874:'VIII',875:'VIII',876:'VIII',877:'VIII',878:'VIII',879:'VIII',880:'VIII',881:'VIII',882:'VIII',883:'VIII',884:'VIII',885:'VIII',886:'VIII',887:'VIII',888:'VIII',889:'VIII',890:'VIII',891:'VIII',892:'VIII',893:'VIII',894:'VIII',895:'VIII',896:'VIII',897:'VIII',898:'VIII',899:'VIII',900:'VIII',901:'VIII',902:'VIII',903:'VIII',904:'VIII',905:'VIII',906:'IX',907:'IX',908:'IX',909:'IX',910:'IX',911:'IX',912:'IX',913:'IX',914:'IX',915:'IX',916:'IX',917:'IX',918:'IX',919:'IX',920:'IX',921:'IX',922:'IX',923:'IX',924:'IX',925:'IX',926:'IX',927:'IX',928:'IX',929:'IX',930:'IX',931:'IX',932:'IX',933:'IX',934:'IX',935:'IX',936:'IX',937:'IX',938:'IX',939:'IX',940:'IX',941:'IX',942:'IX',943:'IX',944:'IX',945:'IX',946:'IX',947:'IX',948:'IX',949:'IX',950:'IX',951:'IX',952:'IX',953:'IX',954:'IX',955:'IX',956:'IX',957:'IX',958:'IX',959:'IX',960:'IX',961:'IX',962:'IX',963:'IX',964:'IX',965:'IX',966:'IX',967:'IX',968:'IX',969:'IX',970:'IX',971:'IX',972:'IX',973:'IX',974:'IX',975:'IX',976:'IX',977:'IX',978:'IX',979:'IX',980:'IX',981:'IX',982:'IX',983:'IX',984:'IX',985:'IX',986:'IX',987:'IX',988:'IX',989:'IX',990:'IX',991:'IX',992:'IX',993:'IX',994:'IX',995:'IX',996:'IX',997:'IX',998:'IX',999:'IX',1000:'IX',1001:'IX',1002:'IX',1003:'IX',1004:'IX',1005:'IX',1006:'IX',1007:'IX',1008:'IX',1009:'IX',1010:'IX',1011:'IX',1012:'IX',1013:'IX',1014:'IX',1015:'IX',1016:'IX',1017:'IX',1018:'IX',1019:'IX',1020:'IX',1021:'IX',1022:'IX',1023:'IX',1024:'IX',1025:'IX'};

let activeTypes=new Set(),activeGens=new Set();
let showFavsOnly=false, showCrismochiOnly=false;
let pokemonData={};   // id -> {name, types}
let loadedCount=0;
let allCards=[];
let favorites=new Set(JSON.parse(localStorage.getItem('pokedex-favs')||'[]'));
let favCards=JSON.parse(localStorage.getItem('pokedex-fav-cards')||'{}');

function saveFavs(){localStorage.setItem('pokedex-favs',JSON.stringify([...favorites]))}
function saveFavCards(){localStorage.setItem('pokedex-fav-cards',JSON.stringify(favCards))}

// Page switch
function showPage(name,btn){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('page-'+name).classList.add('active');
  btn.classList.add('active');
  if(name==='favcards') renderFavCardsPage();
}

// Build skeleton rows 1-1025
const tbody=document.getElementById('tbody');
for(let id=1;id<=1025;id++){
  const gen=POKEMON_GEN[id]||'?';
  const isCrismochi=CRISMOCHI_IDS.has(id);
  const isFav=favorites.has(id);
  const tr=document.createElement('tr');
  tr.id='row-'+id;
  tr.dataset.id=id;
  tr.dataset.name='';
  tr.dataset.types='';
  tr.dataset.gen=gen;
  tr.dataset.crismochi=isCrismochi?'1':'0';
  tr.dataset.fav=isFav?'1':'0';
  tr.innerHTML=`
    <td class="num">#${id}</td>
    <td class="img-cell"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" loading="lazy" alt="#${id}"></td>
    <td class="name loading-cell" id="name-${id}">…</td>
    <td class="types" id="types-${id}"><span class="loading-cell">…</span></td>
    <td class="gen-cell"><span class="gen-badge">${gen}</span></td>
    <td class="crismochi-cell">${isCrismochi?'<span class="crismochi-dot" title="En tu lista"></span>':''}</td>
    <td class="fav-cell"><span class="star ${isFav?'fav':'not-fav'}" id="star-${id}" onclick="toggleFav(${id})">${isFav?'★':'☆'}</span></td>
    <td class="tcg-cell"><button class="tcg-btn" id="tcgbtn-${id}" disabled>Ver cartas</button></td>
  `;
  tbody.appendChild(tr);
}

// Fetch all 1025 at once via PokeAPI list + batch detail fetch
async function loadAllPokemon(){
  try{
    // Get name list first (fast, single call)
    const listRes=await fetch('https://pokeapi.co/api/v2/pokemon?limit=1025&offset=0');
    const listData=await listRes.json();
    const nameMap={};
    listData.results.forEach((p,i)=>{
      const id=i+1;
      nameMap[id]=p.name;
      const tr=document.getElementById('row-'+id);
      if(tr){
        tr.dataset.name=p.name.toLowerCase();
        const nc=document.getElementById('name-'+id);
        if(nc){nc.textContent=p.name.replace(/-/g,' ');nc.classList.remove('loading-cell')}
      }

    });

    // Now fetch types in batches of 30
    const BATCH=30;
    const ids=Array.from({length:1025},(_,i)=>i+1);
    for(let i=0;i<ids.length;i+=BATCH){
      const batch=ids.slice(i,i+BATCH);
      await Promise.all(batch.map(async id=>{
        try{
          const res=await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
          const data=await res.json();
          const types=data.types.map(t=>t.type.name);
          const name=data.name;
          pokemonData[id]={name,types};
          const tr=document.getElementById('row-'+id);
          if(!tr)return;
          tr.dataset.types=types.join(',');
          tr.dataset.loaded='1';
          // name (may already be set)
          tr.dataset.name=name.toLowerCase();
          const nc=document.getElementById('name-'+id);
          if(nc){nc.textContent=name.replace(/-/g,' ');nc.classList.remove('loading-cell')}
          // types
          const typesHTML=types.map(t=>
            `<span class="badge" style="background:${TYPE_COLORS[t]||'#888'};color:${LIGHT_TYPES.has(t)?'#333':'#fff'}">${TYPE_LABELS[t]||t}</span>`
          ).join('');
          document.getElementById('types-'+id).innerHTML=typesHTML;

          // enable TCG button (table)
          const btn=document.getElementById('tcgbtn-'+id);
          if(btn){btn.disabled=false;btn.onclick=()=>openPanel(id,name)}

        }catch(e){}
        loadedCount++;
        document.getElementById('prog').textContent=loadedCount;
        if(loadedCount===1025){
          document.getElementById('progress').style.display='none';
          buildTypeFilters();
        }
        applyFilters();
      }));
    }
  }catch(e){
    document.getElementById('progress').innerHTML='<span style="color:#e63946">Error cargando datos. Recarga la página.</span>';
  }
}

// Favorites (Pokémon)
function toggleFav(id){
  if(favorites.has(id)){
    favorites.delete(id);
    document.getElementById('row-'+id).dataset.fav='0';
    const s=document.getElementById('star-'+id);s.textContent='☆';s.className='star not-fav';
  } else {
    favorites.add(id);
    document.getElementById('row-'+id).dataset.fav='1';
    const s=document.getElementById('star-'+id);s.textContent='★';s.className='star fav';
  }
  saveFavs();applyFilters();
}
function toggleFavFilter(){showFavsOnly=!showFavsOnly;document.getElementById('favToggle').classList.toggle('active',showFavsOnly);applyFilters()}
function toggleCrismochi(){showCrismochiOnly=!showCrismochiOnly;document.getElementById('crismochiToggle').classList.toggle('active',showCrismochiOnly);applyFilters()}

// Apply all filters
function applyFilters(){
  const q=document.getElementById('search').value.toLowerCase().trim();
  const rows=document.querySelectorAll('#tbody tr');
  let visible=0;
  rows.forEach(row=>{
    const name=row.dataset.name||'';
    const id='#'+row.dataset.id;
    const types=row.dataset.types?row.dataset.types.split(','):[];
    const matchSearch=!q||name.includes(q)||id.includes(q);
    const matchType=activeTypes.size===0||[...activeTypes].every(t=>types.includes(t));
    const matchGen=activeGens.size===0||activeGens.has(row.dataset.gen);
    const matchCrismochi=!showCrismochiOnly||row.dataset.crismochi==='1';
    const matchFav=!showFavsOnly||row.dataset.fav==='1';
    const show=matchSearch&&matchType&&matchGen&&matchCrismochi&&matchFav;
    row.classList.toggle('hidden',!show);
    if(show)visible++;
  });
  document.getElementById('count').textContent=`Mostrando ${visible} Pokémon`;
}

// Card favorites
function toggleFavCard(card,btn){
  if(favCards[card.id]){delete favCards[card.id];btn.classList.remove('fav');btn.textContent='♡';btn.title='Añadir a favoritos';}
  else{favCards[card.id]={id:card.id,name:card.name,img:card.img,set:card.set,rarity:card.rarity,number:card.number};btn.classList.add('fav');btn.textContent='♥';btn.title='Quitar de favoritos';}
  saveFavCards();updateFavCardsCount();
}
function updateFavCardsCount(){
  const n=Object.keys(favCards).length;
  document.getElementById('favCardsCount').textContent=n>0?`(${n})`:'';
}
function renderFavCardsPage(){
  const body=document.getElementById('favCardsBody');
  const cards=Object.values(favCards);
  if(!cards.length){body.innerHTML=`<div class="fav-cards-empty"><div class="icon">♡</div><p>Aún no tienes cartas favoritas.<br>Abre el panel TCG de cualquier Pokémon y pulsa el corazón.</p></div>`;return;}
  body.innerHTML=`<div class="fav-cards-grid" id="favCardsGrid"></div>`;
  const grid=document.getElementById('favCardsGrid');
  cards.forEach(c=>{
    const div=document.createElement('div');div.className='fav-card-item';div.id='fci-'+c.id;
    div.innerHTML=`${c.img?`<img src="${c.img}" alt="${c.name}" loading="lazy">`:'<div style="height:120px;background:#0f3460;display:flex;align-items:center;justify-content:center;color:#444;font-size:.8rem">Sin imagen</div>'}
    <button class="remove-fav-card" title="Quitar de favoritos" onclick="removeFavCard('${c.id}')">♥</button>
    <div class="fci-info"><div class="fci-name">${c.name}</div><div class="fci-set">${c.set}${c.number?` · #${c.number}`:''}</div>${c.rarity?`<div class="fci-rarity">${c.rarity}</div>`:''}</div>`;
    grid.appendChild(div);
  });
}
function removeFavCard(id){
  delete favCards[id];saveFavCards();updateFavCardsCount();
  const el=document.getElementById('fci-'+id);
  if(el){el.style.cssText='opacity:0;transform:scale(.9);transition:all .2s';setTimeout(()=>{el.remove();if(!Object.keys(favCards).length)renderFavCardsPage()},200)}
  const btn=document.getElementById('cfav-'+id);
  if(btn){btn.classList.remove('fav');btn.textContent='♡';}
}
function clearAllFavCards(){
  if(!Object.keys(favCards).length)return;
  if(!confirm('¿Eliminar todas las cartas favoritas?'))return;
  favCards={};saveFavCards();updateFavCardsCount();renderFavCardsPage();
  document.querySelectorAll('.card-fav-btn').forEach(b=>{b.classList.remove('fav');b.textContent='♡'});
}

// Normalize a PokeAPI name to a TCG-friendly search name.
// PokeAPI appends form suffixes (e.g. "mimikyu-disguised", "wormadam-plant",
// "giratina-altered") that don't exist in the TCG. We strip everything after
// the first hyphen UNLESS the base name itself is hyphenated (e.g. "ho-oh",
// "porygon-z", "jangmo-o", "hakamo-o", "kommo-o", "tapu-koko" etc.).
const HYPHENATED_BASE_NAMES = new Set([
  'ho-oh','porygon-z','jangmo-o','hakamo-o','kommo-o',
  'tapu-koko','tapu-lele','tapu-bulu','tapu-fini',
  'chi-yu','chien-pao','ting-lu','wo-chien',
  'great-tusk','scream-tail','brute-bonnet','flutter-mane',
  'slither-wing','sandy-shocks','iron-treads','iron-bundle',
  'iron-hands','iron-jugulis','iron-moth','iron-thorns',
  'iron-valiant','iron-leaves','iron-boulder','iron-crown',
  'roaring-moon','walking-wake','gouging-fire','raging-bolt',
  'mr-mime','mr-rime','mime-jr','type-null',
]);

function toTcgName(rawName) {
  const lower = rawName.toLowerCase();
  if (HYPHENATED_BASE_NAMES.has(lower)) return rawName;
  // Strip any suffix after the first hyphen
  const base = rawName.split('-')[0];
  return base;
}

// TCG Panel
const tcgCache = {};

async function openPanel(id, name){
  const tcgName = toTcgName(name);
  document.getElementById('panelTitle').textContent = name.replace(/-/g,' ');
  document.getElementById('panelSub').textContent = '';
  document.getElementById('cardSearch').value = '';
  document.getElementById('sidePanel').classList.add('open');
  document.getElementById('overlay').classList.add('show');

  // Serve from cache if available
  if (tcgCache[id]) {
    allCards = tcgCache[id];
    renderPanelCards(allCards);
    return;
  }

  document.getElementById('panelBody').innerHTML = '<div class="panel-loading"><div class="spinner"></div>Buscando cartas…</div>';
  try {
    let res = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:"${encodeURIComponent(tcgName)}"&pageSize=100`);
    let data = await res.json();
    let cards = data.data || [];

    // Fallback to raw name only if nothing found and name was modified
    if (cards.length === 0 && tcgName.toLowerCase() !== name.toLowerCase()) {
      res = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:"${encodeURIComponent(name)}"&pageSize=100`);
      data = await res.json();
      cards = data.data || [];
    }

    allCards = cards.map(c => ({
      id: c.id, name: c.name,
      img: c.images?.small || '',
      set: c.set?.name || '',
      rarity: c.rarity || '',
      number: c.number || ''
    }));
    tcgCache[id] = allCards;
    renderPanelCards(allCards);
  } catch(e) {
    document.getElementById('panelBody').innerHTML = '<div class="panel-empty">Error al cargar las cartas.</div>';
  }
}
function renderPanelCards(cards){
  const body=document.getElementById('panelBody');
  document.getElementById('panelSub').textContent=`${cards.length} carta${cards.length!==1?'s':''} encontrada${cards.length!==1?'s':''}`;
  if(!cards.length){body.innerHTML='<div class="panel-empty">No se encontraron cartas para este Pokémon.</div>';return;}
  body.innerHTML=`<div class="panel-count">${cards.length} carta${cards.length!==1?'s':''}</div><div class="cards-grid" id="cardsGrid"></div>`;
  const grid=document.getElementById('cardsGrid');
  cards.forEach(c=>{
    const isFav=!!favCards[c.id];
    const div=document.createElement('div');div.className='card-item';
    div.innerHTML=`<div class="card-img-wrap">${c.img?`<img src="${c.img}" alt="${c.name}" loading="lazy">`:'<div style="height:120px;display:flex;align-items:center;justify-content:center;color:#444;font-size:.8rem">Sin imagen</div>'
    }${c.rarity?`<span class="rarity-badge">${c.rarity}</span>`:''}
    <button class="card-fav-btn ${isFav?'fav':''}" id="cfav-${c.id}" title="${isFav?'Quitar de favoritos':'Añadir a favoritos'}">${isFav?'♥':'♡'}</button>
    </div><div class="card-info"><div class="card-name">${c.name}</div><div class="card-set">${c.set}${c.number?` · #${c.number}`:''}</div></div>`;
    div.querySelector('.card-fav-btn').addEventListener('click',()=>toggleFavCard(c,div.querySelector('.card-fav-btn')));
    grid.appendChild(div);
  });
}
function filterCards(){
  const q=document.getElementById('cardSearch').value.toLowerCase().trim();
  renderPanelCards(!q?allCards:allCards.filter(c=>c.name.toLowerCase().includes(q)||(c.set||'').toLowerCase().includes(q)||(c.rarity||'').toLowerCase().includes(q)));
}
function closePanel(){document.getElementById('sidePanel').classList.remove('open');document.getElementById('overlay').classList.remove('show')}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closePanel()});

// Type filter buttons
function buildTypeFilters(){
  const allTypes=new Set();
  Object.values(pokemonData).forEach(p=>p.types.forEach(t=>allTypes.add(t)));
  const container=document.getElementById('typeFilters');container.innerHTML='';
  const allBtn=makeAllBtn(container,activeTypes,'type');
  [...allTypes].sort().forEach(t=>{
    const btn=document.createElement('button');
    btn.className=`type-btn type-${t}`;btn.textContent=TYPE_LABELS[t]||t;btn.dataset.type=t;
    btn.onclick=()=>{
      if(!activeTypes.has(t) && activeTypes.size>=2) return; // max 2
      toggle(activeTypes,t,btn);
      allBtn.classList.toggle('active',activeTypes.size===0);
      // disable/enable buttons that are not selected when limit reached
      container.querySelectorAll('.type-btn:not([data-type="all"])').forEach(b=>{
        if(!activeTypes.has(b.dataset.type))
          b.disabled=activeTypes.size>=2;
      });
      applyFilters();
    };
    container.appendChild(btn);
  });
}
(function buildGenFilters(){
  const container=document.getElementById('genFilters');
  const allBtn=makeAllBtn(container,activeGens,'gen');
  ['I','II','III','IV','V','VI','VII','VIII','IX'].forEach(g=>{
    const btn=document.createElement('button');btn.className='gen-btn';btn.textContent=GEN_NAMES[g];btn.dataset.gen=g;
    btn.onclick=()=>{toggle(activeGens,g,btn);allBtn.classList.toggle('active',activeGens.size===0);applyFilters()};
    container.appendChild(btn);
  });
})();

function makeAllBtn(container,set,kind){
  const btn=document.createElement('button');
  btn.className=(kind==='type'?'type-btn':'gen-btn')+' active';
  btn.style.cssText='background:#f5c518;color:#333;border-color:#f5c518;opacity:1';
  btn.textContent='Todos';btn.dataset[kind]='all';
  btn.onclick=()=>{
    set.clear();
    container.querySelectorAll(`button:not([data-${kind}="all"])`).forEach(b=>{
      b.classList.remove('active');
      b.disabled=false; // re-enable all when resetting
    });
    btn.classList.add('active');
    applyFilters();
  };
  container.appendChild(btn);return btn;
}
function toggle(set,val,btn){if(set.has(val)){set.delete(val);btn.classList.remove('active')}else{set.add(val);btn.classList.add('active')}}

updateFavCardsCount();
loadAllPokemon();