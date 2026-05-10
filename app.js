const scenes = ["intro", "profile", "relevant", "skills", "labs", "projects", "contact"];
let activeScene = 0;
let currentLang = "cs";
let wheelLock = false;

const copy = {
  cs: {
    "intro.eyebrow": "Portfolio canvas / 2026",
    "intro.title": "Technical Support & Endpoint Security Candidate.",
    "intro.lead":
      "Kombinuji web development, Python, databázové základy, síťovou diagnostiku a praktické řešení problémů. Hledám roli v technical supportu / endpoint security supportu, kde můžu analyzovat logy, reprodukovat chyby, komunikovat se zákazníky a eskalovat jasně popsané problémy.",
    "intro.cta": "Kontaktovat",
    "profile.eyebrow": "Profil",
    "profile.title": "Systematický přístup místo rychlého lepení problémů.",
    "profile.body":
      "Profil stavím poctivě: technický kandidát se základem v programování, databázích, webových projektech, praktické technické práci a labovém učení bezpečnosti. Sedí mi klidná diagnostika, dokumentace, komunikace a postupné budování funkčního systému.",
    "profile.card1.title": "Diagnostika",
    "profile.card1.body": "Nejdřív chci pochopit symptom, prostředí, logy, reprodukci a dopad.",
    "profile.card2.title": "Komunikace",
    "profile.card2.body": "Umím převést technický problém do jasných kroků pro zákazníka i eskalaci.",
    "profile.card3.title": "Preciznost",
    "profile.card3.body": "Potřebuji čas, kontext a nástroje, abych mohl dodávat přesná a udržitelná řešení.",
    "relevant.eyebrow": "Endpoint support fit",
    "relevant.title": "Relevantní pro Endpoint Support.",
    "relevant.body":
      "Zaměření na základy potřebné pro support endpoint security produktů: sítě, VPN, autentizace, Windows diagnostika, logy, databáze a strukturované vedení případů.",
    "skills.eyebrow": "Skill matrix",
    "skills.title": "Skill matrix pro support a troubleshooting.",
    "skills.body":
      "Praktický základ pro práci s incidenty, logy, zákaznickou komunikací, síťovými koncepty a menším vývojem nástrojů.",
    "labs.eyebrow": "Security learning labs",
    "labs.title": "Bezpečnost jako obranná diagnostika.",
    "labs.body":
      "Ve vlastních lab podmínkách jsem se učil analyzovat síťový provoz pomocí Wiresharku, chápat ARP/DNS/TCP chování, běžné bezpečnostní slabiny a principy útoků z pohledu obrany, diagnostiky a prevence.",
    "why.eyebrow": "Why endpoint support",
    "why.title": "Proč endpoint support.",
    "why.body":
      "Baví mě hledání příčiny problému, práce s logy, bezpečnost, komunikace mezi technickým a netechnickým světem a učení produktů do hloubky. Chci pomáhat zlepšovat systémy postupně a přesně.",
    "projects.eyebrow": "Projekty",
    "projects.title": "Menší weby, experimenty a technické ukázky.",
    "projects.body":
      "Projekty beru jako důkaz, že umím věci rozběhnout, upravit, nasadit a dotáhnout do použitelné podoby.",
    "contact.eyebrow": "Kontakt",
    "contact.title": "Otevřený pro Technical Support, Endpoint Security Support, Application Support a Junior Cybersecurity Troubleshooting role.",
    "contact.body":
      "Preferuji role, kde je důležitá přesná diagnostika, komunikace se zákazníkem, práce s logy a technické dotahování případů.",
    "contact.listTitle": "Co můžu přinést do týmu",
    "contact.item1": "log analysis a strukturované troubleshooting kroky",
    "contact.item2": "srozumitelnou komunikaci se zákazníkem i techniky",
    "contact.item3": "dokumentaci, postupy a procesní myšlení",
    "contact.item4": "AI-assisted workflow bez nahrazování vlastního porozumění",
    "status.hint": "kolečko myši / šipky / drag plochy mění sekce",
  },
  sk: {
    "intro.eyebrow": "Portfolio canvas / 2026",
    "intro.title": "Technicky pokojny problem solver pre vyvoj, testing a debugging.",
    "intro.lead":
      "Kombinujem web development, analyticke myslenie, testovanie a technicku prax. Hladam rolu, kde mozem vytvarat uzitocne nastroje, overovat riesenia, hladat priciny chyb a podporovat vyvoj bez chaosu.",
    "intro.cta": "Kontaktovat",
    "intro.next": "Prejst signal",
    "profile.eyebrow": "Profil",
    "profile.title": "Nepredavam agresivny hype. Staviam na spolahlivost, kontext a dotiahnutie veci.",
    "profile.body":
      "Nie som fanusik punkoveho vyvoja, kde sa veci lepia narychlo a system sa neskor lame pod vlastnou vahou. Preferujem pokojny prieskum, premyslenu volbu technologii, priebezne testovanie a riesenia, ktore sa daju dlhodobo udrziavat.",
    "profile.card1.title": "Prieskum",
    "profile.card1.body": "Skor nez zacnem stavat, chcem pochopit problem, moznosti, rizika a smer.",
    "profile.card2.title": "System",
    "profile.card2.body": "Radsej meriam desatkrat a reziem raz. Riesenie ma drzat, nie iba prezit demo.",
    "profile.card3.title": "Testovanie",
    "profile.card3.body": "Verim v priebezne overovanie, dokumentaciu a postupne zlepsovanie bez zbytocneho spechu.",
    "skills.eyebrow": "Skill matrix",
    "skills.title": "Stack pre support, diagnostiku a mensi vyvoj.",
    "skills.body":
      "Nehram sa na senior specialistu vo vsetkom. Mam sirsi technicky zaklad, ucim sa rychlo cez realne problemy a viem pouzit AI ako pomocnika pri analyzach, dokumentacii aj hladani variant riesenia.",
    "projects.eyebrow": "Projekty",
    "projects.title": "Mensie weby, experimenty a technicke ukazky.",
    "projects.body":
      "Projekty beriem ako dokaz, ze viem veci rozbehnut, upravit, nasadit a dotiahnut do pouzitelnej podoby.",
    "contact.eyebrow": "Kontakt",
    "contact.title": "Otvoreny pre IT support, application support a debugging role.",
    "contact.body":
      "Najlepsi fit: tim, kde sa riesia realne technicke problemy, komunikuje sa s vyvojom alebo technikmi, pise dokumentacia a postupne sa zlepsuju procesy.",
    "contact.listTitle": "Co mozem priniest do timu",
    "contact.item1": "trpezlive hladanie priciny problemu",
    "contact.item2": "zrozumitelnu komunikaciu s technikmi aj netechnikmi",
    "contact.item3": "manualy, postupy a procesne myslenie",
    "contact.item4": "prakticky pristup bez zbytocneho ega",
    "status.hint": "koliesko mysi / sipky / drag plochy meni sekcie",
  },
  en: {
    "intro.eyebrow": "Portfolio canvas / 2026",
    "intro.title": "Calm technical problem solver for development, testing and debugging.",
    "intro.lead":
      "I combine web development, analytical thinking, testing and hands-on technical work. I am looking for a role where I can build useful tools, validate solutions, investigate bugs and support development without chaos.",
    "intro.cta": "Contact",
    "profile.eyebrow": "Profile",
    "profile.title": "No aggressive hype. I rely on reliability, context and finishing the work.",
    "profile.body":
      "I do not like rushed, improvised development where systems grow without structure and later collapse under their own weight. I prefer calm research, deliberate technology choices, continuous testing and solutions that can be maintained long term.",
    "profile.card1.title": "Research",
    "profile.card1.body": "Before building, I want to understand the problem, options, risks and direction.",
    "profile.card2.title": "System",
    "profile.card2.body": "Measure carefully, cut once. A solution should last, not only survive a demo.",
    "profile.card3.title": "Testing",
    "profile.card3.body": "I believe in continuous validation, documentation and steady improvement without needless rush.",
    "skills.eyebrow": "Skill matrix",
    "skills.title": "Stack for support, diagnostics and small development tasks.",
    "skills.body":
      "I do not pretend to be a senior specialist in everything. I have a broad technical base, learn through real problems and use AI as an assistant for analysis, documentation and solution exploration.",
    "projects.eyebrow": "Projects",
    "projects.title": "Small websites, experiments and technical demos.",
    "projects.body":
      "I treat projects as proof that I can start, adjust, deploy and finish usable things.",
    "contact.eyebrow": "Contact",
    "contact.title": "Open to IT support, application support and debugging roles.",
    "contact.body":
      "Best fit: a team solving real technical problems, communicating with developers or technicians, writing documentation and improving processes step by step.",
    "contact.listTitle": "What I can bring",
    "contact.item1": "patient root-cause investigation",
    "contact.item2": "clear communication with technical and non-technical people",
    "contact.item3": "manuals, procedures and process thinking",
    "contact.item4": "practical attitude without unnecessary ego",
    "status.hint": "mouse wheel / arrows / drag canvas changes sections",
  },
  de: {
    "intro.eyebrow": "Portfolio canvas / 2026",
    "intro.title": "Ruhiger technischer Problemloeser fuer Entwicklung, Testing und Debugging.",
    "intro.lead":
      "Ich verbinde Webentwicklung, analytisches Denken, Testing und technische Praxis. Ich suche eine Rolle, in der ich nuetzliche Tools bauen, Loesungen pruefen, Fehlerursachen finden und Entwicklung ohne Chaos unterstuetzen kann.",
    "intro.cta": "Kontakt",
    "profile.eyebrow": "Profil",
    "profile.title": "Kein aggressiver Hype. Ich setze auf Zuverlaessigkeit, Kontext und saubere Arbeit.",
    "profile.body":
      "Ich mag keine ueberhastete Improvisation, bei der Systeme ohne Struktur wachsen und spaeter unter ihrem eigenen Gewicht brechen. Ich bevorzuge ruhige Recherche, bewusste Technologieentscheidungen, laufendes Testing und langfristig wartbare Loesungen.",
    "profile.card1.title": "Recherche",
    "profile.card1.body": "Bevor ich baue, will ich Problem, Optionen, Risiken und Richtung verstehen.",
    "profile.card2.title": "System",
    "profile.card2.body": "Sorgfaeltig messen, einmal schneiden. Eine Loesung soll halten, nicht nur eine Demo ueberstehen.",
    "profile.card3.title": "Testing",
    "profile.card3.body": "Ich glaube an laufende Pruefung, Dokumentation und stetige Verbesserung ohne unnoetige Hektik.",
    "skills.eyebrow": "Skill matrix",
    "skills.title": "Stack fuer Support, Diagnose und kleinere Entwicklung.",
    "skills.body":
      "Ich tue nicht so, als waere ich ueberall Senior. Ich habe eine breite technische Basis, lerne ueber reale Probleme und nutze AI als Hilfe fuer Analyse, Dokumentation und Loesungsvarianten.",
    "projects.eyebrow": "Projekte",
    "projects.title": "Kleine Websites, Experimente und technische Beispiele.",
    "projects.body":
      "Projekte zeigen, dass ich Dinge starten, anpassen, deployen und brauchbar fertigstellen kann.",
    "contact.eyebrow": "Kontakt",
    "contact.title": "Offen fuer IT Support, Application Support und Debugging Rollen.",
    "contact.body":
      "Bester Fit: ein Team, das reale technische Probleme loest, mit Entwicklung oder Technikern kommuniziert, dokumentiert und Prozesse verbessert.",
    "contact.listTitle": "Was ich ins Team bringe",
    "contact.item1": "geduldige Ursachenanalyse",
    "contact.item2": "klare Kommunikation mit technischen und nichttechnischen Menschen",
    "contact.item3": "Handbuecher, Ablaufe und Prozessdenken",
    "contact.item4": "praktische Haltung ohne unnoetiges Ego",
    "status.hint": "Mausrad / Pfeile / Drag wechselt Sektionen",
  },
};

const logs = [
  "> boot portfolio_canvas --candidate Simon_Hives",
  "[ok] focus: endpoint support / network troubleshooting / logs",
  "[lab] wireshark: dns tcp tls observation",
  "[scan] reproduce -> inspect logs -> isolate -> document -> escalate",
  "[db] sql basics: querying / data modeling / VUT coursework",
  "[note] calm approach detected; no fake senior mode",
  "[ready] technical support candidate",
];

function setScene(index) {
  activeScene = (index + scenes.length) % scenes.length;
  const id = scenes[activeScene];

  document.querySelectorAll(".scene").forEach((scene) => {
    scene.classList.toggle("is-active", scene.id === id);
  });
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.scene === id);
  });
  document.querySelector("#scene-name").textContent = id;
  history.replaceState(null, "", `#${id}`);
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (copy[lang][key]) node.textContent = copy[lang][key];
  });
  document.querySelectorAll(".lang").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });
}

function typeLog() {
  const target = document.querySelector("#typed-log");
  let line = 0;
  let char = 0;
  let output = "";

  function tick() {
    if (!target) return;
    if (line >= logs.length) {
      setTimeout(() => {
        line = 0;
        char = 0;
        output = "";
        target.textContent = "";
        tick();
      }, 2800);
      return;
    }

    const current = logs[line];
    output += current[char] || "";
    target.textContent = output + "_";
    char += 1;

    if (char > current.length) {
      output += "\n";
      line += 1;
      char = 0;
      setTimeout(tick, 360);
    } else {
      setTimeout(tick, 28 + Math.random() * 30);
    }
  }

  tick();
}

function updateClock() {
  const now = new Date();
  document.querySelector("#clock").textContent = now.toLocaleTimeString("cs-CZ", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function setupNavigation() {
  document.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => setScene(scenes.indexOf(button.dataset.scene)));
  });
  document.querySelectorAll(".lang").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });
  document.querySelectorAll("[data-next-scene]").forEach((button) => {
    button.addEventListener("click", () => setScene(activeScene + 1));
  });

  window.addEventListener(
    "wheel",
    (event) => {
      if (window.innerWidth <= 980) return;
      event.preventDefault();
      if (wheelLock) return;
      wheelLock = true;
      setScene(activeScene + (event.deltaY > 0 ? 1 : -1));
      setTimeout(() => {
        wheelLock = false;
      }, 760);
    },
    { passive: false },
  );

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") setScene(activeScene + 1);
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") setScene(activeScene - 1);
  });

  let startX = 0;
  let startY = 0;
  window.addEventListener("pointerdown", (event) => {
    startX = event.clientX;
    startY = event.clientY;
  });
  window.addEventListener("pointerup", (event) => {
    const dx = event.clientX - startX;
    const dy = event.clientY - startY;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < 80) return;
    setScene(dx + dy < 0 ? activeScene + 1 : activeScene - 1);
  });
}

function setupRaiseOnFocus() {
  const selector = ".panel, .skill-board, .project-stack, .mini-card, .project-card, .checklist, .info-card, .skill-category";

  window.addEventListener("pointerdown", (event) => {
    const target = event.target.closest(selector);
    document.querySelectorAll(".is-raised").forEach((node) => node.classList.remove("is-raised"));
    if (!target) return;

    target.classList.add("is-raised");
    const stack = target.closest(".project-stack");
    if (stack) stack.classList.add("is-raised");
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      document.querySelectorAll(".is-raised").forEach((node) => node.classList.remove("is-raised"));
    }
  });
}

function setupCanvas() {
  const canvas = document.querySelector("#signal-canvas");
  const ctx = canvas.getContext("2d");
  const nodes = Array.from({ length: 58 }, () => ({
    x: Math.random(),
    y: Math.random(),
    vx: (Math.random() - 0.5) * 0.0007,
    vy: (Math.random() - 0.5) * 0.0007,
    r: 1 + Math.random() * 2,
  }));

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function frame() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    ctx.clearRect(0, 0, width, height);

    nodes.forEach((node) => {
      node.x += node.vx;
      node.y += node.vy;
      if (node.x < 0 || node.x > 1) node.vx *= -1;
      if (node.y < 0 || node.y > 1) node.vy *= -1;
    });

    for (let i = 0; i < nodes.length; i += 1) {
      for (let j = i + 1; j < nodes.length; j += 1) {
        const a = nodes[i];
        const b = nodes[j];
        const ax = a.x * width;
        const ay = a.y * height;
        const bx = b.x * width;
        const by = b.y * height;
        const distance = Math.hypot(ax - bx, ay - by);
        if (distance < 155) {
          ctx.strokeStyle = `rgba(89, 255, 156, ${0.18 * (1 - distance / 155)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(bx, by);
          ctx.stroke();
        }
      }
    }

    nodes.forEach((node, index) => {
      ctx.fillStyle = index % 5 === 0 ? "rgba(255,184,92,.75)" : "rgba(94,215,255,.68)";
      ctx.beginPath();
      ctx.arc(node.x * width, node.y * height, node.r, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(frame);
  }

  window.addEventListener("resize", resize);
  resize();
  frame();
}

function init() {
  const hash = window.location.hash.replace("#", "");
  const initialIndex = scenes.includes(hash) ? scenes.indexOf(hash) : 0;
  setupNavigation();
  setupRaiseOnFocus();
  setupCanvas();
  typeLog();
  setLanguage(currentLang);
  setScene(initialIndex);
  updateClock();
  setInterval(updateClock, 10000);
}

init();
