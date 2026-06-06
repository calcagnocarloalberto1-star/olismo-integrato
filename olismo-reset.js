/**
 * OlismoReset — utility per azzerare i dati locali del portale.
 *
 * Cancella SOLO localStorage e sessionStorage relativi a Olismo Integrato:
 *  • profili dei motori (olismo_profile_*)
 *  • dossier di mediazione (olismo_mediazione_*)
 *  • chiavi legacy di olismo-core.js (quiz_*, frutti_*, vak_*, ecc.)
 *  • prompt temporanei (olismo_prompt_*)
 *
 * Non tocca cookie, IndexedDB, o dati di altri siti.
 * Espone:
 *   OlismoReset.elencaChiavi()  -> array delle chiavi che verrebbero cancellate
 *   OlismoReset.azzeraTutto()   -> cancella e ritorna conteggio
 *   OlismoReset.azzeraProfilo() -> solo profilo personale
 *   OlismoReset.azzeraMediazione() -> solo dossier mediazione
 *   OlismoReset.montaPulsante(opzioni) -> inserisce un bottone "Azzera dati"
 */
(function (global) {
  'use strict';

  // Prefissi che identificano dati Olismo
  var PREFIX_PROFILO = [
    'olismo_profile_',
    'olismo_profile_storico_',
    'olismo_prompt_',
    'olismo_'   // catch-all sicuro per il namespace
  ];
  var PREFIX_MEDIAZIONE = [
    'olismo_mediazione_'
  ];

  // Chiavi legacy di olismo-core.js (senza prefisso namespaced)
  var LEGACY_KEYS = [
    'quiz_enneagram_v1', 'quiz_enneagramma_v1', 'quiz_frutti_v1',
    'quiz_adattamenti_v1', 'quiz_egogramma_v1', 'quiz_carezze_v1',
    'quiz_copione_v1', 'quiz_transazioni_v1', 'quiz_matrice_v1',
    'quiz_chakra_v1', 'quiz_cristalli_v1', 'quiz_bach_v1', 'quiz_fes_v1',
    'quiz_bush_v1', 'quiz_diet_v1', 'quiz_vak_v1', 'quiz_violenza_v1',
    'quiz_psicoanalogica_v1', 'quiz_check_v1', 'quiz_empowerment_v1',
    'frutti_result', 'at_result', 'ego_result', 'vak_result',
    'check_result', 'trans_result', 'diet_result'
  ];
  var LEGACY_PREFIXES = ['quiz_', 'frutti_', 'at_result', 'ego_', 'vak_', 'check_', 'trans_', 'diet_'];

  function storageOk(s) {
    try { var t = '__olismo_reset_test__'; s.setItem(t,'1'); s.removeItem(t); return true; }
    catch (e) { return false; }
  }

  function _matchPrefix(key, prefixes) {
    for (var i = 0; i < prefixes.length; i++) {
      if (key.indexOf(prefixes[i]) === 0) return true;
    }
    return false;
  }

  function _raccogliChiavi(storage, includeProfilo, includeMediazione, includeLegacy) {
    if (!storageOk(storage)) return [];
    var trovate = [];
    for (var i = 0; i < storage.length; i++) {
      var k = storage.key(i);
      if (!k) continue;
      if (includeProfilo && _matchPrefix(k, PREFIX_PROFILO)) { trovate.push(k); continue; }
      if (includeMediazione && _matchPrefix(k, PREFIX_MEDIAZIONE)) { trovate.push(k); continue; }
      if (includeLegacy) {
        if (LEGACY_KEYS.indexOf(k) >= 0) { trovate.push(k); continue; }
        if (_matchPrefix(k, LEGACY_PREFIXES)) { trovate.push(k); continue; }
      }
    }
    return trovate;
  }

  function elencaChiavi() {
    var ls = _raccogliChiavi(global.localStorage, true, true, true);
    var ss = _raccogliChiavi(global.sessionStorage, true, true, true);
    return { localStorage: ls, sessionStorage: ss, totale: ls.length + ss.length };
  }

  function _esegui(includeProfilo, includeMediazione, includeLegacy) {
    var rimosse = 0;
    [global.localStorage, global.sessionStorage].forEach(function (s) {
      var keys = _raccogliChiavi(s, includeProfilo, includeMediazione, includeLegacy);
      keys.forEach(function (k) {
        try { s.removeItem(k); rimosse++; } catch (e) {}
      });
    });
    return rimosse;
  }

  function azzeraTutto() { return _esegui(true, true, true); }
  function azzeraProfilo() { return _esegui(true, false, true); }
  function azzeraMediazione() { return _esegui(false, true, false); }

  /**
   * Monta un pulsante "Azzera dati in cache" in fondo alla pagina o in un
   * container specifico. Mostra sempre una conferma esplicita prima di cancellare.
   *
   * opzioni:
   *   - container: selettore CSS dove inserire il bottone (default: nessuno = floating)
   *   - scope: 'tutto' | 'profilo' | 'mediazione' (default 'tutto')
   *   - testo: label del bottone
   *   - dopoReset: callback eseguita dopo l'azzeramento
   */
  function montaPulsante(opt) {
    opt = opt || {};
    var scope = opt.scope || 'tutto';
    var testo = opt.testo || '🗑️ Azzera dati in cache';
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = testo;
    btn.title = 'Cancella tutti i dati salvati localmente sul tuo browser per ricominciare da capo.';
    btn.style.cssText = (opt.style) || 'padding:.6rem 1rem;background:#fff;color:#9a3412;border:1px solid #fdba74;border-radius:8px;cursor:pointer;font-family:inherit;font-size:.85rem;font-weight:600;transition:all .2s';
    btn.onmouseover = function () { btn.style.background = '#fff7ed'; };
    btn.onmouseout = function () { btn.style.background = '#fff'; };
    btn.addEventListener('click', function () {
      var elenco = elencaChiavi();
      if (elenco.totale === 0) {
        alert('Nessun dato Olismo salvato sul browser. Niente da cancellare.');
        return;
      }
      var msg = '';
      if (scope === 'tutto') {
        msg = 'Confermi la cancellazione di TUTTI i dati Olismo salvati sul browser?\n\n' +
              '• ' + elenco.localStorage.length + ' chiavi in memoria persistente\n' +
              '• ' + elenco.sessionStorage.length + ' chiavi in memoria di sessione\n\n' +
              'Verranno cancellati: profilo personale, test compilati, dossier di mediazione, prompt salvati.\n\n' +
              'Operazione irreversibile. Procedo?';
      } else if (scope === 'profilo') {
        msg = 'Confermi la cancellazione del PROFILO PERSONALE (test, motori, prompt)?\n\nI dossier di mediazione restano intatti.\n\nProcedo?';
      } else if (scope === 'mediazione') {
        msg = 'Confermi la cancellazione di TUTTI i dossier di mediazione?\n\nIl profilo personale resta intatto.\n\nProcedo?';
      }
      if (!confirm(msg)) return;
      var rimosse;
      if (scope === 'profilo') rimosse = azzeraProfilo();
      else if (scope === 'mediazione') rimosse = azzeraMediazione();
      else rimosse = azzeraTutto();
      alert('Cancellate ' + rimosse + ' chiavi. Adesso puoi ricominciare con un nuovo profilo o un nuovo dossier.');
      if (typeof opt.dopoReset === 'function') {
        try { opt.dopoReset(rimosse); } catch (e) {}
      } else {
        // di default ricarica la pagina così tutti gli stati in-memory si resettano
        location.reload();
      }
    });

    if (opt.container) {
      var host = document.querySelector(opt.container);
      if (host) host.appendChild(btn);
    } else {
      // floating in basso a destra
      btn.style.position = 'fixed';
      btn.style.bottom = '16px';
      btn.style.right = '16px';
      btn.style.zIndex = '9998';
      btn.style.boxShadow = '0 4px 12px rgba(0,0,0,.12)';
      document.body.appendChild(btn);
    }
    return btn;
  }

  global.OlismoReset = {
    elencaChiavi: elencaChiavi,
    azzeraTutto: azzeraTutto,
    azzeraProfilo: azzeraProfilo,
    azzeraMediazione: azzeraMediazione,
    montaPulsante: montaPulsante
  };
})(window);
