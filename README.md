# George Ciesinski — Portfolio

Deployed on Vercel.

## Develop

```bash
npm install
npm run dev
```

Optional contact form key (StaticForms):

```bash
cp .env.example .env
# set VITE_STATICFORMS_ACCESS_KEY
```

## Scripts

| Script             | Purpose                              |
| ------------------ | ------------------------------------ |
| `npm run check`    | Format, lint, and typecheck          |
| `npm run validate` | `check` plus tests                   |
| `npm run build`    | Production Vite build                |
| `npm run preview`  | Preview the production build locally |
| `npm run vercel`   | Local Vercel dev (SPA rewrites)      |

## Build

```bash
npm run build
npm run preview
```

## Technology

- React
- TypeScript
- Vite
- SCSS
