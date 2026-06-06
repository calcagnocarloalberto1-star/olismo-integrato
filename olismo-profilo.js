/* ═══════════════════════════════════════════════════════════════════════
   OLISMO INTEGRATO — Sistema Profilo Integrato (motori → Consulente AI)
   © 2026 Avv. Carlo Alberto Calcagno · olismo-integrato.it

   Helper condiviso che permette a OGNI motore del portale di:
   1) Salvare il proprio risultato in localStorage in formato standard
   2) Esporre un pulsante "Invia al Consulente AI" coerente
   3) Permettere alla pagina "Il mio profilo" di aggregare tutto
   4) Consegnare al Consulente AI un mega-prompt integrato con un solo clic

   Compatibile con olismo-core.js (legge anche le chiavi storiche
   frutti/at/ego/vak/check/trans/diet via adattatore legacy).

   Convenzione localStorage:
     chiave  = `olismo_profile_<motore>`
     valore  = JSON.stringify({
                 motore, titolo, emoji, data,
                 sintesi, dettagli, prompt
               })

   I dati restano ESCLUSIVAMENTE sul dispositivo dell'utente.
═══════════════════════════════════════════════════════════════════════ */

(function (global) {
  'use strict';

  var KEY_PREFIX = 'olismo_profile_';
  var CONSULENTE_URL = 'consulente.html';

  // ─── Registro centrale dei motori (etichette, emoji, ordine) ──────
  var REGISTRO_MOTORI = {
    enneagramma:        { titolo: 'Enneagramma Evolutivo',         emoji: '🌀', ordine: 10 },
    egogramma:          { titolo: 'Egogramma di Berne (AT)',       emoji: '🎭', ordine: 20 },
    adattamenti:        { titolo: 'Adattamenti AT',                emoji: '🧩', ordine: 25 },
    copione:            { titolo: 'Copione di vita (AT)',          emoji: '📜', ordine: 26 },
    transazioni:        { titolo: 'Vettore comunicativo (AT)',     emoji: '↔️', ordine: 27 },
    carezze:            { titolo: 'Economia delle carezze',        emoji: '🤝', ordine: 28 },
    matrice:            { titolo: 'Matrice della svalutazione',    emoji: '◰', ordine: 29 },
    frutti:             { titolo: 'Test dei 9 Frutti (Enneagramma)', emoji: '🍎', ordine: 30 },
    chakra:             { titolo: 'Profilo Chakra',                emoji: '🪷', ordine: 40 },
    cristalli:          { titolo: 'Cristalli e pietre',            emoji: '💎', ordine: 50 },
    bach:               { titolo: 'Fiori di Bach',                 emoji: '🌸', ordine: 60 },
    fes:                { titolo: 'Fiori californiani (FES)',      emoji: '🌼', ordine: 61 },
    bush:               { titolo: 'Fiori australiani (Bush)',      emoji: '🌺', ordine: 62 },
    diet:               { titolo: 'Piano alimentare olistico',     emoji: '🌿', ordine: 65 },
    frequenze:          { titolo: 'Frequenze Solfeggio',           emoji: '🎵', ordine: 70 },
    vak:                { titolo: 'Sistema VAK',                   emoji: '👁️', ordine: 80 },
    violenza:           { titolo: 'Riconoscere la violenza',       emoji: '🛡', ordine: 90 },
    psicoanalogica:     { titolo: 'Psicologia Analogica',          emoji: '🎼', ordine: 95 },
    check:              { titolo: 'Check Integrato',               emoji: '✦', ordine: 100 },
    empowerment:        { titolo: 'Empowerment Mediazione',        emoji: '⚡', ordine: 110 },
    consulente_mediatore: { titolo: 'Consulente Mediatore AI',     emoji: '⚖️', ordine: 120 }
  };

  // ─── Adattatore legacy: chiavi storiche di olismo-core.js ─────────
  // olismo-core.js salva con strutture eterogenee senza campo 'sintesi'.
  // Qui le normalizziamo on-the-fly affinché compaiano nel profilo integrato.
  var REGISTRO_LEGACY = {
    frutti: { motore: 'frutti',      titolo: 'Test dei 9 Frutti (Enneagramma)',   emoji: '🍎', ordine: 30 },
    at:     { motore: 'adattamenti', titolo: 'Adattamenti di personalità AT',     emoji: '🧩', ordine: 25 },
    ego:    { motore: 'egogramma',   titolo: 'Egogramma di Berne',                emoji: '🎭', ordine: 20 },
    vak:    { motore: 'vak',         titolo: 'Canale VAK',                        emoji: '👁️', ordine: 80 },
    check:  { motore: 'check',       titolo: 'Check Integrato',                   emoji: '✦', ordine: 100 },
    trans:  { motore: 'transazioni', titolo: 'Vettore comunicativo (AT)',         emoji: '↔️', ordine: 27 },
    diet:   { motore: 'diet',        titolo: 'Piano alimentare olistico',         emoji: '🌿', ordine: 65 }
  };

  // ─── Utility ──────────────────────────────────────────────────────
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

  // ─── Costruzione sintesi/prompt per record legacy ─────────────────
  function _legacySintesi(key, d) {
    if (!d) return null;
    var bits = [];
    if (key === 'frutti') {
      if (d.tipo) bits.push('enneatipo T' + d.tipo + (d.nome ? ' (' + d.nome + ')' : ''));
      if (d.tipo2) bits.push('2° tipo T' + d.tipo2);
      if (d.ala) bits.push('ala dominante ' + d.ala);
    } else if (key === 'at') {
      if (d.primario) bits.push('primario ' + d.primario + (d.primario_pct ? ' (' + d.primario_pct + '%)' : ''));
      if (d.secondario) bits.push('secondario ' + d.secondario + (d.secondario_pct ? ' (' + d.secondario_pct + '%)' : ''));
      if (d.prevalenza) bits.push('prevalenza ' + d.prevalenza);
    } else if (key === 'ego') {
      if (d.dominante) bits.push('dominante ' + d.dominante + (d.dominante_val ? ' (' + d.dominante_val + '/10)' : ''));
      if (d.minimo) bits.push('più basso ' + d.minimo + (d.minimo_val ? ' (' + d.minimo_val + '/10)' : ''));
    } else if (key === 'vak') {
      if (d.canale) bits.push('canale dominante ' + d.canale + (d.pct ? ' (' + d.pct + '%)' : ''));
      if (d.secondo) bits.push('2° canale ' + d.secondo);
    } else if (key === 'check') {
      if (d.enneatipo) bits.push('enneatipo ipotesi T' + d.enneatipo);
      if (d.enn2) bits.push('2° enneatipo T' + d.enn2);
      if (d.vak) bits.push('canale VAK ' + d.vak);
      if (d.at_stato) bits.push('stato AT ' + d.at_stato);
      if (d.chakra_forte) bits.push('chakra di forza ' + d.chakra_forte);
      if (d.chakra_debole) bits.push('chakra da lavorare ' + d.chakra_debole);
      if (d.spinte && d.spinte.length) bits.push('spinte ' + d.spinte.join(', '));
      if (d.conf_stile) bits.push('stile conflitto ' + d.conf_stile);
    } else if (key === 'trans') {
      if (d.vettore_primario) bits.push('vettore primario ' + d.vettore_primario + (d.pct_primario ? ' (' + d.pct_primario + '%)' : ''));
      if (d.vettore_sec) bits.push('vettore secondario ' + d.vettore_sec);
    } else if (key === 'diet') {
      if (d.tipo) bits.push('piano per T' + d.tipo + (d.adattamento ? ' / ' + d.adattamento : ''));
    }
    if (!bits.length) return null;
    return { sintesi: bits.join('; '), data: d._date || '' };
  }

  function _legacyPrompt(key, d, sintesi) {
    var info = REGISTRO_LEGACY[key];
    var titolo = info ? info.titolo : key;
    var data = d && d._date ? ' del ' + d._date : '';
    return 'Profilo ' + titolo + data + ': ' + sintesi +
      '. Puoi commentare questo risultato in chiave olistica e collegarlo agli altri test del mio profilo?';
  }

  // ─── API: SALVA un risultato motore ───────────────────────────────
  function salva(motore, payload) {
    if (!storageOk() || !motore) return false;
    payload = payload || {};
    var reg = REGISTRO_MOTORI[motore] || { titolo: motore, emoji: '◉', ordine: 999 };
    var record = {
      motore: motore,
      titolo: payload.titolo || reg.titolo,
      emoji:  payload.emoji  || reg.emoji,
      data:   payload.data   || oggi(),
      sintesi:  String(payload.sintesi || '').slice(0, 800),
      dettagli: payload.dettagli || null,
      prompt:   String(payload.prompt || payload.sintesi || '').slice(0, 2000)
    };
    try {
      localStorage.setItem(KEY_PREFIX + motore, JSON.stringify(record));
      try { global.dispatchEvent(new CustomEvent('olismo:profilo:aggiornato', { detail: record })); } catch (e) {}
      return true;
    } catch (e) { return false; }
  }

  // ─── API: LEGGI un singolo motore ─────────────────────────────────
  function leggi(motore) {
    if (!storageOk()) return null;
    var raw = localStorage.getItem(KEY_PREFIX + motore);
    var rec = raw ? safeJSON(raw) : null;
    if (rec && rec.sintesi) return rec;
    // Tenta legacy: motore corrisponde a una chiave legacy?
    var legacyKey = null;
    Object.keys(REGISTRO_LEGACY).forEach(function (lk) {
      if (REGISTRO_LEGACY[lk].motore === motore) legacyKey = lk;
    });
    if (legacyKey) {
      var legRaw = localStorage.getItem(KEY_PREFIX + legacyKey);
      var legRec = legRaw ? safeJSON(legRaw) : null;
      if (legRec) {
        var s = _legacySintesi(legacyKey, legRec);
        if (s) {
          var info = REGISTRO_LEGACY[legacyKey];
          return {
            motore: info.motore, titolo: info.titolo, emoji: info.emoji,
            data: s.data, sintesi: s.sintesi,
            prompt: _legacyPrompt(legacyKey, legRec, s.sintesi),
            dettagli: legRec
          };
        }
      }
    }
    return null;
  }

  // ─── API: LEGGI TUTTI i motori compilati ──────────────────────────
  function leggiTutti() {
    if (!storageOk()) return [];
    var out = [];
    var seen = {};
    for (var i = 0; i < localStorage.length; i++) {
      var k = localStorage.key(i);
      if (!k || k.indexOf(KEY_PREFIX) !== 0) continue;
      var keyShort = k.substring(KEY_PREFIX.length);
      var rec = safeJSON(localStorage.getItem(k));
      if (!rec) continue;
      // Formato nuovo
      if (rec.sintesi && rec.motore) {
        if (seen[rec.motore]) continue;
        out.push(rec);
        seen[rec.motore] = true;
        continue;
      }
      // Formato legacy
      if (REGISTRO_LEGACY[keyShort]) {
        var info = REGISTRO_LEGACY[keyShort];
        if (seen[info.motore]) continue;
        var s = _legacySintesi(keyShort, rec);
        if (!s) continue;
        out.push({
          motore: info.motore, titolo: info.titolo, emoji: info.emoji,
          data: s.data, sintesi: s.sintesi,
          prompt: _legacyPrompt(keyShort, rec, s.sintesi),
          dettagli: rec
        });
        seen[info.motore] = true;
      }
    }
    out.sort(function (a, b) {
      var oa = (REGISTRO_MOTORI[a.motore] || {}).ordine || 999;
      var ob = (REGISTRO_MOTORI[b.motore] || {}).ordine || 999;
      return oa - ob;
    });
    return out;
  }

  // ─── API: CANCELLA un motore ──────────────────────────────────────
  function cancella(motore) {
    if (!storageOk()) return false;
    try {
      localStorage.removeItem(KEY_PREFIX + motore);
      // Cancella anche eventuale chiave legacy associata
      Object.keys(REGISTRO_LEGACY).forEach(function (lk) {
        if (REGISTRO_LEGACY[lk].motore === motore) {
          try { localStorage.removeItem(KEY_PREFIX + lk); } catch (e) {}
        }
      });
      return true;
    } catch (e) { return false; }
  }

  // ─── API: CANCELLA TUTTI i profili ────────────────────────────────
  function cancellaTutti() {
    if (!storageOk()) return false;
    var keys = [];
    for (var i = 0; i < localStorage.length; i++) {
      var k = localStorage.key(i);
      if (k && k.indexOf(KEY_PREFIX) === 0) keys.push(k);
    }
    keys.forEach(function (k) { try { localStorage.removeItem(k); } catch (e) {} });
    return true;
  }

  // ─── API: COSTRUISCI il mega-prompt integrato ─────────────────────
  function costruisciPromptIntegrato() {
    var tutti = leggiTutti();
    if (!tutti.length) return null;
    var lines = [];
    lines.push('Ciao Consulente. Ti invio il mio profilo olistico integrato, raccolto dai motori che ho compilato sul portale Olismo Integrato. Per favore leggi tutti i dati insieme — non uno alla volta — e dammi una consulenza che metta in relazione gli aspetti psicologici, energetici e comportamentali. Evidenzia: risorse principali, nodi su cui lavorare, suggerimenti pratici (con eventuali fiori, cristalli, frequenze, esercizi AT) e — se pertinente — implicazioni per la gestione del conflitto o di una mediazione in corso.');
    lines.push('');
    lines.push('PROFILI COMPILATI (' + tutti.length + ')');
    lines.push('═══════════════════════════════════════');
    tutti.forEach(function (p, idx) {
      lines.push('');
      lines.push((idx + 1) + '. ' + (p.emoji || '◉') + ' ' + (p.titolo || p.motore).toUpperCase() + '  (' + (p.data || '') + ')');
      lines.push('───────────────────────────────────────');
      lines.push(p.sintesi || '(nessuna sintesi)');
    });
    lines.push('');
    lines.push('═══════════════════════════════════════');
    lines.push('Grazie. Procedi con la consulenza integrata.');
    return lines.join('\n');
  }

  // ─── API: INVIA TUTTO al Consulente AI ────────────────────────────
  function inviaTuttoAlConsulente() {
    var prompt = costruisciPromptIntegrato();
    if (!prompt) {
      alert('Non hai ancora compilato nessun test sul portale. Comincia da uno strumento di lettura dal menu principale.');
      return;
    }
    try {
      sessionStorage.setItem('olismo_prompt_integrato', prompt);
      location.href = CONSULENTE_URL + '?profilo=integrato';
    } catch (e) {
      location.href = CONSULENTE_URL + '?prompt=' + encodeURIComponent(prompt.slice(0, 7000));
    }
  }

  // ─── API: invia un singolo profilo al Consulente ──────────────────
  function inviaProfiloAlConsulente(motore) {
    var p = leggi(motore);
    if (!p) { alert('Profilo non disponibile.'); return; }
    var promptText = p.prompt || ('Analizza il mio profilo ' + p.titolo + ':\n\n' + p.sintesi);
    try {
      sessionStorage.setItem('olismo_prompt_singolo', promptText);
      location.href = CONSULENTE_URL + '?profilo=' + encodeURIComponent(motore);
    } catch (e) {
      location.href = CONSULENTE_URL + '?prompt=' + encodeURIComponent(promptText.slice(0, 7000));
    }
  }

  // ─── API: il Consulente legge il prompt all'arrivo ────────────────
  function recuperaPromptDaURL() {
    var params = new URLSearchParams(location.search);
    var modo = params.get('profilo');
    if (!modo) return null;
    try {
      if (modo === 'integrato') return sessionStorage.getItem('olismo_prompt_integrato');
      return sessionStorage.getItem('olismo_prompt_singolo');
    } catch (e) { return null; }
  }

  // ─── API: monta CTA "Invia al Consulente" ─────────────────────────
  function montaPulsanteConsulente(opts) {
    opts = opts || {};
    var motore = opts.motore;
    if (!motore) return;
    var container = document.querySelector(opts.containerSelector || '#olismo-cta-consulente');
    if (!container) {
      container = document.createElement('div');
      container.id = 'olismo-cta-consulente';
      container.style.cssText = 'margin:2.5rem auto 1.5rem;padding:1.5rem;max-width:720px;text-align:center;background:linear-gradient(135deg,#fff8e8,#fefaf0);border:1px solid #d4af37;border-radius:12px;box-shadow:0 2px 12px rgba(180,140,30,.08)';
      document.body.appendChild(container);
    }
    container.innerHTML =
      '<div style="font-family:\'Cormorant Garamond\',Georgia,serif;font-size:1.2rem;color:#8b6914;margin-bottom:.4rem">✦ Vuoi un\'analisi personalizzata?</div>' +
      '<p style="font-family:\'EB Garamond\',Georgia,serif;font-size:1rem;color:#444;margin:0 auto 1rem;max-width:560px;line-height:1.55">' +
      'Invia questo risultato al <strong>Consulente AI</strong> per un commento approfondito. ' +
      'Puoi anche andare a <a href="il-mio-profilo.html" style="color:#b8860b">Il mio profilo</a> ' +
      'e chiedere una <strong>consulenza integrata</strong> su tutti i test che hai compilato.' +
      '</p>' +
      '<div style="display:flex;gap:.6rem;flex-wrap:wrap;justify-content:center">' +
      '<button type="button" data-olismo-invia="' + motore + '" ' +
      'style="display:inline-flex;align-items:center;gap:.5rem;padding:.75rem 1.5rem;background:#b8860b;color:#fff;border:none;border-radius:24px;font-family:\'Outfit\',system-ui,sans-serif;font-size:.95rem;font-weight:600;cursor:pointer;transition:opacity .2s">' +
      '🤖 Invia al Consulente AI</button>' +
      '<a href="il-mio-profilo.html" ' +
      'style="display:inline-flex;align-items:center;gap:.5rem;padding:.75rem 1.5rem;background:transparent;color:#b8860b;border:1.5px solid #b8860b;border-radius:24px;font-family:\'Outfit\',system-ui,sans-serif;font-size:.95rem;font-weight:600;text-decoration:none">' +
      '📊 Il mio profilo</a>' +
      '</div>';
    var btn = container.querySelector('[data-olismo-invia]');
    if (btn) btn.addEventListener('click', function () { inviaProfiloAlConsulente(motore); });
  }

  // ─── Espone l'API globale ─────────────────────────────────────────
  global.OlismoProfilo = {
    salva: salva,
    leggi: leggi,
    leggiTutti: leggiTutti,
    cancella: cancella,
    cancellaTutti: cancellaTutti,
    inviaTuttoAlConsulente: inviaTuttoAlConsulente,
    inviaProfiloAlConsulente: inviaProfiloAlConsulente,
    costruisciPromptIntegrato: costruisciPromptIntegrato,
    recuperaPromptDaURL: recuperaPromptDaURL,
    montaPulsanteConsulente: montaPulsanteConsulente,
    registro: REGISTRO_MOTORI
  };

})(window);
