# Cloudflare Workers deployment

This Next.js project uses OpenNext for Cloudflare. The `.open-next/` directory is generated during each Cloudflare build and is intentionally excluded from Git.

## Required Workers Builds settings

In **Workers & Pages → markazalmurtaza → Settings → Builds**, use:

- **Build command:** `npm run cf:build`
- **Deploy command:** `npx opennextjs-cloudflare deploy`
- **Non-production branch deploy command:** `npx opennextjs-cloudflare upload`
- **Root directory:** `/` (repository root)
- **Node.js version:** `22`

Alternatively, `npm run deploy` can be used as the deploy command. It runs the OpenNext build immediately before deployment and is safe when no separate build command is configured.

Do not use `npm run build` as the Cloudflare build command. That command intentionally remains `next build` for Vercel and Netlify compatibility; it does not generate `.open-next/`.

## Local validation

```bash
npm ci
npm run cf:build
npx wrangler deploy --dry-run
```

The Worker name and self-reference must remain identical in `wrangler.jsonc`:

```text
name = markazalmurtaza
WORKER_SELF_REFERENCE.service = markazalmurtaza
```

The adapter and Wrangler versions are pinned because Next.js 16.3 requires the current OpenNext manifest patches. Older adapter releases fail at runtime while loading `prefetch-hints.json`.
