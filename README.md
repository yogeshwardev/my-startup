# Benzo website

A fast, static, SEO-first marketing site (40 pages). No framework runtime, no dependencies beyond Node 18+.

```
npm run build   # generates ./public from src/ and assets/
npm run serve   # preview at http://localhost:4173
```

Deploy by uploading the contents of `public/` to any static host (Netlify, Cloudflare Pages, Vercel, S3, shared hosting). `public/404.html` is the not-found page.

## Before launch — edit `src/config.mjs`
- `site.url` – your real domain (drives canonical URLs, sitemap, social previews)
- `site.email`, `site.phone`, `site.whatsapp`, `site.hours`, `site.social`
- `site.formEndpoint` – URL that accepts a JSON POST (Formspree, Basin, your own API). If empty, forms open a pre-filled WhatsApp/email message instead of sending.
- `site.testimonials` – add real quotes (with permission) and a testimonials section appears on the home page automatically.

`npm run build` lists every placeholder still in use and checks titles, descriptions, H1s and internal links.

## Where content lives
| What | File |
|---|---|
| Service pages | `src/content/services.mjs` |
| Industries | `src/content/industries.mjs` |
| Projects / case studies | `src/content/work.mjs` (currently labelled demo / concept — keep it honest) |
| Insights articles | `src/content/insights.mjs` |
| Location pages | `src/content/locations.mjs` |
| FAQs, process, values | `src/content/shared.mjs` |
| Home, About, Contact, legal copy | `src/pages.mjs` |
| Design | `assets/css/styles.css` |

Replace `assets/img/og-image.png` (1200×630) if you want a different social-share preview.

## Notes
- Privacy Policy and Terms are sensible starting drafts, not legal advice — have a lawyer review them.
- New location pages must carry genuinely local content; do not clone one with a swapped place name.
