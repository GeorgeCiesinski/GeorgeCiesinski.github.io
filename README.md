# George Ciesinski — Portfolio

Deployed on Vercel.

## Develop

```bash
npm install
npm run dev
```

For the SPA plus `/api` serverless functions (including the contact form):

```bash
npm run vercel
```

`npm run vercel` uses [`vercel-dev.json`](vercel-dev.json) (no catch-all SPA rewrite) so Vite can serve modules and deep links. Production [`vercel.json`](vercel.json) rewrites non-API routes to `index.html` and leaves `/api/*` for serverless functions.

### Contact form env (server-only)

Copy [`.env.example`](.env.example) to `.env` and set:

| Var              | Purpose                              |
| ---------------- | ------------------------------------ |
| `RESEND_API_KEY` | Resend API key                       |
| `EMAIL_ADDRESS`  | Inbox that receives form submissions |

These are not `VITE_*` vars — they stay on the server. Local contact submissions need `npm run vercel` (plain `npm run dev` does not serve `/api/contact`).

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
- Vercel serverless + Resend (contact)
