# SEO e sicurezza — istruzioni per GitHub Pages

## File da caricare nel repository (stesso livello di index.html):
- robots.txt ✅
- sitemap.xml ✅
- index.html ✅
- og-image.jpg (da creare — 1200x630px, immagine rappresentativa del sito)

## Google Search Console:
1. Vai su https://search.google.com/search-console
2. Aggiungi proprietà → "Prefisso URL" → https://olismo-integrato.it/
3. Verifica con meta tag HTML oppure file HTML di verifica
4. Per meta tag: aggiungere nel <head> di index.html:
   <meta name="google-site-verification" content="IL_TUO_CODICE" />
5. Invia sitemap: nella console → Sitemap → https://olismo-integrato.it/sitemap.xml

## Bing Webmaster Tools:
1. Vai su https://www.bing.com/webmasters
2. Importa da Google Search Console (opzione semplificata)

## Headers di sicurezza (GitHub Pages non li supporta nativamente):
Se in futuro vuoi aggiungere security headers, considera il passaggio a Cloudflare Pages
che supporta _headers file:
  /*
    X-Frame-Options: DENY
    X-Content-Type-Options: nosniff
    Referrer-Policy: strict-origin-when-cross-origin
    Permissions-Policy: camera=(), microphone=(), geolocation=()

## og-image.jpg:
Crea un'immagine 1200x630 con:
- Sfondo ivory/oro
- Logo "Olismo Integrato"
- Tagline e icone delle discipline
- Nome Carlo Alberto Calcagno
