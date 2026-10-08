/*
════════════════════════════════════════
  OLISMO-AI · chiamata condivisa al proxy Cloudflare
  © 2026 Avv. Carlo Alberto Calcagno · olismo-integrato.it

  Tutti i motori AI conversazionali passano da qui. La chiave API NON è
  nel browser: la inserisce il proxy lato server.

  Uso:
      const testo = await olismoAiChat({ system, messages, maxTokens });
  In caso di errore lancia un Error con .status (HTTP) o .name === 'AbortError'.
      olismoAiErrorMessage(err)  → testo italiano leggibile per l'utente
      olismoSetQuickDisabled(b)  → blocca/sblocca i pulsanti delle domande fisse
════════════════════════════════════════
*/
(function () {
  'use strict';

  var PROXY = 'https://olismo-proxy.calcagnocarloalberto1.workers.dev/v1/messages';

  window.olismoAiChat = async function (opts) {
    var ctrl = new AbortController();
    var timer = setTimeout(function () { ctrl.abort(); }, opts.timeoutMs || 90000);
    try {
      var res = await fetch(PROXY, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'anthropic-version': '2023-06-01' },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: opts.maxTokens || 1200,
          temperature: 0.35,
          system: opts.system,
          messages: opts.messages
        }),
        signal: ctrl.signal
      });
      var data = null;
      try { data = await res.json(); } catch (_) { /* corpo non JSON */ }
      if (!res.ok || !data || data.error) {
        var msg = (data && data.error && data.error.message) || ('Errore ' + res.status);
        var err = new Error(msg);
        err.status = res.status;
        throw err;
      }
      var block = (data.content || []).find(function (b) { return b.type === 'text' && b.text; });
      if (!block) { throw new Error('Risposta vuota dal consulente.'); }
      return block.text;
    } finally {
      clearTimeout(timer);
    }
  };

  window.olismoAiErrorMessage = function (e) {
    if (e && e.name === 'AbortError') {
      return 'Il consulente ha impiegato troppo tempo a rispondere. Riprova tra qualche secondo: la tua domanda è stata rimessa nella casella.';
    }
    if (e && e.status === 429) {
      return 'Ci sono molte richieste in questo momento. Attendi un minuto e riprova: la tua domanda è stata rimessa nella casella.';
    }
    if (e && e.status >= 500) {
      return 'Il servizio del consulente è momentaneamente non disponibile. Riprova tra poco: la tua domanda è stata rimessa nella casella.';
    }
    if (e && e.status) {
      return 'Il consulente non è raggiungibile (' + e.message + '). Riprova tra poco: la tua domanda è stata rimessa nella casella.';
    }
    return 'Errore di connessione. Verifica la rete e riprova: la tua domanda è stata rimessa nella casella.';
  };

  window.olismoSetQuickDisabled = function (disabled) {
    document.querySelectorAll('.qq-btn, .quick-tag').forEach(function (b) {
      if ('disabled' in b) { b.disabled = !!disabled; }
      b.style.pointerEvents = disabled ? 'none' : '';
      b.style.opacity = disabled ? '0.5' : '';
    });
  };
})();
