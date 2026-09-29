# Decisions

- 2026-09-29 — Experience before Projects — no public projects yet; CV work is strongest proof.
- 2026-09-29 — No Vue Router — single page; language via toggle, not URLs.
- 2026-09-29 — 2-state theme toggle — simpler than System/Light/Dark, still respects system.
- 2026-09-29 — Self-hosted fonts — Google Fonts CDN is a GDPR risk in Germany.
- 2026-09-29 — context/ is committed, sessions/ stays local — context is safe and shows the process.
- 2026-09-29 — Grow the setup one tool per step (Vite vue-ts template first) — full create-vue scaffold felt too complex; each tool is learned before the next.
- 2026-09-29 — i18n messages as typed .ts files (de typed as `typeof en`) — missing German keys fail the type-check; no build plugin needed.
- 2026-09-29 — vue-i18n `legacy: false` + `__VUE_I18N_LEGACY_API__: false` — Composition API only; saves ~6 KB.
- 2026-09-29 — ESLint: `flat/essential` + TS recommended, no eslint-config-prettier — essential has no formatting rules, so nothing conflicts with Prettier.
- 2026-09-29 — No `jiti` — Node 24+ loads `eslint.config.ts` natively.
- 2026-09-29 — Vitest config lives in vite.config.ts (`vitest/config`), tests colocated as `*.spec.ts` — one config file, tests next to code.
- 2026-09-29 — Foundation plan approved (see architecture.md) — content in typed section data files, UI strings in i18n.
- 2026-09-29 — Inter via `@fontsource-variable/inter`, no JetBrains Mono yet — self-hosted, one package.
- 2026-09-29 — Theme doesn't live-follow OS changes after load; no temporary toggles in step 5 — simpler; toggles come with the header (step 6).
