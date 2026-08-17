# Personal Portfolio

React Router + Vite portfolio, deployed to Firebase Hosting.

## Scripts

```bash
pnpm install
pnpm dev        # local dev
pnpm build      # static client build → build/client
pnpm typecheck
```

## Deploy

Firebase Hosting serves `build/client` with an SPA rewrite (see `firebase.json`).
