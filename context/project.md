# Project context (last reviewed: 2026-09-29)

## Goal

Portfolio linked from CV/GitHub. Shows frontend strength + full-stack experience.
The site itself is the main work sample (no public or shareable employer projects).

## Sections (single page, hash anchors)

Hero → About → Experience → Projects → Skills → Contact. Footer: Impressum, Datenschutz, source link.

- Hero: role "Software Developer (Frontend/Fullstack)", "Open to new roles" line, no photo for now.
- Experience: CV wording only.
- Projects v1: this portfolio as a case study. Optional full-stack side project later.
- Contact: form (opens email app via mailto: until a sending service is chosen), LinkedIn, XING, email. No phone number.

## Design

- Layout: editorial grid, sticky top nav with active section, max width 1200px.
- Fonts: Inter (self-hosted via @fontsource-variable/inter, GDPR); system mono for now.
- Colors: zinc neutrals, teal accent (#0F766E light / #2DD4BF dark).
- Tokens: 2 layers — primitives → semantic CSS variables used by Tailwind.
- Theme: 2-state toggle, starts from system preference, remembered.
- Language: EN default, EN/DE toggle, remembered. No URL prefixes.
- Motion: subtle, opacity/transform only, off under reduced motion.
- Accessibility: WCAG 2.2 AA. Design with German text length in mind.

## Before launch (review at end of first version)

Content & legal

- Impressum + Datenschutz pages (Impressum needs an address — decide how to handle privately).
- Choose contact sending service (form uses `mailto:` until then).
- CV download: needed or not? If yes, use a PDF version without phone number/photo (EN + DE).
- Repo URL for the Projects "Source code" link + footer source link (repo must be public).
- User review of own-written copy: Projects highlights, Contact texts (EN + DE).
- Repo name typo "Portofolio" — rename before sharing the link?

Manual checks (in the browser)

- Nav highlights "Contact" when scrolled to the page bottom (estimated OK up to ~1450px window height, footer adds ~100px).
- Contact form: real submit opens the email app with subject + body filled in.
- Keyboard-only pass (skip link, nav, toggles, form errors + focus) and a screen-reader pass.
- Contrast check (WCAG AA) of accent, muted text and `danger` in light + dark.
- German text length: no overflow or awkward wraps.

Tech

- Responsive layout (desktop-first so far: fixed 12-column grids).
- Switch to Node 24 LTS before CI (Node 25 gives EBADENGINE warnings; test `--no-experimental-webstorage` flag).

## Status

Current step: step 12 done — SiteFooter (©, email + profiles, back to top). Legal + source links come with their pages.
Next: step 13 — to be decided (legal pages or responsive layout).
