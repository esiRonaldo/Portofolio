# Ehsan Fani — Portfolio

Personal portfolio of Ehsan Fani, Frontend Software Engineer with full-stack experience.
A bilingual (English/German) single-page site with light and dark theme.

## Stack

Vue 3 (Composition API, `<script setup>`) · TypeScript (strict) · Vite · Tailwind CSS v4 · Vue I18n · Vitest

## Getting started

Requires Node.js 22.12 or newer (24 LTS recommended).

```sh
npm install
npm run dev        # dev server on http://localhost:5173
```

To make the contact form send, copy `.env.example` to `.env.local` and add your Formspree endpoint
(then restart `npm run dev`). Without it, the form only shows a "not connected yet" note.

## Scripts

| Command                | What it does                    |
| ---------------------- | ------------------------------- |
| `npm run dev`          | Start the dev server            |
| `npm run build`        | Type-check and build to `dist/` |
| `npm run preview`      | Serve the production build      |
| `npm run format:check` | Check formatting (Prettier)     |
| `npm run lint`         | Lint (ESLint)                   |
| `npm run type-check`   | Type-check (vue-tsc)            |
| `npx vitest run`       | Run the tests once              |

## Project structure

```
public/            static files served as-is: icons, portrait, CV PDFs (cv/, local only, gitignored)
src/
  i18n/            English and German texts (de is typed against en)
  components/      site shell: header, footer, theme and language switch, section wrapper
  sections/        one folder per page section (Hero, About, Experience, Projects, Skills, Contact)
  styles/main.css  design tokens, type scale, motion
context/           architecture, decisions and project status
```

Details: [context/architecture.md](context/architecture.md) and [context/decisions.md](context/decisions.md).

## Principles

- Accessibility: aiming at WCAG 2.2 AA — skip link, landmarks, visible focus, reduced-motion support.
- Privacy: self-hosted font, no third-party requests or tracking.
- Tests check behavior (text, roles, attributes), not styling.

© Ehsan Fani. All rights reserved.
