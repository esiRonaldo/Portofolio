# Project context (last reviewed: 2026-09-29)

## Goal

Portfolio linked from CV/GitHub. Shows frontend strength + full-stack experience.
The site itself is the main work sample (no public or shareable employer projects).

## Sections (single page, hash anchors)

Hero → About → Experience → Projects → Skills → Contact. All sections: heading on top, content full width, no divider lines.
Footer: centered "© year Ehsan Fani | All rights reserved." (Impressum/Datenschutz/source links come later).

- Hero: role "Frontend Software Engineer | Full-Stack Experience", "Open to new roles" line, CV download (EN/DE menu)
  and Contact button, portrait photo on the right.
- Experience: horizontal 3-column timeline (icon, dates, role, company, one short paragraph written by the user).
- Projects: four professional examples written by the user (no client names). Optional full-stack side project later.
- Skills: four CV proficiency groups (Advanced = main focus; Proficient; Working Knowledge; Additional Exposure)
  with colorful Devicon logos, plus Certifications.
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
- CV download: Hero serves the user's exact CVs (`public/cv/Ehsan-Fani-CV-EN.pdf` + `Ehsan-Fani-Lebenslauf-DE.pdf`,
  user's decision 2026-10-06 — they include phone number and email). Every committed version stays in Git history.
- Repo URL for the Projects "Source code" link + footer source link (repo must be public).
- User review of copy: German translations of the new About/Hero/Contact/Experience/Projects texts, Hero "Core stack",
  Skills group names, Ben Hur/DFKI Experience lines (EN + DE).
- Hero facts box (Experience / Frontend / Backend / Location card, right of the hero text) removed for now —
  re-add with updated experience; old version in commit 0ac5c85 (HeroSection.vue + hero.facts in en/de.ts).
- Location ("Cologne"/"Köln" with map-pin icon) removed from the footer for now — decide where to show it.
- Repo name typo "Portofolio" — rename before sharing the link?

SEO (postponed — do as one step; plan + concepts in the local session note of 2026-09-29)

- Can be done any time: meta description (≤160 chars), title "Ehsan Fani — Frontend Software Engineer",
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

Current step: content update from the CV (2026-10-06): Hero/About/Experience/Projects/Skills texts (EN + DE),
CV download menu in the Hero. Open: NTT DATA role title ("Frontend Software Engineer (IT Technical Consultant)"?),
Project 1 contribution list, Azure DevOps/Scrum/Accessibility no longer in Skills, Skills 2- vs 3-column row,
German level "B2" vs CV "B2, C1 course completed".
Next: browser check, then remaining a11y fixes (pill contrast, translated title, slider pause), CI, or end-of-v1 review.
