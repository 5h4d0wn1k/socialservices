# Social Services

Volunteer & impact platform for social services — a React + TypeScript + Vite application with
Supabase authentication, team/project pages, and role-aware dashboards, deployed to Vercel.

![GitHub stars](https://img.shields.io/github/stars/5h4d0wn1k/socialservices)
![GitHub last commit](https://img.shields.io/github/last-commit/5h4d0wn1k/socialservices)
![GitHub issues](https://img.shields.io/github/issues/5h4d0wn1k/socialservices)

## Why

Social-service organizations need a credible online presence with simple, secure member flows:
tell people who you are, let them register, sign in, and surface an account dashboard. This app
prioritizes low ceremony and wide reach — a Vite SPA with Supabase Auth (email + magic-link/SSO
flows), protected routes, and clean landing/projects/team pages. It is built to be rebrandable and
hackable by small teams without a dedicated backend.

## Features

- **Auth-powered dashboard** — register, login, password reset, and callback routing via Supabase
  (`src/pages/`, `AuthModal`, `ProtectedRoute`).
- **Content pages** — Home, Projects, Team, Contact, and a Dashboard with site-wide layout and
  footer components.
- **State & routing** — Zustand store, React Router, and framer-motion page transitions.
- **Compliance touches** — cookie consent banner, auth callback handling, and a 404 page.

## Quickstart

Prerequisites: Node 18+ and npm.

```bash
npm install
# set VITE_SUPABASE_URL + VITE_SUPABASE_ANON_KEY in .env
npm run dev            # vite dev server
npm run build          # production build
npm run lint           # eslint
npm run preview        # serve the production build
```

Create the Supabase schema with the migrations in `supabase/migrations/`.

## Project structure

- `src/pages/` — page routes (Home, Projects, Team, Contact, Dashboard, Register, ResetPassword…).
- `src/components/` — Navbar, Footer, AuthModal, ProtectedRoute, dashboard widgets, CookieConsent.
- `src/lib/` and `src/store/` — Supabase client wiring and Zustand state.
- `supabase/migrations/` — database schema migrations.

## Documentation

Deployment is continuous via Vercel; the live app runs at https://socialservices.vercel.app.

## Contributing

PRs welcome for new pages, accessibility, and auth flows. Keep Supabase client usage in
`src/lib/` and never commit real credentials (use `.env`).

## License

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

