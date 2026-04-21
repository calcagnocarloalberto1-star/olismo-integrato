# Metodo Lulliano su olismo-integrato.it · patch master

File da modificare: `olismo-core.js`
Approccio: **vettoriale** (SVG → jsPDF), nessuna immagine raster.
Risultato: ruota delle 9 *dignitates Dei* sul frontespizio di **entrambi** i PDF (Chat e Report) + pagina dedicata "Il Metodo Lulliano" nel Report (pag. 2) + allineamento della tassonomia dati alle 9 dignitates canoniche.

---

## Ordine di applicazione

Applicare i 6 step nell'ordine indicato. Ogni step è indipendente dal successivo (puoi fermarti dopo lo step 3 e avere già i due frontespizi aggiornati) ma lo step 4 richiede lo step 1.

1. Aggiungere la funzione `drawLullianWheel` (nuova, globale)
2. Patch cover `exportChatPdf` (sostituisce il cerchio nero con la ruota)
3. Patch cover `exportReportPdf` (idem + sposta il titolo sotto)
4. Patch contenuto `exportReportPdf` (nuova pagina 2 "Il Metodo Lulliano")
5. Patch dati `ENNEAGRAMMA_EXTRA` (7 correzioni al campo `dignita`)
6. Patch prompt `SYSTEM_PROMPT` (1 riga dell'elenco T1-T9)

---

## STEP 1 · Funzione `drawLullianWheel` (nuova, globale)

**Posizione:** aggiungila in testa al file `olismo-core.js`, dopo le costanti iniziali e **prima** della definizione di `exportChatPdf` / `exportReportPdf`. Dev'essere una funzione globale perché verrà chiamata da entrambe.

```javascript
// ═══════════════════════════════════════════════════════════════
// RUOTA DI LULLO (Ars Brevis, c. 1305) — disegno vettoriale jsPDF
// 9 dignitates Dei (B-K) + A centrale (Deus) + 36 linee combinatorie
// ═══════════════════════════════════════════════════════════════
function drawLullianWheel(doc, cx, cy, R, opts){
  opts = opts || {};
  var GOLD       = opts.gold      || [184,147,90];
  var GOLD_LIGHT = opts.goldLight || [245,236,216];
  var INK        = opts.ink       || [42,37,32];
  var labels     = opts.labels    || 'lettere';   // 'lettere' | 'parole'
  var caption    = opts.caption   || false;

  var letters = ['B','C','D','E','F','G','H','I','K'];
  var words   = ['Bonitas','Magnitudo','Aeternitas','Potestas','Sapientia',
                 'Voluntas','Virtus','Veritas','Gloria'];

  // Sfondo color avorio dorato + cornice esterna
  doc.setFillColor.apply(doc, GOLD_LIGHT);
  doc.circle(cx, cy, R, 'F');
  doc.setDrawColor.apply(doc, GOLD);
  doc.setLineWidth(0.7);
  doc.circle(cx, cy, R, 'S');
  doc.setLineWidth(0.25);
  doc.circle(cx, cy, R*0.92, 'S');

  // 9 vertici B-K sul cerchio interno (B in alto, senso orario)
  var rVertex = (labels === 'parole') ? R*0.70 : R*0.80;
  var pts = [];
  for (var i = 0; i < 9; i++){
    var a = -Math.PI/2 + (i * 2*Math.PI/9);
    pts.push({
      x: cx + rVertex * Math.cos(a),
      y: cy + rVertex * Math.sin(a),
      angle: a,
      letter: letters[i],
      word: words[i]
    });
  }

  // 36 linee combinatorie (ogni vertice con ogni altro)
  doc.setDrawColor.apply(doc, INK);
  doc.setLineWidth(0.08);
  for (var i = 0; i < 9; i++){
    for (var j = i+1; j < 9; j++){
      doc.line(pts[i].x, pts[i].y, pts[j].x, pts[j].y);
    }
  }

  // Etichette
  doc.setTextColor.apply(doc, INK);
  if (labels === 'lettere'){
    // Lettere sui vertici, con pastiglia bianca per leggibilita
    var fs = R*0.22;
    doc.setFont('helvetica','bold');
    doc.setFontSize(fs);
    for (var i = 0; i < 9; i++){
      var p = pts[i];
      doc.setFillColor(255,255,255);
      doc.circle(p.x, p.y, R*0.115, 'F');
      doc.setDrawColor.apply(doc, GOLD);
      doc.setLineWidth(0.15);
      doc.circle(p.x, p.y, R*0.115, 'S');
      doc.setTextColor.apply(doc, INK);
      doc.text(p.letter, p.x, p.y + fs*0.32, {align:'center'});
    }
  } else {
    // Parole estese attorno all'anello esterno
    var fsW = R*0.11;
    doc.setFont('helvetica','bold');
    doc.setFontSize(fsW);
    var rWord = R*0.86;
    for (var i = 0; i < 9; i++){
      var p = pts[i];
      var wx = cx + rWord * Math.cos(p.angle);
      var wy = cy + rWord * Math.sin(p.angle);
      var halign = (Math.cos(p.angle) > 0.25) ? 'left'
                 : (Math.cos(p.angle) < -0.25 ? 'right' : 'center');
      doc.text(p.word, wx, wy + fsW*0.35, {align: halign});
    }
    // Piccole pastiglie con le lettere sui vertici
    var fsL = R*0.13;
    doc.setFontSize(fsL);
    for (var i = 0; i < 9; i++){
      var p = pts[i];
      doc.setFillColor(255,255,255);
      doc.circle(p.x, p.y, R*0.075, 'F');
      doc.setDrawColor.apply(doc, GOLD);
      doc.setLineWidth(0.1);
      doc.circle(p.x, p.y, R*0.075, 'S');
      doc.setTextColor.apply(doc, INK);
      doc.text(p.letter, p.x, p.y + fsL*0.32, {align:'center'});
    }
  }

  // Cerchio centrale con A (Deus)
  doc.setFillColor(255,255,255);
  doc.circle(cx, cy, R*0.20, 'F');
  doc.setDrawColor.apply(doc, GOLD);
  doc.setLineWidth(0.4);
  doc.circle(cx, cy, R*0.20, 'S');
  doc.setFont('times','italic');
  doc.setFontSize(R*0.38);
  doc.setTextColor.apply(doc, INK);
  doc.text('A', cx, cy + R*0.13, {align:'center'});

  // Caption opzionale
  if (caption){
    doc.setFont('helvetica','italic');
    doc.setFontSize(7);
    doc.setTextColor.apply(doc, INK);
    doc.text('Ars Brevis  \u00B7  Raimondo Lullo, c. 1305',
             cx, cy + R + 7, {align:'center'});
  }
}
```

---

## STEP 2 · Patch cover `exportChatPdf`

**Cerca** nel corpo di `exportChatPdf`:

```javascript
    doc.setFillColor(...GOLD);
    doc.circle(PW/2, 30, 16, 'F');
    doc.setFontSize(18);
    doc.setTextColor(255,255,255);
    doc.text('*', PW/2, 36, {align:'center'});
```

**Sostituisci** con:

```javascript
    // Ruota di Lullo (sigillo del Metodo)
    drawLullianWheel(doc, PW/2, 30, 14, {
      gold:      GOLD,
      goldLight: GOLD_LIGHT,
      ink:       [42,37,32],
      labels:    'lettere',
      caption:   false
    });
```

Risultato: nel frontespizio del PDF chat, sopra il titolo, compare la ruota piccola con le 9 lettere B-K e la A centrale al posto del cerchio nero con l'asterisco.

---

## STEP 3 · Patch cover `exportReportPdf`

**Cerca** nel corpo di `exportReportPdf` il blocco del frontespizio (ornamento e titolo centrale):

```javascript
    // Gold circle ornament
    doc.setFillColor(...GOLD);
    doc.circle(W/2, 62, 16, 'F');
    doc.setFontSize(18);
    doc.setTextColor(255,255,255);
    doc.text('*', W/2, 68, {align:'center'});

    // Central content
    setFont('bold', 26, INK);
    text('REPORT OLISTICO', W/2, 70, {align:'center'});
```

**Sostituisci** con:

```javascript
    // Sigillo lulliano
    drawLullianWheel(doc, W/2, 62, 14, {
      gold:      GOLD,
      goldLight: GOLD_L,
      ink:       INK,
      labels:    'lettere',
      caption:   true
    });

    // Titolo (spostato sotto la ruota)
    setFont('bold', 26, INK);
    text('REPORT OLISTICO', W/2, 90, {align:'center'});
```

Nota: la ruota copertina del Report ha `caption:true`, quindi sotto le compare la riga "Ars Brevis · Raimondo Lullo, c. 1305". Per questo il titolo va spostato da y=70 a y=90 (lascia spazio alla caption).

---

## STEP 4 · Patch pagina 2 `exportReportPdf` — Il Metodo Lulliano

**Cerca** il blocco di inizio del contenuto dopo la cover:

```javascript
    // ══════════════════════════════════════════════
    // PAGES 2+ — CONTENT
    // ══════════════════════════════════════════════
    doc.addPage();
    pageNum = 2;
    drawTopBar();
    y = MT + 10;

    // ── SECTION: PROFILO DEI TEST ──
    sectionTitle('PROFILO DEI TEST COMPLETATI', '>>');
```

**Sostituisci** con:

```javascript
    // ══════════════════════════════════════════════
    // PAGE 2 — IL METODO LULLIANO
    // ══════════════════════════════════════════════
    doc.addPage();
    pageNum = 2;
    drawTopBar();
    y = MT + 6;

    setFont('bold', 16, GOLD);
    text('IL METODO LULLIANO', W/2, y + 4, {align:'center'});
    setFont('italic', 11, INK3);
    text('Ars Brevis  \u00B7  Raimondo Lullo, c. 1305', W/2, y + 11, {align:'center'});

    doc.setDrawColor(...GOLD);
    doc.setLineWidth(0.5);
    doc.line(W/2 - 22, y + 14, W/2 + 22, y + 14);
    y += 22;

    setFont('normal', 9.5, INK2);
    var introL = doc.splitTextToSize(
      'La tassonomia di questo portale attinge a una lunga catena di sistemi combinatori ' +
      'del sapere. Il piu antico e l\'Ars Brevis di Raimondo Lullo: una ruota con nove ' +
      'attributi divini — le dignitates Dei — collegati ciascuno a ogni altro per deduzione ' +
      'combinatoria. Lullo intui sette secoli prima di Leibniz che la conoscenza non e un ' +
      'albero di gerarchie ma una rete di relazioni. Al centro, la lettera A designa Deus: ' +
      'il principio unificante da cui ogni dignita si irradia. L\'Enneagramma Evolutivo ' +
      'innesta i nove tipi umani sulle nove dignitates partendo dal T9 Diplomatico ' +
      '(Bonitas, il bene originario) e procedendo in senso orario lungo la ruota.',
      CW
    );
    introL.forEach(function(l){ text(l, ML, y); y += 5; });
    y += 2;

    // Ruota grande
    var wheelCx = W/2, wheelCy = y + 40, wheelR = 32;
    drawLullianWheel(doc, wheelCx, wheelCy, wheelR, {
      gold: GOLD, goldLight: GOLD_L, ink: INK,
      labels: 'parole', caption: false
    });
    y = wheelCy + wheelR + 8;

    setFont('italic', 8, INK3);
    text('Le nove dignitates Dei attorno alla A (Deus). Da B (T9) in senso orario.',
         W/2, y, {align:'center'});
    y += 8;

    // Tabella mapping
    checkNewPage(90);
    var tableY = y, rowH = 7;
    var col = {
      let:  {x: ML,        w: 10},
      dig:  {x: ML + 10,   w: 26},
      enn:  {x: ML + 36,   w: 38},
      frut: {x: ML + 74,   w: 22},
      prin: {x: ML + 96,   w: CW - 96}
    };

    drawRect(ML, CW, tableY, rowH, GOLD, null, 1);
    setFont('bold', 7.5, WHITE);
    text('LET.',      col.let.x + col.let.w/2, tableY + 4.8, {align:'center'});
    text('DIGNITAS',  col.dig.x + 1.5,         tableY + 4.8);
    text('ENNEATIPO', col.enn.x + 1.5,         tableY + 4.8);
    text('FRUTTO',    col.frut.x + 1.5,        tableY + 4.8);
    text('PRINCIPIO', col.prin.x + 1.5,        tableY + 4.8);
    tableY += rowH;

    var mapping = [
      {L:'B', D:'Bonitas',    T:'T9 Diplomatico',   Fr:'Fragola',   P:'Il bene che pacifica, attributo originario'},
      {L:'C', D:'Magnitudo',  T:'T1 Perfezionista', Fr:'Mela',      P:'La tensione verso il meglio'},
      {L:'D', D:'Aeternitas', T:'T2 Altruista',     Fr:'Pera',      P:'L\'amore che persiste oltre il tempo'},
      {L:'E', D:'Potestas',   T:'T3 Manager',       Fr:'Ciliegia',  P:'La forza che realizza nel mondo'},
      {L:'F', D:'Sapientia',  T:'T4 Romantico',     Fr:'Nespola',   P:'La saggezza del sentire profondo'},
      {L:'G', D:'Voluntas',   T:'T5 Eremita',       Fr:'Uva',       P:'La disciplina del conoscere'},
      {L:'H', D:'Virtus',     T:'T6 Leale',         Fr:'Mirtillo',  P:'Il coraggio come fedelta'},
      {L:'I', D:'Veritas',    T:'T7 Entusiasta',    Fr:'Ananas',    P:'La verita come esperienza viva'},
      {L:'K', D:'Gloria',     T:'T8 Capo',          Fr:'Albicocca', P:'Il riconoscimento della forza'}
    ];

    mapping.forEach(function(row, idx){
      var bg = (idx % 2 === 0) ? IVORY : IVORY2;
      drawRect(ML, CW, tableY, rowH, bg, null, 0);
      setFont('bold', 8, GOLD);
      text(row.L, col.let.x + col.let.w/2, tableY + 4.8, {align:'center'});
      setFont('italic', 8, INK);
      text(row.D, col.dig.x + 1.5, tableY + 4.8);
      setFont('bold', 7.5, INK2);
      text(row.T, col.enn.x + 1.5, tableY + 4.8);
      setFont('normal', 7.5, INK3);
      text(row.Fr, col.frut.x + 1.5, tableY + 4.8);
      setFont('italic', 7.5, INK2);
      var pLines = doc.splitTextToSize(row.P, col.prin.w - 2);
      text(pLines[0], col.prin.x + 1.5, tableY + 4.8);
      tableY += rowH;
    });

    doc.setDrawColor(...GOLD);
    doc.setLineWidth(0.3);
    doc.rect(ML, y, CW, tableY - y, 'S');
    y = tableY + 6;

    checkNewPage(22);
    drawRect(ML, CW, y, 20, IVORY, GOLD_L, 2);
    setFont('italic', 7.5, INK3);
    var noteL = doc.splitTextToSize(
      'La A al centro della ruota (Deus nella notazione di Lullo) rappresenta nel Metodo ' +
      'Integrato il principio di unita che precede ogni differenziazione tipologica: il Se ' +
      'che sta prima dei nove tipi, e verso cui il percorso evolutivo riconduce.',
      CW - 6
    );
    var ny = y + 5;
    noteL.forEach(function(l){ text(l, ML + 3, ny); ny += 4; });
    y += 24;

    addFooter();

    // ══════════════════════════════════════════════
    // PAGES 3+ — CONTENT (era PAGES 2+)
    // ══════════════════════════════════════════════
    doc.addPage();
    pageNum = 3;
    drawTopBar();
    y = MT + 10;

    // ── SECTION: PROFILO DEI TEST ──
    sectionTitle('PROFILO DEI TEST COMPLETATI', '>>');
```

**Attenzione:** se il tuo codice usa `IVORY` come costante ma non ha `IVORY2`, aggiungi vicino agli altri colori del Report `var IVORY2 = [245, 240, 230];` (una tonalità leggermente più calda di IVORY, per le righe zebrate della tabella). Se `IVORY2` esiste già, ignora.

---

## STEP 5 · Patch dati `ENNEAGRAMMA_EXTRA` (7 correzioni)

Queste sono le 7 dignità da sistemare nella tabella `ENNEAGRAMMA_EXTRA`. Le correzioni sono minime, preservano tutti gli altri campi (`gerarchia`, `musa`, `ali`, `seqIntegr`, ecc.) e devono essere applicate **una alla volta** perché `old_str` deve essere univoco nel file.

**Correzione T1:** Volontà → Grandezza

- old_str: `"1":{"frutto":"🍎 Mela","dignita":"Volontà"`
- new_str: `"1":{"frutto":"🍎 Mela","dignita":"Grandezza"`

**Correzione T3:** Sapienza → Potenza

- old_str: `"3":{"frutto":"🍒 Ciliegia","dignita":"Sapienza"`
- new_str: `"3":{"frutto":"🍒 Ciliegia","dignita":"Potenza"`

**Correzione T5:** Verità → Volontà

- old_str: `"5":{"frutto":"🍇 Uva","dignita":"Verità"`
- new_str: `"5":{"frutto":"🍇 Uva","dignita":"Volontà"`

**Correzione T6:** Grandezza → Virtù

- old_str: `"6":{"frutto":"🫐 Mirtillo","dignita":"Grandezza"`
- new_str: `"6":{"frutto":"🫐 Mirtillo","dignita":"Virtù"`

**Correzione T7:** Grandezza → Verità

- old_str: `"7":{"frutto":"🍍 Ananas","dignita":"Grandezza"`
- new_str: `"7":{"frutto":"🍍 Ananas","dignita":"Verità"`

**Correzione T9:** Perfezione → Bontà

- old_str: `"9":{"frutto":"🍓 Fragola","dignita":"Perfezione"`
- new_str: `"9":{"frutto":"🍓 Fragola","dignita":"Bontà"`

**Non toccare:** T2 (`Eternità` è già corretto = *Aeternitas*), T4 (`Sapienza` già corretto = *Sapientia*), T8 (`Gloria` già corretto).

---

## STEP 6 · Patch `SYSTEM_PROMPT` (1 riga)

**Cerca** la riga nell'assegnazione di `SYSTEM_PROMPT`:

```
T1=🍎Mela (Dignità:Volontà, Serafini, Urania), T2=🍐Pera (Eternità, Cherubini, Polimnia), T3=🍒Ciliegia (Sapienza, Troni, Euterpe), T4=🍊Nespola (Sapienza, Dominazioni, Erato), T5=🍇Uva (Verità, Potestà, Melpomene), T6=🫐Mirtillo (Grandezza, Virtù, Tersicore), T7=🍍Ananas (Grandezza, Principati, Calliope), T8=🍑Albicocca (Gloria, Arcangeli, Clio), T9=🍓Fragola (Perfezione, Angeli, Talia)
```

**Sostituisci** con:

```
T1=🍎Mela (Dignità:Grandezza, Serafini, Urania), T2=🍐Pera (Eternità, Cherubini, Polimnia), T3=🍒Ciliegia (Potenza, Troni, Euterpe), T4=🍊Nespola (Sapienza, Dominazioni, Erato), T5=🍇Uva (Volontà, Potestà, Melpomene), T6=🫐Mirtillo (Virtù, Virtù, Tersicore), T7=🍍Ananas (Verità, Principati, Calliope), T8=🍑Albicocca (Gloria, Arcangeli, Clio), T9=🍓Fragola (Bontà, Angeli, Talia)
```

Nota: la coincidenza **T6 (Virtù, Virtù, Tersicore)** non è un errore. La prima "Virtù" è la *dignitas* lulliana (*Virtus*), la seconda è la *gerarchia angelica* dionisiana (*Virtutes*): due ordini simbolici diversi che convergono sullo stesso nome italiano, ed è proprio su questa risonanza che il T6 Leale mostra la sua struttura profonda (il coraggio come fedeltà alla virtù, a doppia mandata).

---

## Verifica finale

1. Applica tutti i 6 step.
2. Pulisci la cache del browser (Ctrl+Shift+R).
3. Apri `/consulente.html` in incognito, completa un test qualsiasi (Check o 9 Frutti).
4. Clicca **💾 Esporta Chat PDF** → il frontespizio deve mostrare la ruota piccola con B-K attorno e A al centro.
5. Clicca **📄 Scarica Report** → pagina 1 cover con ruota + caption, pagina 2 "Il Metodo Lulliano" con ruota grande + tabella, pagine 3+ contenuti.
6. **Check incrociato ruota/tabella** sulla pagina 2: la parola *BONITAS* (alto) coincide con la prima riga *T9 Diplomatico*; *GLORIA* (alto-sinistra) con l'ultima riga *T8 Capo*; le altre 7 seguono in senso orario.
7. Nel campo "Dignità" di ciascuna scheda enneatipo renderizzata dal sito deve ora apparire la dignità corretta secondo il mapping canonico (es. nella scheda del T1 deve leggersi *Grandezza*, non più *Volontà*).
8. Interroga la Consulente AI con "qual è la dignità lulliana del T9?" — deve rispondere *Bonitas / Bontà*, non più *Perfezione*.

Se qualcosa non torna visivamente (sovrapposizioni di parole, ruota troppo piccola, tabella sfalsata), fammi sapere quale step e dove: si correggono parametri specifici (raggio, font-size, `rVertex`) senza toccare la logica.

Quando vuoi, inviami il saggio: lo leggo e ne parliamo insieme.
