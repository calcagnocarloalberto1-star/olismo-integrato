/*!
 * ═══════════════════════════════════════════════════════════════════════
 * olismo-integrato.js  —  FILE UNICO
 * Report olistico personale (Consulente AI)  +  Dossier del caso (Mediatore)
 * © 2026 Avv. Carlo Alberto Calcagno · olismo-integrato.it
 * Tutti i diritti riservati · L. 22 aprile 1941 n. 633
 * ═══════════════════════════════════════════════════════════════════════
 *
 * UN SOLO FILE, UN SOLO TAG. Caricalo nella root del sito e aggiungi su
 * OGNI pagina, prima di </body>:
 *
 *     <script src="/olismo-integrato.js?v=1" defer></script>
 *
 * Sicuro ovunque e in qualsiasi posizione del tag: i due moduli si
 * auto-attivano solo dove servono e l'override delle funzioni del core viene
 * applicato a DOMContentLoaded e ri-applicato a load (vince sempre sul core,
 * indipendentemente dall'ordine di caricamento).
 *
 * Contiene:
 *   A) PONTE REPORT  → aggrega tutti i motori (olismo_profile_*), aggancia
 *      compatibilità e cataloghi, e dà la "Consulenza completa" in 1 clic.
 *   B) DOSSIER CASO  → canale SEPARATO per gli strumenti del mediatore
 *      (matrice, psicologia analogica, empowerment) verso consulente-mediatore.
 *
 * Reversibile: togli il tag e torna tutto com'era. Non modifica olismo-core.js.
 * ═══════════════════════════════════════════════════════════════════════
 */

/* ═══════════════════════════════════════════════════════════════════════
   MODULO A — PONTE REPORT → CONSULENTE AI
   ═══════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  var PREFIX = "olismo_profile_";

  var KNOWN_LABELS = {
    check:    "Check Integrato",
    frutti:   "Test 9 Frutti",
    at:       "Test Adattamenti AT",
    vak:      "Test VAK",
    ego:      "Egogramma",
    diet:     "Piano Alimentare",
    trans:    "Vettore Comunicativo AT",
    compat:   "Compatibilità di Coppia",
    compatevo:"Compatibilità Evolutiva",
    interessi:"Interessi esplorati"
  };

  var ORDER = ["check","frutti","at","vak","ego","trans","diet","compat","compatevo","interessi"];

  function readAll() {
    var out = [];
    for (var i = 0; i < localStorage.length; i++) {
      var k = localStorage.key(i);
      if (k && k.indexOf(PREFIX) === 0) {
        try {
          var data = JSON.parse(localStorage.getItem(k));
          if (data && typeof data === "object") out.push({ key: k.slice(PREFIX.length), data: data });
        } catch (e) {}
      }
    }
    out.sort(function (a, b) {
      var ia = ORDER.indexOf(a.key); if (ia < 0) ia = 99;
      var ib = ORDER.indexOf(b.key); if (ib < 0) ib = 99;
      return ia - ib;
    });
    return out;
  }

  function richBlock(key, d) {
    var L = [];
    var label = KNOWN_LABELS[key] || d._label || key;
    function p(s) { L.push(s); }

    if (key === "check") {
      p("▶ CHECK INTEGRATO (" + (d._date || "") + "):");
      if (d.enneatipo)     p("  · Enneatipo ipotesi: T" + d.enneatipo);
      if (d.enn2)          p("  · 2° enneatipo: T" + d.enn2);
      if (d.vak)           p("  · Canale VAK: " + d.vak);
      if (d.at_stato)      p("  · Stato AT prevalente: " + d.at_stato);
      if (d.chakra_forte)  p("  · Chakra di forza: " + d.chakra_forte);
      if (d.chakra_debole) p("  · Chakra da lavorare: " + d.chakra_debole);
      if (d.spinte && d.spinte.length) p("  · Spinte copione: " + d.spinte.join(", "));
      if (d.conf_stile)    p("  · Stile conflitto: " + d.conf_stile);
      if (d.cerca_di)      p("  · Sta cercando: " + d.cerca_di);

    } else if (key === "frutti") {
      p("▶ TEST 9 FRUTTI (" + (d._date || "") + "):");
      p("  · Enneatipo: T" + d.tipo + " — " + (d.nome || ""));
      if (d.tipo2) p("  · 2° tipo: T" + d.tipo2);
      if (d.ala)   p("  · Ala dominante: " + d.ala);

    } else if (key === "at") {
      p("▶ TEST ADATTAMENTI AT (" + (d._date || "") + "):");
      p("  · Adattamento primario: " + d.primario + " (" + d.primario_pct + "%)");
      if (d.secondario) p("  · Adattamento secondario: " + d.secondario + " (" + d.secondario_pct + "%)");
      if (d.prevalenza) p("  · Prevalenza: " + d.prevalenza);

    } else if (key === "vak") {
      p("▶ TEST VAK (" + (d._date || "") + "):");
      p("  · Canale dominante: " + d.canale + " — " + (d.nome || "") + " (" + d.pct + "%)");
      if (d.secondo) p("  · 2° canale: " + d.secondo);

    } else if (key === "ego") {
      p("▶ EGOGRAMMA (" + (d._date || "") + "):");
      p("  · Stato predominante: " + d.dominante + " (" + d.dominante_val + "/10)");
      p("  · Stato più basso: " + d.minimo + " (" + d.minimo_val + "/10)");

    } else if (key === "trans") {
      p("▶ TEST VETTORE COMUNICATIVO (" + (d._date || "") + "):");
      p("  · Vettore primario: " + d.vettore_primario + " (" + d.pct_primario + "%)");
      if (d.vettore_sec) p("  · Vettore secondario: " + d.vettore_sec);

    } else if (key === "diet") {
      p("▶ PIANO ALIMENTARE (" + (d._date || "") + "):");
      p("  · Generato per: T" + d.tipo + " / " + d.adattamento);

    } else {
      p("▶ " + String(label).toUpperCase() + " (" + (d._date || "") + "):");
      var lines = Array.isArray(d._summary) ? d._summary.slice() : [];
      if (!lines.length) {
        Object.keys(d).forEach(function (f) {
          if (f.charAt(0) === "_") return;
          var v = d[f];
          if (v == null || typeof v === "object") return;
          lines.push(f + ": " + v);
        });
      }
      lines.forEach(function (s) { p("  · " + s); });
    }

    L.push("");
    return L.join("\n");
  }

  function buildGenericProfile() {
    var all = readAll();
    if (!all.length) return "";
    var out = [];
    out.push("╔══════════════════════════════════════════════╗");
    out.push("║  PROFILO ACCUMULATO — DATI MOTORI COMPLETATI ║");
    out.push("╚══════════════════════════════════════════════╝");
    out.push("(Usa queste informazioni per personalizzare le risposte senza che l'utente le ripeta.)");
    out.push("");
    all.forEach(function (item) { out.push(richBlock(item.key, item.data || {})); });
    out.push("══════════════════════════════════════════════");
    out.push("ISTRUZIONE: tieni conto dell'INTERO profilo qui sopra in modo integrato.");
    out.push("══════════════════════════════════════════════");
    out.push("");
    return out.join("\n");
  }

  function fullConsultPrompt() {
    var prof = buildGenericProfile();
    if (!prof) return null;
    return (
      "Ti allego il mio profilo completo, costruito automaticamente dai motori del portale " +
      "(Check Integrato, test, egogramma, chakra, fiori, frequenze, alimentazione, compatibilità, ecc.):\n\n" +
      prof + "\n\n" +
      "Sulla base di TUTTI questi dati integrati, dammi una consulenza olistica completa e personalizzata:\n" +
      "1) una lettura d'insieme della persona (enneatipo, adattamenti AT, canale VAK, chakra, energie);\n" +
      "2) i punti di forza e le risorse;\n" +
      "3) le aree da lavorare e le tensioni ricorrenti;\n" +
      "4) un percorso concreto che integri le diverse discipline (AT, enneagramma, chakra, fiori, frequenze, alimentazione, esercizi).\n" +
      "Parla direttamente a me, con tono caldo e professionale."
    );
  }

  function onConsulentePage() {
    return !!document.getElementById("chat-input") && typeof window.sendMsg === "function";
  }

  function requestFullConsult() {
    var prompt = fullConsultPrompt();
    if (!prompt) {
      alert("Non hai ancora completato nessun motore.\nFai almeno un test, un check o una compatibilità per costruire il profilo.");
      return;
    }
    if (onConsulentePage()) {
      var ta = document.getElementById("chat-input");
      ta.value = prompt;
      if (typeof autoResize === "function") autoResize(ta);
      window.sendMsg();
    } else {
      try { localStorage.setItem("olismo_pending_prompt", prompt); } catch (e) {}
      location.href = "consulente.html?autosend=1";
    }
  }

  function maybeAutosend() {
    if (!onConsulentePage()) return;
    var p = new URLSearchParams(location.search);
    if (p.get("autosend") !== "1" && p.get("send") !== "1") return;
    var prompt = null;
    try { prompt = localStorage.getItem("olismo_pending_prompt"); } catch (e) {}
    if (!prompt) prompt = p.get("prompt");
    if (!prompt) return;
    try { localStorage.removeItem("olismo_pending_prompt"); } catch (e) {}
    var ta = document.getElementById("chat-input");
    ta.value = prompt;
    if (typeof autoResize === "function") autoResize(ta);
    setTimeout(function () { window.sendMsg(); }, 400);
  }

  // API pubblica (definita subito, indipendente dal core)
  window.OlismoReport = {
    save: function (key, opts) {
      opts = opts || {};
      var data = (opts.raw && typeof opts.raw === "object") ? opts.raw : {};
      data._label   = opts.label || KNOWN_LABELS[key] || key;
      data._summary = Array.isArray(opts.lines) ? opts.lines : (opts.text ? [opts.text] : (data._summary || []));
      data._date = new Date().toLocaleDateString("it-IT");
      data._v = 2;
      try { localStorage.setItem(PREFIX + key, JSON.stringify(data)); } catch (e) {}
      try {
        if (typeof window.renderProgress === "function") window.renderProgress();
        if (typeof window.renderPercorso === "function") window.renderPercorso();
      } catch (e) {}
      return data;
    },
    note: function (tipo, label) {
      if (!label) return;
      var cur = null;
      try { var raw = localStorage.getItem(PREFIX + "interessi"); cur = raw ? JSON.parse(raw) : null; } catch (e) {}
      var list = (cur && Array.isArray(cur._items)) ? cur._items : [];
      var entry = (tipo ? tipo + ": " : "") + label;
      if (list.indexOf(entry) === -1) { list.push(entry); if (list.length > 12) list = list.slice(-12); }
      return this.save("interessi", { label: "Interessi esplorati", lines: list, raw: { _items: list } });
    },
    has:     function () { return readAll().length > 0; },
    keys:    function () { return readAll().map(function (i) { return i.key; }); },
    text:    buildGenericProfile,
    consult: requestFullConsult
  };

  // ── Adattatori motori ─────────────────────────────────────────────────
  var userInteracted = false;

  function wrapGlobal(fnName, after) {
    var orig = window[fnName];
    if (typeof orig !== "function" || orig.__olismoWrapped) return false;
    var wrapped = function () {
      var r = orig.apply(this, arguments);
      try { after.apply(this, arguments); } catch (e) {}
      return r;
    };
    wrapped.__olismoWrapped = true;
    try { window[fnName] = wrapped; } catch (e) { return false; }
    return true;
  }

  function adapterCompat() {
    wrapGlobal("showCompat", function () {
      var s1 = document.getElementById("compat-t1");
      var s2 = document.getElementById("compat-t2");
      if (!s1 || !s2 || !s1.value || !s2.value) return;
      var labelEl = document.querySelector(".compat-bar-label");
      var pctEl   = document.querySelector(".compat-pct");
      var label = labelEl ? labelEl.textContent.trim() : ("T" + s1.value + " × T" + s2.value);
      var pct   = pctEl ? pctEl.textContent.trim() : "";
      var liv = "";
      if (pctEl && pctEl.parentNode) {
        var ld = pctEl.parentNode.querySelector('div[style*="capitalize"]');
        if (ld) liv = ld.textContent.trim();
      }
      window.OlismoReport.save("compat", {
        label: "Compatibilità di Coppia",
        lines: ["Coppia: " + label, "Compatibilità: " + pct + (liv ? (" — " + liv) : "")]
      });
    });
  }

  function adapterCompatEvo() {
    function val(id) { var e = document.getElementById(id); return e ? e.value : ""; }
    function capture() {
      if (!userInteracted) return;
      var t1 = val("w1-t1"), t2 = val("w1-t2"), f = val("w1-fascia");
      var tA = val("w2-tA");
      var lines = [];
      if (t1 && t2) lines.push("Coppia esplorata: T" + t1 + " × T" + t2 + (f ? (" · fascia " + f) : ""));
      if (tA)       lines.push("Percorso evolutivo esplorato: T" + tA);
      if (lines.length) window.OlismoReport.save("compatevo", { label: "Compatibilità Evolutiva", lines: lines });
    }
    ["W1", "W2"].forEach(function (Wname) {
      var W = window[Wname];
      if (W && typeof W.update === "function" && !W.update.__olismoWrapped) {
        var orig = W.update;
        var wrapped = function () { var r = orig.apply(this, arguments); try { capture(); } catch (e) {} return r; };
        wrapped.__olismoWrapped = true;
        W.update = wrapped;
      }
    });
  }

  function adapterInteressi() {
    wrapGlobal("selChakra", function (id) {
      if (!userInteracted) return;
      try {
        var c = (window.DB && window.DB.chakra) ? window.DB.chakra.find(function (x) { return x.id === id; }) : null;
        if (c) window.OlismoReport.note("Chakra", c.name);
      } catch (e) {}
    });
    wrapGlobal("showEnnDetail", function (eid) {
      if (!userInteracted) return;
      try {
        var e = (window.DB && window.DB.enneatipi) ? window.DB.enneatipi.find(function (x) { return x.id === eid; }) : null;
        if (e) window.OlismoReport.note("Enneatipo", e.name);
      } catch (e2) {}
    });
    wrapGlobal("selItem", function (id) {
      if (!userInteracted) return;
      try {
        var it = (typeof window.byId === "function") ? window.byId(id) : null;
        if (it && it.name) window.OlismoReport.note(it.cat || "Elemento", it.name);
      } catch (e) {}
    });
  }

  function applyAdapters() { adapterCompat(); adapterCompatEvo(); adapterInteressi(); }

  function injectButtons() {
    if (onConsulentePage()) {
      var hdr = document.querySelector(".chat-header");
      if (hdr && !document.getElementById("full-consult-btn")) {
        var b = document.createElement("button");
        b.id = "full-consult-btn"; b.type = "button";
        b.textContent = "🔮 Consulenza completa";
        b.title = "Invia al Consulente tutti i dati raccolti dai motori";
        b.style.cssText = "font-size:.72rem;padding:.35rem .9rem;background:linear-gradient(135deg,#1F3864,#345088);color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:600;margin-left:.4rem";
        b.onclick = requestFullConsult;
        hdr.appendChild(b);
      }
      maybeAutosend();
    } else {
      if (window.OlismoReport.has() && !document.getElementById("to-consulente-fab")) {
        var f = document.createElement("button");
        f.id = "to-consulente-fab"; f.type = "button";
        f.textContent = "🔮 Consulenza completa AI";
        f.title = "Porta tutti i dati raccolti al Consulente AI";
        f.onclick = requestFullConsult;
        f.style.cssText = "position:fixed;right:18px;bottom:18px;z-index:9998;background:linear-gradient(135deg,#1F3864,#B87333);color:#fff;border:none;border-radius:30px;padding:.7rem 1.1rem;font-size:.8rem;font-weight:600;box-shadow:0 6px 20px rgba(0,0,0,.25);cursor:pointer";
        document.body.appendChild(f);
      }
    }
  }

  // initBridge: applicato a DCL e RI-applicato a load → vince sempre sul core.
  function initBridge() {
    // override delle funzioni del core (idempotente)
    window.buildUserProfile = buildGenericProfile;
    window.getProfileBadges = function () {
      return readAll().map(function (item) {
        return KNOWN_LABELS[item.key] || (item.data && item.data._label) || item.key;
      });
    };
    if (!window.__olismoUIBound) {
      window.__olismoUIBound = true;
      ["pointerdown", "keydown", "change"].forEach(function (ev) {
        document.addEventListener(ev, function () { userInteracted = true; }, { capture: true, once: true });
      });
    }
    applyAdapters();
    injectButtons();
  }

  function boot() {
    initBridge();
    setTimeout(applyAdapters, 600);
    window.addEventListener("load", initBridge); // ri-applica dopo il core
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();

  if (typeof console !== "undefined" && console.info) {
    console.info("%c[OLISMO REPORT BRIDGE v2] attivo", "color:#1F3864;font-weight:600",
      "— motori nel report:", window.OlismoReport.keys());
  }
})();


/* ═══════════════════════════════════════════════════════════════════════
   MODULO B — DOSSIER DEL CASO (canale del Mediatore)
   ═══════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  var KEY = "olismo_case_dossier";
  var PENDING = "olismo_case_pending";
  var MAX_ENTRY = 1600;
  var NAVY = "#1F3864", COPPER = "#B87333";

  function currentTool() {
    var p = location.pathname.toLowerCase();
    if (p.indexOf("matrice") >= 0)      return "Matrice della Svalutazione";
    if (p.indexOf("psicologia") >= 0)   return "Psicologia Analogica";
    if (p.indexOf("empowerment") >= 0)  return "Empowerment in Mediazione";
    return "Analisi";
  }
  function isToolPage() { return currentTool() !== "Analisi"; }
  function isConsulentePage() {
    return /consulente-mediatore/i.test(location.pathname) && !!document.getElementById("cmInput");
  }

  function load() { try { var raw = localStorage.getItem(KEY); return raw ? JSON.parse(raw) : null; } catch (e) { return null; } }
  function blank() { return { title: "Dossier del caso", entries: [] }; }
  function save(d) { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {} }

  function addEntry(tool, party, text) {
    var d = load() || blank();
    text = String(text || "").replace(/\s+\n/g, "\n").replace(/[ \t]{2,}/g, " ").trim();
    if (text.length > MAX_ENTRY) text = text.slice(0, MAX_ENTRY) + " […]";
    d.entries.push({
      tool: tool, party: party || "Parte A", text: text,
      date: new Date().toLocaleDateString("it-IT"),
      time: new Date().toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" })
    });
    save(d);
    return d;
  }

  function visibleText(id) {
    var el = document.getElementById(id);
    if (!el) return "";
    var t = (el.innerText || el.textContent || "").trim();
    return t.length > 8 ? t : "";
  }
  function currentAnalysis() {
    return visibleText("aiResultBody") || visibleText("empResultBody") || visibleText("resultContent") || "";
  }

  function dossierText() {
    var d = load();
    if (!d || !d.entries.length) return "";
    var byParty = {};
    d.entries.forEach(function (e) { (byParty[e.party] = byParty[e.party] || []).push(e); });
    var out = [];
    out.push("╔══════════════════════════════════════════════╗");
    out.push("║           DOSSIER DEL CASO (MEDIATORE)         ║");
    out.push("╚══════════════════════════════════════════════╝");
    out.push("Analisi raccolte dagli strumenti del portale. Riferite alle PARTI in mediazione, non al mediatore.");
    out.push("");
    Object.keys(byParty).forEach(function (party) {
      out.push("───────────────────────────────────────────────");
      out.push("● " + party.toUpperCase());
      out.push("───────────────────────────────────────────────");
      byParty[party].forEach(function (e) {
        out.push("▶ " + e.tool + " (" + e.date + " " + e.time + "):");
        e.text.split("\n").forEach(function (ln) { if (ln.trim()) out.push("  " + ln.trim()); });
        out.push("");
      });
    });
    out.push("══════════════════════════════════════════════");
    return out.join("\n");
  }

  function consultPrompt() {
    var body = dossierText();
    if (!body) return null;
    return (
      "Sono il mediatore. Ti allego il DOSSIER DEL CASO, costruito con gli strumenti di analisi del portale " +
      "(matrice della svalutazione, psicologia analogica, empowerment), riferito alle parti in mediazione:\n\n" +
      body + "\n\n" +
      "Sulla base di queste analisi, aiutami a CONDURRE la sessione:\n" +
      "1) lettura sintetica della dinamica fra le parti e dei rischi (svalutazioni, asimmetrie di empowerment);\n" +
      "2) sequenza di mosse e contromosse per disinnescare i blocchi rilevati;\n" +
      "3) domande e riformulazioni concrete da usare in seduta, per parte;\n" +
      "4) eventuali cautele deontologiche (es. squilibri di potere, segnali di violenza).\n" +
      "Resta sul piano operativo della conduzione, non dare consulenza personale alle parti."
    );
  }

  function fillAndAsk(prompt) {
    var ta = document.getElementById("cmInput");
    if (!ta) return;
    ta.value = prompt;
    if (ta.dispatchEvent) { try { ta.dispatchEvent(new Event("input", { bubbles: true })); } catch (e) {} }
    setTimeout(function () {
      if (typeof window.askConsulente === "function") window.askConsulente();
      else { var b = document.getElementById("cmBtn"); if (b) b.click(); }
    }, 300);
  }
  function openInConsulente() {
    var prompt = consultPrompt();
    if (!prompt) { alert("Il dossier è vuoto. Aggiungi almeno un'analisi."); return; }
    if (isConsulentePage()) fillAndAsk(prompt);
    else {
      try { localStorage.setItem(PENDING, prompt); } catch (e) {}
      location.href = "consulente-mediatore.html?case=1";
    }
  }
  function maybeAutoload() {
    if (!isConsulentePage()) return;
    var p = new URLSearchParams(location.search);
    if (p.get("case") !== "1") return;
    var prompt = null;
    try { prompt = localStorage.getItem(PENDING); } catch (e) {}
    if (!prompt) return;
    try { localStorage.removeItem(PENDING); } catch (e) {}
    fillAndAsk(prompt);
  }

  window.OlismoCase = {
    add: function (party, text) { var d = addEntry(currentTool(), party, text); refreshPanel(); return d; },
    captureCurrent: function (party) {
      var t = currentAnalysis();
      if (!t) { alert("Non trovo un'analisi da catturare. Esegui prima un'analisi (guidata o AI)."); return null; }
      var d = addEntry(currentTool(), party, t); refreshPanel(); return d;
    },
    text:    dossierText,
    entries: function () { var d = load(); return d ? d.entries : []; },
    has:     function () { var d = load(); return !!(d && d.entries.length); },
    clear:   function () { save(blank()); refreshPanel(); },
    consult: openInConsulente
  };

  var currentParty = "Parte A";

  function esc(s) { return String(s).replace(/[<>&]/g, function (m) { return ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" })[m]; }); }
  function refreshPanel() {
    var c = document.getElementById("case-dossier-count");
    if (c) c.textContent = String((load() ? load().entries.length : 0));
    var list = document.getElementById("case-dossier-list");
    if (list) {
      var es = window.OlismoCase.entries();
      list.innerHTML = es.length
        ? es.slice(-6).map(function (e) {
            return '<div style="font-size:.7rem;color:#ddd;padding:.15rem 0">• <b>' + esc(e.party) + '</b> — ' + esc(e.tool) + '</div>';
          }).join("")
        : '<div style="font-size:.7rem;color:#aaa">Nessuna analisi nel dossier.</div>';
    }
  }

  function buildPanel() {
    if (document.getElementById("case-dossier-panel")) return;
    var wrap = document.createElement("div");
    wrap.id = "case-dossier-panel";
    wrap.style.cssText =
      "position:fixed;left:16px;bottom:16px;z-index:9997;width:264px;font-family:'Outfit',system-ui,sans-serif;" +
      "background:" + NAVY + ";color:#fff;border-radius:14px;box-shadow:0 8px 30px rgba(0,0,0,.35);overflow:hidden";
    wrap.innerHTML =
      '<div id="case-dossier-head" style="display:flex;align-items:center;gap:.5rem;padding:.7rem .9rem;cursor:pointer;background:rgba(0,0,0,.18)">' +
        '<span style="font-size:1rem">📋</span>' +
        '<span style="font-weight:600;font-size:.82rem;flex:1">Dossier del caso</span>' +
        '<span style="font-size:.72rem;background:' + COPPER + ';border-radius:10px;padding:.05rem .5rem"><span id="case-dossier-count">0</span></span>' +
        '<span id="case-dossier-toggle" style="font-size:.8rem;opacity:.8">▾</span>' +
      '</div>' +
      '<div id="case-dossier-body" style="padding:.8rem .9rem;display:block">' +
        '<div style="font-size:.66rem;letter-spacing:.1em;text-transform:uppercase;color:' + COPPER + ';margin-bottom:.35rem">Parte di riferimento</div>' +
        '<div style="display:flex;gap:.35rem;margin-bottom:.5rem">' +
          '<button type="button" id="case-pa" style="flex:1;padding:.35rem;border:none;border-radius:6px;cursor:pointer;font-weight:600;font-size:.74rem;background:' + COPPER + ';color:#fff">Parte A</button>' +
          '<button type="button" id="case-pb" style="flex:1;padding:.35rem;border:none;border-radius:6px;cursor:pointer;font-weight:600;font-size:.74rem;background:rgba(255,255,255,.15);color:#fff">Parte B</button>' +
        '</div>' +
        '<input id="case-party-name" type="text" value="Parte A" placeholder="Nome/etichetta parte" ' +
          'style="width:100%;box-sizing:border-box;padding:.4rem .55rem;border:none;border-radius:6px;font-size:.76rem;margin-bottom:.55rem">' +
        '<button type="button" id="case-add" style="width:100%;padding:.5rem;border:none;border-radius:7px;cursor:pointer;font-weight:600;font-size:.78rem;background:#fff;color:' + NAVY + ';margin-bottom:.4rem">➕ Aggiungi l\'analisi corrente</button>' +
        '<button type="button" id="case-open" style="width:100%;padding:.5rem;border:none;border-radius:7px;cursor:pointer;font-weight:600;font-size:.78rem;background:linear-gradient(135deg,' + NAVY + ',' + COPPER + ');color:#fff;box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);margin-bottom:.5rem">📂 Apri nel Consulente Mediatore</button>' +
        '<div id="case-dossier-list" style="border-top:1px solid rgba(255,255,255,.15);padding-top:.45rem;max-height:120px;overflow:auto"></div>' +
        '<div style="text-align:right;margin-top:.35rem"><span id="case-clear" style="font-size:.68rem;color:#ddd;cursor:pointer;text-decoration:underline">svuota dossier</span></div>' +
      '</div>';
    document.body.appendChild(wrap);

    var nameInput = wrap.querySelector("#case-party-name");
    function setParty(label, activeBtn) {
      currentParty = label; nameInput.value = label;
      wrap.querySelector("#case-pa").style.background = activeBtn === "a" ? COPPER : "rgba(255,255,255,.15)";
      wrap.querySelector("#case-pb").style.background = activeBtn === "b" ? COPPER : "rgba(255,255,255,.15)";
    }
    wrap.querySelector("#case-pa").onclick = function () { setParty("Parte A", "a"); };
    wrap.querySelector("#case-pb").onclick = function () { setParty("Parte B", "b"); };
    nameInput.oninput = function () { currentParty = nameInput.value.trim() || "Parte A"; };
    wrap.querySelector("#case-add").onclick  = function () { window.OlismoCase.captureCurrent(currentParty); };
    wrap.querySelector("#case-open").onclick = function () { window.OlismoCase.consult(); };
    wrap.querySelector("#case-clear").onclick = function () {
      if (confirm("Svuotare il dossier del caso? L'azione non è reversibile.")) window.OlismoCase.clear();
    };
    var body = wrap.querySelector("#case-dossier-body");
    wrap.querySelector("#case-dossier-head").onclick = function () {
      var open = body.style.display !== "none";
      body.style.display = open ? "none" : "block";
      wrap.querySelector("#case-dossier-toggle").textContent = open ? "▸" : "▾";
    };
    refreshPanel();
  }

  function injectConsulenteButton() {
    if (!window.OlismoCase.has() || document.getElementById("case-load-btn")) return;
    var ta = document.getElementById("cmInput");
    if (!ta || !ta.parentNode) return;
    var b = document.createElement("button");
    b.id = "case-load-btn"; b.type = "button";
    b.textContent = "📋 Carica il dossier del caso";
    b.style.cssText = "margin:.5rem 0;padding:.5rem .9rem;border:none;border-radius:8px;cursor:pointer;font-weight:600;font-size:.8rem;background:linear-gradient(135deg," + NAVY + "," + COPPER + ");color:#fff";
    b.onclick = function () { window.OlismoCase.consult(); };
    ta.parentNode.insertBefore(b, ta.nextSibling);
  }

  function initCase() {
    if (isToolPage())       buildPanel();
    if (isConsulentePage()) { injectConsulenteButton(); maybeAutoload(); }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initCase);
  else initCase();

  if (typeof console !== "undefined" && console.info) {
    console.info("%c[OLISMO CASE DOSSIER] attivo", "color:#B87333;font-weight:600",
      "— analisi in dossier:", window.OlismoCase.entries().length);
  }
})();
