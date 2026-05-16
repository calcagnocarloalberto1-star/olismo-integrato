#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
═══════════════════════════════════════════════════════════════════════
patch_check_multiselect.py
───────────────────────────────────────────────────────────────────────
Applica al file olismo-core.js le tre modifiche necessarie ad abilitare
il multi-select (primaria + secondarie) sul Check Integrato.

Modello: primo clic = scelta principale (peso 2), click successivi =
sfumature (peso 1 ciascuna, massimo 2). Click su un'opzione già selezionata
la deseleziona. Se la deselezionata era la primaria, la prima secondaria
diventa automaticamente la nuova primaria.

USO:
  1. Salva questo script nella stessa cartella di olismo-core.js
  2. Apri terminale in quella cartella
  3. Lancia:  python3 patch_check_multiselect.py
  4. Otterrai:
       - olismo-core.js          (modificato in place)
       - olismo-core.js.bak      (backup automatico del tuo originale)

Lo script è idempotente: se rilevato che le patch sono già applicate,
si ferma senza modificare nulla.
═══════════════════════════════════════════════════════════════════════
"""

import os
import sys
import shutil

TARGET = "olismo-core.js"
BACKUP = "olismo-core.js.bak"

# ── PATCH 1 — checkSelect ─────────────────────────────────────────
OLD_1 = """function checkSelect(idx){
  checkAnswers[checkCurrentQ] = idx;
  document.getElementById('check-next-btn').disabled = false;
  renderCheckQ();
}"""

NEW_1 = """function checkSelect(idx){
  // ── Multi-select: 1 primaria (peso 2) + fino a 2 secondarie (peso 1 ciascuna) ──
  // Stato salvato:
  //   null                              → nessuna scelta
  //   [primaryIdx]                      → solo primaria
  //   [primaryIdx, secIdx1, secIdx2?]   → primaria + 1–2 secondarie
  let arr = checkAnswers[checkCurrentQ];
  // Retrocompat: profili salvati nel vecchio formato (numero singolo)
  if(typeof arr === 'number') arr = [arr];
  if(!Array.isArray(arr)) arr = [];

  const pos = arr.indexOf(idx);
  if(pos !== -1){
    // Già selezionata → deseleziona. Se era la primaria, la prima secondaria
    // diventa automaticamente la nuova primaria (lo shift dell'array fa il lavoro).
    arr.splice(pos, 1);
  } else {
    if(arr.length >= 3) return; // limite raggiunto: ignora il click
    arr.push(idx);
  }

  checkAnswers[checkCurrentQ] = (arr.length === 0) ? null : arr;
  document.getElementById('check-next-btn').disabled = (arr.length === 0);
  renderCheckQ();
}"""

# ── PATCH 2 — renderCheckQ ────────────────────────────────────────
OLD_2 = """function renderCheckQ(){
  const qd = CHECK_QS[checkCurrentQ];
  const total = CHECK_QS.length;
  document.getElementById('check-counter').textContent = (checkCurrentQ+1) + ' / ' + total;
  document.getElementById('check-prog').style.width = (((checkCurrentQ+1)/total)*100) + '%';
  document.getElementById('check-prev-btn').disabled = checkCurrentQ === 0;
  document.getElementById('check-next-btn').disabled = checkAnswers[checkCurrentQ] === null;
  document.getElementById('check-next-btn').textContent = checkCurrentQ === total-1 ? 'Crea il mio profilo →' : 'Avanti →';

  const sel = checkAnswers[checkCurrentQ];
  const optsHtml = qd.opts.map((opt, i) =>
    '<button class="check-opt' + (sel===i?' sel':'') + '" onclick="checkSelect(' + i + ')">' +
    '<span class="check-dot"></span>' +
    '<span>' + opt.t + '</span>' +
    '</button>'
  ).join('');

  document.getElementById('check-q-area').innerHTML =
    '<div class="check-section-label">' + qd.sez + '</div>' +
    '<div class="check-q-text">' + qd.q + '</div>' +
    '<div class="check-options">' + optsHtml + '</div>';
}"""

NEW_2 = """function renderCheckQ(){
  const qd = CHECK_QS[checkCurrentQ];
  const total = CHECK_QS.length;
  document.getElementById('check-counter').textContent = (checkCurrentQ+1) + ' / ' + total;
  document.getElementById('check-prog').style.width = (((checkCurrentQ+1)/total)*100) + '%';
  document.getElementById('check-prev-btn').disabled = checkCurrentQ === 0;

  // Normalizza la risposta corrente in array per il render
  let arr = checkAnswers[checkCurrentQ];
  if(typeof arr === 'number') arr = [arr];
  if(!Array.isArray(arr)) arr = [];

  document.getElementById('check-next-btn').disabled = (arr.length === 0);
  document.getElementById('check-next-btn').textContent = checkCurrentQ === total-1 ? 'Crea il mio profilo →' : 'Avanti →';

  const optsHtml = qd.opts.map((opt, i) => {
    const rank = arr.indexOf(i); // -1 = non selezionata, 0 = primaria, 1+ = secondaria
    let cls = 'check-opt';
    let badge = '';
    if(rank === 0){
      cls += ' sel sel-primary';
      badge = '<span class="check-rank">1</span>';
    } else if(rank > 0){
      cls += ' sel sel-secondary';
      badge = '<span class="check-rank check-rank-sec">' + (rank + 1) + '</span>';
    }
    return '<button class="' + cls + '" onclick="checkSelect(' + i + ')">' +
      '<span class="check-dot"></span>' +
      '<span>' + opt.t + '</span>' +
      badge +
      '</button>';
  }).join('');

  const hint = '<div class="check-hint">Scegli la risposta che ti rappresenta di più (1) e, se vuoi, fino a 2 sfumature aggiuntive (2, 3). Clicca di nuovo su un\\'opzione per deselezionarla.</div>';

  document.getElementById('check-q-area').innerHTML =
    '<div class="check-section-label">' + qd.sez + '</div>' +
    '<div class="check-q-text">' + qd.q + '</div>' +
    hint +
    '<div class="check-options">' + optsHtml + '</div>';
}"""

# ── PATCH 3 — blocco di aggregazione dentro calcCheckResult ───────
OLD_3 = """  CHECK_QS.forEach((qd, qi) => {
    const ai = checkAnswers[qi];
    if(ai === null) return;
    const opt = qd.opts[ai];
    if(!opt) return;
    if(opt.e) opt.e.forEach(t => ennScores[t] = (ennScores[t]||0)+1);
    if(opt.vak) vakScores[opt.vak]++;
    if(opt.at) atScores[opt.at]++;
    if(opt.sp) spinte.push(opt.sp);
    if(opt.ck && !opt.blk) ckScores[opt.ck] = (ckScores[opt.ck]||0)+1;
    if(opt.ck && opt.blk)  ckBlocked[opt.ck] = (ckBlocked[opt.ck]||0)+1;
    if(opt.conf) confStile = opt.conf;
    if(opt.snv)  snvTipo = opt.snv;
    if(opt.cres) cercaDi = opt.cres;
    if(opt.mot)  motivazione = opt.mot;
    if(opt.fase) fase = opt.fase;
    if(opt.prio) priorita = opt.prio;
  });"""

NEW_3 = """  CHECK_QS.forEach((qd, qi) => {
    let ans = checkAnswers[qi];
    if(ans === null || ans === undefined) return;
    // Retrocompat: profili vecchi salvati come numero singolo → trattati come sola primaria
    if(typeof ans === 'number') ans = [ans];
    if(!Array.isArray(ans) || ans.length === 0) return;

    ans.forEach((idx, rank) => {
      const opt = qd.opts[idx];
      if(!opt) return;
      const w = (rank === 0) ? 2 : 1; // primaria peso 2, secondarie peso 1

      // ── Pesi numerici cumulativi ─────────────────────────
      if(opt.e)   opt.e.forEach(t => ennScores[t] = (ennScores[t]||0) + w);
      if(opt.vak) vakScores[opt.vak] = (vakScores[opt.vak]||0) + w;
      if(opt.at)  atScores[opt.at]   = (atScores[opt.at]||0)   + w;
      if(opt.ck && !opt.blk) ckScores[opt.ck]  = (ckScores[opt.ck]||0)  + w;
      if(opt.ck &&  opt.blk) ckBlocked[opt.ck] = (ckBlocked[opt.ck]||0) + w;

      // ── Campi categorici: solo dalla primaria per evitare sovrascritture ──
      if(rank === 0){
        if(opt.sp)   spinte.push(opt.sp);
        if(opt.conf) confStile   = opt.conf;
        if(opt.snv)  snvTipo     = opt.snv;
        if(opt.cres) cercaDi     = opt.cres;
        if(opt.mot)  motivazione = opt.mot;
        if(opt.fase) fase        = opt.fase;
        if(opt.prio) priorita    = opt.prio;
      } else {
        // Dalle secondarie raccolgo solo le spinte aggiuntive (profilo AT più ricco)
        if(opt.sp && spinte.indexOf(opt.sp) === -1) spinte.push(opt.sp);
      }
    });
  });"""

PATCHES = [
    ("checkSelect",  OLD_1, NEW_1),
    ("renderCheckQ", OLD_2, NEW_2),
    ("aggregazione punteggi (calcCheckResult)", OLD_3, NEW_3),
]


def main():
    if not os.path.exists(TARGET):
        print(f"❌ Non trovo {TARGET} nella cartella corrente.")
        print(f"   Sposta lo script nella stessa cartella di {TARGET} e riprova.")
        sys.exit(1)

    with open(TARGET, "r", encoding="utf-8") as f:
        src = f.read()

    print(f"📄 {TARGET}: {len(src):,} caratteri letti.")
    print()

    # ── Idempotenza: verifico se le patch sono già state applicate ──
    already_applied = (
        "Multi-select: 1 primaria (peso 2)" in src
        and "rank === 0 ? 2 : 1" in src.replace(" ", "") or
        "(rank === 0) ? 2 : 1" in src
    )
    if already_applied:
        print("ℹ️  Le patch sembrano già applicate. Nessuna modifica effettuata.")
        sys.exit(0)

    # ── Verifico che TUTTI i blocchi originali siano presenti UNA SOLA volta ──
    print("🔍 Verifica delle sezioni da modificare:")
    errors = []
    for name, old, _ in PATCHES:
        count = src.count(old)
        status = "✅" if count == 1 else "❌"
        print(f"   {status} {name}: trovato {count} volta/e")
        if count != 1:
            errors.append((name, count))

    if errors:
        print()
        print("⚠️  Una o più sezioni non sono state trovate esattamente come previsto.")
        print("   Il tuo olismo-core.js potrebbe essere stato già modificato a mano,")
        print("   oppure proviene da una versione diversa da quella attesa.")
        print("   Per sicurezza non procedo. Contattami con il file aggiornato.")
        sys.exit(2)

    # ── Backup ──
    shutil.copy2(TARGET, BACKUP)
    print()
    print(f"💾 Backup creato: {BACKUP}")

    # ── Applico le 3 patch ──
    modified = src
    for name, old, new in PATCHES:
        modified = modified.replace(old, new, 1)
        print(f"✏️  Patch applicata: {name}")

    # ── Scrittura ──
    with open(TARGET, "w", encoding="utf-8") as f:
        f.write(modified)

    delta = len(modified) - len(src)
    sign = "+" if delta >= 0 else ""
    print()
    print(f"✅ Fatto. {TARGET} aggiornato ({sign}{delta:,} caratteri).")
    print()
    print("Prossimi passi:")
    print("  1. Carica il nuovo olismo-core.js sul tuo repo / hosting")
    print("  2. Carica anche il nuovo check-integrato.html (contiene il CSS dei badge)")
    print("  3. Hard reload nel browser (Ctrl+Shift+R)")
    print("  4. Apri il Check Integrato e prova a cliccare 2-3 opzioni della stessa")
    print("     domanda: dovresti vedere i numerini 1, 2, 3 e i due livelli di bordo oro.")


if __name__ == "__main__":
    main()
