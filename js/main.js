document.querySelector('.cta').addEventListener('click', event => {
  const destination = document.getElementById('lineup');
  if (!destination) { event.preventDefault(); return; }
  event.preventDefault();
  destination.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  history.replaceState(null, '', '#lineup');
});

// Datos de demostración de la propuesta académica; sin horarios oficiales.
const artists = [
  {
    "id": "billie-eilish",
    "name": "Billie Eilish",
    "photo": "assets/images/artistas/billie.png",
    "categories": [
      "Pop",
      "Alternativo"
    ],
    "day": "Viernes",
    "time": null,
    "headliner": true
  },
  {
    "id": "tyler-the-creator",
    "name": "Tyler, The Creator",
    "photo": "assets/images/artistas/tyler.png",
    "categories": [
      "Hip-Hop",
      "Alternativo"
    ],
    "day": "Sábado",
    "time": null,
    "headliner": true
  },
  {
    "id": "rosalia",
    "name": "Rosalía",
    "photo": "assets/images/artistas/rosalia.png",
    "categories": [
      "Pop",
      "Alternativo"
    ],
    "day": "Domingo",
    "time": null,
    "headliner": true
  },
  {
    "id": "dua-lipa",
    "name": "Dua Lipa",
    "photo": "assets/images/artistas/dua-lipa.jpg",
    "categories": [
      "Pop"
    ],
    "day": "Viernes",
    "time": null,
    "headliner": true
  },
  {
    "id": "ariana-grande",
    "name": "Ariana Grande",
    "photo": "assets/images/artistas/line-up/pop/ariana-grande.jpg",
    "categories": [
      "Pop"
    ],
    "day": "Sábado",
    "time": null,
    "headliner": true
  },
  {
    "id": "sabrina-carpenter",
    "name": "Sabrina Carpenter",
    "photo": "assets/images/artistas/line-up/pop/sabrina-carpenter.png",
    "categories": [
      "Pop"
    ],
    "day": "Domingo",
    "time": null,
    "headliner": true
  },
  {
    "id": "olivia-rodrigo",
    "name": "Olivia Rodrigo",
    "photo": "assets/images/artistas/line-up/pop/olivia-rodrigo.png",
    "categories": [
      "Pop",
      "Alternativo"
    ],
    "day": "Viernes",
    "time": null,
    "headliner": false
  },
  {
    "id": "lady-gaga",
    "name": "Lady Gaga",
    "photo": "assets/images/artistas/lady-gaga.jpg",
    "categories": [
      "Pop"
    ],
    "day": "Sábado",
    "time": null,
    "headliner": false
  },
  {
    "id": "chappell-roan",
    "name": "Chappell Roan",
    "photo": "assets/images/artistas/chappell-roan.jpg",
    "categories": [
      "Pop",
      "Alternativo"
    ],
    "day": "Domingo",
    "time": null,
    "headliner": false
  },
  {
    "id": "paramore",
    "name": "Paramore",
    "photo": "assets/images/artistas/paramore.jpg",
    "categories": [
      "Rock",
      "Alternativo"
    ],
    "day": "Viernes",
    "time": null,
    "headliner": false
  },
  {
    "id": "foo-fighters",
    "name": "Foo Fighters",
    "photo": "assets/images/artistas/line-up/rock/foo-fighters.jpg",
    "categories": [
      "Rock",
      "Alternativo"
    ],
    "day": "Sábado",
    "time": null,
    "headliner": false
  },
  {
    "id": "green-day",
    "name": "Green Day",
    "photo": "assets/images/artistas/line-up/rock/green-day.jpg",
    "categories": [
      "Rock",
      "Alternativo"
    ],
    "day": "Domingo",
    "time": null,
    "headliner": false
  },
  {
    "id": "skrillex",
    "name": "Skrillex",
    "photo": "assets/images/artistas/line-up/electronica/skrillex.jpg",
    "categories": [
      "Electrónica"
    ],
    "day": "Viernes",
    "time": null,
    "headliner": false
  },
  {
    "id": "calvin-harris",
    "name": "Calvin Harris",
    "photo": "assets/images/artistas/calvin-harris.jpg",
    "categories": [
      "Electrónica"
    ],
    "day": "Sábado",
    "time": null,
    "headliner": false
  },
  {
    "id": "deadmau5",
    "name": "Deadmau5",
    "photo": "assets/images/artistas/line-up/electronica/deadmau5.jpg",
    "categories": [
      "Electrónica"
    ],
    "day": "Domingo",
    "time": null,
    "headliner": false
  },
  {
    "id": "doja-cat",
    "name": "Doja Cat",
    "photo": "assets/images/artistas/line-up/hip-hop/doja-cat.jpg",
    "categories": [
      "Hip-Hop",
      "Pop"
    ],
    "day": "Viernes",
    "time": null,
    "headliner": false
  },
  {
    "id": "megan-thee-stallion",
    "name": "Megan Thee Stallion",
    "photo": "assets/images/artistas/line-up/hip-hop/megan-thee-stallion.png",
    "categories": [
      "Hip-Hop"
    ],
    "day": "Sábado",
    "time": null,
    "headliner": false
  },
  {
    "id": "fontaines-dc",
    "name": "Fontaines D.C.",
    "photo": "assets/images/artistas/line-up/rock/fontaines-D.C.png",
    "categories": [
      "Rock"
    ],
    "day": "Por confirmar",
    "time": null,
    "headliner": false
  },
  {
    "id": "the-strokes",
    "name": "The Strokes",
    "photo": "assets/images/artistas/line-up/rock/the-strokes.jpg",
    "categories": [
      "Rock"
    ],
    "day": "Por confirmar",
    "time": null,
    "headliner": false
  },
  {
    "id": "maneskin",
    "name": "Måneskin",
    "photo": "assets/images/artistas/line-up/rock/maneskin.jpg",
    "categories": [
      "Rock"
    ],
    "day": "Por confirmar",
    "time": null,
    "headliner": false
  },
  {
    "id": "fred-again",
    "name": "Fred again..",
    "photo": "assets/images/artistas/line-up/electronica/fred-again.jpg",
    "categories": [
      "Electrónica"
    ],
    "day": "Por confirmar",
    "time": null,
    "headliner": false
  },
  {
    "id": "dj-snake",
    "name": "DJ Snake",
    "photo": "assets/images/artistas/line-up/electronica/dj-snake.jpeg",
    "categories": [
      "Electrónica"
    ],
    "day": "Por confirmar",
    "time": null,
    "headliner": false
  },
  {
    "id": "marshmello",
    "name": "Marshmello",
    "photo": "assets/images/artistas/line-up/electronica/marshmello.png",
    "categories": [
      "Electrónica"
    ],
    "day": "Por confirmar",
    "time": null,
    "headliner": false
  },
  {
    "id": "kendrick-lamar",
    "name": "Kendrick Lamar",
    "photo": "assets/images/artistas/line-up/hip-hop/kendrick-lamar.jpg",
    "categories": [
      "Hip-Hop"
    ],
    "day": "Por confirmar",
    "time": null,
    "headliner": false
  },
  {
    "id": "drake",
    "name": "Drake",
    "photo": "assets/images/artistas/line-up/hip-hop/drake.jpeg",
    "categories": [
      "Hip-Hop"
    ],
    "day": "Por confirmar",
    "time": null,
    "headliner": false
  },
  {
    "id": "playboi-carti",
    "name": "Playboi Carti",
    "photo": "assets/images/artistas/line-up/hip-hop/playboi-carti.jpg",
    "categories": [
      "Hip-Hop"
    ],
    "day": "Por confirmar",
    "time": null,
    "headliner": false
  }
];
const lineup = document.querySelector('#lineup');
const viewport = lineup.querySelector('.carousel-viewport');
const track = lineup.querySelector('.artist-track');
// Mantiene tarjetas iniciales indexables y crea las que se agreguen después a la lista.
artists.forEach(artist => {
 if ([...track.children].some(card => card.dataset.id === artist.id)) return;
 const card = document.createElement('article'); card.className='artist-card'; card.dataset.id=artist.id;
 const photo=document.createElement('img'); photo.src=artist.photo; photo.alt=`Retrato de ${artist.name}`; photo.loading='lazy';
 const info=document.createElement('div'); info.className='artist-info'; const title=document.createElement('h3'); title.textContent=artist.name;
 const meta=document.createElement('p'); meta.textContent=[artist.headliner?'Headliner':artist.categories[0],artist.day,artist.time].filter(Boolean).join(' • '); info.append(title,meta);
 const button=document.createElement('button');button.className='favorite';button.type='button';button.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"/></svg>';
 card.append(photo,info,button);track.append(card);
});
const cards = [...lineup.querySelectorAll('.artist-card')];
const prev = lineup.querySelector('.carousel-prev');
const next = lineup.querySelector('.carousel-next');
// La referencia asigna a Tyler y Rosalía días distintos entre secciones; prevalecen los del Lineup.
artists.push({id:'nsqk',name:'NSQK',photo:'assets/images/artistas/nsqk.png',categories:[],day:'Viernes',time:'15:30',stage:'Mojave',headliner:false},{id:'tame-impala',name:'Tame Impala',photo:'assets/images/artistas/tame-impala.png',categories:[],day:'Viernes',time:'16:00',stage:'Outdoor',headliner:false});
Object.assign(artists.find(artist=>artist.id==='billie-eilish'),{time:'16:15',stage:'Coachella'});

// Horarios y escenarios de ejemplo para completar la agenda de la maqueta.
const illustrativeSlots={
 'dua-lipa':['17:00','Outdoor'],'olivia-rodrigo':['18:15','Coachella'],'paramore':['19:30','Mojave'],'skrillex':['20:45','Outdoor'],'doja-cat':['22:00','Coachella'],
 'ariana-grande':['15:30','Mojave'],'calvin-harris':['16:45','Outdoor'],'foo-fighters':['18:00','Coachella'],'lady-gaga':['19:15','Mojave'],'megan-thee-stallion':['20:30','Outdoor'],'tyler-the-creator':['21:45','Coachella'],
 'sabrina-carpenter':['15:30','Outdoor'],'chappell-roan':['16:45','Mojave'],'green-day':['18:00','Coachella'],'deadmau5':['19:15','Outdoor'],'rosalia':['20:30','Mojave']
};
artists.forEach(artist=>{const slot=illustrativeSlots[artist.id];if(slot){artist.time=slot[0];artist.stage=slot[1];}});

const storageKey = 'coachella-favorites';
let favorites = new Set();
try { const saved = JSON.parse(localStorage.getItem(storageKey) || '[]'); if (Array.isArray(saved)) favorites = new Set(saved.filter(id => artists.some(a => a.id === id))); } catch (_) {}
function refreshFavorites(){cards.forEach(card=>{const artist=artists.find(a=>a.id===card.dataset.id);const button=card.querySelector('.favorite');const selected=favorites.has(artist.id);button.setAttribute('aria-pressed',String(selected));button.setAttribute('aria-label',`${selected?'Quitar':'Agregar'} ${artist.name} ${selected?'de':'a'} favoritos`);}); document.dispatchEvent(new CustomEvent('coachella:favorites-change'));}
cards.forEach(card=>card.querySelector('.favorite').addEventListener('click',()=>toggleFavorite(card.dataset.id)));
function updateArrows(){const max=viewport.scrollWidth-viewport.clientWidth;prev.disabled=viewport.scrollLeft<=2;next.disabled=viewport.scrollLeft>=max-2;}
lineup.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{const filter=button.dataset.filter;lineup.querySelectorAll('.filter').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));let shown=0;cards.forEach(card=>{const artist=artists.find(a=>a.id===card.dataset.id);const matches=filter==='Todos'?true:(filter==='Headliners'?artist.headliner:artist.categories.includes(filter));card.hidden=!matches||shown>=6;if(!card.hidden)shown++; const label=filter==='Todos'||filter==='Headliners'?(artist.headliner?'Headliner':artist.categories[0]):filter;card.querySelector('.artist-info p').textContent=`${label} • ${artist.day}`;});lineup.querySelector('.empty-results').hidden=cards.some(card=>!card.hidden);viewport.scrollTo({left:0,behavior:'auto'});requestAnimationFrame(updateArrows);}));
function moveCard(direction){const visible=cards.find(card=>!card.hidden);if(!visible)return;const gap=parseFloat(getComputedStyle(lineup.querySelector('.artist-track')).gap)||0;viewport.scrollBy({left:direction*(visible.getBoundingClientRect().width+gap),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});}
prev.addEventListener('click',()=>moveCard(-1));next.addEventListener('click',()=>moveCard(1));viewport.addEventListener('scroll',updateArrows,{passive:true});viewport.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();moveCard(e.key==='ArrowRight'?1:-1);}});window.addEventListener('resize',updateArrows);lineup.querySelector('.filter[data-filter="Todos"]').click();refreshFavorites();updateArrows();
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){lineup.classList.add('js-reveal');const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});lineup.querySelectorAll('.reveal').forEach(element=>observer.observe(element));}
const motionPreference=matchMedia('(prefers-reduced-motion: reduce)');
function syncWaveMotion(){const svg=lineup.querySelector('.wave-filter');if(motionPreference.matches)svg.pauseAnimations();else svg.unpauseAnimations();}
syncWaveMotion();motionPreference.addEventListener('change',syncWaveMotion);

// Los datos y precios son ilustrativos y no representan una oferta oficial.
const ticketDetails={
 general:{title:'Admisión general',description:'Accede y disfruta de los 3 días del festival.',price:'$10,634 MXN',icon:'assets/svg/boleto.svg',color:'var(--rosa)'},
 vip:{title:'Boleto y acceso VIP',description:'Zonas exclusivas, servicios premium y más.',price:'$23,225 MXN',icon:'assets/svg/estrella.svg',color:'var(--coral)'},
 camping:{title:'Zona de camping',description:'Vive la experiencia en el campamento oficial.',price:'$7,729 MXN',icon:'assets/svg/camping.svg',color:'var(--rosa-coral)'}
};
const ticketsSection=document.querySelector('#boletos');
const ticketDialog=document.querySelector('.ticket-dialog');
let ticketTrigger=null;let previousBodyOverflow='';
ticketsSection.querySelectorAll('.ticket-open').forEach(button=>button.addEventListener('click',()=>{
 const ticket=ticketDetails[button.closest('.ticket-card').dataset.ticket];ticketTrigger=button;
 ticketDialog.style.setProperty('--modal-color',ticket.color);ticketDialog.querySelector('#ticket-dialog-title').textContent=ticket.title;ticketDialog.querySelector('#ticket-dialog-description').textContent=ticket.description;ticketDialog.querySelector('.ticket-dialog__price').textContent=ticket.price;ticketDialog.querySelector('.ticket-dialog__icon').src=ticket.icon;
 previousBodyOverflow=document.body.style.overflow;document.body.style.overflow='hidden';ticketDialog.showModal();ticketDialog.querySelector('.ticket-close').focus();
}));
ticketDialog.querySelector('.ticket-close').addEventListener('click',()=>ticketDialog.close());
ticketDialog.addEventListener('click',event=>{if(event.target===ticketDialog)ticketDialog.close();});
ticketDialog.addEventListener('close',()=>{document.body.style.overflow=previousBodyOverflow;if(ticketTrigger)ticketTrigger.focus();});
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){ticketsSection.classList.add('js-ticket-reveal');const ticketObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');ticketObserver.unobserve(entry.target);}}),{threshold:.12});ticketsSection.querySelectorAll('.ticket-reveal').forEach(element=>ticketObserver.observe(element));}

// Una sola fuente de artistas y favoritos para Lineup, itinerario y mapa.
const itinerary=document.querySelector('#itinerario');const agendaList=itinerary.querySelector('.agenda-list');const selectionList=itinerary.querySelector('.selection-list');const dayOrder=['Viernes','Sábado','Domingo'];let selectedDay='Viernes';
const stageData={coachella:{name:'Escenario Coachella',color:'#783F92',pin:'escenario-1',image:'escenario-coachella.png'},mojave:{name:'Escenario Mojave',color:'#398B83',pin:'escenario-3',image:'escenario-mojave.png'},outdoor:{name:'Escenario Outdoor',color:'#D17B36',pin:'escenario-2',image:'escenario-outdoor.png'},oasis:{name:'Escenario Oasis',color:'#C34B75',pin:'escenario-4',image:'escenario-oasis.png'},mirage:{name:'Escenario Mirage',color:'#4969AB',pin:'escenario-5',image:null},adicional:{name:'Escenario adicional',color:'#71934C',pin:'escenario-6',image:null}};
const stageIds={Coachella:'coachella',Mojave:'mojave',Outdoor:'outdoor',Oasis:'oasis',Mirage:'mirage'};artists.forEach(a=>{a.stageId=stageIds[a.stage]||null;a.performanceId=a.id+'-'+a.day.toLowerCase();});
const heartMarkup='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"/></svg>';
function sortSchedule(a,b){return (dayOrder.includes(a.day)?dayOrder.indexOf(a.day):dayOrder.length)-(dayOrder.includes(b.day)?dayOrder.indexOf(b.day):dayOrder.length)||(a.time||'99:99').localeCompare(b.time||'99:99')||a.name.localeCompare(b.name,'es');}
function imageFor(a,className){const i=document.createElement('img');i.className=className;i.src=a.photo;i.alt='';i.loading='lazy';return i;}
let toastTimer;const toast=document.querySelector('.favorite-toast');function showFavoriteToast(a,added){clearTimeout(toastTimer);toast.hidden=false;toast.classList.remove('is-leaving');toast.querySelector('.toast-title').textContent=added?'¡Artista agregado!':'Favoritos actualizados';toast.querySelector('.toast-message').textContent=`${a.name} se ${added?'agregó a':'eliminó de'} tu itinerario.`;toastTimer=setTimeout(()=>{toast.classList.add('is-leaving');setTimeout(()=>{if(toast.classList.contains('is-leaving'))toast.hidden=true;},220)},3600)}toast.querySelector('.toast-close').addEventListener('click',()=>{clearTimeout(toastTimer);toast.hidden=true});toast.querySelector('a').addEventListener('click',()=>{toast.hidden=true});
function toggleFavorite(id){const artist=artists.find(a=>a.id===id);if(!artist)return;const added=!favorites.has(id);added?favorites.add(id):favorites.delete(id);try{localStorage.setItem(storageKey,JSON.stringify([...favorites]));}catch(_){}refreshFavorites();showFavoriteToast(artist,added);}
function favoriteHeart(a){const heart=document.createElement('button');heart.type='button';heart.className='agenda-heart';heart.innerHTML=heartMarkup;heart.setAttribute('aria-label',`Quitar ${a.name} de favoritos`);heart.setAttribute('aria-pressed','true');heart.addEventListener('click',()=>toggleFavorite(a.id));return heart;}
function stageLabel(a){return stageData[a.stageId]?.name||'Escenario por definir';}function setSelectedDay(day){if(!dayOrder.includes(day))return;selectedDay=day;itinerary.querySelectorAll('.day-filters button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.day===day)));renderAgenda();}
function renderAgenda(){agendaList.replaceChildren();const selected=artists.filter(a=>favorites.has(a.id)&&a.day===selectedDay).sort(sortSchedule);if(!selected.length){const row=document.createElement('li');row.className='agenda-message';row.innerHTML='Aún no tienes artistas seleccionados para este día. <a href="#lineup">Explorar Lineup</a>';agendaList.append(row);return;}selected.forEach(a=>{const stage=stageData[a.stageId];const row=document.createElement('li');row.className='timeline-row';row.dataset.artistId=a.id;row.style.setProperty('--stage-color',stage?.color||'#a05d91');const time=document.createElement('time');time.className='timeline-time';time.textContent=a.time||'Por definir';if(a.time)time.dateTime=a.time;const node=document.createElement('span');node.className='timeline-node';node.setAttribute('aria-hidden','true');const card=document.createElement('div');card.className='timeline-card';const name=document.createElement('strong');name.textContent=a.name;const info=document.createElement('p');info.textContent=`${a.time||'Horario por definir'} · ${stageLabel(a)}`;card.append(imageFor(a,'timeline-avatar'),name,info);if(stage){const link=document.createElement('button');link.type='button';link.className='timeline-map';link.textContent='⌖ Ver en mapa';link.addEventListener('click',()=>navigateToStage(a));card.append(link)}row.append(time,node,card);agendaList.append(row);});}
function renderSelection(){const selected=artists.filter(a=>favorites.has(a.id)).sort(sortSchedule);itinerary.querySelector('.selection-count').textContent=`${selected.length} ${selected.length===1?'artista':'artistas'}`;selectionList.replaceChildren();itinerary.querySelector('.selection-empty').hidden=selected.length>0;selected.forEach(a=>{const row=document.createElement('li');row.className='selection-row';row.style.setProperty('--stage-color',stageData[a.stageId]?.color||'#a05d91');const info=document.createElement('div');const name=document.createElement('strong');name.textContent=a.name;const details=document.createElement('span');details.className='selection-detail';details.textContent=`${a.day} · ${a.time||'Horario por definir'} · ${stageLabel(a)}`;info.append(name,details);row.append(imageFor(a,'selection-avatar'),info,favoriteHeart(a));selectionList.append(row);});}
function renderItinerary(){renderAgenda();renderSelection();}itinerary.querySelectorAll('.day-filters button').forEach(b=>b.addEventListener('click',()=>setSelectedDay(b.dataset.day)));const legend=itinerary.querySelector('.stage-legend');Object.entries(stageData).forEach(([id,stage])=>{if(!artists.some(a=>a.stageId===id))return;const item=document.createElement('span');item.style.setProperty('--stage-color',stage.color);item.textContent=stage.name;legend.append(item)});
document.addEventListener('coachella:favorites-change',renderItinerary);window.addEventListener('storage',event=>{if(event.key===storageKey){try{const saved=JSON.parse(event.newValue||'[]');favorites=new Set(Array.isArray(saved)?saved.filter(id=>artists.some(a=>a.id===id)):[])}catch(_){favorites=new Set()}refreshFavorites()}});renderItinerary();
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){itinerary.classList.add('js-itinerary-reveal');const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});itinerary.querySelectorAll('.itinerary-reveal').forEach(el=>observer.observe(el))}

// Las coordenadas son porcentajes sobre la ilustración; son posiciones visuales, no geográficas.
const mapCategories={
 stages:{label:'Escenarios',color:'#71318c',symbol:'★',description:'Espacio de actuación señalado en la ilustración.'},
 vip:{label:'Zonas VIP',color:'#BB8B32',symbol:'♛',description:'Zona VIP señalada en la ilustración.'},
 food:{label:'Alimentos y bebidas',color:'#ee9a2e',symbol:'♨',description:'Área de alimentos y bebidas del festival.'},
 water:{label:'Hidratación',color:'#2395bd',symbol:'♦',description:'Estación de hidratación del festival.'},
 toilets:{label:'Sanitarios',color:'#eeeeea',ink:'#333333',symbol:'♟',description:'Sanitarios señalados en la ilustración.'},
 medical:{label:'Servicios médicos',color:'#df4257',symbol:'✚',description:'Punto de servicios médicos del festival.'},
 charging:{label:'Estaciones de carga',color:'#f3a91c',symbol:'ϟ',description:'Estación de carga señalada en la ilustración.'},
 info:{label:'Información',color:'#4165AD',symbol:'i',description:'Punto de información del festival.'},
 shop:{label:'Tiendas y mercancía',color:'#70ae53',symbol:'▣',description:'Zona de tiendas y mercancía del festival.'},
 camping:{label:'Camping',color:'#e68c26',symbol:'▲',description:'Zona de camping del festival.'}
};
const mapPoints=[
 {id:'escenario-1',name:'Escenario Coachella',description:'Escenario principal y más grande del mapa.',category:'stages',x:46.5,y:12.2},{id:'escenario-2',name:'Escenario Outdoor',description:'Escenario del festival.',category:'stages',x:26.8,y:29.9},{id:'escenario-3',name:'Escenario Mojave',description:'Escenario del festival.',category:'stages',x:71.8,y:27.0},{id:'escenario-4',name:'Escenario Oasis',description:'Escenario del festival.',category:'stages',x:66.7,y:42.1},{id:'escenario-5',name:'Escenario Mirage',description:'Escenario del festival.',category:'stages',x:74.8,y:52.8},{id:'escenario-6',name:'Escenario adicional',description:'Escenario del festival.',category:'stages',x:32.1,y:64.1},
 {id:'vip-1',category:'vip',x:92.8,y:36.1},{id:'vip-2',category:'vip',x:10.0,y:71.0},
 {id:'comida-1',category:'food',x:15.2,y:29.7},{id:'comida-2',category:'food',x:42.5,y:75.3},
 {id:'agua-1',category:'water',x:17.7,y:36.0},
 {id:'sanitarios-1',category:'toilets',x:28.8,y:23.6},{id:'sanitarios-2',category:'toilets',x:64.3,y:18.7},{id:'sanitarios-3',category:'toilets',x:83.5,y:34.3},{id:'sanitarios-4',category:'toilets',x:14.5,y:46.0},{id:'sanitarios-5',category:'toilets',x:67.3,y:65.8},{id:'sanitarios-6',category:'toilets',x:51.4,y:83.4},
 {id:'medico-1',category:'medical',x:10.0,y:60.8},{id:'medico-2',category:'medical',x:86.4,y:50.9},
 {id:'carga-1',category:'charging',x:44.7,y:36.2},{id:'carga-2',category:'charging',x:23.3,y:74.7},
 {id:'informacion-1',category:'info',x:31.7,y:50.5},{id:'tienda-1',category:'shop',x:58.3,y:70.8},{id:'camping-1',category:'camping',x:93.1,y:80.7}
].map((point,index)=>({...point,name:point.name||mapCategories[point.category].label+' '+(mapPointsCounter(point.category,index)),color:mapCategories[point.category].color,icon:mapCategories[point.category].symbol,description:point.description||mapCategories[point.category].description,additional:null}));
function mapPointsCounter(category,index){const counts={stages:0,vip:6,food:8,water:10,toilets:11,medical:17,charging:19,info:21,shop:22,camping:23};return index-counts[category]+1;}
const mapSection=document.querySelector('#mapa');const mapViewport=mapSection.querySelector('.map-viewport');const mapCanvas=mapSection.querySelector('.map-canvas');const mapHotspots=mapSection.querySelector('.map-hotspots');const mapPopover=document.querySelector('.map-popover');const mapFilters=mapSection.querySelector('.map-filter-list');const mapSelectedCategories=new Set();let activeMapPoint=null;let mapScale=1;let previousMapTrigger=null;
function makeMapPin(category){const pin=document.createElementNS('http://www.w3.org/2000/svg','svg');pin.setAttribute('viewBox','0 0 48 62');pin.setAttribute('aria-hidden','true');pin.classList.add('map-pin-svg');const shape=document.createElementNS('http://www.w3.org/2000/svg','path');shape.setAttribute('d','M24 2C11.8 2 2 11.6 2 23.6 2 39.1 15.8 52.1 24 60 32.2 52.1 46 39.1 46 23.6 46 11.6 36.2 2 24 2Z');shape.setAttribute('fill',category.color);shape.setAttribute('stroke','#fff');shape.setAttribute('stroke-width','3');pin.append(shape);const icons={stages:'<path fill="currentColor" stroke="none" d="m12 2 3 6 6 .8-4.5 4.4 1.1 6.3-5.6-3-5.6 3 1.1-6.3L3 8.8 9 8z"/>',vip:'<path d="M3 6l4 4 5-6 5 6 4-4-2 12H5L3 6z"/>',food:'<path d="M5 3v6m3-6v6M5 6h3M6.5 9v12M15 3c3 2 3 7 0 8v10M15 3v8"/>',water:'<path d="M12 3C9 7 6.5 10 6.5 14a5.5 5.5 0 0 0 11 0C17.5 10 15 7 12 3z"/>',toilets:'<circle cx="8" cy="5" r="2"/><circle cx="16" cy="5" r="2"/><path d="M6 10v5m4-5v5M6 10h4l1 5H5zm8 0v5m4-5v5m-4-5h4v10h-4z"/>',medical:'<path d="M10 3h4v7h7v4h-7v7h-4v-7H3v-4h7z"/>',charging:'<path d="M13 2 5 13h6l-1 9 9-12h-6z"/>',info:'<path d="M12 10v8m-2 0h4M12 5v1"/>',shop:'<path d="M3 4h2l2 10h10l3-7H6m3 11h.01M17 18h.01"/>',camping:'<path d="M12 3 3 19h18L12 3zm0 8-4 8m4-8 4 8"/>'};const key=Object.keys(mapCategories).find(id=>mapCategories[id]===category);const icon=document.createElementNS('http://www.w3.org/2000/svg','svg');icon.setAttribute('x','10');icon.setAttribute('y','9');icon.setAttribute('width','28');icon.setAttribute('height','28');icon.setAttribute('viewBox','0 0 24 24');icon.setAttribute('fill','none');icon.setAttribute('stroke',category.ink||'#fff');icon.setAttribute('color',category.ink||'#fff');icon.setAttribute('stroke-width','1.8');icon.setAttribute('stroke-linecap','round');icon.setAttribute('stroke-linejoin','round');icon.innerHTML=icons[key];pin.append(icon);return pin;}
function mapSymbol(category){const node=document.createElement('span');node.className='map-symbol';node.setAttribute('aria-hidden','true');node.append(makeMapPin(category));return node;}
Object.entries(mapCategories).forEach(([key,category])=>{const button=document.createElement('button');button.type='button';button.className='map-filter';button.dataset.category=key;button.style.setProperty('--category-color',category.color);button.setAttribute('aria-pressed','false');button.append(mapSymbol(category),document.createTextNode(category.label));button.addEventListener('click',()=>selectMapCategory(key));mapFilters.append(button);});
// Etiqueta de hover independiente del lienzo para que el borde del mapa no la recorte.
const mapTooltip=document.createElement('div');mapTooltip.className='map-floating-tooltip';mapTooltip.setAttribute('aria-hidden','true');mapTooltip.hidden=true;document.body.append(mapTooltip);let tooltipTrigger=null;
function positionMapTooltip(){if(!tooltipTrigger||mapTooltip.hidden)return;const pin=tooltipTrigger.getBoundingClientRect(),label=mapTooltip.getBoundingClientRect();const header=document.querySelector('.site-header')?.getBoundingClientRect().bottom||0;const left=Math.max(8,Math.min(innerWidth-label.width-8,pin.left+pin.width/2-label.width/2));let top=pin.top-label.height-9;if(top<header+8)top=pin.bottom+9;top=Math.max(header+8,Math.min(innerHeight-label.height-8,top));mapTooltip.style.left=left+'px';mapTooltip.style.top=top+'px'}
function showMapTooltip(button){if(!mapPopover.hidden)return;tooltipTrigger=button;mapTooltip.textContent=button.dataset.label;mapTooltip.hidden=false;positionMapTooltip()}
function hideMapTooltip(){mapTooltip.hidden=true;tooltipTrigger=null}
window.addEventListener('scroll',positionMapTooltip,{passive:true});window.addEventListener('resize',positionMapTooltip);mapViewport.addEventListener('scroll',positionMapTooltip,{passive:true});
mapPoints.forEach(point=>{const button=document.createElement('button');button.type='button';button.className='map-hotspot';button.style.left=point.x+'%';button.style.top=point.y+'%';button.dataset.id=point.id;button.dataset.category=point.category;button.dataset.label=point.name;button.setAttribute('aria-label',point.name);button.setAttribute('aria-expanded','false');button.append(makeMapPin(mapCategories[point.category]));button.addEventListener('mouseenter',()=>showMapTooltip(button));button.addEventListener('mouseleave',hideMapTooltip);button.addEventListener('focus',()=>showMapTooltip(button));button.addEventListener('blur',hideMapTooltip);button.addEventListener('click',()=>openMapPoint(point,button));mapHotspots.append(button);const li=document.createElement('li');li.textContent=point.name+': '+point.description;mapSection.querySelector('.map-text-list').append(li);});
function updateMapFilters(){mapFilters.querySelectorAll('.map-filter').forEach(button=>button.setAttribute('aria-pressed',String(mapSelectedCategories.has(button.dataset.category))));mapHotspots.querySelectorAll('.map-hotspot').forEach(button=>button.classList.toggle('is-highlighted',mapSelectedCategories.has(button.dataset.category)));}

function positionMapPopover(){
 if(!previousMapTrigger||mapPopover.hidden)return;
 const section=mapSection.getBoundingClientRect();
 const pin=previousMapTrigger.getBoundingClientRect();
 const popup=mapPopover.getBoundingClientRect();
 const margin=8;const minX=Math.max(margin,section.left+margin);const maxX=Math.min(innerWidth-margin,section.right-margin)-popup.width;
 const left=Math.max(minX,Math.min(pin.left+pin.width/2-popup.width/2,Math.max(minX,maxX)));
 const headerBottom=document.querySelector('.site-header')?.getBoundingClientRect().bottom||0;const minY=Math.max(margin,headerBottom+margin);const maxY=innerHeight-margin-popup.height;
 const above=pin.top-popup.height-12;const below=pin.bottom+12;
 const nearTop=pin.top<Math.max(96,innerHeight*.3);const preferred=nearTop&&below+popup.height<=innerHeight-margin?below:(above>=minY?above:below);
 const top=Math.max(minY,Math.min(preferred,Math.max(minY,maxY)));
 mapPopover.style.left=left+'px';mapPopover.style.top=top+'px';
}
function openMapPoint(point,button){if(previousMapTrigger)previousMapTrigger.setAttribute('aria-expanded','false');previousMapTrigger=button;activeMapPoint=point;button.setAttribute('aria-expanded','true');mapPopover.querySelector('#map-popover-title').textContent=point.name;mapPopover.querySelector('.map-popover-category').textContent='';mapPopover.querySelector('.map-popover-description').textContent=({medical:'Punto de atención y asistencia médica.',water:'Punto de hidratación.',info:'Orientación y asistencia para visitantes.'})[point.category]||'';mapPopover.querySelector('.map-popover-icon').replaceChildren(mapSymbol(mapCategories[point.category]));const extra=mapPopover.querySelector('.map-popover-extra');extra.replaceChildren();const stageId=Object.keys(stageData).find(id=>stageData[id].pin===point.id);if(stageId)renderStageFavorites(extra,stageId);const illustration=stageId?stageData[stageId].image:mapIllustrations[point.category];if(illustration){const explore=document.createElement('button');explore.type='button';explore.className='map-explore-space';explore.textContent='Explorar espacio';explore.addEventListener('click',()=>showMapDetail(point.category,stageId));extra.append(explore)}mapPopover.hidden=false;hideMapTooltip();positionMapPopover();}
function closeMapPoint(restoreFocus){mapPopover.hidden=true;activeMapPoint=null;if(previousMapTrigger){previousMapTrigger.setAttribute('aria-expanded','false');if(restoreFocus)previousMapTrigger.focus();previousMapTrigger=null;}}
mapPopover.querySelector('.map-popover-close').addEventListener('click',()=>closeMapPoint(true));document.addEventListener('pointerdown',event=>{if(!mapPopover.hidden&&!event.target.closest('.map-hotspot')&&!mapPopover.contains(event.target))closeMapPoint(false);});window.addEventListener('scroll',positionMapPopover,{passive:true});document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!mapPopover.hidden){event.preventDefault();closeMapPoint(true);}});mapViewport.addEventListener('scroll',positionMapPopover,{passive:true});
function setMapScale(nextScale){mapScale=Math.min(2,Math.max(1,nextScale));mapCanvas.style.width=(mapScale*100)+'%';mapViewport.classList.toggle('is-zoomed',mapScale>1);mapSection.querySelector('[data-map-zoom="in"]').disabled=mapScale>=2;mapSection.querySelector('[data-map-zoom="out"]').disabled=mapScale<=1;if(mapScale===1){mapViewport.scrollTo({left:0,top:0});}requestAnimationFrame(positionMapPopover);}
mapSection.querySelectorAll('[data-map-zoom]').forEach(button=>button.addEventListener('click',()=>setMapScale(button.dataset.mapZoom==='reset'?1:mapScale+(button.dataset.mapZoom==='in'?.25:-.25))));setMapScale(1);
let mapDrag=null;mapViewport.addEventListener('pointerdown',event=>{if(mapScale===1||event.pointerType!=='mouse'||event.target.closest('button'))return;mapDrag={x:event.clientX,y:event.clientY,left:mapViewport.scrollLeft,top:mapViewport.scrollTop};mapViewport.classList.add('is-dragging');mapViewport.setPointerCapture(event.pointerId);});mapViewport.addEventListener('pointermove',event=>{if(!mapDrag)return;mapViewport.scrollLeft=mapDrag.left-(event.clientX-mapDrag.x);mapViewport.scrollTop=mapDrag.top-(event.clientY-mapDrag.y);});['pointerup','pointercancel','lostpointercapture'].forEach(name=>mapViewport.addEventListener(name,()=>{mapDrag=null;mapViewport.classList.remove('is-dragging');}));window.addEventListener('resize',positionMapPopover);
// Vistas individuales: los PNG originales se cargan únicamente al seleccionar un espacio.
const mapIllustrations={vip:'zona-vip.png',food:'alimentos-bebidas.png',water:'hidratacion.png',toilets:'sanitarios.png',medical:'servicios-medicos.png',charging:'estaciones-carga.png',info:'informacion.png',shop:'merch.png',camping:'camping.png'};const mapDetail=mapSection.querySelector('.map-detail');const mapDetailImage=mapDetail.querySelector('.map-detail-image');let activeMapCategory=null;let currentStage='coachella';let detailRequest=0;let highlightArtist=null;let mapTransitionTimer;
function stageArtists(stageId){return artists.filter(a=>favorites.has(a.id)&&a.stageId===stageId).sort(sortSchedule)}
function scrollToItinerary(a){if(a)setSelectedDay(a.day);itinerary.scrollIntoView({behavior:motionPreference.matches?'auto':'smooth'});history.replaceState(null,'','#itinerario');if(a){setTimeout(()=>{const row=itinerary.querySelector(`.timeline-row[data-artist-id="${a.id}"]`);row?.classList.add('is-emphasized');setTimeout(()=>row?.classList.remove('is-emphasized'),2200)},motionPreference.matches?0:700)}}
function renderStageFavorites(container,stageId){const found=stageArtists(stageId);const label=document.createElement('p');label.className='map-favorites-heading';label.textContent=found.length?'Tus artistas favoritos aquí':'Aún no tienes artistas favoritos en este escenario';container.append(label);if(!found.length){const link=document.createElement('a');link.href='#lineup';link.textContent='Explorar Lineup';container.append(link);return}found.forEach(a=>{const row=document.createElement('div');row.className='map-favorite-row';if(a.id===highlightArtist)row.classList.add('is-emphasized');const info=document.createElement('div');const strong=document.createElement('strong');strong.textContent=a.name;const meta=document.createElement('span');meta.textContent=`${a.day} · ${a.time||'Horario por definir'}`;info.append(strong,meta);const visit=document.createElement('button');visit.type='button';visit.className='map-favorite-visit';visit.setAttribute('aria-label',`Ver ${a.name} en mi itinerario`);visit.textContent='Ver';visit.addEventListener('click',()=>scrollToItinerary(a));row.append(imageFor(a,'map-favorite-avatar'),info,favoriteHeart(a),visit);container.append(row)});const link=document.createElement('button');link.type='button';link.className='map-itinerary-link';link.textContent='Ver mi itinerario';link.addEventListener('click',()=>scrollToItinerary(found.length===1?found[0]:null));container.append(link)}
function renderStageSelector(){const box=mapDetail.querySelector('.map-stage-selector');box.replaceChildren();if(activeMapCategory!=='stages')return;['coachella','mojave','outdoor','oasis'].forEach(id=>{const stage=stageData[id];if(!stage.image)return;const button=document.createElement('button');button.type='button';button.textContent=stage.name;button.setAttribute('aria-pressed',String(id===currentStage));button.addEventListener('click',()=>showMapDetail('stages',id));box.append(button)})}
function showMapDetail(category,stageId){clearTimeout(mapTransitionTimer);if(category==='stages'&&stageId)currentStage=stageId;const file=category==='stages'?stageData[currentStage]?.image:mapIllustrations[category];if(!file)return;activeMapCategory=category;mapSelectedCategories.clear();mapSelectedCategories.add(category);updateMapFilters();closeMapPoint(false);const request=++detailRequest;const img=new Image();img.src='assets/img/mapa/'+file;img.decode().catch(()=>{}).then(()=>{if(request!==detailRequest)return;mapDetailImage.src=img.src;const title=category==='stages'?stageData[currentStage].name:mapCategories[category].label;mapDetailImage.alt='Ilustración tridimensional de '+title;mapDetail.querySelector('.map-detail-title').textContent=title;mapDetail.style.setProperty('--stage-color',category==='stages'?stageData[currentStage].color:mapCategories[category].color);mapDetail.hidden=false;mapSection.querySelector('.map-controls').hidden=true;mapViewport.hidden=true;renderStageSelector();refreshMapDetail();mapDetail.classList.remove('is-entering');requestAnimationFrame(()=>mapDetail.classList.add('is-entering'))})}
function refreshMapDetail(){const container=mapDetail.querySelector('.map-detail-favorites');container.replaceChildren();if(activeMapCategory==='stages')renderStageFavorites(container,currentStage)}
function selectMapCategory(key){highlightArtist=null;mapHotspots.querySelectorAll('.is-target').forEach(pin=>pin.classList.remove('is-target'));clearTimeout(mapTransitionTimer);mapSelectedCategories.clear();mapSelectedCategories.add(key);updateMapFilters();if(!mapDetail.hidden){showMapDetail(key,key==='stages'?currentStage:null);return}closeMapPoint(false);mapTransitionTimer=setTimeout(()=>{mapViewport.classList.add('is-fading');mapTransitionTimer=setTimeout(()=>showMapDetail(key,key==='stages'?currentStage:null),motionPreference.matches?0:220)},motionPreference.matches?0:350)}
function backToGeneral(){clearTimeout(mapTransitionTimer);detailRequest++;mapDetail.hidden=true;mapViewport.hidden=false;mapViewport.classList.remove('is-fading');mapSection.querySelector('.map-controls').hidden=false;activeMapCategory=null;requestAnimationFrame(positionMapPopover)}mapDetail.querySelector('.map-back').addEventListener('click',backToGeneral);
function navigateToStage(a){const stage=stageData[a.stageId];if(!stage)return;backToGeneral();setMapScale(1);highlightArtist=a.id;mapSelectedCategories.clear();mapSelectedCategories.add('stages');updateMapFilters();mapSection.scrollIntoView({behavior:motionPreference.matches?'auto':'smooth'});history.replaceState(null,'','#mapa');const pin=mapHotspots.querySelector(`[data-id="${stage.pin}"]`);mapHotspots.querySelectorAll('.map-hotspot').forEach(b=>b.classList.remove('is-target'));pin?.classList.add('is-target');mapTransitionTimer=setTimeout(()=>{if(stage.image){mapViewport.classList.add('is-fading');mapTransitionTimer=setTimeout(()=>showMapDetail('stages',a.stageId),motionPreference.matches?0:220)}else if(pin)openMapPoint(mapPoints.find(p=>p.id===stage.pin),pin)},motionPreference.matches?0:850)}
document.addEventListener('coachella:favorites-change',()=>{if(!mapDetail.hidden)refreshMapDetail();if(activeMapPoint&&previousMapTrigger)openMapPoint(activeMapPoint,previousMapTrigger)});
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){mapSection.classList.add('js-map-reveal');const mapObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');mapObserver.unobserve(entry.target);}}),{threshold:.1});mapSection.querySelectorAll('.map-reveal').forEach(element=>mapObserver.observe(element));}

// Fotografías individuales proporcionadas para la maqueta; no son archivos históricos verificados por año.
const editionsData=[
 {id:'2018',year:2018,image:'assets/images/ediciones/edicion1.png',headliners:['The Weeknd','Beyoncé','Eminem'],description:'Headliners de la edición 2018.',highlights:[],gallery:[],validation:'referencia'},
 {id:'2019',year:2019,image:'assets/images/ediciones/edicion7.png',headliners:['Childish Gambino','Tame Impala','Ariana Grande'],description:'Headliners de la edición 2019.',highlights:[],gallery:[],validation:'referencia'},
 {id:'2022',year:2022,image:'assets/images/ediciones/edicion2.png',headliners:['Harry Styles','Billie Eilish','Swedish House Mafia & The Weeknd'],description:'Headliners de la edición 2022.',highlights:[],gallery:[],validation:'referencia'},
 {id:'2023',year:2023,image:'assets/images/ediciones/edicion4.png',headliners:['Bad Bunny','BLACKPINK','Frank Ocean'],description:'Frank Ocean únicamente se presentó durante el primer fin de semana.',highlights:[],gallery:[],validation:'referencia'},
 {id:'2024',year:2024,image:'assets/images/ediciones/edicion5.png',headliners:['Lana Del Rey','Tyler, the Creator','Doja Cat'],description:'Headliners de la edición 2024.',highlights:[],gallery:[],validation:'referencia'},
 {id:'2025',year:2025,image:'assets/images/ediciones/edicion6.png',headliners:['Lady Gaga','Green Day','Post Malone'],description:'Headliners de la edición 2025.',highlights:[],gallery:[],validation:'referencia'},
 {id:'2026',year:2026,image:'assets/images/ediciones/edicion3.png',headliners:['Sabrina Carpenter','Justin Bieber','Karol G'],description:'Headliners de la edición 2026.',highlights:[],gallery:[],validation:'referencia'}
];
const editionsSection=document.querySelector('#ediciones');const editionsStage=editionsSection.querySelector('.editions-stage');const editionsCarousel=editionsSection.querySelector('.editions-carousel');const editionsDialog=document.querySelector('.edition-dialog');let editionIndex=0;let editionMoving=false;let editionTrigger=null;let editionPreviousOverflow='';let editionPointer=null;let suppressEditionClick=false;
function visibleEditionRadius(){return 3;}
function editionSlot(index){return (index-editionIndex+editionsData.length+3)%editionsData.length-3;}
function editionMetrics(){const width=editionsStage.clientWidth;return {spacing:width*.112,rise:width*.009};}
function editionTransform(slot){const {spacing,rise}=editionMetrics();const distance=Math.abs(slot);const scale=1-.13*Math.min(distance,1)-.03*Math.max(0,distance-1);return `translate(-50%, 0) translate(${slot*spacing}px, ${slot*slot*rise}px) rotate(${slot*12}deg) scale(${scale})`;}
const editionCards=editionsData.map((edition,index)=>{const card=document.createElement('button');card.type='button';card.className='edition-card';card.setAttribute('aria-label',`Edición ${edition.year}${edition.validation==='cancelada'?', cancelada':''}`);const image=document.createElement('img');image.className='edition-photo';image.src=edition.image;image.alt='Imagen ilustrativa del festival, sin atribución histórica al año';image.loading='lazy';image.draggable=false;const year=document.createElement('span');year.className='edition-year';year.textContent=edition.year;card.append(image,year);card.addEventListener('click',()=>{if(editionMoving||suppressEditionClick)return;const slot=editionSlot(index);if(slot!==0)animateEditionSnap(slot,0,()=>openEdition(card));else openEdition(card);});editionsStage.append(card);return card;});
function renderEditionInfo(){const edition=editionsData[editionIndex];editionsSection.querySelector('.editions-info h3').textContent='HEADLINERS';editionsSection.querySelector('.editions-info').setAttribute('aria-label','Headliners de Coachella '+edition.year);const list=editionsSection.querySelector('.editions-artists');list.replaceChildren(...edition.headliners.map(name=>{const item=document.createElement('li');item.textContent=name;return item;}));}
function renderEditionCards(){editionCards.forEach((card,index)=>{const slot=editionSlot(index);card.style.transform=editionTransform(slot);card.style.opacity='1';card.style.zIndex=String(12-Math.abs(slot)*2);card.classList.toggle('is-active',slot===0);card.dataset.visible='true';card.setAttribute('aria-current',slot===0?'true':'false');card.tabIndex=0;});}
function normalizedEditionSlot(value){return ((value+3.5)%7+7)%7-3.5;}
function previewEditionDrag(offset){editionCards.forEach((card,index)=>{const slot=normalizedEditionSlot(editionSlot(index)-offset);card.style.transform=editionTransform(slot);card.style.opacity=String(Math.max(0,Math.min(1,(3.5-Math.abs(slot))/.3)));card.style.zIndex=String(12-Math.floor(Math.abs(slot)*2));});}
function animateEditionSnap(amount,fromOffset=0,onComplete=null){if(editionMoving)return;editionMoving=true;const oldSlots=editionCards.map((_,index)=>editionSlot(index));const duration=matchMedia('(prefers-reduced-motion: reduce)').matches?0:600;const info=editionsSection.querySelector('.editions-info');if(duration&&amount)info.classList.add('is-changing');const animations=editionCards.map((card,index)=>{if(!duration)return null;const frames=Array.from({length:41},(_,i)=>{const t=i/40;const offset=fromOffset+(amount-fromOffset)*t;const slot=normalizedEditionSlot(oldSlots[index]-offset);return {transform:editionTransform(slot),opacity:Math.max(0,Math.min(1,(3.5-Math.abs(slot))/.3)),offset:t};});return card.animate(frames,{duration,easing:'ease-in-out',fill:'forwards'});});setTimeout(()=>{editionIndex=(editionIndex+amount+editionsData.length)%editionsData.length;renderEditionCards();animations.forEach(animation=>animation?.cancel());renderEditionInfo();info.classList.remove('is-changing');editionMoving=false;if(onComplete)onComplete();},duration);}
function moveEdition(amount){if(!editionMoving&&amount)animateEditionSnap(amount);}
editionsCarousel.addEventListener('keydown',event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();moveEdition(event.key==='ArrowRight'?1:-1);}});
editionsStage.addEventListener('pointerdown',event=>{if(editionMoving||event.button!==0)return;editionPointer={x:event.clientX,y:event.clientY,id:event.pointerId,dragging:false,offset:0};});
editionsStage.addEventListener('pointermove',event=>{if(!editionPointer||event.pointerId!==editionPointer.id)return;const dx=event.clientX-editionPointer.x,dy=event.clientY-editionPointer.y;if(!editionPointer.dragging&&Math.abs(dx)>8&&Math.abs(dx)>Math.abs(dy)){editionPointer.dragging=true;editionsStage.setPointerCapture(event.pointerId);editionsStage.classList.add('is-dragging');}if(editionPointer.dragging){event.preventDefault();editionPointer.offset=Math.max(-3,Math.min(3,-dx/editionMetrics().spacing));previewEditionDrag(editionPointer.offset);}});
function finishEditionDrag(event){if(!editionPointer||event.pointerId!==editionPointer.id)return;const state=editionPointer;editionPointer=null;editionsStage.classList.remove('is-dragging');if(state.dragging){suppressEditionClick=true;setTimeout(()=>{suppressEditionClick=false;},50);animateEditionSnap(Math.round(state.offset),state.offset);}}
editionsStage.addEventListener('pointerup',finishEditionDrag);editionsStage.addEventListener('pointercancel',finishEditionDrag);window.addEventListener('resize',()=>{if(!editionMoving)renderEditionCards();});renderEditionCards();renderEditionInfo();
const collageCenters=['11% 32%','35% 21%','61% 29%','87% 25%','12% 77%','36% 68%','62% 78%','87% 75%'];
let collageRequest=0;
function openEdition(trigger){const edition=editionsData[editionIndex];editionTrigger=trigger;editionPreviousOverflow=document.body.style.overflow;editionsDialog.querySelector('#edition-dialog-title').textContent='COACHELLA '+edition.year;editionsDialog.querySelector('.edition-dialog-status').textContent=edition.description;editionsDialog.querySelector('.edition-dialog-headliners').textContent='Headliners: '+edition.headliners.join(' · ');const collage=editionsDialog.querySelector('.edition-collage');const src=`assets/images/collages/${edition.year}.png`;collage.setAttribute('aria-label',`Collage ilustrativo de Coachella ${edition.year}`);const pieces=collage.querySelector('.edition-collage-pieces');pieces.replaceChildren();const previousFinal=collage.querySelector('.edition-collage-final');const final=previousFinal.cloneNode(false);final.removeAttribute('src');final.style.visibility='hidden';final.style.animation='none';previousFinal.replaceWith(final);const request=++collageRequest;document.body.style.overflow='hidden';editionsDialog.showModal();editionsDialog.querySelector('.edition-close').focus();const image=new Image();image.src=src;const ready=image.decode?image.decode().catch(()=>{}):Promise.resolve();ready.then(()=>{if(request!==collageRequest||!editionsDialog.open)return;pieces.replaceChildren(...collageCenters.map((center,index)=>{const piece=document.createElement('span');piece.className='edition-collage-piece';piece.style.backgroundImage=`url("${src}")`;piece.style.maskImage=`radial-gradient(ellipse 23% 34% at ${center}, #000 55%, transparent 100%)`;piece.style.webkitMaskImage=piece.style.maskImage;piece.style.animationDelay=`${index*.23}s`;return piece;}));const reveal=final.cloneNode(false);reveal.src=src;reveal.style.visibility='visible';reveal.style.animation='';final.replaceWith(reveal);});}
editionsDialog.querySelector('.edition-close').addEventListener('click',()=>editionsDialog.close());editionsDialog.addEventListener('click',event=>{if(event.target===editionsDialog)editionsDialog.close();});editionsDialog.addEventListener('close',()=>{collageRequest++;document.body.style.overflow=editionPreviousOverflow;if(editionTrigger)editionTrigger.focus();});
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){editionsSection.classList.add('js-editions-reveal');const editionsObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');editionsObserver.unobserve(entry.target);}}),{threshold:.1});editionsSection.querySelectorAll('.editions-reveal').forEach(element=>editionsObserver.observe(element));}

// Explora: fotografías individuales proporcionadas por la usuaria.
const experiences={arte:{title:'Arte',description:'Instalaciones artísticas, esculturas y expresiones visuales dentro del festival.'},comida:{title:'Comida',description:'Experiencias gastronómicas y variedad de alimentos y bebidas.'},moda:{title:'Moda',description:'Tendencias, estilos personales y expresión creativa.'},experiencias:{title:'Experiencias',description:'Actividades, atracciones y momentos que van más allá de los conciertos.'},bienestar:{title:'Bienestar',description:'Espacios de descanso y experiencias relacionadas con el bienestar.'},merch:{title:'Merch',description:'Productos, prendas y artículos relacionados con el festival.'}};
const exploreSection=document.querySelector('#explora');const exploreGallery=exploreSection.querySelector('.explore-gallery');const exploreCards=[...exploreGallery.querySelectorAll('.explore-card')];const exploreDialog=document.querySelector('.explore-dialog');let exploreTrigger=null;let explorePreviousOverflow='';
function activateExperience(card,scroll=false){exploreCards.forEach(item=>item.classList.toggle('is-active',item===card));if(scroll){const left=card.offsetLeft-exploreGallery.offsetLeft-(exploreGallery.clientWidth-card.offsetWidth)/2;exploreGallery.scrollTo({left,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});}}
exploreCards.forEach(card=>{card.addEventListener('mouseenter',()=>{if(matchMedia('(hover: hover)').matches)activateExperience(card);});card.addEventListener('focusin',()=>activateExperience(card));});exploreGallery.addEventListener('mouseleave',()=>{if(!exploreGallery.contains(document.activeElement))activateExperience(exploreCards[2]);});exploreGallery.addEventListener('focusout',event=>{if(!exploreGallery.contains(event.relatedTarget))activateExperience(exploreCards[2]);});
const newsletter=document.querySelector('.newsletter');const newsletterInput=newsletter.querySelector('input');const newsletterMessage=newsletter.querySelector('.newsletter-message');newsletter.addEventListener('submit',event=>{event.preventDefault();if(!newsletterInput.validity.valid){newsletterInput.setAttribute('aria-invalid','true');newsletterMessage.textContent='Introduce un correo electrónico válido.';newsletterInput.focus();return;}newsletterInput.removeAttribute('aria-invalid');newsletterMessage.textContent='Demostración: no se realizó ninguna suscripción ni se guardó tu correo.';newsletterInput.value='';});newsletterInput.addEventListener('input',()=>{newsletterInput.removeAttribute('aria-invalid');newsletterMessage.textContent='';});
const storageDialog=document.querySelector('.storage-dialog');let storagePreviousOverflow='';let storageTrigger=null;document.querySelector('.storage-open').addEventListener('click',event=>{storageTrigger=event.currentTarget;storagePreviousOverflow=document.body.style.overflow;document.body.style.overflow='hidden';storageDialog.showModal();storageDialog.querySelector('.storage-close').focus();});storageDialog.querySelector('.storage-close').addEventListener('click',()=>storageDialog.close());storageDialog.addEventListener('click',event=>{if(event.target===storageDialog)storageDialog.close();});storageDialog.addEventListener('close',()=>{document.body.style.overflow=storagePreviousOverflow;if(storageTrigger)storageTrigger.focus();});
const closingWave=document.querySelector('.closing-wave');function syncClosingMotion(){if(motionPreference.matches)closingWave.pauseAnimations();else closingWave.unpauseAnimations();}syncClosingMotion();motionPreference.addEventListener('change',syncClosingMotion);
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){exploreSection.classList.add('js-explore-reveal');const exploreObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');exploreObserver.unobserve(entry.target);}}),{threshold:.1});exploreSection.querySelectorAll('.explore-reveal').forEach(element=>exploreObserver.observe(element));}
// En pantallas estrechas la tarjeta protagonista empieza centrada en el área desplazable.
requestAnimationFrame(()=>{if(matchMedia('(max-width: 900px)').matches){const card=exploreCards[2];exploreGallery.scrollLeft=card.offsetLeft-exploreGallery.offsetLeft-(exploreGallery.clientWidth-card.offsetWidth)/2;}});
