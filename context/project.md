# Project context (last reviewed: 2026-09-29)

## Goal

Portfolio linked from CV/GitHub. Shows frontend strength + full-stack experience.
The site itself is the main work sample (no public or shareable employer projects).

## Sections (single page, hash anchors)

Hero → About → Experience → Projects → Skills → Contact. All sections: heading on top, content full width, no divider lines.
Footer: centered "© year Ehsan Fani | All rights reserved." (Impressum/Datenschutz/source links come later).

- Hero: role "Software Developer (Frontend/Fullstack)", "Open to new roles" line, portrait photo on the right.
- Experience: horizontal 3-column timeline (icon, dates, role, company, one short line shortened from the first CV bullet).
- Projects: three professional examples written by the user (no client names). Optional full-stack side project later.
- Skills: two groups (Frontend = main focus; Backend, Tools & More) with colorful Devicon logos.
- Contact: full-width form (UI + validation only until a sending service is chosen), text-only "Submit",
  icon-only GitHub/LinkedIn/XING (brand colors) in the button row, back-to-top arrow below. No email address, no phone number.

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
- Choose contact sending service (form is validation-only until then; the service must not expose the email address).
- CV download: needed or not? If yes, use a PDF version without phone number/photo (EN + DE).
- Repo URL for the Projects "Source code" link + footer source link (repo must be public).
- User review of copy: German translations of the new About/Hero/Contact/Experience/Projects texts, Hero "Core stack",
  Skills group names, Ben Hur/DFKI Experience lines (EN + DE).
- Hero facts box (Experience / Frontend / Backend / Location card, right of the hero text) removed for now —
  re-add with updated experience; old version in commit 0ac5c85 (HeroSection.vue + hero.facts in en/de.ts).
- Location ("Cologne"/"Köln" with map-pin icon) removed from the footer for now — decide where to show it.
- Repo name typo "Portofolio" — rename before sharing the link?

SEO (postponed — do as one step; plan + concepts in the local session note of 2026-09-29)

- Can be done any time: meta description (≤160 chars), title "Ehsan Fani — Software Developer (Frontend/Fullstack)",
  Open Graph basics (og:type/title/description/locale), own favicon instead of the Vite logo, test guarding the metadata.
- Needs the domain: canonical, `og:url`, `og:image` (+ 1200×630 image), `robots.txt` + `sitemap.xml`, optional JSON-LD `Person`.
- After deploy: Lighthouse (LCP, CLS, INP) and a LinkedIn/XING link-preview test.
- Keep metadata static in index.html, no SEO library (preview bots don't run JavaScript).

Manual checks (in the browser)

- Nav highlights "Contact" when scrolled to the page bottom (estimated OK up to ~1450px window height, footer adds ~100px).
- Keyboard-only pass (skip link, nav, toggles, form errors + focus) and a screen-reader pass.
- Contrast check (WCAG AA) of accent, muted text and `danger` in light + dark.
- German text length: no overflow or awkward wraps.

Tech

- Responsive layout — decide if needed (desktop-only so far: fixed 12-column grids, header doesn't fit on phones).
  Planned approach if yes: mobile-first classes, desktop unchanged; header menu button below `md`
  (aria-expanded, closes on link/Escape); one-column sections below `lg`; 16px gutter; check at 320/375/768/1280px, EN + DE.
- Switch to Node 24 LTS before CI (Node 25 gives EBADENGINE warnings; test `--no-experimental-webstorage` flag).

## Status

Current step: visual refinement + motion (2026-10-01, not committed): type scale, color roles, section reveal,
Skills stagger, floating back-to-top, Hero/Experience/Projects/Contact polish. Input borders (1.4.11) and required
fields are fixed by it. Hero core-stack slider added (open: pause button for WCAG 2.2.2).
Next: browser check, then remaining a11y fixes (pill contrast, translated title), CI, or end-of-v1 review.
