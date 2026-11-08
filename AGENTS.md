# AGENTS.md

Next.js 15 (App Router) + React 19 + Tailwind CSS v4 portfolio. No TypeScript, no tests, no lint, no CI.

## Commands
- `npm install` — install dependencies (Node 18.17+ required by Next.js 15)
- `npm run dev` — dev server at http://localhost:3000
- `npm run build` — production build (`.next/`, gitignored)
- `npm start` — run the production build locally

There are no lint/test/typecheck scripts. Do not invent or run them.

## Entrypoints & wiring
- `app/layout.js` — root layout, metadata, Google fonts (`next/font/google`)
- `app/page.js` — home page (server component); imports from `@/data/*` and `@/components/*`
- `app/globals.css` — `@import "tailwindcss"` plus theme CSS variables (`--color-bg`, `--color-violet`, etc.)
- Path alias `@/*` resolves to repo root (`jsconfig.json`), so `@/data/profile` works
- Client components (`"use client"`): `components/Spot.js`, `components/Roles.js`, `components/Reveal.js`

## Content (edit these instead of page code)
- `data/profile.js` — name, location, intro, social links, rotating hero roles
- `data/skills.js` — skill areas and tools
- `data/projects.js` — projects; each has `title`, `description`, `tags`, `live`, `repo`, optional `image`/`color`/`emoji`
- `public/photo.jpg` — portrait used by `next/image` as `/photo.jpg`
- Project screenshots: `public/projects/`, referenced as `image: "/projects/shot.png"`

## Gotchas
- `Spot`, `Roles`, `Reveal` use browser APIs (`getBoundingClientRect`, `IntersectionObserver`, `setInterval`) — they are `"use client"` and must not be imported into server-only logic without care.
- Tailwind v4 via `@tailwindcss/postcss` postcss plugin; theme values live as CSS variables in `globals.css`, not `tailwind.config.js` (none exists).
- `.gitignore`: `node_modules`, `.next`, `.vercel` — never commit these.

## Deploy
Push to GitHub and import the repo on vercel.com (per `README.md`).
