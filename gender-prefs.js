/* ════════════════════════════════════════════════════════════════════
   © 2026 Avv. Carlo Alberto Calcagno · olismo-integrato.it
   GENDER-PREFS · Concordanza grammaticale unificata per tutto il sito

   Sostituisce gender-augment.js (puoi eliminare il vecchio file).

   ───────────────────────────────────────────────────────────────────
   COSA FA

   1. SYSTEM PROMPT — si aggancia a window.augmentSystemPrompt e
      prepende un'istruzione linguistica in base a localStorage
      (chiave 'olismo_user_gender': 'M', 'F', 'X' o non impostato).
      Funziona con tutti i motori AI già presenti senza toccare
      olismo-core.js (purché olismo-core.js chiami augmentSystemPrompt
      sul system prompt — vedi nota in fondo).

   2. BADGE FISSO — pillola in basso a sinistra che mostra la
      preferenza attuale. Cliccabile per cambiarla. Visibile su ogni
      pagina dove il file è incluso.

   3. AUTO-PROMPT — alla prima visita su una pagina con motore AI
      (consulente.html, ai-fes.html, ai-bush.html, empowerment...),
      se la preferenza non è ancora impostata, si apre automaticamente
      il modal di scelta. Sulle pagine non-AI (test, home) il modal NON
      si apre da solo, ma il badge resta cliccabile.

   ───────────────────────────────────────────────────────────────────
   INSTALLAZIONE

   Includere PRIMA di olismo-core.js in tutte le pagine:

     <script src="gender-prefs.js"></script>
     <script src="olismo-core.js" defer></script>

   Pagine consigliate: index.html, consulente.html, ai-fes.html,
   ai-bush.html, empowerment-mediazione.html, consulente-mediatore.html,
   psicologia-analogica.html, matrice-svalutazione.html,
   check-integrato.html, test-frutti.html, test-adattamenti.html,
   vak.html, egogramma.html, compatibilita.html.

   Su check-integrato.html: convive senza conflitti con il "passo 0"
   inline (entrambi scrivono sulla stessa chiave localStorage).

   ───────────────────────────────────────────────────────────────────
   PER DISATTIVARE TEMPORANEAMENTE (debug/test)

     window.OLISMO_GENDER_PREFS_DISABLED = true;  // prima del tag <script>
   ════════════════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  if (window.OLISMO_GENDER_PREFS_DISABLED) return;

  // ─────────────────────────────────────────────────────────────────
  // CONFIGURAZIONE
  // ─────────────────────────────────────────────────────────────────

  var STORAGE_KEY = "olismo_user_gender";

  // Pagine con motore AI: qui scatta l'auto-prompt al primo accesso.
  var AI_PAGES = [
    "consulente.html",
    "ai-fes.html",
    "ai-bush.html",
    "empowerment-mediazione.html",
    "consulente-mediatore.html",
    "psicologia-analogica.html",
    "matrice-svalutazione.html"
  ];

  var LABEL = {
    M: "Maschile",
    F: "Femminile",
    X: "Forme neutre"
  };

  // ─────────────────────────────────────────────────────────────────
  // STATO
  // ─────────────────────────────────────────────────────────────────

  function getGender() {
    try { return (localStorage.getItem(STORAGE_KEY) || "").trim() || null; }
    catch (e) { return null; }
  }

  function setGenderInternal(g) {
    try { localStorage.setItem(STORAGE_KEY, g); } catch (e) {}
    ensureBadge();
    updateBadge();
    closeModal();
  }

  // ─────────────────────────────────────────────────────────────────
  // SYSTEM PROMPT — wrapper di augmentSystemPrompt
  // ─────────────────────────────────────────────────────────────────

  var prevAugment = (typeof window.augmentSystemPrompt === "function")
    ? window.augmentSystemPrompt : null;

  function buildDirective() {
    var g = getGender();

    if (g === "M") {
      return [
        "═══════════════════════════════════════════════════════════════",
        "ISTRUZIONE LINGUISTICA — Concordanza grammaticale (priorità alta)",
        "═══════════════════════════════════════════════════════════════",
        "L'utente che ti scrive è di SESSO MASCHILE.",
        "Adatta tutte le concordanze grammaticali italiane di conseguenza:",
        "  • Aggettivi al maschile (sereno, stanco, preoccupato, attento, pronto)",
        "  • Participi passati al maschile, anche di seconda persona",
        "    (ti sei sentito, ti sei reso conto, sei stato, hai notato)",
        "  • Pronomi e ogni altra forma flessa al maschile",
        "Mantieni la concordanza coerente in TUTTA la risposta."
      ].join("\n");
    }

    if (g === "F") {
      return [
        "═══════════════════════════════════════════════════════════════",
        "ISTRUZIONE LINGUISTICA — Concordanza grammaticale (priorità alta)",
        "═══════════════════════════════════════════════════════════════",
        "L'utente che ti scrive è di SESSO FEMMINILE.",
        "Adatta tutte le concordanze grammaticali italiane di conseguenza:",
        "  • Aggettivi al femminile (serena, stanca, preoccupata, attenta, pronta)",
        "  • Participi passati al femminile, anche di seconda persona",
        "    (ti sei sentita, ti sei resa conto, sei stata, hai notato)",
        "  • Pronomi e ogni altra forma flessa al femminile",
        "Mantieni la concordanza coerente in TUTTA la risposta."
      ].join("\n");
    }

    return [
      "═══════════════════════════════════════════════════════════════",
      "ISTRUZIONE LINGUISTICA — Concordanza grammaticale (priorità alta)",
      "═══════════════════════════════════════════════════════════════",
      "L'utente non ha specificato il proprio genere grammaticale.",
      "Usa formulazioni NEUTRE evitando aggettivi flessi e participi",
      "passati di seconda persona singolare. Strategie utili:",
      "  • Preferire 'noti che', 'osservi', 'senti', 'percepisci'",
      "  • Costruzioni impersonali: 'capita di sentirsi affaticati'",
      "  • Sostantivi al posto di aggettivi: 'una sensazione di stanchezza'",
      "Quando una forma flessa è inevitabile, usa la doppia forma con",
      "barra (stanco/stanca) ma con parsimonia."
    ].join("\n");
  }

  window.augmentSystemPrompt = function (basePrompt) {
    if (typeof basePrompt !== "string") {
      console.warn("[GENDER-PREFS] basePrompt non è una stringa, restituisco invariato.");
      return basePrompt;
    }
    var withPrev = prevAugment ? prevAugment(basePrompt) : basePrompt;
    return buildDirective() + "\n\n" + withPrev;
  };

  // API pubblica esposta
  window.getUserGender = getGender;
  window.setUserGenderPref = setGenderInternal;
  window.openGenderPrefsModal = function () { openModal(); };

  // ─────────────────────────────────────────────────────────────────
  // UI · STILI iniettati
  // ─────────────────────────────────────────────────────────────────

  function injectStyles() {
    if (document.getElementById("gp-styles")) return;
    var style = document.createElement("style");
    style.id = "gp-styles";
    style.textContent = [
      "/* Badge fluttuante */",
      "#gp-badge{",
      "  position:fixed;bottom:18px;left:18px;z-index:9000;",
      "  display:inline-flex;align-items:center;gap:.4rem;",
      "  padding:.5rem .85rem;",
      "  background:rgba(255,255,255,.96);",
      "  border:1px solid var(--border,#d8cdb8);",
      "  border-radius:999px;",
      "  font-family:'Outfit',sans-serif;",
      "  font-size:.74rem;font-weight:500;",
      "  color:var(--ink,#2c2620);",
      "  cursor:pointer;",
      "  box-shadow:0 4px 14px rgba(184,147,90,.14);",
      "  backdrop-filter:blur(8px);",
      "  transition:transform .15s,box-shadow .15s,opacity .15s;",
      "  opacity:.78;",
      "}",
      "#gp-badge:hover{",
      "  opacity:1;transform:translateY(-1px);",
      "  box-shadow:0 6px 18px rgba(184,147,90,.22);",
      "}",
      "#gp-badge .gp-badge-ic{font-size:.95rem;color:var(--gold,#b8935a)}",
      "#gp-badge .gp-badge-lbl{letter-spacing:.04em}",
      "@media(max-width:480px){",
      "  #gp-badge{bottom:14px;left:14px;font-size:.7rem;padding:.42rem .7rem}",
      "}",
      "/* Modal */",
      "#gp-modal{",
      "  position:fixed;inset:0;z-index:9100;",
      "  display:none;align-items:center;justify-content:center;",
      "  background:rgba(28,22,18,.55);backdrop-filter:blur(6px);",
      "  padding:1rem;",
      "}",
      "#gp-modal.gp-open{display:flex}",
      "#gp-modal-card{",
      "  max-width:480px;width:100%;",
      "  background:linear-gradient(180deg,#fdfcf8 0%,#faf6ed 100%);",
      "  border:1px solid var(--border,#e6dfd0);",
      "  border-radius:14px;",
      "  padding:1.8rem 1.4rem 1.4rem;",
      "  box-shadow:0 18px 54px rgba(0,0,0,.32);",
      "  text-align:center;",
      "  position:relative;",
      "  font-family:'Outfit',sans-serif;",
      "}",
      "#gp-modal-close{",
      "  position:absolute;top:.5rem;right:.7rem;",
      "  background:transparent;border:none;cursor:pointer;",
      "  font-size:1.3rem;line-height:1;color:var(--ink3,#6b5f50);",
      "  padding:.2rem .4rem;border-radius:6px;",
      "}",
      "#gp-modal-close:hover{background:rgba(0,0,0,.05);color:var(--ink,#2c2620)}",
      ".gp-eye{",
      "  font-size:.7rem;font-weight:700;letter-spacing:.16em;",
      "  text-transform:uppercase;",
      "  color:var(--gold,#b8935a);margin-bottom:.6rem;",
      "}",
      ".gp-title{",
      "  font-family:'Cormorant Garamond',serif;",
      "  font-size:1.45rem;font-weight:600;",
      "  color:var(--ink,#2c2620);line-height:1.2;",
      "  margin:0 0 .6rem;",
      "}",
      ".gp-title em{font-style:italic;color:var(--gold,#b8935a)}",
      ".gp-desc{",
      "  font-size:.88rem;color:var(--ink3,#6b5f50);",
      "  line-height:1.55;margin:0 auto 1.2rem;max-width:380px;",
      "}",
      ".gp-buttons{display:flex;gap:.5rem;flex-wrap:wrap;justify-content:center}",
      ".gp-btn{",
      "  flex:1 1 110px;min-height:44px;",
      "  padding:.7rem 1rem;",
      "  background:white;",
      "  border:1px solid var(--gold,#b8935a);",
      "  border-radius:10px;",
      "  font-family:'Outfit',sans-serif;",
      "  font-size:.84rem;font-weight:600;",
      "  color:var(--ink,#2c2620);cursor:pointer;",
      "  transition:background .15s,transform .15s,box-shadow .15s;",
      "}",
      ".gp-btn:hover{",
      "  background:var(--gold,#b8935a);color:white;",
      "  transform:translateY(-1px);",
      "  box-shadow:0 4px 12px rgba(184,147,90,.2);",
      "}",
      ".gp-btn-neutral{",
      "  border-color:var(--border,#c8b894);",
      "  color:var(--ink3,#6b5f50);font-weight:500;",
      "}",
      ".gp-btn-neutral:hover{",
      "  background:var(--ivory,#f9f5ef);color:var(--ink,#2c2620);",
      "  border-color:var(--ink3,#6b5f50);",
      "}",
      ".gp-btn.gp-active{",
      "  background:var(--gold,#b8935a);color:white;",
      "}",
      ".gp-note{",
      "  margin-top:.9rem;font-size:.7rem;",
      "  color:var(--ink4,#95897a);font-style:italic;",
      "}",
      "@media(max-width:480px){",
      "  #gp-modal-card{padding:1.4rem 1rem 1.1rem}",
      "  .gp-title{font-size:1.25rem}",
      "  .gp-btn{flex:1 1 100%}",
      "}"
    ].join("\n");
    document.head.appendChild(style);
  }

  // ─────────────────────────────────────────────────────────────────
  // UI · BADGE
  // ─────────────────────────────────────────────────────────────────

  var badgeEl = null;

  function ensureBadge() {
    if (badgeEl) return;
    badgeEl = document.createElement("button");
    badgeEl.id = "gp-badge";
    badgeEl.type = "button";
    badgeEl.title = "Preferenza grammaticale per le risposte AI";
    badgeEl.setAttribute("aria-label", "Cambia preferenza grammaticale");
    badgeEl.innerHTML =
      '<span class="gp-badge-ic">👤</span><span class="gp-badge-lbl">—</span>';
    badgeEl.addEventListener("click", function () { openModal(); });
    document.body.appendChild(badgeEl);
  }

  function updateBadge() {
    if (!badgeEl) return;
    var g = getGender();
    var lbl = badgeEl.querySelector(".gp-badge-lbl");
    lbl.textContent = g ? LABEL[g] : "Imposta";
  }

  // ─────────────────────────────────────────────────────────────────
  // UI · MODAL
  // ─────────────────────────────────────────────────────────────────

  var modalEl = null;

  function buildModal() {
    if (modalEl) return;
    modalEl = document.createElement("div");
    modalEl.id = "gp-modal";
    modalEl.innerHTML =
      '<div id="gp-modal-card" role="dialog" aria-modal="true" aria-labelledby="gp-title">' +
        '<button id="gp-modal-close" type="button" aria-label="Chiudi">×</button>' +
        '<div class="gp-eye">Preferenza grammaticale</div>' +
        '<h3 id="gp-title" class="gp-title">Come preferisci che la <em>Consulente AI</em> ti scriva?</h3>' +
        '<p class="gp-desc">L\'assistente userà la concordanza corretta in tutte le risposte (al maschile, al femminile, o in forme neutre). Puoi cambiare la scelta in qualsiasi momento.</p>' +
        '<div class="gp-buttons">' +
          '<button class="gp-btn" data-g="M" type="button">Al maschile</button>' +
          '<button class="gp-btn" data-g="F" type="button">Al femminile</button>' +
          '<button class="gp-btn gp-btn-neutral" data-g="X" type="button">Forme neutre</button>' +
        '</div>' +
        '<div class="gp-note">La preferenza resta sul tuo dispositivo (localStorage). Non viene inviata a server esterni.</div>' +
      '</div>';
    document.body.appendChild(modalEl);

    // Eventi
    modalEl.querySelector("#gp-modal-close").addEventListener("click", closeModal);
    modalEl.addEventListener("click", function (ev) {
      if (ev.target === modalEl) closeModal();
    });
    var btns = modalEl.querySelectorAll(".gp-btn");
    Array.prototype.forEach.call(btns, function (b) {
      b.addEventListener("click", function () {
        setGenderInternal(b.getAttribute("data-g"));
      });
    });
    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape" && modalEl.classList.contains("gp-open")) closeModal();
    });
  }

  function openModal() {
    if (!modalEl) buildModal();
    // Evidenzia il bottone della preferenza attuale
    var g = getGender();
    var btns = modalEl.querySelectorAll(".gp-btn");
    Array.prototype.forEach.call(btns, function (b) {
      if (b.getAttribute("data-g") === g) b.classList.add("gp-active");
      else b.classList.remove("gp-active");
    });
    modalEl.classList.add("gp-open");
  }

  function closeModal() {
    if (modalEl) modalEl.classList.remove("gp-open");
  }

  // ─────────────────────────────────────────────────────────────────
  // RILEVAMENTO PAGINA
  // ─────────────────────────────────────────────────────────────────

  function isAIPage() {
    var path = (location.pathname || "").toLowerCase();
    var file = path.split("/").pop() || "";
    return AI_PAGES.indexOf(file) >= 0;
  }

  function hasInlineGate() {
    // Compatibilità con il "passo 0" di check-integrato.html:
    // se l'inline gate è già visibile a pagina, lasciamo a lui il primo turno.
    var inline = document.getElementById("gender-gate");
    if (!inline) return false;
    var st = window.getComputedStyle(inline);
    return st && st.display !== "none";
  }

  // ─────────────────────────────────────────────────────────────────
  // BOOTSTRAP
  // ─────────────────────────────────────────────────────────────────

  function init() {
    injectStyles();
    buildModal();

    var g = getGender();

    if (g) {
      ensureBadge();
      updateBadge();
    } else {
      // Non ancora impostato
      if (isAIPage() && !hasInlineGate()) {
        // Auto-apri il modal su pagine AI, dopo un breve delay per non
        // bloccare il primo paint della pagina
        setTimeout(openModal, 700);
      }
      // Sulle altre pagine il badge appare solo dopo la prima scelta
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  if (typeof console !== "undefined" && console.info) {
    console.info(
      "%c[GENDER-PREFS] Caricato. Preferenza: " + (getGender() || "non impostata"),
      "color:#b8935a;font-weight:600"
    );
  }
})();

/* ════════════════════════════════════════════════════════════════════
   NOTA — perché il SYSTEM PROMPT funzioni, olismo-core.js deve usare
   window.augmentSystemPrompt nel punto in cui costruisce il prompt
   inviato al modello. Esempio:

     const SYSTEM = (typeof window.augmentSystemPrompt === "function")
                  ? window.augmentSystemPrompt(BASE_SYSTEM_PROMPT)
                  : BASE_SYSTEM_PROMPT;

   Lo stesso meccanismo che attiva il knowledge module di consulente.html
   (astrologia vedica + hardware/wetware): se il knowledge module è già
   in produzione, anche questo file funziona automaticamente.
   ════════════════════════════════════════════════════════════════════ */
