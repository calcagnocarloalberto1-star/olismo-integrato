/* olismo-export.js — Export universale risposte motori AI (PDF via stampa, Word via .doc)
   (c) 2026 Avv. Carlo Alberto Calcagno - olismo-integrato.it */
(function () {
  "use strict";
  if (window.__olismoExportLoaded) return;
  window.__olismoExportLoaded = true;

  var CONTAINER_IDS = ["cmResultBody","empResultBody","aiResultBody","chatMessages",
    "chat-messages","chatArea","fes-chat","bush-chat","diet-chat-msgs","diet-result"];
  var BUBBLE_SEL = ".msg-bubble, .sp-msg-bubble, .bubble, .message-bubble";
  var WRAP_SEL = ".msg, .sp-msg, .message, .chat-msg";

  function isVisible(el) {
    if (!el) return false;
    if (el.offsetParent !== null) return true;
    var st = window.getComputedStyle(el);
    return !!st && st.display !== "none" && st.visibility !== "hidden";
  }

  function findContainer() {
    for (var i = 0; i < CONTAINER_IDS.length; i++) {
      var el = document.getElementById(CONTAINER_IDS[i]);
      if (el && isVisible(el) && (el.textContent || "").trim().length > 0) return el;
    }
    return null;
  }

  function clean(node) {
    var c = node.cloneNode(true);
    var junk = c.querySelectorAll('.msg-avatar,[class*="avatar"],[class*="typing"],.spinner,button,.chat-pdf-btn,.msg-rating,.msg-time,svg,[id*="typing"],.olismo-export-bar');
    for (var i = 0; i < junk.length; i++) junk[i].remove();
    return c;
  }

  function roleOf(el) {
    var cl = (el.className || "") + " " + ((el.getAttribute && el.getAttribute("data-role")) || "");
    if (/\b(user|tu|utente)\b/i.test(cl)) return "Tu";
    return "Assistente AI";
  }

  function collect() {
    var cont = findContainer();
    if (!cont) return { empty: true };
    var wraps = cont.querySelectorAll(WRAP_SEL), parts = [], i;
    if (wraps.length) {
      for (i = 0; i < wraps.length; i++) {
        var w = wraps[i];
        var bubble = w.querySelector(BUBBLE_SEL) || w;
        var inner = clean(bubble).innerHTML.trim();
        if (!inner) continue;
        parts.push('<div class="exp-role">' + roleOf(w) + '</div>' + inner);
      }
    } else {
      var bubbles = cont.querySelectorAll(BUBBLE_SEL);
      if (bubbles.length) {
        for (i = 0; i < bubbles.length; i++) {
          var cb = clean(bubbles[i]).innerHTML.trim();
          if (cb) parts.push(cb);
        }
      } else {
        var whole = clean(cont).innerHTML.trim();
        if (whole) parts.push(whole);
      }
    }
    if (!parts.length) return { empty: true };
    return { html: parts.join("\n<hr class='exp-sep'>\n") };
  }

  function docTitle() {
    var h1 = document.querySelector("h1");
    var t = (h1 && h1.textContent.trim()) || document.title || "Consulenza";
    return t.replace(/\s*\|.*$/, "").replace(/[\\/:*?"<>]+/g, "").trim().slice(0, 80) || "Consulenza";
  }

  function stamp() {
    var d = new Date();
    return d.toLocaleDateString("it-IT") + " " + d.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" });
  }

  var CSS =
    "table{border-collapse:collapse;width:100%;margin:.7em 0}" +
    "th,td{border:1px solid #b9b0a0;padding:6px 10px;text-align:left;vertical-align:top;font-size:10.5pt}" +
    "th{background:#2d2a26;color:#f7f2ea;font-weight:600}tr:nth-child(even) td{background:#f7f4ee}" +
    "h1,h2,h3,h4{font-family:Georgia,serif;color:#1a1510;margin:.8em 0 .3em}" +
    "ul,ol{margin:.3em 0 .6em 1.2em}li{margin:.15em 0}strong{color:#1a1510}" +
    "code{background:#f0ece4;padding:1px 5px;border-radius:3px;font-family:Consolas,monospace}" +
    ".exp-role{font-family:Georgia,serif;font-weight:bold;text-transform:uppercase;letter-spacing:.08em;font-size:9pt;color:#8b6914;margin:1.1em 0 .25em;border-bottom:1px solid #e2d8c6;padding-bottom:2px}" +
    ".exp-sep{border:none;border-top:1px dashed #d8cdb8;margin:1.1em 0}" +
    ".exp-head{border-bottom:2px solid #b8935a;padding-bottom:8px;margin-bottom:16px}" +
    ".exp-head h1{margin:0;font-size:18pt}.exp-brand{font-size:9pt;color:#8b6914;letter-spacing:.12em;text-transform:uppercase}" +
    ".exp-foot{margin-top:22px;padding-top:8px;border-top:1px solid #e2d8c6;font-size:8.5pt;color:#7a7266}";

  function header(t) {
    return '<div class="exp-head"><div class="exp-brand">Olismo Integrato - Avv. Carlo Alberto Calcagno</div><h1>' +
      t + '</h1><div style="font-size:9pt;color:#7a7266">Generato il ' + stamp() + '</div></div>';
  }
  function footer() {
    return '<div class="exp-foot">Documento generato da olismo-integrato.it. I contenuti hanno finalita informativa e non sostituiscono una consulenza legale, medica o psicologica personalizzata.</div>';
  }

  function exportPDF() {
    var data = collect();
    if (data.empty) { alert("Nessuna risposta da esportare: fai prima una domanda al motore."); return; }
    var t = docTitle(), w = window.open("", "_blank");
    if (!w) { alert("Consenti le finestre pop-up per esportare in PDF."); return; }
    var d = '<!DOCTYPE html><html lang="it"><head><meta charset="utf-8"><title>' + t +
      '</title><style>@page{margin:1.6cm}body{font-family:Georgia,serif;font-size:11.5pt;line-height:1.55;color:#241f18;max-width:820px;margin:0 auto;padding:1cm}p{margin:.4em 0}' +
      CSS + '</style></head><body>' + header(t) + data.html + footer() +
      '<scr' + 'ipt>window.onload=function(){setTimeout(function(){window.focus();window.print();},350);};</scr' + 'ipt></body></html>';
    w.document.open(); w.document.write(d); w.document.close();
  }

  function exportWord() {
    var data = collect();
    if (data.empty) { alert("Nessuna risposta da esportare: fai prima una domanda al motore."); return; }
    var t = docTitle();
    var html = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="utf-8"><title>' +
      t + '</title><style>body{font-family:Calibri,Arial,sans-serif;font-size:11pt;color:#241f18}' + CSS +
      '</style></head><body>' + header(t) + data.html + footer() + '</body></html>';
    var blob = new Blob(["﻿", html], { type: "application/msword" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = t.replace(/\s+/g, "_") + ".doc";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 5000);
  }

  function ensureBar() {
    var bar = document.getElementById("olismo-export-bar");
    if (!bar) {
      bar = document.createElement("div");
      bar.id = "olismo-export-bar";
      bar.className = "olismo-export-bar";
      bar.style.cssText = "position:fixed;left:50%;transform:translateX(-50%);bottom:14px;z-index:9998;display:none;gap:8px;align-items:center;background:rgba(255,255,255,.94);border:1px solid #d8cdb8;border-radius:24px;padding:6px 8px;box-shadow:0 4px 16px rgba(0,0,0,.14)";
      var bs = "border:none;cursor:pointer;font-family:'Outfit',sans-serif;font-size:.78rem;font-weight:600;padding:.5rem .95rem;border-radius:18px;color:#fff;white-space:nowrap;";
      bar.innerHTML = '<span style="font-size:.7rem;color:#8b6914;font-weight:700;letter-spacing:.06em;padding-left:6px">ESPORTA</span>' +
        '<button id="olExpPdf" style="' + bs + 'background:#b8935a">PDF</button>' +
        '<button id="olExpWord" style="' + bs + 'background:#2d6a6a">Word</button>';
      document.body.appendChild(bar);
      document.getElementById("olExpPdf").addEventListener("click", exportPDF);
      document.getElementById("olExpWord").addEventListener("click", exportWord);
    }
    return bar;
  }

  function refresh() {
    var bar = ensureBar();
    var data = collect();
    bar.style.display = data.empty ? "none" : "flex";
  }

  window.olismoExportPDF = exportPDF;
  window.olismoExportWord = exportWord;

  function init() { ensureBar(); refresh(); setInterval(refresh, 2500); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
