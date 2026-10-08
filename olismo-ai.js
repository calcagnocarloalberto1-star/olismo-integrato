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
      olismoFormatReply(md)      → risposta AI in HTML sicuro (titoli, grassetti, elenchi, tabelle)
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
        body: JSON.stringify(Object.assign({
          model: opts.model || 'claude-haiku-4-5-20251001',
          max_tokens: opts.maxTokens || 1200,
          system: opts.system,
          messages: opts.messages
        }, opts.model ? {} : { temperature: 0.35 })), /* i modelli Sonnet 5.x rifiutano "temperature" */
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

  /* Risposta AI -> HTML sicuro: neutralizza l'HTML del modello, poi rende tabelle,
     titoli, grassetti, corsivi ed elenchi markdown. */
  window.olismoEscape = function (t) {
    return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  };
  window.olismoFormatReply = function (md) {
    var h = window.olismoEscape(md).replace(/\r\n?/g, '\n');
    if (typeof window.mdTables === 'function') { h = window.mdTables(h); }
    h = h.replace(/^#{1,3} +(.+)$/gm, '<h4>$1</h4>')
         .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
         .replace(/(^|[^*])\*([^*\n]+?)\*(?!\*)/g, '$1<em>$2</em>')
         .replace(/^-{3,}$/gm, '<hr>')
         .replace(/^[ \t]*[-•*] +(.+)$/gm, '<li>$1</li>')
         .replace(/^[ \t]*\d+[.)] +(.+)$/gm, '<li>$1</li>')
         .replace(/(?:<li>.*<\/li>\n?)+/g, function (m) { return '<ul>' + m.replace(/\n/g, '') + '</ul>'; });
    return h.split(/\n{2,}/).map(function (p) {
      p = p.trim();
      if (!p) { return ''; }
      if (/^<(h4|ul|div|hr|table)/.test(p)) { return p; }
      return '<p>' + p.replace(/\n/g, '<br>') + '</p>';
    }).join('');
  };

  /* Stile del contenuto formattato nelle bolle (solo pagine che caricano questo file) */
  try {
    var st = document.createElement('style');
    st.textContent = '.msg-bubble p{margin:0 0 .6em}.msg-bubble p:last-child,.msg-bubble ul:last-child{margin-bottom:0}' +
      '.msg-bubble ul{margin:.3em 0 .6em 1.2em;padding:0}.msg-bubble li{margin:0 0 .25em}' +
      '.msg-bubble h4{margin:.2em 0 .45em;font-size:1em;font-weight:600}' +
      '.msg-bubble hr{border:0;border-top:1px solid currentColor;opacity:.2;margin:.6em 0}';
    document.head.appendChild(st);
  } catch (e) { /* stile opzionale */ }

  window.olismoSetQuickDisabled = function (disabled) {
    document.querySelectorAll('.qq-btn, .quick-tag').forEach(function (b) {
      if ('disabled' in b) { b.disabled = !!disabled; }
      b.style.pointerEvents = disabled ? 'none' : '';
      b.style.opacity = disabled ? '0.5' : '';
    });
  };
})();
