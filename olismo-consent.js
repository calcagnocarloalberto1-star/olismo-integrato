/*
═══════════════════════════════════════════════════════════════════════
  COOKIE CONSENT BANNER GDPR · OLISMO INTEGRATO
  © 2026 Avv. Carlo Alberto Calcagno · olismo-integrato.it
  
  COME USARLO:
  Includi questo file in OGNI pagina HTML, meglio in fondo al <body>:
      <script src="olismo-consent.js"></script>
  
  Poi, per verificare prima di caricare script di terze parti:
      if(olismoConsent.has('ai')){ ... chiama l'AI ... }
      if(olismoConsent.has('analytics')){ ... carica Plausible/GA ... }
  
  Eventi:
      window.addEventListener('olismo-consent-change', function(e){
        console.log('Nuove preferenze:', e.detail);
      });
  
  API esposta globalmente:
      olismoConsent.has('ai')          → true/false
      olismoConsent.has('analytics')   → true/false
      olismoConsent.has('functional')  → true (sempre)
      olismoConsent.showBanner()       → riapre il banner
      olismoConsent.revoke()           → cancella consenso e riapre
═══════════════════════════════════════════════════════════════════════
*/

(function(){
  'use strict';

  const KEY = 'olismo-consent-v1';
  const EXPIRY_MONTHS = 12;

  // ─── Stato del consenso ─────────────────────────────────────────
  function loadConsent(){
    try {
      const raw = localStorage.getItem(KEY);
      if(!raw) return null;
      const data = JSON.parse(raw);
      // Verifica scadenza
      if(data.timestamp){
        const ageMs = Date.now() - data.timestamp;
        const maxMs = EXPIRY_MONTHS * 30 * 24 * 60 * 60 * 1000;
        if(ageMs > maxMs) return null;
      }
      return data;
    } catch(e){ return null; }
  }

  function saveConsent(prefs){
    const data = {
      functional: true,          // sempre true (necessari al funzionamento)
      ai: !!prefs.ai,            // AI di terze parti (Anthropic/OpenAI/Google)
      analytics: !!prefs.analytics, // analytics
      timestamp: Date.now(),
      version: 1
    };
    try { localStorage.setItem(KEY, JSON.stringify(data)); } catch(e){}
    window.dispatchEvent(new CustomEvent('olismo-consent-change', {detail: data}));
    return data;
  }

  // ─── API pubblica ───────────────────────────────────────────────
  window.olismoConsent = {
    has: function(kind){
      if(kind === 'functional') return true;
      const c = loadConsent();
      return !!(c && c[kind]);
    },
    get: function(){ return loadConsent(); },
    showBanner: function(){ showBanner(); },
    revoke: function(){
      try { localStorage.removeItem(KEY); } catch(e){}
      window.dispatchEvent(new CustomEvent('olismo-consent-change', {detail: null}));
      showBanner();
    }
  };

  // ─── Stili iniettati ────────────────────────────────────────────
  const css = `
    .olismo-consent-overlay{
      position:fixed;inset:0;background:rgba(42,37,32,.5);
      z-index:99998;backdrop-filter:blur(3px);
      animation:olismoConsentFadeIn .3s ease
    }
    @keyframes olismoConsentFadeIn{from{opacity:0}to{opacity:1}}
    .olismo-consent-banner{
      position:fixed;bottom:1rem;left:1rem;right:1rem;
      max-width:780px;margin:0 auto;z-index:99999;
      background:white;border:1px solid rgba(184,147,90,.3);
      border-radius:14px;box-shadow:0 18px 50px rgba(0,0,0,.20);
      font-family:'Outfit',-apple-system,system-ui,sans-serif;
      padding:1.4rem 1.5rem 1.2rem;
      animation:olismoConsentSlideUp .35s cubic-bezier(.2,.9,.3,1)
    }
    @keyframes olismoConsentSlideUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
    .olismo-consent-banner h3{
      margin:0 0 .5rem;font-family:'Cormorant Garamond',Georgia,serif;
      font-size:1.3rem;font-weight:600;color:#2a2520;
      display:flex;align-items:center;gap:.55rem
    }
    .olismo-consent-banner h3::before{
      content:'◉';color:#b8935a;font-size:1.3rem
    }
    .olismo-consent-banner p{
      margin:0 0 .9rem;font-size:.88rem;line-height:1.5;color:#4a4540
    }
    .olismo-consent-banner p strong{color:#2a2520}
    .olismo-consent-banner a{
      color:#b8935a;text-decoration:underline;font-weight:500
    }
    .olismo-consent-buttons{
      display:flex;gap:.55rem;flex-wrap:wrap;margin-top:1rem
    }
    .olismo-consent-btn{
      padding:.55rem 1.1rem;border-radius:8px;
      font-family:inherit;font-size:.84rem;font-weight:600;
      cursor:pointer;border:none;transition:all .15s ease;
      letter-spacing:.01em
    }
    .olismo-consent-btn-primary{
      background:linear-gradient(135deg,#b8935a,#c4a05a);color:white
    }
    .olismo-consent-btn-primary:hover{filter:brightness(1.06)}
    .olismo-consent-btn-secondary{
      background:transparent;color:#4a4540;
      border:1.5px solid rgba(184,147,90,.4)
    }
    .olismo-consent-btn-secondary:hover{
      background:rgba(184,147,90,.08);border-color:#b8935a
    }
    .olismo-consent-btn-text{
      background:transparent;color:#7a7268;
      text-decoration:underline;padding:.55rem .5rem
    }
    .olismo-consent-btn-text:hover{color:#b8935a}

    /* Pannello personalizzazione */
    .olismo-consent-prefs{
      margin-top:1rem;padding-top:1rem;
      border-top:1px solid rgba(184,147,90,.2);
      display:none
    }
    .olismo-consent-prefs.open{display:block;animation:olismoConsentFadeIn .2s}
    .olismo-consent-pref-row{
      display:flex;align-items:flex-start;gap:.8rem;
      padding:.7rem 0;border-bottom:1px solid rgba(184,147,90,.1)
    }
    .olismo-consent-pref-row:last-child{border-bottom:none}
    .olismo-consent-pref-row .txt{flex:1;font-size:.83rem;line-height:1.45}
    .olismo-consent-pref-row .txt .lab{
      font-weight:600;color:#2a2520;display:block;margin-bottom:.15rem
    }
    .olismo-consent-pref-row .txt .desc{color:#6a6258;font-size:.78rem}
    .olismo-consent-pref-row .locked{
      padding:.2rem .55rem;background:rgba(184,147,90,.15);
      color:#8a6a40;font-size:.72rem;border-radius:12px;font-weight:600
    }
    .olismo-consent-switch{
      position:relative;width:40px;height:22px;flex-shrink:0;margin-top:2px
    }
    .olismo-consent-switch input{opacity:0;width:0;height:0}
    .olismo-consent-switch .slider{
      position:absolute;inset:0;background:#ccc;border-radius:11px;
      cursor:pointer;transition:.2s
    }
    .olismo-consent-switch .slider::before{
      content:'';position:absolute;width:16px;height:16px;
      left:3px;bottom:3px;background:white;border-radius:50%;
      transition:.2s;box-shadow:0 2px 4px rgba(0,0,0,.2)
    }
    .olismo-consent-switch input:checked + .slider{background:#b8935a}
    .olismo-consent-switch input:checked + .slider::before{transform:translateX(18px)}

    @media(max-width:580px){
      .olismo-consent-banner{padding:1.1rem 1rem 1rem;bottom:.5rem;left:.5rem;right:.5rem}
      .olismo-consent-banner h3{font-size:1.15rem}
      .olismo-consent-banner p{font-size:.82rem}
      .olismo-consent-buttons{flex-direction:column}
      .olismo-consent-btn{width:100%}
    }
  `;

  function injectStyles(){
    if(document.getElementById('olismo-consent-css')) return;
    const s = document.createElement('style');
    s.id = 'olismo-consent-css';
    s.textContent = css;
    document.head.appendChild(s);
  }

  // ─── Costruzione del banner ─────────────────────────────────────
  function buildBanner(){
    const overlay = document.createElement('div');
    overlay.className = 'olismo-consent-overlay';
    overlay.id = 'olismo-consent-overlay';

    const banner = document.createElement('div');
    banner.className = 'olismo-consent-banner';
    banner.id = 'olismo-consent-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-labelledby', 'olismo-consent-title');
    banner.setAttribute('aria-describedby', 'olismo-consent-desc');
    banner.innerHTML = `
      <h3 id="olismo-consent-title">La tua privacy su Olismo Integrato</h3>
      <p id="olismo-consent-desc">
        Questo portale utilizza <strong>strumenti di intelligenza artificiale di terze parti</strong>
        (Anthropic, OpenAI, Google) per elaborare le tue domande ai consulenti AI.
        I messaggi che invii possono transitare sui server di questi fornitori
        per generare la risposta. Per rispettare la tua libertà di scelta, puoi accettare
        tutto, accettare solo il necessario o personalizzare. Leggi l'
        <a href="termini-uso.html" target="_blank" rel="noopener">informativa completa</a>.
      </p>

      <div class="olismo-consent-prefs" id="olismo-consent-prefs">
        <div class="olismo-consent-pref-row">
          <div class="txt">
            <span class="lab">Necessari al funzionamento</span>
            <span class="desc">
              Memorizzazione locale delle tue preferenze, progressi nei test,
              cronologia chat nel tuo browser. Nessun dato esce dal tuo dispositivo.
            </span>
          </div>
          <span class="locked">Sempre attivi</span>
        </div>

        <div class="olismo-consent-pref-row">
          <div class="txt">
            <span class="lab">Consulenti AI (Anthropic / OpenAI / Google)</span>
            <span class="desc">
              Necessari per far funzionare i 4 motori AI: Consulente Olistica,
              Consulente Mediatore, Empowerment, Matrice, Psicologia Analogica,
              FES e Bush. Se li disattivi, gli assistenti AI non saranno disponibili.
            </span>
          </div>
          <label class="olismo-consent-switch">
            <input type="checkbox" id="olismo-consent-ai" checked>
            <span class="slider"></span>
          </label>
        </div>

        <div class="olismo-consent-pref-row">
          <div class="txt">
            <span class="lab">Statistiche anonime</span>
            <span class="desc">
              Misurazione aggregata delle pagine più visitate, senza tracciare
              la persona (nessun cookie di profilazione, niente Google Analytics
              con cookie — solo statistiche anonimizzate GDPR-compliant).
            </span>
          </div>
          <label class="olismo-consent-switch">
            <input type="checkbox" id="olismo-consent-analytics">
            <span class="slider"></span>
          </label>
        </div>
      </div>

      <div class="olismo-consent-buttons">
        <button class="olismo-consent-btn olismo-consent-btn-primary" id="olismo-consent-accept-all">
          Accetta tutto
        </button>
        <button class="olismo-consent-btn olismo-consent-btn-secondary" id="olismo-consent-reject">
          Rifiuta non necessari
        </button>
        <button class="olismo-consent-btn olismo-consent-btn-text" id="olismo-consent-customize">
          Personalizza
        </button>
        <button class="olismo-consent-btn olismo-consent-btn-primary" id="olismo-consent-save" style="display:none;margin-left:auto">
          Salva preferenze
        </button>
      </div>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(banner);

    // Eventi
    const customizeBtn = document.getElementById('olismo-consent-customize');
    const prefsPanel = document.getElementById('olismo-consent-prefs');
    const saveBtn = document.getElementById('olismo-consent-save');

    customizeBtn.addEventListener('click', () => {
      prefsPanel.classList.add('open');
      customizeBtn.style.display = 'none';
      saveBtn.style.display = 'inline-block';
    });

    document.getElementById('olismo-consent-accept-all').addEventListener('click', () => {
      saveConsent({ai: true, analytics: true});
      closeBanner();
    });

    document.getElementById('olismo-consent-reject').addEventListener('click', () => {
      saveConsent({ai: false, analytics: false});
      closeBanner();
    });

    saveBtn.addEventListener('click', () => {
      saveConsent({
        ai: document.getElementById('olismo-consent-ai').checked,
        analytics: document.getElementById('olismo-consent-analytics').checked
      });
      closeBanner();
    });

    // Focus trap minimo
    setTimeout(() => {
      document.getElementById('olismo-consent-accept-all').focus();
    }, 100);
  }

  function closeBanner(){
    const banner = document.getElementById('olismo-consent-banner');
    const overlay = document.getElementById('olismo-consent-overlay');
    if(banner) banner.remove();
    if(overlay) overlay.remove();
  }

  function showBanner(){
    injectStyles();
    closeBanner();
    buildBanner();
  }

  // ─── Inizializzazione ───────────────────────────────────────────
  function init(){
    const c = loadConsent();
    if(!c){
      // Prima visita o consenso scaduto → mostra banner
      showBanner();
    }
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
