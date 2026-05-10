/* ════════════════════════════════════════════════════════════════════
   © 2026 Avv. Carlo Alberto Calcagno · olismo-integrato.it
   GENDER-AUGMENT · Concordanza grammaticale per le risposte AI

   Da caricare in tutte le pagine AI PRIMA di olismo-core.js:
     <script src="gender-augment.js"></script>
     <script src="olismo-core.js" defer></script>

   Funzionamento:
   - Legge da localStorage il genere scelto dall'utente in check-integrato
     (chiave 'olismo_user_gender': 'M', 'F' o 'X' / non definito).
   - Si aggancia a window.augmentSystemPrompt SENZA SOVRASCRIVERE eventuali
     altre estensioni (knowledge module, ecc.): le wrappa.
   - Prepende un'istruzione linguistica al system prompt, così l'AI usa
     la concordanza giusta in tutte le risposte.

   Se l'utente non ha mai aperto il check (gender non impostato), istruisce
   l'AI a usare formulazioni neutre invece di forme flesse al maschile
   di default.
   ════════════════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  // Salva l'eventuale augmentSystemPrompt esistente (es. il knowledge module
  // di consulente.html) per non perderlo: lo richiamiamo dentro il wrapper.
  var prevAugment = (typeof window.augmentSystemPrompt === "function")
    ? window.augmentSystemPrompt
    : null;

  function buildGenderDirective() {
    var g = "";
    try { g = (localStorage.getItem("olismo_user_gender") || "").trim(); } catch (e) {}

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
        "Mantieni la concordanza coerente in TUTTA la risposta, non solo nella",
        "prima frase."
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
        "Mantieni la concordanza coerente in TUTTA la risposta, non solo nella",
        "prima frase."
      ].join("\n");
    }

    // X o non definito: forme neutre
    return [
      "═══════════════════════════════════════════════════════════════",
      "ISTRUZIONE LINGUISTICA — Concordanza grammaticale (priorità alta)",
      "═══════════════════════════════════════════════════════════════",
      "L'utente non ha specificato il proprio genere grammaticale.",
      "Usa formulazioni NEUTRE evitando, dove possibile, aggettivi flessi e",
      "participi passati di seconda persona singolare. Strategie utili:",
      "  • Preferire 'noti che', 'osservi', 'senti', 'percepisci' a",
      "    'ti sei accorto/accorta'",
      "  • Costruzioni impersonali: 'capita di sentirsi affaticati' invece di",
      "    'ti senti affaticato/a'",
      "  • Sostantivi al posto di aggettivi: 'una sensazione di stanchezza'",
      "    invece di 'sei stanco/stanca'",
      "Quando una forma flessa è inevitabile, usa la doppia forma con la barra",
      "(stanco/stanca) ma in modo parsimonioso."
    ].join("\n");
  }

  // Nuovo augmentSystemPrompt: prima il direttivo di genere, poi l'eventuale
  // augment precedente (knowledge module ecc.), poi il base prompt.
  window.augmentSystemPrompt = function (basePrompt) {
    if (typeof basePrompt !== "string") {
      console.warn("[GENDER] augmentSystemPrompt: basePrompt non è una stringa, restituisco invariato.");
      return basePrompt;
    }
    var withPrev = prevAugment ? prevAugment(basePrompt) : basePrompt;
    var directive = buildGenderDirective();
    // Il direttivo va in CIMA: priorità di compliance per il modello.
    return directive + "\n\n" + withPrev;
  };

  // Funzione helper riusabile da altre parti del sito
  // (es. per il messaggio di benvenuto in consulente.html).
  window.getUserGender = function () {
    try { return (localStorage.getItem("olismo_user_gender") || "").trim() || null; }
    catch (e) { return null; }
  };

  if (typeof console !== "undefined" && console.info) {
    var current = window.getUserGender() || "non impostato (forme neutre)";
    console.info(
      "%c[GENDER] Concordanza attiva: " + current,
      "color:#b8935a;font-weight:600"
    );
  }
})();
