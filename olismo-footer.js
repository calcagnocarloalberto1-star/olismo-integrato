/*
═══════════════════════════════════════════════════════════════════════
  FOOTER LOADER DINAMICO · OLISMO INTEGRATO
  © 2026 Avv. Carlo Alberto Calcagno · olismo-integrato.it
  
  Carica il footer unificato (olismo-footer.html) in ogni pagina che
  contenga un elemento segnaposto:
      <div id="olismo-footer"></div>
  
  COME USARLO:
  In fondo al <body> di ogni pagina, prima di </body>:
      <div id="olismo-footer"></div>
      <script src="olismo-footer.js"></script>
  
  In caso di errore di rete, mostra un footer minimale di fallback
  con i link essenziali, così la pagina non resta senza footer.
═══════════════════════════════════════════════════════════════════════
*/
(function(){
  'use strict';

  // Evita doppia iniezione se lo script viene incluso due volte
  if(window.__olismoFooterLoaded) return;
  window.__olismoFooterLoaded = true;

  function loadFooter(){
    const mount = document.getElementById('olismo-footer');
    if(!mount) return;

    // Anti-cache: appendi un query param leggero basato sulla data (giornaliero)
    // Così se modifichi il footer, gli utenti vedono l'aggiornamento entro 24h
    // senza bisogno di hard reload forzato
    const today = new Date();
    const cacheKey = today.getFullYear() + '' + (today.getMonth()+1) + '' + today.getDate();

    fetch('olismo-footer.html?v=' + cacheKey)
      .then(function(r){
        if(!r.ok) throw new Error('HTTP ' + r.status);
        return r.text();
      })
      .then(function(html){
        // Estrai solo il contenuto <footer>...</footer>, scarta commenti e wrapper
        const match = html.match(/<footer[\s\S]*?<\/footer>/i);
        mount.outerHTML = match ? match[0] : html;
      })
      .catch(function(err){
        // Fallback: footer minimale se il fetch fallisce
        console.warn('[olismo-footer] fallback:', err.message);
        mount.outerHTML =
          '<footer style="background:#2a2520;color:#f9f5ef;padding:2rem 1.5rem;text-align:center;margin-top:3rem;font-family:Outfit,sans-serif">' +
          '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.3rem;margin-bottom:.5rem">Olismo Integrato</div>' +
          '<div style="font-size:.78rem;margin-bottom:1rem">' +
          '<a href="index.html" style="color:#b8935a;text-decoration:none;margin:0 .6rem">Home</a>' +
          '<a href="consulente.html" style="color:#b8935a;text-decoration:none;margin:0 .6rem">Consulente AI</a>' +
          '<a href="chi-sono.html" style="color:#b8935a;text-decoration:none;margin:0 .6rem">Chi sono</a>' +
          '<a href="prenota-consulenza.html" style="color:#b8935a;text-decoration:none;margin:0 .6rem">Prenota</a>' +
          '</div>' +
          '<div style="font-size:.7rem;color:rgba(249,245,239,.5)">© 2016-2026 Carlo Alberto Calcagno · olismo-integrato.it</div>' +
          '</footer>';
      });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', loadFooter);
  } else {
    loadFooter();
  }
})();
