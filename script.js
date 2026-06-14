/* ═══════════════════════════════════════════════════════
   CAMP IMPACT 2026 — script.js
   ═══════════════════════════════════════════════════════ */

/* ── NAV scroll ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', function() {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

/* ── Hamburger mobile ── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(function(a) {
  a.addEventListener('click', function() {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ── Countdown ── */
function updateCountdown() {
  var target = new Date('2026-07-26T08:00:00').getTime();
  var diff   = target - Date.now();
  if (diff <= 0) {
    ['days','hours','minutes','seconds'].forEach(function(k) {
      document.getElementById('cd-' + k).textContent = '00';
    });
    return;
  }
  document.getElementById('cd-days').textContent    = String(Math.floor(diff / 86400000)).padStart(2, '0');
  document.getElementById('cd-hours').textContent   = String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0');
  document.getElementById('cd-minutes').textContent = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
  document.getElementById('cd-seconds').textContent = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

/* ── Programme (données officielles) ── */
var PROGRAMME = {
  1: {
    title: "Dimanche 26 Juillet \u2014 Arriv\u00e9e & Ouverture",
    items: [
      { time:"13h00", title:"RDV Niamey \u2014 D\u00e9part Dosso",    desc:"D\u00e9part de Niamey vers Dosso (arriv\u00e9e pr\u00e9vue 15h)",  tag:"free" },
      { time:"17h30", title:"Installation",                             desc:"Installation des participants",                                   tag:"free" },
      { time:"19h00", title:"C\u00e9r\u00e9monie d'Ouverture",         desc:"Ouverture officielle du Camp Impact 2026",                        tag:"praise" },
      { time:"20h30", title:"D\u00eener",                               desc:"Repas du soir",                                                   tag:"free" },
      { time:"22h30", title:"Coucher",                                  desc:"",                                                                tag:"free" }
    ]
  },
  2: {
    title: "Lundi 27 Juillet \u2014 Enseignement & Culte",
    items: [
      { time:"05h00", title:"R\u00e9veil",                              desc:"",                                                                tag:"pray" },
      { time:"05h15", title:"Sport matinal",                            desc:"",                                                                tag:"free" },
      { time:"05h40", title:"M\u00e9ditation",                          desc:"",                                                                tag:"pray" },
      { time:"06h00", title:"Nettoyage & Douche",                       desc:"",                                                                tag:"free" },
      { time:"07h30", title:"Petit d\u00e9jeuner",                      desc:"",                                                                tag:"free" },
      { time:"09h00", title:"Animation",                                desc:"",                                                                tag:"special" },
      { time:"09h30", title:"Enseignement \u2014 Th\u00e8me principal", desc:"",                                                                tag:"teach" },
      { time:"11h10", title:"Pause",                                    desc:"",                                                                tag:"free" },
      { time:"11h30", title:"Animation",                                desc:"",                                                                tag:"special" },
      { time:"11h50", title:"Sous-Th\u00e8me 1",                        desc:"",                                                                tag:"teach" },
      { time:"13h00", title:"D\u00e9jeuner",                            desc:"",                                                                tag:"free" },
      { time:"14h00", title:"Repos",                                    desc:"",                                                                tag:"free" },
      { time:"15h00", title:"Art-loisir & Sport",                       desc:"",                                                                tag:"free" },
      { time:"17h30", title:"Nettoyage & Douche",                       desc:"",                                                                tag:"free" },
      { time:"19h00", title:"Culte du soir",                            desc:"",                                                                tag:"praise" },
      { time:"20h30", title:"D\u00eener",                               desc:"",                                                                tag:"free" },
      { time:"22h30", title:"Coucher",                                  desc:"",                                                                tag:"free" }
    ]
  },
  3: {
    title: "Mardi 28 Juillet \u2014 D\u00e9bat & Formation",
    items: [
      { time:"05h00", title:"R\u00e9veil",                              desc:"",                                                                tag:"pray" },
      { time:"05h15", title:"Sport matinal",                            desc:"",                                                                tag:"free" },
      { time:"05h40", title:"M\u00e9ditation",                          desc:"",                                                                tag:"pray" },
      { time:"06h00", title:"Nettoyage & Douche",                       desc:"",                                                                tag:"free" },
      { time:"07h30", title:"Petit d\u00e9jeuner",                      desc:"",                                                                tag:"free" },
      { time:"09h00", title:"Animation",                                desc:"",                                                                tag:"special" },
      { time:"09h30", title:"Enseignement \u2014 Th\u00e8me principal", desc:"",                                                                tag:"teach" },
      { time:"11h10", title:"Pause",                                    desc:"",                                                                tag:"free" },
      { time:"11h30", title:"Animation",                                desc:"",                                                                tag:"special" },
      { time:"11h50", title:"Sous-Th\u00e8me 2",                        desc:"",                                                                tag:"teach" },
      { time:"13h00", title:"D\u00e9jeuner",                            desc:"",                                                                tag:"free" },
      { time:"14h00", title:"Repos",                                    desc:"",                                                                tag:"free" },
      { time:"15h00", title:"Art-loisir & Sport",                       desc:"",                                                                tag:"free" },
      { time:"17h30", title:"Nettoyage & Douche",                       desc:"",                                                                tag:"free" },
      { time:"19h00", title:"D\u00e9bat",                               desc:"",                                                                tag:"teach" },
      { time:"20h30", title:"D\u00eener",                               desc:"",                                                                tag:"free" },
      { time:"22h30", title:"D\u00e9dicace",                            desc:"",                                                                tag:"pray" }
    ]
  },
  4: {
    title: "Mercredi 29 Juillet \u2014 Culte & D\u00e9dicace",
    items: [
      { time:"05h00", title:"R\u00e9veil",                              desc:"",                                                                tag:"pray" },
      { time:"05h15", title:"Sport matinal",                            desc:"",                                                                tag:"free" },
      { time:"05h40", title:"M\u00e9ditation",                          desc:"",                                                                tag:"pray" },
      { time:"06h00", title:"Nettoyage & Douche",                       desc:"",                                                                tag:"free" },
      { time:"07h30", title:"Petit d\u00e9jeuner",                      desc:"",                                                                tag:"free" },
      { time:"09h00", title:"Animation",                                desc:"",                                                                tag:"special" },
      { time:"09h30", title:"Enseignement \u2014 Th\u00e8me principal", desc:"",                                                                tag:"teach" },
      { time:"11h10", title:"Pause",                                    desc:"",                                                                tag:"free" },
      { time:"11h30", title:"Animation",                                desc:"",                                                                tag:"special" },
      { time:"11h50", title:"Sous-Th\u00e8me 3",                        desc:"",                                                                tag:"teach" },
      { time:"13h00", title:"D\u00e9jeuner",                            desc:"",                                                                tag:"free" },
      { time:"14h00", title:"Repos",                                    desc:"",                                                                tag:"free" },
      { time:"17h30", title:"Nettoyage & Douche",                       desc:"",                                                                tag:"free" },
      { time:"19h00", title:"Culte du soir",                            desc:"",                                                                tag:"praise" },
      { time:"20h30", title:"D\u00eener",                               desc:"",                                                                tag:"free" },
      { time:"22h30", title:"D\u00e9dicace",                            desc:"",                                                                tag:"pray" }
    ]
  },
  5: {
    title: "Jeudi 30 Juillet \u2014 Cin\u00e9ma & R\u00e9p\u00e9titions",
    items: [
      { time:"05h00", title:"R\u00e9veil",                              desc:"",                                                                tag:"pray" },
      { time:"05h15", title:"Sport matinal",                            desc:"",                                                                tag:"free" },
      { time:"05h40", title:"M\u00e9ditation",                          desc:"",                                                                tag:"pray" },
      { time:"06h00", title:"Nettoyage & Douche",                       desc:"",                                                                tag:"free" },
      { time:"07h30", title:"Petit d\u00e9jeuner",                      desc:"",                                                                tag:"free" },
      { time:"09h00", title:"Animation",                                desc:"",                                                                tag:"special" },
      { time:"09h30", title:"Enseignement \u2014 Th\u00e8me principal", desc:"",                                                                tag:"teach" },
      { time:"11h10", title:"Pause",                                    desc:"",                                                                tag:"free" },
      { time:"11h30", title:"Animation",                                desc:"",                                                                tag:"special" },
      { time:"11h50", title:"Sous-Th\u00e8me 4",                        desc:"",                                                                tag:"teach" },
      { time:"13h00", title:"D\u00e9jeuner",                            desc:"",                                                                tag:"free" },
      { time:"14h00", title:"Repos",                                    desc:"",                                                                tag:"free" },
      { time:"16h00", title:"R\u00e9p\u00e9titions des groupes",        desc:"",                                                                tag:"special" },
      { time:"17h30", title:"Douche",                                   desc:"",                                                                tag:"free" },
      { time:"19h00", title:"Cin\u00e9ma",                              desc:"",                                                                tag:"special" },
      { time:"20h30", title:"D\u00eener",                               desc:"",                                                                tag:"free" },
      { time:"22h30", title:"D\u00e9dicace",                            desc:"",                                                                tag:"pray" }
    ]
  },
  6: {
    title: "Vendredi 31 Juillet \u2014 Journ\u00e9e libre & Feu du Camp",
    items: [
      { time:"05h15", title:"M\u00e9ditation par chambre",              desc:"",                                                                tag:"pray" },
      { time:"06h00", title:"Nettoyage & Douche",                       desc:"",                                                                tag:"free" },
      { time:"07h30", title:"Petit d\u00e9jeuner",                      desc:"",                                                                tag:"free" },
      { time:"09h00", title:"Journ\u00e9e libre",                       desc:"Visite de la ville de Dosso",                                     tag:"free" },
      { time:"14h00", title:"R\u00e9p\u00e9titions des groupes",        desc:"",                                                                tag:"special" },
      { time:"17h30", title:"Nettoyage & Douche",                       desc:"",                                                                tag:"free" },
      { time:"19h00", title:"Cl\u00f4ture officielle",                  desc:"",                                                                tag:"praise" },
      { time:"21h00", title:"\uD83D\uDD25 FEU DU CAMP",                 desc:"Soir\u00e9e culturelle jusqu'au matin (05h00)",                   tag:"special" }
    ]
  },
  7: {
    title: "Samedi 1er Ao\u00fbt \u2014 Retour",
    items: [
      { time:"06h00", title:"Nettoyage & Douche",                       desc:"",                                                                tag:"free" },
      { time:"07h30", title:"Petit d\u00e9jeuner",                      desc:"",                                                                tag:"free" },
      { time:"09h00", title:"D\u00e9part Dosso \u2192 Niamey",          desc:"Retour des participants",                                         tag:"free" }
    ]
  }
};

var TAG_STYLES = {
  praise:  { bg:"rgba(255,107,26,.15)",   color:"#FF6B1A", label:"Louange" },
  teach:   { bg:"rgba(34,197,94,.15)",    color:"#22C55E", label:"Enseignement" },
  pray:    { bg:"rgba(56,189,248,.15)",   color:"#38BDF8", label:"Pri\u00e8re" },
  free:    { bg:"rgba(255,255,255,.08)",  color:"#94A3B8", label:"Libre" },
  special: { bg:"rgba(168,85,247,.15)",   color:"#c084fc", label:"Sp\u00e9cial" }
};

function renderDay(day) {
  var d = PROGRAMME[day];
  var panel = document.getElementById('programmePanel');
  var html = '<div class="day-header">' + d.title + '</div><div class="schedule-items">';
  d.items.forEach(function(item) {
    var t = TAG_STYLES[item.tag] || TAG_STYLES.free;
    html += '<div class="sched-item">';
    html += '<div class="sched-time">' + item.time + '</div>';
    html += '<div class="sched-content"><h4>' + item.title + '</h4>';
    if (item.desc) html += '<p>' + item.desc + '</p>';
    html += '</div>';
    html += '<span class="sched-tag" style="background:' + t.bg + ';color:' + t.color + '">' + t.label + '</span>';
    html += '</div>';
  });
  html += '</div>';
  panel.innerHTML = html;
}

renderDay(1);

document.querySelectorAll('.tab-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    renderDay(parseInt(btn.dataset.day));
  });
});

/* ── Starburst canvas ── */
var canvas = document.getElementById('starburst');
var ctx    = canvas.getContext('2d');
var colors = ['#E91E8C','#F47B20','#22C55E','#38BDF8'];

function drawStarburst() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var cx  = canvas.width / 2;
  var cy  = canvas.height * 0.4;
  var len = Math.min(canvas.width, canvas.height) * 0.55;
  for (var i = 0; i < 16; i++) {
    var angle = (i * Math.PI) / 8 - Math.PI / 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(angle - 0.18) * len, cy + Math.sin(angle - 0.18) * len);
    ctx.lineTo(cx + Math.cos(angle + 0.18) * len, cy + Math.sin(angle + 0.18) * len);
    ctx.closePath();
    var grad = ctx.createLinearGradient(cx, cy, cx + Math.cos(angle) * len, cy + Math.sin(angle) * len);
    grad.addColorStop(0, 'rgba(255,255,255,0.1)');
    grad.addColorStop(1, colors[i % 4] + '55');
    ctx.fillStyle = grad;
    ctx.fill();
  }
}
drawStarburst();
window.addEventListener('resize', drawStarburst);

/* ── Scroll reveal ── */
var reveals = document.querySelectorAll('.reveal');
var revObs  = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revObs.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(function(el) { revObs.observe(el); });
