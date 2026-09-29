# Project context (last reviewed: 2026-09-29)

## Goal

Portfolio linked from CV/GitHub. Shows frontend strength + full-stack experience.
The site itself is the main work sample (no public or shareable employer projects).

## Sections (single page, hash anchors)

Hero → About → Experience → Projects → Skills → Contact. Footer: Impressum, Datenschutz, source link.

- Hero: role "Software Developer (Frontend/Fullstack)", "Open to new roles" line, no photo for now.
- Experience: CV wording only.
- Projects v1: this portfolio as a case study. Optional full-stack side project later.
- Contact: form (sending service not chosen), LinkedIn, XING, email. No phone number.

## Design

- Layout: editorial grid, sticky top nav with active section, max width 1200px.
- Fonts: Inter + JetBrains Mono, self-hosted (GDPR).
- Colors: zinc neutrals, teal accent (#0F766E light / #2DD4BF dark).
- Tokens: 2 layers — primitives → semantic CSS variables used by Tailwind.
- Theme: 2-state toggle, starts from system preference, remembered.
- Language: EN default, EN/DE toggle, remembered. No URL prefixes.
- Motion: subtle, opacity/transform only, off under reduced motion.
- Accessibility: WCAG 2.2 AA. Design with German text length in mind.

## Before launch

Impressum + Datenschutz pages; choose contact sending service.

## Status

Current step: step 4 done — foundation plan approved (context/architecture.md).
Next: step 5 — implement foundation exactly as in architecture.md (remove Vite demo first).
