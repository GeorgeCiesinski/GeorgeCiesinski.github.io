# George Ciesinski — Portfolio

Deployed on Vercel.

## Develop

```bash
npm install
npm run dev
```

For local Vercel (SPA + future `/api` functions):

```bash
npm run vercel
```

`npm run vercel` uses `[vercel-dev.json](vercel-dev.json)` (no catch-all SPA rewrite) so Vite can serve modules and deep links. Production keeps the catch-all rewrite in `[vercel.json](vercel.json)`.

## Scripts


| Script             | Purpose                              |
| ------------------ | ------------------------------------ |
| `npm run check`    | Format, lint, and typecheck          |
| `npm run validate` | `check` plus tests                   |
| `npm run build`    | Production Vite build                |
| `npm run preview`  | Preview the production build locally |
| `npm run vercel`   | Local Vercel via `vercel-dev.json`   |




## Build

```bash
npm run build
npm run preview
```



## Technology

- React
- TypeScript
- Vite & Vitest
- SCSS

