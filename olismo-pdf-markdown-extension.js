/*!
 * olismo-pdf-markdown-extension.js
 * Estensione per olismo-integrato.it · PDF Chat con rendering Markdown
 * © 2026 Carlo Alberto Calcagno
 *
 * USO: carica questo file DOPO olismo-core.js:
 *   <script src="olismo-core.js"></script>
 *   <script src="olismo-lullian-extension.js"></script>  (opzionale, per la ruota)
 *   <script src="olismo-pdf-markdown-extension.js"></script>
 *
 * Sostituisce interamente window.exportChatPdf con una versione che:
 * - Renderizza il Markdown (#, ##, **, liste, tabelle, ---, ```)
 * - Pulisce tutte le emoji/unicode in modo completo
 * - Ha layout pulito con titoli colorati, tabelle, paragrafi ariosi
 */

(function(){
  'use strict';

  if (typeof window === 'undefined') return;

  // ══════════════════════════════════════════════════════════════
  // SANITIZER COMPLETO per Helvetica/Latin-1 (jsPDF)
  // ══════════════════════════════════════════════════════════════
  function sanitize(s) {
    if (s == null) return '';
    s = String(s);

    // Emoji e simboli comuni → equivalenti Latin-1
    var map = {
      '\u00A9':'(c)', '\u00AE':'(R)',
      '\u2013':'-', '\u2014':'-', '\u2018':"'", '\u2019':"'",
      '\u201C':'"', '\u201D':'"', '\u2026':'...',
      '\u2022':'·', '\u2023':'>', '\u25CF':'·', '\u25CB':'o',
      '\u2713':'v', '\u2714':'v', '\u2717':'x', '\u2718':'x',
      '\u2605':'*', '\u2606':'*', '\u2736':'*', '\u2738':'*',
      '\u2665':'<3', '\u266A':'~', '\u266B':'~',
      '\u2190':'<-', '\u2192':'->', '\u2194':'<->',
      '\u21D2':'=>', '\u21D4':'<=>',
      '\u00B7':'·', '\u00AB':'«', '\u00BB':'»'
    };
    for (var k in map) s = s.split(k).join(map[k]);

    // Strip ogni carattere oltre Latin-1 (emoji, CJK, ecc.)
    s = s.replace(/[^\x00-\xFF]/g, '');

    return s;
  }

  // ══════════════════════════════════════════════════════════════
  // PARSER MARKDOWN → blocchi strutturati
  // ══════════════════════════════════════════════════════════════
  // Input: stringa Markdown
  // Output: array di blocchi { type, ... }
  //   type: 'h1' | 'h2' | 'h3' | 'p' | 'ul' | 'ol' | 'table' | 'hr' | 'code' | 'blank'
  function parseMarkdown(text) {
    if (!text) return [];

    // Normalizza line endings
    text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    var lines = text.split('\n');
    var blocks = [];
    var i = 0;

    while (i < lines.length) {
      var line = lines[i];
      var trimmed = line.trim();

      // Linea vuota
      if (trimmed === '') {
        blocks.push({ type: 'blank' });
        i++;
        continue;
      }

      // HR: --- o ___ o ***
      if (/^(-{3,}|_{3,}|\*{3,})$/.test(trimmed)) {
        blocks.push({ type: 'hr' });
        i++;
        continue;
      }

      // Code block ```
      if (/^```/.test(trimmed)) {
        var codeLines = [];
        i++;
        while (i < lines.length && !/^```/.test(lines[i].trim())) {
          codeLines.push(lines[i]);
          i++;
        }
        if (i < lines.length) i++; // skip closing ```
        blocks.push({ type: 'code', content: codeLines.join('\n') });
        continue;
      }

      // Heading # ## ###
      var hMatch = trimmed.match(/^(#{1,6})\s+(.+)$/);
      if (hMatch) {
        var level = hMatch[1].length;
        var txt = hMatch[2].replace(/\s*#+\s*$/, ''); // strip trailing #
        blocks.push({
          type: 'h' + Math.min(level, 3),
          content: txt
        });
        i++;
        continue;
      }

      // Tabella: riga che inizia e finisce con |, seguita da riga separatrice |---|
      if (trimmed.startsWith('|') && trimmed.endsWith('|') &&
          i + 1 < lines.length &&
          /^\|[\s:\-|]+\|$/.test(lines[i+1].trim())) {
        // Parse tabella
        var header = trimmed.slice(1, -1).split('|').map(function(c){ return c.trim(); });
        i += 2; // skip header + separator
        var rows = [];
        while (i < lines.length) {
          var rTrim = lines[i].trim();
          if (!rTrim.startsWith('|') || !rTrim.endsWith('|')) break;
          rows.push(rTrim.slice(1, -1).split('|').map(function(c){ return c.trim(); }));
          i++;
        }
        blocks.push({ type: 'table', header: header, rows: rows });
        continue;
      }

      // Lista non ordinata: - * +
      var ulMatch = trimmed.match(/^[-*+]\s+(.+)$/);
      if (ulMatch) {
        var items = [];
        while (i < lines.length) {
          var lt = lines[i].trim();
          var m = lt.match(/^[-*+]\s+(.+)$/);
          if (!m) break;
          items.push(m[1]);
          i++;
        }
        blocks.push({ type: 'ul', items: items });
        continue;
      }

      // Lista ordinata: 1. 2. ...
      var olMatch = trimmed.match(/^\d+[.)]\s+(.+)$/);
      if (olMatch) {
        var oitems = [];
        while (i < lines.length) {
          var lt2 = lines[i].trim();
          var m2 = lt2.match(/^\d+[.)]\s+(.+)$/);
          if (!m2) break;
          oitems.push(m2[1]);
          i++;
        }
        blocks.push({ type: 'ol', items: oitems });
        continue;
      }

      // Paragrafo: accumula righe fino a vuoto o blocco speciale
      var paraLines = [];
      while (i < lines.length) {
        var pt = lines[i].trim();
        if (pt === '') break;
        if (/^(#{1,6}\s|[-*+]\s|\d+[.)]\s|```|---|___|\*\*\*)/.test(pt)) break;
        if (pt.startsWith('|') && pt.endsWith('|')) break;
        paraLines.push(lines[i]);
        i++;
      }
      if (paraLines.length) {
        blocks.push({ type: 'p', content: paraLines.join(' ').replace(/\s+/g, ' ').trim() });
      }
    }

    return blocks;
  }

  // ══════════════════════════════════════════════════════════════
  // RENDER inline: **bold**, *italic*, `code`
  // Restituisce array di segmenti { text, bold, italic, mono }
  // ══════════════════════════════════════════════════════════════
  function parseInline(text) {
    var segments = [];
    var i = 0;
    var cur = '';
    var state = { bold: false, italic: false, mono: false };

    function flush() {
      if (cur !== '') {
        segments.push({
          text: cur,
          bold: state.bold,
          italic: state.italic,
          mono: state.mono
        });
        cur = '';
      }
    }

    while (i < text.length) {
      // **bold**
      if (text.substr(i, 2) === '**') {
        flush();
        state.bold = !state.bold;
        i += 2;
        continue;
      }
      // `code`
      if (text[i] === '`') {
        flush();
        state.mono = !state.mono;
        i++;
        continue;
      }
      // *italic* (solo se non è parte di **)
      if (text[i] === '*' && text[i-1] !== '*' && text[i+1] !== '*') {
        flush();
        state.italic = !state.italic;
        i++;
        continue;
      }
      cur += text[i];
      i++;
    }
    flush();
    return segments;
  }

  // ══════════════════════════════════════════════════════════════
  // EXPORT CHAT PDF (versione con rendering Markdown)
  // ══════════════════════════════════════════════════════════════
  async function exportChatPdfMarkdown() {
    var btn = document.querySelector('.chat-pdf-btn');
    if (!window.chatHistory || window.chatHistory.length < 2) {
      alert('Nessuna conversazione da scaricare. Invia almeno un messaggio prima.');
      return;
    }

    if (btn) {
      btn.classList.add('loading');
      btn.textContent = 'Generazione...';
    }

    try {
      // Wait jsPDF
      var waited = 0;
      while (typeof window.jspdf === 'undefined' && typeof window.jsPDF === 'undefined' && waited < 30) {
        await new Promise(function(r){ setTimeout(r, 100); });
        waited++;
      }
      if (typeof window.jspdf === 'undefined' && typeof window.jsPDF === 'undefined') {
        throw new Error('jsPDF non disponibile.');
      }
      var jsPDFClass = (window.jspdf && window.jspdf.jsPDF) || window.jsPDF;

      // Palette (coerente con il sito)
      var GOLD       = [184, 147, 90];
      var GOLD_LIGHT = [245, 236, 216];
      var GOLD_PALE  = [251, 247, 239];
      var IVORY      = [249, 245, 239];
      var IVORY2     = [243, 237, 227];
      var INK        = [42, 37, 32];
      var INK2       = [74, 69, 64];
      var INK3       = [122, 114, 104];
      var WHITE      = [255, 255, 255];

      var doc = new jsPDFClass({ orientation: 'portrait', unit: 'mm', format: 'a4' });

      var PW = doc.internal.pageSize.getWidth();   // 210
      var PH = doc.internal.pageSize.getHeight();  // 297
      var ML = 18, MR = 18, MT = 32, MB = 22;
      var CW = PW - ML - MR;

      var page = 1;
      var y = 0;

      function setFont(style, size, rgb) {
        doc.setFont('helvetica', style || 'normal');
        doc.setFontSize(size || 10);
        doc.setTextColor(rgb[0], rgb[1], rgb[2]);
      }

      function drawHeader() {
        doc.setFillColor(GOLD[0], GOLD[1], GOLD[2]);
        doc.rect(0, 0, PW, 7, 'F');
        doc.setFillColor(IVORY[0], IVORY[1], IVORY[2]);
        doc.rect(0, 7, PW, 19, 'F');

        // Se esiste la ruota lulliana la usiamo, altrimenti cerchio oro con A
        if (typeof window.drawLullianWheel === 'function') {
          window.drawLullianWheel(doc, ML + 6, 16.5, 6, {
            gold: GOLD, goldLight: GOLD_LIGHT, ink: INK,
            labels: 'lettere', caption: false
          });
        } else {
          doc.setFillColor(GOLD[0], GOLD[1], GOLD[2]);
          doc.circle(ML + 6, 16.5, 5, 'F');
          doc.setFont('times', 'italic');
          doc.setFontSize(10);
          doc.setTextColor(255, 255, 255);
          doc.text('A', ML + 6, 18.5, { align: 'center' });
        }

        setFont('bold', 13, INK);
        doc.text('OLISMO INTEGRATO', ML + 16, 15);
        setFont('normal', 7.5, INK3);
        doc.text('Consulente Olistica AI  ·  Carlo Alberto Calcagno', ML + 16, 20);
        setFont('normal', 7, GOLD);
        doc.text('olismo-integrato.it', PW - MR, 20, { align: 'right' });

        doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
        doc.setLineWidth(0.3);
        doc.line(ML, 26, PW - MR, 26);
      }

      function drawFooter() {
        var fy = PH - 14;
        doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
        doc.setLineWidth(0.2);
        doc.line(ML, fy, PW - MR, fy);

        setFont('normal', 7, INK3);
        var dateStr = new Date().toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' });
        doc.text('olismo-integrato.it', ML, fy + 5);
        doc.text('Pag. ' + page, PW / 2, fy + 5, { align: 'center' });
        doc.text(sanitize(dateStr), PW - MR, fy + 5, { align: 'right' });

        setFont('italic', 6.5, [180, 175, 170]);
        doc.text(sanitize('I contenuti hanno finalità divulgativa. (c) Carlo Alberto Calcagno'),
                 PW / 2, fy + 9.5, { align: 'center' });
      }

      function checkBreak(needed) {
        if (y + needed > PH - MB) {
          drawFooter();
          doc.addPage();
          page++;
          drawHeader();
          y = MT;
        }
      }

      // Render una linea inline (segmenti bold/italic/mono) con wrapping
      function renderInlineLine(segments, x, maxW, color, baseSize) {
        // Prima costruiamo una sequenza di "parole" con stili, poi wrap
        var words = [];
        segments.forEach(function(seg) {
          var parts = sanitize(seg.text).split(/(\s+)/);
          parts.forEach(function(p) {
            if (p === '') return;
            words.push({
              text: p,
              bold: seg.bold,
              italic: seg.italic,
              mono: seg.mono,
              isSpace: /^\s+$/.test(p)
            });
          });
        });

        var lineH = baseSize * 0.45;
        var curX = x;
        var lineBuf = [];
        var allLines = [];

        function measureWord(w) {
          var style = w.bold ? (w.italic ? 'bolditalic' : 'bold') : (w.italic ? 'italic' : 'normal');
          var font = w.mono ? 'courier' : 'helvetica';
          doc.setFont(font, style);
          doc.setFontSize(baseSize);
          return doc.getTextWidth(w.text);
        }

        function pushLine() {
          if (lineBuf.length) {
            allLines.push(lineBuf);
            lineBuf = [];
          }
          curX = x;
        }

        words.forEach(function(w) {
          var wWidth = measureWord(w);
          if (curX - x + wWidth > maxW && !w.isSpace) {
            pushLine();
            if (w.isSpace) return;
          }
          lineBuf.push({ word: w, width: wWidth });
          curX += wWidth;
        });
        pushLine();

        // Disegna le linee
        allLines.forEach(function(line) {
          checkBreak(lineH + 1);
          var drawX = x;
          line.forEach(function(piece) {
            var w = piece.word;
            var style = w.bold ? (w.italic ? 'bolditalic' : 'bold') : (w.italic ? 'italic' : 'normal');
            var font = w.mono ? 'courier' : 'helvetica';
            doc.setFont(font, style);
            doc.setFontSize(baseSize);
            if (w.mono) {
              // sfondo grigio chiaro per mono
              doc.setFillColor(245, 242, 237);
              doc.rect(drawX - 0.3, y - baseSize * 0.32, piece.width + 0.6, baseSize * 0.45, 'F');
              doc.setTextColor(INK2[0], INK2[1], INK2[2]);
            } else {
              doc.setTextColor(color[0], color[1], color[2]);
            }
            doc.text(w.text, drawX, y);
            drawX += piece.width;
          });
          y += lineH;
        });
      }

      function renderBlocks(blocks, textColor, insideBubble) {
        var baseSize = 9;
        var bubbleX = ML;
        var bubbleW = CW;
        // Se dentro bolla, usa margine interno
        var contentX = insideBubble ? bubbleX + 3 : bubbleX;
        var contentW = insideBubble ? bubbleW - 6 : bubbleW;

        blocks.forEach(function(block, idx) {
          switch (block.type) {
            case 'blank':
              y += 2;
              break;

            case 'hr':
              checkBreak(4);
              doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
              doc.setLineWidth(0.3);
              doc.line(contentX + 10, y, contentX + contentW - 10, y);
              y += 4;
              break;

            case 'h1':
              checkBreak(9);
              y += 2;
              setFont('bold', 13, GOLD);
              doc.text(sanitize(block.content), contentX, y);
              y += 5.5;
              doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
              doc.setLineWidth(0.4);
              doc.line(contentX, y - 2, contentX + 18, y - 2);
              y += 1;
              break;

            case 'h2':
              checkBreak(8);
              y += 2;
              setFont('bold', 11, GOLD);
              doc.text(sanitize(block.content), contentX, y);
              y += 5;
              break;

            case 'h3':
              checkBreak(7);
              y += 1.5;
              setFont('bold', 9.5, INK);
              doc.text(sanitize(block.content), contentX, y);
              y += 4.5;
              break;

            case 'p':
              checkBreak(5);
              var pSegs = parseInline(block.content);
              renderInlineLine(pSegs, contentX, contentW, textColor, baseSize);
              y += 1.5;
              break;

            case 'ul':
              block.items.forEach(function(item) {
                checkBreak(5);
                setFont('bold', baseSize, GOLD);
                doc.text('·', contentX + 1.5, y);
                var segs = parseInline(item);
                renderInlineLine(segs, contentX + 5, contentW - 5, textColor, baseSize);
              });
              y += 1;
              break;

            case 'ol':
              block.items.forEach(function(item, i) {
                checkBreak(5);
                setFont('bold', baseSize, GOLD);
                doc.text((i+1) + '.', contentX + 1, y);
                var segs = parseInline(item);
                renderInlineLine(segs, contentX + 6, contentW - 6, textColor, baseSize);
              });
              y += 1;
              break;

            case 'table':
              renderTable(block, contentX, contentW);
              y += 2;
              break;

            case 'code':
              renderCodeBlock(block.content, contentX, contentW);
              y += 2;
              break;
          }
        });
      }

      function renderTable(block, x, width) {
        var cols = block.header.length;
        if (cols === 0) return;

        // Calcola larghezza colonne
        var colW = width / cols;

        // Header row
        var headerH = 6.5;
        checkBreak(headerH + 2);
        doc.setFillColor(GOLD[0], GOLD[1], GOLD[2]);
        doc.rect(x, y - 4, width, headerH, 'F');
        setFont('bold', 7.5, WHITE);
        block.header.forEach(function(h, i) {
          doc.text(sanitize(h), x + i * colW + 1.5, y);
        });
        y += headerH - 1;

        // Rows
        setFont('normal', 7.5, INK2);
        block.rows.forEach(function(row, ri) {
          // Calcola altezza riga (wrap cells)
          var cellLines = row.map(function(cell) {
            doc.setFontSize(7.5);
            return doc.splitTextToSize(sanitize(cell), colW - 3);
          });
          var maxLines = 1;
          cellLines.forEach(function(l){ if (l.length > maxLines) maxLines = l.length; });
          var rowH = maxLines * 3.5 + 2;

          checkBreak(rowH);
          if (ri % 2 === 0) {
            doc.setFillColor(IVORY[0], IVORY[1], IVORY[2]);
          } else {
            doc.setFillColor(IVORY2[0], IVORY2[1], IVORY2[2]);
          }
          doc.rect(x, y - 3, width, rowH, 'F');

          cellLines.forEach(function(lines, ci) {
            setFont('normal', 7.5, INK2);
            lines.forEach(function(l, li) {
              doc.text(l, x + ci * colW + 1.5, y + li * 3.5);
            });
          });
          y += rowH;
        });

        // Cornice
        doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
        doc.setLineWidth(0.2);
      }

      function renderCodeBlock(code, x, width) {
        var lines = code.split('\n');
        var lineH = 3.8;
        var pad = 2;
        var h = lines.length * lineH + pad * 2;
        checkBreak(h + 2);
        doc.setFillColor(245, 242, 237);
        doc.setDrawColor(GOLD_LIGHT[0], GOLD_LIGHT[1], GOLD_LIGHT[2]);
        doc.setLineWidth(0.2);
        doc.rect(x, y - 3, width, h, 'FD');
        setFont('normal', 7.5, INK2);
        doc.setFont('courier', 'normal');
        lines.forEach(function(l, i) {
          var wrapped = doc.splitTextToSize(sanitize(l), width - 4);
          wrapped.forEach(function(w) {
            checkBreak(lineH + 1);
            doc.text(w, x + 2, y + i * lineH);
          });
        });
        y += h;
      }

      // ────────────────────────────────────────────────
      // RACCOGLI I MESSAGGI DAL DOM
      // ────────────────────────────────────────────────
      function stripHtmlKeepText(html) {
        var d = document.createElement('div');
        d.innerHTML = html;
        return (d.textContent || d.innerText || '').trim();
      }

      var messages = [];
      // Preferisci chatHistory se ha contenuto pulito (raw markdown)
      if (window.chatHistory && window.chatHistory.length) {
        window.chatHistory.forEach(function(m) {
          messages.push({
            role: m.role === 'user' ? 'user' : 'ai',
            text: m.content || ''
          });
        });
      } else {
        var msgEls = document.querySelectorAll('#chat-messages .msg');
        msgEls.forEach(function(el) {
          var isUser = el.classList.contains('user');
          var bubble = el.querySelector('.msg-bubble');
          if (bubble) {
            messages.push({
              role: isUser ? 'user' : 'ai',
              text: stripHtmlKeepText(bubble.innerHTML)
            });
          }
        });
      }

      if (messages.length === 0) throw new Error('Nessun messaggio trovato.');

      // ────────────────────────────────────────────────
      // COVER
      // ────────────────────────────────────────────────
      doc.setFillColor(IVORY[0], IVORY[1], IVORY[2]);
      doc.rect(0, 0, PW, PH, 'F');

      doc.setFillColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.rect(0, 0, PW, 52, 'F');

      // Ruota lulliana o cerchio
      if (typeof window.drawLullianWheel === 'function') {
        window.drawLullianWheel(doc, PW/2, 28, 14, {
          gold: GOLD, goldLight: GOLD_LIGHT, ink: INK,
          labels: 'lettere', caption: false
        });
      } else {
        doc.setFillColor(255, 255, 255);
        doc.circle(PW/2, 28, 14, 'F');
        doc.setFont('times', 'italic');
        doc.setFontSize(24);
        doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
        doc.text('A', PW/2, 32, { align: 'center' });
      }

      setFont('bold', 22, WHITE);
      doc.text('OLISMO INTEGRATO', PW/2, 64, { align: 'center' });
      setFont('italic', 11, WHITE);
      doc.text('Consulenza Olistica AI', PW/2, 72, { align: 'center' });

      // Separatore
      doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.setLineWidth(0.6);
      doc.line(PW/2 - 30, 82, PW/2 + 30, 82);

      // Data / conteggio
      var now = new Date();
      var dateLong = sanitize(now.toLocaleDateString('it-IT', { weekday:'long', day:'2-digit', month:'long', year:'numeric' }));
      var timeShort = now.toLocaleTimeString('it-IT', { hour:'2-digit', minute:'2-digit' });
      var qCount = messages.filter(function(m){ return m.role === 'user'; }).length;
      var aCount = messages.filter(function(m){ return m.role === 'ai'; }).length;

      setFont('normal', 10, INK2);
      doc.text(dateLong + '  ·  ore ' + timeShort, PW/2, 96, { align: 'center' });
      setFont('italic', 9, INK3);
      doc.text(messages.length + ' messaggi  ·  ' + qCount + ' domande  ·  ' + aCount + ' risposte',
               PW/2, 103, { align: 'center' });

      // Box autore
      doc.setFillColor(255, 255, 255);
      doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.setLineWidth(0.4);
      doc.roundedRect(ML + 10, 120, CW - 20, 44, 3, 3, 'FD');

      setFont('bold', 11, GOLD);
      doc.text('Carlo Alberto Calcagno', PW/2, 131, { align: 'center' });
      setFont('normal', 8.5, INK2);
      doc.text(sanitize('Mediatore Familiare · Formatore · Pranoterapista'), PW/2, 138, { align: 'center' });
      doc.text(sanitize("Inventore dell'Enneagramma Evolutivo"), PW/2, 143.5, { align: 'center' });
      setFont('normal', 8.5, GOLD);
      doc.text(sanitize('calcagnocarloalberto1@gmail.com  ·  +39 347 366 6508'), PW/2, 152, { align: 'center' });
      doc.text('olismo-integrato.it', PW/2, 157.5, { align: 'center' });

      // Chips discipline
      var chips = ['Chakra', 'Enneagramma', 'Fiori di Bach', 'AT', 'Frequenze', 'Cristalli', 'VAK', 'Pranoterapia'];
      var cy = 180;
      var cxStart = ML + 6;
      var cxCur = cxStart;
      setFont('normal', 7.5, INK2);
      chips.forEach(function(chip) {
        var w = doc.getTextWidth(chip) + 6;
        if (cxCur + w > PW - MR - 6) {
          cxCur = cxStart;
          cy += 9;
        }
        doc.setFillColor(GOLD_LIGHT[0], GOLD_LIGHT[1], GOLD_LIGHT[2]);
        doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
        doc.setLineWidth(0.25);
        doc.roundedRect(cxCur, cy, w, 6.5, 1.5, 1.5, 'FD');
        doc.setTextColor(INK2[0], INK2[1], INK2[2]);
        doc.text(chip, cxCur + 3, cy + 4.5);
        cxCur += w + 3;
      });

      // Disclaimer cover
      setFont('italic', 7.5, [170, 165, 160]);
      doc.text(sanitize('Le indicazioni hanno finalità divulgativa e non sostituiscono consulenze mediche o psicologiche.'),
               PW/2, PH - 26, { align: 'center' });

      // Bottom bar
      doc.setFillColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.rect(0, PH - 9, PW, 9, 'F');
      setFont('normal', 7.5, WHITE);
      doc.text('olismo-integrato.it', PW/2, PH - 3.5, { align: 'center' });

      // ────────────────────────────────────────────────
      // PAGINE CONVERSAZIONE
      // ────────────────────────────────────────────────
      doc.addPage();
      page = 1;
      drawHeader();
      y = MT;

      setFont('bold', 12, INK);
      doc.text('Trascrizione della conversazione', ML, y);
      y += 3;
      doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
      doc.setLineWidth(0.3);
      doc.line(ML, y, ML + 60, y);
      y += 6;

      // Render ogni messaggio
      messages.forEach(function(m, idx) {
        var isUser = m.role === 'user';
        var label = isUser ? 'Tu' : 'Consulente Olistica';
        var labelColor = isUser ? GOLD : INK;

        checkBreak(10);

        // Label
        setFont('bold', 8, labelColor);
        if (isUser) {
          doc.text(label, PW - MR, y, { align: 'right' });
        } else {
          doc.text(label, ML, y);
        }
        y += 4;

        if (isUser) {
          // Utente: bolla dorata allineata a destra, testo semplice
          var userText = sanitize(m.text);
          doc.setFontSize(9.5);
          doc.setFont('helvetica', 'normal');
          var maxBubbleW = CW * 0.75;
          var lines = doc.splitTextToSize(userText, maxBubbleW - 6);
          var lineH = 4.8;
          var h = lines.length * lineH + 5;
          var bx = PW - MR - maxBubbleW;
          checkBreak(h + 3);
          doc.setFillColor(GOLD_LIGHT[0], GOLD_LIGHT[1], GOLD_LIGHT[2]);
          doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
          doc.setLineWidth(0.3);
          doc.roundedRect(bx, y - 1, maxBubbleW, h, 2.5, 2.5, 'FD');
          // Accent destra
          doc.setFillColor(GOLD[0], GOLD[1], GOLD[2]);
          doc.rect(bx + maxBubbleW - 1.5, y - 1, 1.5, h, 'F');
          doc.setTextColor(INK[0], INK[1], INK[2]);
          var ty = y + 3.5;
          lines.forEach(function(l) {
            doc.text(l, bx + 3, ty);
            ty += lineH;
          });
          y += h + 4;
        } else {
          // AI: rendering Markdown completo, piena larghezza con accento oro a sinistra
          var blocks = parseMarkdown(m.text);
          // Disegna barra verticale oro a sinistra (opzionale, se stiamo su una sola pagina)
          var startY = y;
          renderBlocks(blocks, INK, false);
          // Barra verticale sottile
          doc.setFillColor(GOLD[0], GOLD[1], GOLD[2]);
          doc.rect(ML - 3, startY, 1, Math.min(y - startY, PH - MB - startY), 'F');
          y += 4;
        }

        // Separatore tra messaggi
        if (idx < messages.length - 1) {
          checkBreak(4);
          doc.setDrawColor(230, 224, 214);
          doc.setLineWidth(0.2);
          doc.line(ML + 30, y, PW - MR - 30, y);
          y += 4;
        }
      });

      drawFooter();

      // Save
      var d = new Date();
      var stamp = d.toISOString().slice(0, 10);
      doc.save('Olismo-Integrato-Consulenza-' + stamp + '.pdf');

    } catch (err) {
      console.error('[PDF Markdown] Errore:', err);
      alert('Errore generazione PDF: ' + err.message);
    }

    if (btn) {
      btn.classList.remove('loading');
      btn.innerHTML = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h10M8 3v7M8 10l-2.5-2.5M8 10l2.5-2.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><rect x="1.5" y="11.5" width="13" height="3" rx="1" stroke="currentColor" stroke-width="1.2"/></svg> Scarica PDF';
    }
  }

  // Sostituisci la funzione globale
  window.exportChatPdf = exportChatPdfMarkdown;

  console.log('[PDF Markdown] exportChatPdf sostituita con versione Markdown-aware.');

})();
