const scenes = ["intro", "profile", "skills", "projects", "contact"];
let activeScene = 0;
let currentLang = "cs";
let wheelLock = false;

const copy = {
  cs: {
    "intro.eyebrow": "Portfolio canvas / 2026",
    "intro.title": "Technicky klidný problem solver pro support vývoje a debugging.",
    "intro.lead":
      "Kombinuji web development, analytické myšlení, technickou praxi a férovou komunikaci. Hledám roli, kde můžu pomáhat s incidenty, logy, reprodukcí chyb, dokumentací a podporou vývojářů.",
    "intro.cta": "Kontaktovat",
    "intro.next": "Projit signal",
    "profile.eyebrow": "Profil",
    "profile.title": "Stavím na spolehlivost, kontext a dotažení věcí.",
    "profile.body":
      "Poslední roky jsem pracoval hodně prakticky: technické práce, odpovědnost za výsledek, týmová domluva, čtení plánů a komunikace s lidmi v terénu. Do IT se vracím s reálným životním backgroundem a se silným zájmem o debugging, weby, AI nástroje a systematické řešení problémů.",
    "profile.card1.title": "Analytika",
    "profile.card1.body": "Rozkládám problém na kroky, hledám příčinu, ne jen symptom.",
    "profile.card2.title": "Procesy",
    "profile.card2.body": "Umím tvořit postupy, manuály a předávat technické informace srozumitelně.",
    "profile.card3.title": "Praxe",
    "profile.card3.body": "Znám práci pod tlakem, odpovědnost za dokončení a spolupráci s techniky.",
    "skills.eyebrow": "Skill matrix",
    "skills.title": "Stack pro support, diagnostiku a menší vývoj.",
    "skills.body":
      "Mám širší technický základ, učím se rychle přes reálné problémy a umím použít AI jako pomocníka při analýzách, dokumentaci i hledání variant řešení.",
    "projects.eyebrow": "Projekty",
    "projects.title": "Menší weby, experimenty a technické ukázky.",
    "projects.body":
      "Projekty beru jako důkaz, že umím věci rozběhnout, upravit, nasadit a dotáhnout do použitelné podoby. Detaily a screenshoty můžeme postupně doplnit.",
    "contact.eyebrow": "Kontakt",
    "contact.title": "Otevřený pro IT support, application support a debugging role.",
    "contact.body":
      "Nejlepší fit: tým, kde se řeší reálné technické problémy, komunikuje se s vývojem nebo techniky, píše dokumentace a postupně se zlepšují procesy.",
    "contact.listTitle": "Co můžu přinést do týmu",
    "contact.item1": "trpělivé hledání příčiny problému",
    "contact.item2": "srozumitelnou komunikaci s techniky i netechniky",
    "contact.item3": "manuály, postupy a procesní myšlení",
    "contact.item4": "praktický přístup bez zbytečného ega",
    "status.hint": "kolečko myši / šipky / drag plochy mění sekce",
  },
  sk: {
    "intro.eyebrow": "Portfolio canvas / 2026",
    "intro.title": "Technicky pokojny problem solver pre support vyvoja a debugging.",
    "intro.lead":
      "Kombinujem web development, analyticke myslenie, technicku prax a ferovu komunikaciu. Hladam rolu, kde mozem pomahat s incidentmi, logmi, reprodukciou chyb, dokumentaciou a podporou vyvojarov.",
    "intro.cta": "Kontaktovat",
    "intro.next": "Prejst signal",
    "profile.eyebrow": "Profil",
    "profile.title": "Nepredavam agresivny hype. Staviam na spolahlivost, kontext a dotiahnutie veci.",
    "profile.body":
      "Posledne roky som pracoval velmi prakticky: technicke prace, zodpovednost za vysledok, tymova dohoda, citanie planov a komunikacia s ludmi v terene. Do IT sa vraciam s realnym zivotnym backgroundom a so silnym zaujmom o debugging, weby, AI nastroje a systematicke riesenie problemov.",
    "profile.card1.title": "Analyza",
    "profile.card1.body": "Rozkladam problem na kroky, hladam pricinu, nie iba symptom.",
    "profile.card2.title": "Procesy",
    "profile.card2.body": "Viem tvorit postupy, manualy a odovzdavat technicke informacie zrozumitelne.",
    "profile.card3.title": "Prax",
    "profile.card3.body": "Poznam pracu pod tlakom, zodpovednost za dokoncenie a spolupracu s technikmi.",
    "skills.eyebrow": "Skill matrix",
    "skills.title": "Stack pre support, diagnostiku a mensi vyvoj.",
    "skills.body":
      "Nehram sa na senior specialistu vo vsetkom. Mam sirsi technicky zaklad, ucim sa rychlo cez realne problemy a viem pouzit AI ako pomocnika pri analyzach, dokumentacii aj hladani variant riesenia.",
    "projects.eyebrow": "Projekty",
    "projects.title": "Mensie weby, experimenty a technicke ukazky.",
    "projects.body":
      "Projekty beriem ako dokaz, ze viem veci rozbehnut, upravit, nasadit a dotiahnut do pouzitelnej podoby. Detaily a screenshoty mozeme postupne doplnit.",
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
    "intro.title": "Calm technical problem solver for software support and debugging.",
    "intro.lead":
      "I combine web development, analytical thinking, hands-on technical work and honest communication. I am looking for a role where I can help with incidents, logs, bug reproduction, documentation and developer support.",
    "intro.cta": "Contact",
    "intro.next": "Trace signal",
    "profile.eyebrow": "Profile",
    "profile.title": "No aggressive hype. I rely on reliability, context and finishing the work.",
    "profile.body":
      "In recent years I worked in practical technical roles: responsibility for results, teamwork, reading plans and communicating with people in the field. I am returning to IT with real-world background and a strong interest in debugging, web projects, AI tools and systematic problem solving.",
    "profile.card1.title": "Analysis",
    "profile.card1.body": "I break problems into steps and look for root causes, not only symptoms.",
    "profile.card2.title": "Processes",
    "profile.card2.body": "I can create procedures, manuals and communicate technical information clearly.",
    "profile.card3.title": "Practice",
    "profile.card3.body": "I know pressure, responsibility for completion and cooperation with technicians.",
    "skills.eyebrow": "Skill matrix",
    "skills.title": "Stack for support, diagnostics and small development tasks.",
    "skills.body":
      "I do not pretend to be a senior specialist in everything. I have a broad technical base, learn through real problems and use AI as an assistant for analysis, documentation and solution exploration.",
    "projects.eyebrow": "Projects",
    "projects.title": "Small websites, experiments and technical demos.",
    "projects.body":
      "I treat projects as proof that I can start, adjust, deploy and finish usable things. More details and screenshots can be added over time.",
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
    "intro.title": "Ruhiger technischer Problemloeser fuer Support und Debugging.",
    "intro.lead":
      "Ich verbinde Webentwicklung, analytisches Denken, technische Praxis und faire Kommunikation. Ich suche eine Rolle mit Incidents, Logs, Fehlerreproduktion, Dokumentation und Entwickler-Support.",
    "intro.cta": "Kontakt",
    "intro.next": "Signal pruefen",
    "profile.eyebrow": "Profil",
    "profile.title": "Kein aggressiver Hype. Ich setze auf Zuverlaessigkeit, Kontext und saubere Arbeit.",
    "profile.body":
      "In den letzten Jahren habe ich praktisch und technisch gearbeitet: Verantwortung fuer Ergebnisse, Teamarbeit, Lesen von Plaenen und Kommunikation mit Menschen im Feld. Ich komme mit realer Erfahrung zurueck in die IT und interessiere mich stark fuer Debugging, Webprojekte, AI-Tools und systematisches Problemloesen.",
    "profile.card1.title": "Analyse",
    "profile.card1.body": "Ich zerlege Probleme in Schritte und suche Ursachen, nicht nur Symptome.",
    "profile.card2.title": "Prozesse",
    "profile.card2.body": "Ich kann Ablaufe, Handbuecher und technische Informationen klar formulieren.",
    "profile.card3.title": "Praxis",
    "profile.card3.body": "Ich kenne Druck, Verantwortung und Zusammenarbeit mit Technikern.",
    "skills.eyebrow": "Skill matrix",
    "skills.title": "Stack fuer Support, Diagnose und kleinere Entwicklung.",
    "skills.body":
      "Ich tue nicht so, als waere ich ueberall Senior. Ich habe eine breite technische Basis, lerne ueber reale Probleme und nutze AI als Hilfe fuer Analyse, Dokumentation und Loesungsvarianten.",
    "projects.eyebrow": "Projekte",
    "projects.title": "Kleine Websites, Experimente und technische Beispiele.",
    "projects.body":
      "Projekte zeigen, dass ich Dinge starten, anpassen, deployen und brauchbar fertigstellen kann. Details und Screenshots koennen wir spaeter ergaenzen.",
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
  "[ok] technical_background: web / python / sql / field_work",
  "[scan] incidents -> reproduce -> isolate -> document -> communicate",
  "[note] calm approach detected; no fake senior mode",
  "[ai] assisted analysis enabled",
  "[ready] open to support, application support, debugging",
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
  const selector = ".panel, .skill-board, .project-stack, .mini-card, .project-card, .checklist";

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
