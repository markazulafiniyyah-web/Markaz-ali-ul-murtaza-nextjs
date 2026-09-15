# Prerendered static React replica

A standalone Vite/React multi-page application for Markaz Al Murtaza Al Islami & Safia Islamic Institute.

## What it includes

- 99 crawlable, prerendered HTML pages
- Real paths such as `/hifz`, `/tajweed`, `/portfolio`, `/ur`, and `/ur/donate`
- Per-page titles, descriptions, keywords, canonicals, Open Graph and Twitter metadata
- WebSite, EducationalOrganization and WebPage JSON-LD
- `hreflang` alternates for 30 interface languages
- Generated `sitemap.xml` and `robots.txt`
- Responsive landing page, programs, portfolio, donation details and SEO course pages
- 30-language selector with English fallback

The Hadith library and Next.js blog are intentionally excluded.

## Build

```bash
npm install
STATIC_SITE_URL=https://your-static-domain.example npm run build
```

The generated site is written to `dist/`. Always set `STATIC_SITE_URL` to the static deployment's final public origin so canonicals, social URLs, structured data, sitemap and robots use the correct domain. Without it, the build defaults to `https://markazulmurtaza.vercel.app`.

```bash
npm run dev
npm run preview
```
