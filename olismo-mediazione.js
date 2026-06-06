/* ═══════════════════════════════════════════════════════════════════════
   OLISMO INTEGRATO — Sistema Profilo MEDIAZIONE multi-soggetto
   © 2026 Avv. Carlo Alberto Calcagno · olismo-integrato.it

   Sotto-sistema per tracciare PIÙ SOGGETTI in un dossier di mediazione.
   Tipico caso d'uso del Mediatore/Avvocato:
     1. Crea un dossier (es. "Famiglia Rossi")
     2. Aggiunge i soggetti (es. "Madre Anna", "Padre Marco", "Figlia Sara")
     3. Per ogni soggetto compila enneatipo, AT, VAK, chakra prevalente,
        stile di conflitto, copione, note
     4. Invia tutto al Consulente Mediatore AI con un solo clic per
        ottenere una lettura sistemica

   Storage: olismo_mediazione_dossier_<id>
   Dossier corrente: olismo_mediazione_dossier_corrente
═══════════════════════════════════════════════════════════════════════ */

(function (global) {
  'use strict';

  var MED_PREFIX = 'olismo_mediazione_dossier_';
  var MED_CURRENT = 'olismo_mediazione_dossier_corrente';
  var CONSULENTE_MED_URL = 'consulente-mediatore.html';

  function oggi() {
    var d = new Date();
    return d.getFullYear() + '-' +
      String(d.getMonth() + 1).padStart(2, '0') + '-' +
      String(d.getDate()).padStart(2, '0');
  }
  function safeJSON(str) { try { return JSON.parse(str); } catch (e) { return null; } }
  function storageOk() {
    try { var t = '__olismo_test__'; localStorage.setItem(t, '1'); localStorage.removeItem(t); return true; }
    catch (e) { return false; }
  }
  function idDossier() {
    return 'd' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }
  function idSoggetto() {
    return 's' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
  }
  function s(str, max) { return String(str == null ? '' : str).slice(0, max || 200); }

  // ─── Crea nuovo dossier ───────────────────────────────────────────
  function creaDossier(nome, tipo, note) {
    if (!storageOk()) return null;
    var dossier = {
      id: idDossier(),
      nome: s(nome || 'Dossier ' + oggi(), 120),
      tipo: tipo || 'famigliare',  // famigliare | coppia | civile | commerciale | altro
      note: s(note, 1000),
      creato: oggi(),
      aggiornato: oggi(),
      soggetti: [],
      eventi: []  // facoltativo — log di accadimenti significativi durante la mediazione
    };
    try {
      localStorage.setItem(MED_PREFIX + dossier.id, JSON.stringify(dossier));
      localStorage.setItem(MED_CURRENT, dossier.id);
      return dossier;
    } catch (e) { return null; }
  }

  function leggiDossier(id) {
    if (!storageOk() || !id) return null;
    var raw = localStorage.getItem(MED_PREFIX + id);
    return raw ? safeJSON(raw) : null;
  }

  function salvaDossier(dossier) {
    if (!storageOk() || !dossier || !dossier.id) return false;
    dossier.aggiornato = oggi();
    try {
      localStorage.setItem(MED_PREFIX + dossier.id, JSON.stringify(dossier));
      return true;
    } catch (e) { return false; }
  }

  function listaDossier() {
    if (!storageOk()) return [];
    var out = [];
    for (var i = 0; i < localStorage.length; i++) {
      var k = localStorage.key(i);
      if (k && k.indexOf(MED_PREFIX) === 0 && k !== MED_CURRENT) {
        var d = safeJSON(localStorage.getItem(k));
        if (d && d.id) out.push(d);
      }
    }
    out.sort(function (a, b) { return (b.aggiornato || '').localeCompare(a.aggiornato || ''); });
    return out;
  }

  function cancellaDossier(id) {
    if (!storageOk()) return false;
    try {
      localStorage.removeItem(MED_PREFIX + id);
      if (localStorage.getItem(MED_CURRENT) === id) localStorage.removeItem(MED_CURRENT);
      return true;
    } catch (e) { return false; }
  }

  function getCorrente() {
    if (!storageOk()) return null;
    var id = localStorage.getItem(MED_CURRENT);
    return id ? leggiDossier(id) : null;
  }
  function setCorrente(id) {
    if (!storageOk()) return false;
    if (id) localStorage.setItem(MED_CURRENT, id);
    else localStorage.removeItem(MED_CURRENT);
    return true;
  }

  // ─── Soggetti ─────────────────────────────────────────────────────
  function aggiungiSoggetto(dossierId, soggetto) {
    var d = leggiDossier(dossierId);
    if (!d) return null;
    soggetto = soggetto || {};
    var sogg = {
      id: idSoggetto(),
      nome: s(soggetto.nome || 'Soggetto ' + (d.soggetti.length + 1), 80),
      ruolo: s(soggetto.ruolo, 60),
      eta: soggetto.eta || '',
      enneatipo: s(soggetto.enneatipo, 40),
      adattamento: s(soggetto.adattamento, 60),
      stato_at: s(soggetto.stato_at, 40),
      vak: s(soggetto.vak, 30),
      chakra_forte: s(soggetto.chakra_forte, 40),
      chakra_debole: s(soggetto.chakra_debole, 40),
      copione: s(soggetto.copione, 200),
      stile_conflitto: s(soggetto.stile_conflitto, 80),
      svalutazione: s(soggetto.svalutazione, 200),
      note: s(soggetto.note, 600),
      reddito_mensile: s(soggetto.reddito_mensile, 30),
      patrimonio: s(soggetto.patrimonio, 200),
      spese_fisse: s(soggetto.spese_fisse, 200),
      capacita_lavorativa: s(soggetto.capacita_lavorativa, 100),
      residenza: s(soggetto.residenza, 100),
      stato_civile: s(soggetto.stato_civile, 40),
      tempo_attuale_figli: s(soggetto.tempo_attuale_figli, 100),
      disponibilita_oraria: s(soggetto.disponibilita_oraria, 200)
    };
    d.soggetti.push(sogg);
    salvaDossier(d);
    return sogg;
  }

  function aggiornaSoggetto(dossierId, soggettoId, patch) {
    var d = leggiDossier(dossierId);
    if (!d) return null;
    var idx = d.soggetti.findIndex(function (x) { return x.id === soggettoId; });
    if (idx < 0) return null;
    Object.keys(patch || {}).forEach(function (k) {
      if (k !== 'id') d.soggetti[idx][k] = patch[k];
    });
    salvaDossier(d);
    return d.soggetti[idx];
  }

  function rimuoviSoggetto(dossierId, soggettoId) {
    var d = leggiDossier(dossierId);
    if (!d) return false;
    d.soggetti = d.soggetti.filter(function (x) { return x.id !== soggettoId; });
    salvaDossier(d);
    return true;
  }

  // ─── Riempi un soggetto coi dati del profilo personale ────────────
  // Permette al mediatore di mappare i propri test su se stesso o
  // su un soggetto generico
  function riempiDaProfiloPersonale(dossierId, soggettoId) {
    if (!global.OlismoProfilo) return null;
    var tutti = OlismoProfilo.leggiTutti();
    if (!tutti.length) return null;
    var patch = {};
    tutti.forEach(function (p) {
      var det = p.dettagli || {};
      if (p.motore === 'frutti' && det.tipo) patch.enneatipo = 'T' + det.tipo + (det.tipo2 ? '/T' + det.tipo2 : '') + (det.ala ? ' (' + det.ala + ')' : '');
      if (p.motore === 'adattamenti' && det.primario) patch.adattamento = det.primario + (det.secondario ? ' / ' + det.secondario : '');
      if (p.motore === 'egogramma' && det.dominante) patch.stato_at = 'dominante ' + det.dominante + (det.minimo ? ' · carente ' + det.minimo : '');
      if (p.motore === 'vak' && det.canale) patch.vak = det.canale + (det.pct ? ' (' + det.pct + '%)' : '');
      if (p.motore === 'check') {
        if (det.enneatipo && !patch.enneatipo) patch.enneatipo = 'T' + det.enneatipo + (det.enn2 ? '/T' + det.enn2 : '');
        if (det.vak && !patch.vak) patch.vak = det.vak;
        if (det.at_stato && !patch.stato_at) patch.stato_at = det.at_stato;
        if (det.chakra_forte) patch.chakra_forte = det.chakra_forte;
        if (det.chakra_debole) patch.chakra_debole = det.chakra_debole;
        if (det.conf_stile) patch.stile_conflitto = det.conf_stile;
      }
    });
    if (Object.keys(patch).length === 0) return null;
    return aggiornaSoggetto(dossierId, soggettoId, patch);
  }

  // ─── Mega-prompt per il Consulente Mediatore AI ───────────────────
  function costruisciPrompt(dossierId) {
    var d = leggiDossier(dossierId);
    if (!d) return null;
    var L = [];
    L.push('Ciao Consulente Mediatore. Ti sottopongo un dossier di mediazione su cui ti chiedo una lettura sistemica:');
    L.push('');
    L.push('DOSSIER: ' + d.nome);
    L.push('Tipo: ' + d.tipo + '  ·  Creato: ' + d.creato + '  ·  Aggiornato: ' + d.aggiornato);
    if (d.note) L.push('Note di caso: ' + d.note);
    L.push('');
    L.push('SOGGETTI COINVOLTI (' + d.soggetti.length + ')');
    L.push('═══════════════════════════════════════');
    d.soggetti.forEach(function (sg, i) {
      L.push('');
      L.push((i + 1) + '. ' + sg.nome + (sg.ruolo ? ' — ' + sg.ruolo : '') + (sg.eta ? ' (' + sg.eta + ' anni)' : ''));
      L.push('───────────────────────────────────────');
      var p = [];
      if (sg.enneatipo)       p.push('• Enneatipo: ' + sg.enneatipo);
      if (sg.adattamento)     p.push('• Adattamento AT: ' + sg.adattamento);
      if (sg.stato_at)        p.push('• Stato dell\'Io: ' + sg.stato_at);
      if (sg.vak)             p.push('• Canale VAK: ' + sg.vak);
      if (sg.chakra_forte)    p.push('• Chakra di forza: ' + sg.chakra_forte);
      if (sg.chakra_debole)   p.push('• Chakra da lavorare: ' + sg.chakra_debole);
      if (sg.copione)         p.push('• Copione di vita: ' + sg.copione);
      if (sg.stile_conflitto) p.push('• Stile di conflitto: ' + sg.stile_conflitto);
      if (sg.svalutazione)    p.push('• Matrice di svalutazione ricorrente: ' + sg.svalutazione);
      if (p.length === 0) p.push('(nessun dato anagrafico/psicologico compilato)');
      L.push(p.join('\n'));
      var econ = [];
      if (sg.reddito_mensile)     econ.push('reddito ' + sg.reddito_mensile);
      if (sg.capacita_lavorativa) econ.push('capacità lavorativa ' + sg.capacita_lavorativa);
      if (sg.patrimonio)          econ.push('patrimonio: ' + sg.patrimonio);
      if (sg.spese_fisse)         econ.push('spese fisse: ' + sg.spese_fisse);
      if (econ.length) L.push('Quadro economico: ' + econ.join('; '));
      var fam = [];
      if (sg.residenza)             fam.push('residenza ' + sg.residenza);
      if (sg.stato_civile)          fam.push('stato civile ' + sg.stato_civile);
      if (sg.tempo_attuale_figli)   fam.push('tempo con figli ' + sg.tempo_attuale_figli);
      if (sg.disponibilita_oraria)  fam.push('disponibilità oraria ' + sg.disponibilita_oraria);
      if (fam.length) L.push('Quadro familiare/logistico: ' + fam.join('; '));
      if (sg.note) L.push('Note specifiche: ' + sg.note);
    });
    L.push('');
    L.push('═══════════════════════════════════════');
    L.push('Quello che ti chiedo:');
    L.push('1) Leggi i soggetti come SISTEMA, non come individui isolati. Quali dinamiche di incastro vedi (es. complementarietà, collusioni, scapegoat, alleanze trasversali, triangolazioni)?');
    L.push('2) Quali sono le AREE DI CONFLITTO PIÙ PROBABILI fra questi profili e perché (a livello di bisogni, valori, stili comunicativi)?');
    L.push('3) Suggerisci una STRATEGIA DI MEDIAZIONE concreta: ordine di colloqui (separati / congiunti), tono da tenere con ciascuno, leve di motivazione di ognuno, parole-chiave da usare ed evitare, momenti critici a cui prestare attenzione.');
    L.push('4) Indica eventuali RED FLAG (squilibri di potere, sospetto di violenza assistita, manipolazione, sopruso, alienazione genitoriale) e quando sospendere la mediazione o riformularla.');
    L.push('5) Proponi DOMANDE-CHIAVE che il mediatore può usare con ciascun soggetto in seduta per fare emergere bisogni, interessi e opzioni.');
    L.push('6) Se sono presenti minori, indica come tutelarli pur tenendoli nel sistema di lettura.');
    L.push('');
    L.push('Risposta in italiano, professionale, articolata in sezioni, taglio operativo per un mediatore.');
    return L.join('\n');
  }

  function inviaAlConsulente(dossierId) {
    var prompt = costruisciPrompt(dossierId);
    if (!prompt) { alert('Dossier non trovato o vuoto.'); return false; }
    try {
      sessionStorage.setItem('olismo_prompt_mediazione', prompt);
      location.href = CONSULENTE_MED_URL + '?profilo=mediazione&dossier=' + encodeURIComponent(dossierId);
      return true;
    } catch (e) {
      location.href = CONSULENTE_MED_URL + '?prompt=' + encodeURIComponent(prompt.slice(0, 7000));
      return true;
    }
  }

  // ─── Mega-prompt PIANO GENITORIALE ───────────────────────────────
  function costruisciPromptPianoGenitoriale(dossierId) {
    var d = leggiDossier(dossierId);
    if (!d) return null;
    var L = [];
    L.push('Ciao Consulente Mediatore. Costruisci un PIANO GENITORIALE operativo a partire da questo dossier di mediazione familiare.');
    L.push('');
    L.push('DOSSIER: ' + d.nome + (d.note ? '  —  ' + d.note : ''));
    L.push('');
    L.push('GENITORI E ALTRI SOGGETTI ADULTI');
    L.push('═══════════════════════════════════════');
    d.soggetti.forEach(function(sg){
      var r = (sg.ruolo || '').toLowerCase();
      if (r === 'figlio' || r === 'figlia' || r === 'minore' || r === 'figli') return;
      var righe = [sg.nome + (sg.ruolo ? ' (' + sg.ruolo + ')' : '') + (sg.eta ? ' · ' + sg.eta + ' anni' : '')];
      if (sg.enneatipo)            righe.push('enneatipo ' + sg.enneatipo);
      if (sg.stile_conflitto)      righe.push('stile di conflitto: ' + sg.stile_conflitto);
      if (sg.residenza)            righe.push('residenza: ' + sg.residenza);
      if (sg.disponibilita_oraria) righe.push('disponibilità oraria: ' + sg.disponibilita_oraria);
      if (sg.tempo_attuale_figli)  righe.push('tempo attuale con i figli: ' + sg.tempo_attuale_figli);
      if (sg.reddito_mensile)      righe.push('reddito ' + sg.reddito_mensile);
      L.push('• ' + righe.join(' · '));
    });
    var figli = d.soggetti.filter(function(sg){
      var r = (sg.ruolo || '').toLowerCase();
      return r === 'figlio' || r === 'figlia' || r === 'minore' || r === 'figli';
    });
    if (figli.length) {
      L.push('');
      L.push('FIGLI / MINORI COINVOLTI (' + figli.length + ')');
      L.push('═══════════════════════════════════════');
      figli.forEach(function(f){
        var righe = [f.nome + (f.eta ? ' (' + f.eta + ' anni)' : '')];
        if (f.tempo_attuale_figli) righe.push('tempo attuale con genitori: ' + f.tempo_attuale_figli);
        if (f.residenza) righe.push('residenza: ' + f.residenza);
        if (f.note) righe.push('note: ' + f.note);
        L.push('• ' + righe.join(' · '));
      });
    }
    var hasEcon = d.soggetti.some(function(sg){
      return sg.reddito_mensile || sg.patrimonio || sg.spese_fisse;
    });
    if (hasEcon) {
      L.push('');
      L.push('QUADRO ECONOMICO COMPLESSIVO');
      L.push('═══════════════════════════════════════');
      d.soggetti.forEach(function(sg){
        var righe = [];
        if (sg.reddito_mensile) righe.push('reddito mensile ' + sg.reddito_mensile);
        if (sg.patrimonio)      righe.push('patrimonio: ' + sg.patrimonio);
        if (sg.spese_fisse)     righe.push('spese fisse: ' + sg.spese_fisse);
        if (righe.length) L.push('• ' + sg.nome + ' — ' + righe.join('; '));
      });
    }
    L.push('');
    L.push('═══════════════════════════════════════');
    L.push('Quello che ti chiedo — costruisci un PIANO GENITORIALE FUNZIONANTE con queste sezioni:');
    L.push('');
    L.push('1) PRINCIPI GUIDA del piano (centralità del minore, bigenitorialità art. 337-ter c.c., continuità affettiva, riservatezza delle dinamiche di coppia rispetto ai figli).');
    L.push('2) RESIDENZA ABITUALE e CRITERI di scelta della casa familiare alla luce della Cass. SU 13/2014 e della giurisprudenza più recente; collocamento prevalente vs paritario.');
    L.push('3) TEMPI DI PERMANENZA settimanali, week-end alternati, festività (Natale, Pasqua, compleanni, ricorrenze), vacanze estive: proposta concreta con calendario tipo, adattata all’età dei figli e ai turni lavorativi dei genitori.');
    L.push('4) SCUOLA E SALUTE: chi accompagna, chi prende le decisioni di routine, chi quelle di maggiore importanza (artt. 337-ter c.c. e 316 c.c.). Modalità di scambio informazioni.');
    L.push('5) MANTENIMENTO ORDINARIO E STRAORDINARIO: proponi un assegno di mantenimento alla luce dei redditi indicati, dei tempi di permanenza e delle spese fisse, citando i parametri di Cassazione (capacità economica, tenore di vita pregresso, tempi di permanenza, età). Spese straordinarie: elenco esemplificativo, criteri di ripartizione, modalità di concertazione.');
    L.push('6) EVENTUALE ASSEGNO PER IL CONIUGE / ALIMENTI: valuta se ricorrono i presupposti dell’assegno divorzile (Cass. SU 18287/2018, funzione assistenziale + perequativo-compensativa) o dei meri alimenti (art. 433 c.c.); quantifica un range plausibile e indica eventi modificativi.');
    L.push('7) CLAUSOLE DI FLESSIBILITÀ e revisione periodica del piano (es. cadenza annuale, eventi modificativi).');
    L.push('8) GESTIONE DEI CONFLITTI: in base allo stile di conflitto e all’enneatipo dei genitori, suggerisci canali di comunicazione (app condivise, mediazione di ritorno, co-parenting coordinator).');
    L.push('9) TUTELA DEL MINORE: parole da non dire davanti ai figli, segnali di malessere a cui prestare attenzione, indicazione su quando attivare un ascolto del minore o coinvolgere il servizio sociale.');
    L.push('10) RED FLAG: se intravedi indicatori di violenza assistita, alienazione, manipolazione, sopruso economico, segnala come la mediazione debba essere sospesa o riformulata.');
    L.push('11) BOZZA OPERATIVA — chiudi con una proposta sintetica (15-25 righe) in linguaggio comprensibile per le parti, da usare come canovaccio del verbale di accordo.');
    L.push('');
    L.push('Risposta in italiano, professionale, con riferimenti normativi e giurisprudenziali essenziali. Cala le proposte sui dati del dossier, evita le generalità.');
    return L.join('\n');
  }

  function inviaPianoGenitoriale(dossierId) {
    var prompt = costruisciPromptPianoGenitoriale(dossierId);
    if (!prompt) { alert('Dossier non trovato o vuoto.'); return false; }
    try {
      sessionStorage.setItem('olismo_prompt_mediazione', prompt);
      location.href = CONSULENTE_MED_URL + '?profilo=mediazione&dossier=' + encodeURIComponent(dossierId) + '&tipo=piano';
      return true;
    } catch (e) {
      location.href = CONSULENTE_MED_URL + '?prompt=' + encodeURIComponent(prompt.slice(0, 7000));
      return true;
    }
  }

  function recuperaPrompt() {
    try {
      var params = new URLSearchParams(location.search);
      if (params.get('profilo') !== 'mediazione') return null;
      return sessionStorage.getItem('olismo_prompt_mediazione');
    } catch (e) { return null; }
  }

  // ─── Esporta JSON dossier ─────────────────────────────────────────
  function esportaJSON(dossierId) {
    var d = leggiDossier(dossierId);
    if (!d) return null;
    return JSON.stringify(d, null, 2);
  }
  function importaJSON(jsonStr) {
    try {
      var d = JSON.parse(jsonStr);
      if (!d.id) d.id = idDossier();
      if (!Array.isArray(d.soggetti)) d.soggetti = [];
      salvaDossier(d);
      return d;
    } catch (e) { return null; }
  }

  global.OlismoMediazione = {
    creaDossier: creaDossier,
    leggiDossier: leggiDossier,
    salvaDossier: salvaDossier,
    listaDossier: listaDossier,
    cancellaDossier: cancellaDossier,
    getCorrente: getCorrente,
    setCorrente: setCorrente,
    aggiungiSoggetto: aggiungiSoggetto,
    aggiornaSoggetto: aggiornaSoggetto,
    rimuoviSoggetto: rimuoviSoggetto,
    riempiDaProfiloPersonale: riempiDaProfiloPersonale,
    costruisciPrompt: costruisciPrompt,
    costruisciPromptPianoGenitoriale: costruisciPromptPianoGenitoriale,
    inviaAlConsulente: inviaAlConsulente,
    inviaPianoGenitoriale: inviaPianoGenitoriale,
    recuperaPrompt: recuperaPrompt,
    esportaJSON: esportaJSON,
    importaJSON: importaJSON
  };

})(window);
