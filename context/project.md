# Project context (last reviewed: 2026-09-29)

## Goal

Portfolio linked from CV/GitHub. Shows frontend strength + full-stack experience.
The site itself is the main work sample (no public or shareable employer projects).

## Sections (single page, hash anchors)

Hero → About → Experience → Professional Development (nav "Learning") → Projects → Skills → Contact. All sections: heading on top, content full width, no divider lines.
Footer: centered "© year Ehsan Fani | All rights reserved." (Impressum/Datenschutz/source links come later).

- Hero: role "Frontend Software Engineer | Full-Stack Experience", "Open to new roles" line, CV download (EN/DE menu)
  and Contact button, portrait photo on the right.
- Experience: horizontal 3-column timeline (icon, dates, role, company, one short paragraph written by the user).
- Professional Development: one card for the ongoing neue fische / SPICED Weiterbildung (10/2026 – 02/2027, "In Progress"),
  focus areas as chips. Not completed, not work experience; its technologies are not added to Skills.
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
- Language: EN default, "EN | DE" switch in the header (current language highlighted), remembered. No URL prefixes.
- Motion: subtle, opacity/transform only, off under reduced motion.
- Accessibility: WCAG 2.2 AA. Design with German text length in mind.

## Before launch (review at end of first version)

Content & legal

- Impressum + Datenschutz pages (Impressum needs an address — decide how to handle privately).
- Contact form sends via Formspree (chosen 2026-10-17; form created, endpoint in `.env.local`, tested locally by the user — works).
  To do: set `VITE_CONTACT_ENDPOINT` on the host, accept Formspree's DPA, name Formspree (USA, SCCs) in the Datenschutz.
- CV download: Hero links to `/cv/Ehsan-Fani-CV-EN.pdf` + `/cv/Ehsan-Fani-Lebenslauf-DE.pdf`. The files contain phone number
  and email, so they are local only (`public/cv/` is gitignored, removed from all commits 2026-10-17) and must be uploaded to
  the domain at deploy time (a local build includes them in `dist/cv/`; a host that builds from GitHub won't have them).
  Optional: `noindex` header for `/cv/*`. Consider a public web CV without phone number (full CV on request).
- Cookie banner: check whether it is needed. The site only stores theme + language in localStorage (no cookies,
  no analytics, fonts self-hosted), which is probably exempt under TTDSG §25(2); add one if tracking/embeds come later.
- Repo URL for the Projects "Source code" link + footer source link (repo must be public).
- CV PDFs: EN + DE replaced with the updated CVs (with the Weiterbildung) on 2026-10-17.
- Accepted as is by the user (2026-10-17): German copy, no location in the footer, no Hero facts box
  (old version in commit 0ac5c85 if ever wanted again).
- Repo name typo "Portofolio" — rename before sharing the link?

SEO (postponed — do as one step; plan + concepts in the local session note of 2026-09-29)

- Can be done any time: meta description (≤160 chars), title "Ehsan Fani — Frontend Software Engineer",
  Open Graph basics (og:type/title/description/locale), own favicon instead of the Vite logo, test guarding the metadata.
- Needs the domain: canonical, `og:url`, `og:image` (+ 1200×630 image), `robots.txt` + `sitemap.xml`, optional JSON-LD `Person`.
- After deploy: Lighthouse (LCP, CLS, INP) and a LinkedIn/XING link-preview test.
- Keep metadata static in index.html, no SEO library (preview bots don't run JavaScript).

Manual checks: accepted as fine by the user (2026-10-17) — keyboard/screen reader, contrast, German length, tablet widths.

Tech

- Responsive layout done 2026-10-17 (mobile-first, desktop = `lg:` unchanged, menu below `lg`), checked by the user on a phone width.
- Switch to Node 24 LTS before CI (Node 25 gives EBADENGINE warnings; test `--no-experimental-webstorage` flag).

## Status

Current step: content update from the CV (2026-10-06): Hero/About/Experience/Projects/Skills texts (EN + DE),
CV download menu in the Hero, EN | DE language switch, new portrait photo. Reviewed by the user in the browser and accepted as is (2026-10-06): role
"Technical Consultant", Projects without a contribution list, Skills as listed, German "B2".
Aligned with the latest CV (2026-10-17): role "Frontend Software Engineer (IT Technical Consultant)", German
"B2, C1 course completed", Weiterbildung focus "TypeScript".
2026-10-16/17: Professional Development section, contact form via Formspree, tab title, pill contrast, responsive
layout — all done and checked by the user. Core Stack slider keeps hover-only pause (accepted).
Next: SEO basics (no domain needed), Impressum + Datenschutz, repo rename/public, Node 24 + CI, hosting + deploy.
