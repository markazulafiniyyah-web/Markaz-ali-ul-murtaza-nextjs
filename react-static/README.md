# Prerendered static React replica

A standalone Vite/React multi-page application for Markaz Al Murtaza Al Islami & Safia Islamic Institute.

## What it includes

- 99 crawlable, prerendered HTML pages
- Real paths such as `/hifz`, `/tajweed`, `/portfolio`, `/ur`, and `/ur/donate`
- `react-helmet-async` with SSR extraction for per-page titles, descriptions, keywords, canonicals, Open Graph and Twitter metadata
- WebSite, EducationalOrganization and WebPage JSON-LD
- `hreflang` alternates for 30 interface languages
- Generated `sitemap.xml` and `robots.txt`
- The same responsive Apple-style UI, components, artwork, typography and interactions as the Next.js application
- Landing page, programs, portfolio, donation details and SEO course pages
- Locally bundled Qur’anic Arabic and authentic Urdu typefaces
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

## GitHub Pages

The production site is published from the `gh-pages` branch at:

`https://markazulafiniyyah-web.github.io/`

The Pages build supplies the repository base path to Vite and the prerenderer, so assets, internal routes, localized routes, canonical URLs, hreflang, the sitemap, and client-side navigation work from the GitHub Pages root domain.
