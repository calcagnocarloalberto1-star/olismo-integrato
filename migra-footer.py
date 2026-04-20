#!/usr/bin/env python3
"""
═══════════════════════════════════════════════════════════════════════
  MIGRAZIONE FOOTER · OLISMO INTEGRATO
  © 2026 Avv. Carlo Alberto Calcagno
  
  Questo script:
  1. Scansiona ricorsivamente una cartella cercando file .html
  2. Individua il blocco <footer>...</footer> in ogni file
  3. Lo sostituisce con il segnaposto dinamico
  4. Salva un backup del file originale in .bak
  5. Stampa un report finale
  
  USO:
      python3 migra-footer.py /percorso/al/repo-github
  
  Se esegui senza argomenti, scansiona la cartella corrente.
  
  SICUREZZA:
  - Fa backup di ogni file modificato (file.html.bak)
  - Se esiste già un <div id="olismo-footer"></div> nel file, lo salta
  - Mostra anteprima prima di scrivere (dry-run se aggiungi --dry-run)
═══════════════════════════════════════════════════════════════════════
"""

import os
import re
import sys
import shutil
from pathlib import Path

# ── Configurazione ────────────────────────────────────────────────────
EXCLUDE_FILES = {
    'olismo-footer.html',    # è il footer stesso!
    'termini-uso.html',      # può avere struttura speciale — controlla manualmente
}
EXCLUDE_DIRS = {'node_modules', '.git', '.github', 'backup', '__pycache__'}

PLACEHOLDER = (
    '\n<!-- Footer dinamico -->\n'
    '<div id="olismo-footer"></div>\n'
    '<script src="olismo-footer.js"></script>\n'
)

# ── Logica ────────────────────────────────────────────────────────────
# Pattern: cattura <footer ...>...</footer> non-greedy, multiline
FOOTER_RE = re.compile(r'<footer\b[^>]*>.*?</footer>', re.DOTALL | re.IGNORECASE)

def has_placeholder(content):
    return 'id="olismo-footer"' in content or "id='olismo-footer'" in content

def process_file(path, dry_run=False):
    """
    Returns: 'modified' | 'already-migrated' | 'no-footer' | 'multiple-footers' | 'error'
    """
    try:
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"  ✗ ERRORE lettura {path}: {e}")
        return 'error'

    if has_placeholder(content):
        return 'already-migrated'

    matches = FOOTER_RE.findall(content)
    if not matches:
        return 'no-footer'
    if len(matches) > 1:
        print(f"  ⚠ ATTENZIONE: {len(matches)} footer trovati in {path.name} — salto per sicurezza")
        return 'multiple-footers'

    new_content = FOOTER_RE.sub(PLACEHOLDER.strip(), content, count=1)

    if dry_run:
        return 'modified'

    # Backup
    backup_path = str(path) + '.bak'
    try:
        shutil.copy2(path, backup_path)
    except Exception as e:
        print(f"  ✗ ERRORE backup {path}: {e}")
        return 'error'

    # Scrittura
    try:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
    except Exception as e:
        print(f"  ✗ ERRORE scrittura {path}: {e}")
        # Ripristina
        shutil.copy2(backup_path, path)
        return 'error'

    return 'modified'

def scan(root, dry_run=False):
    root = Path(root).resolve()
    if not root.is_dir():
        print(f"Errore: {root} non è una cartella valida.")
        return

    stats = {'modified': [], 'already-migrated': [], 'no-footer': [],
             'multiple-footers': [], 'error': []}

    print(f"\n🔍 Scansione: {root}")
    if dry_run:
        print("🧪 MODALITÀ DRY-RUN: nessun file verrà modificato\n")
    print()

    for path in sorted(root.rglob('*.html')):
        # Salta cartelle escluse
        if any(part in EXCLUDE_DIRS for part in path.parts):
            continue
        if path.name in EXCLUDE_FILES:
            print(f"  — {path.name}  (escluso da config)")
            continue

        rel = path.relative_to(root)
        result = process_file(path, dry_run=dry_run)
        stats[result].append(str(rel))

        icon = {'modified': '✓', 'already-migrated': '=',
                'no-footer': '·', 'multiple-footers': '⚠',
                'error': '✗'}[result]
        print(f"  {icon} {rel}  ({result})")

    # Report finale
    print("\n" + "═" * 60)
    print("  REPORT FINALE")
    print("═" * 60)
    print(f"  ✓ Modificati:        {len(stats['modified'])}")
    print(f"  = Già migrati:       {len(stats['already-migrated'])}")
    print(f"  · Senza footer:      {len(stats['no-footer'])}")
    print(f"  ⚠ Footer multipli:   {len(stats['multiple-footers'])}")
    print(f"  ✗ Errori:            {len(stats['error'])}")
    print()

    if stats['modified'] and not dry_run:
        print("  I file modificati hanno un backup .bak accanto.")
        print("  Una volta verificato che il sito funzioni, puoi rimuoverli con:")
        print(f"      find {root} -name '*.html.bak' -delete")
        print()

    if stats['multiple-footers']:
        print("  ⚠ Attenzione ai file con footer multipli: vanno controllati a mano")
        for f in stats['multiple-footers']:
            print(f"      {f}")
        print()

    if dry_run:
        print("  🧪 Nessuna modifica è stata scritta. Per applicare davvero:")
        print(f"      python3 {sys.argv[0]} {root}")
        print()


if __name__ == '__main__':
    args = sys.argv[1:]
    dry_run = '--dry-run' in args
    args = [a for a in args if a != '--dry-run']

    root = args[0] if args else '.'
    scan(root, dry_run=dry_run)
