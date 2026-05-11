# Correzione copyright olismo-integrato.it — 11 maggio 2026

## Cosa contiene questo pacchetto

45 file HTML del sito olismo-integrato.it, già modificati per allineare il copyright alla realtà:
- "© 2016-2026 ..." → "© 2026 ..."
- "copyrightYear: 2016" (JSON-LD) → "copyrightYear: 2026"
- "datePublished: 2016-01-01" (JSON-LD) → "datePublished: 2026-01-01"

Nessun altro contenuto è stato toccato.

## Numeri della correzione

- File HTML scansionati: 46
- File modificati: 45 (1 non aveva occorrenze: `manuale.html`)
- Occorrenze "© 2016-2026" sostituite: 126
- Occorrenze "copyrightYear: 2016" sostituite: 1 (solo `index.html`)
- Occorrenze "datePublished: 2016-01-01" sostituite: 1 (solo `index.html`)
- Residui di pattern "2016" copyright dopo la correzione: 0

## Nota su manuale.html

L'unica occorrenza di "2016" in `manuale.html` è il riferimento alla norma "UNI 11644:2016" (certificazione mediatore familiare). È un anno normativo, non un copyright, e correttamente non è stato toccato.

## Come deployare

Sostituisci i 45 file sul repo. Niente altro da fare.

## Verifica post-deploy

In incognito, apri olismo-integrato.it e guarda in fondo a qualunque pagina: il copyright deve leggere "© 2026 Carlo Alberto Calcagno", non più "© 2016-2026".

In particolare per la SEO: visualizza il sorgente di `index.html` (Ctrl+U) e cerca "copyrightYear" e "datePublished" nel blocco `<script type="application/ld+json">`: devono entrambi riferirsi al 2026.
