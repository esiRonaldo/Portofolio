# Portfolio — Claude Code instructions

Personal portfolio. Vue 3 + Vite + TypeScript (strict) + Tailwind + Vue I18n + Vitest.
EN (default) / DE, light/dark, desktop-first (responsive later).

@context/project.md

## Start of every session
1. Read `context/decisions.md`.
2. If `sessions/` exists, read only the newest file (local, not in Git).
3. Run `git status` before changing anything.

## Workflow
- One feature at a time: inspect → plan → wait for approval → implement → verify → explain → update session note.
- Verify: tests, lint, type-check, build (commands added after scaffold).
- Never git add/commit/push, deploy, publish, or send project data remotely.
- Ask before installing any package.

## Code rules
- Composition API + `<script setup>`, strict TypeScript, no `any`.
- Simplest clean solution; no premature abstraction. No Pinia/Vue Router without a real need.
- Composables only when reused or complex. Direct props/emits; no deep prop drilling.
- Comments only for non-obvious logic. Tests check behavior, not CSS classes.

## Content & safety (public repo)
- No secrets, tokens, `.env` values, or private data. No phone number or home address in code.
- Use only information from the public CV. Employer/client projects are confidential:
  never invent or add client names, project details or metrics.
