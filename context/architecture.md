# Architecture & conventions (approved 2026-09-29, step 4)

## Structure

```
index.html            lang="en", inline theme script (sets .dark before first paint)
src/
  main.ts             createApp(App).use(i18n).mount('#app')
  App.vue             skip link, <SiteHeader>, <main> with sections, <SiteFooter>; owns useActiveSection(sections)
  styles/main.css     Tailwind import + tokens + base styles (replaces style.css)
  i18n/               index.ts (createI18n, Locale, Localized<T>, setLocale), en.ts, de.ts
  composables/        useTheme.ts, useActiveSection.ts (IntersectionObserver band at ~40% of viewport)
  utils/storage.ts    safe localStorage read/write (try/catch → fallback)
  components/         site shell + shared pieces (SiteHeader, SiteFooter, ThemeToggle, LanguageSwitch, PageSection)
  sections/sections.ts  ordered SectionId list — single source for nav links, ids, active tracking
  sections/<name>/    NameSection.vue + child components + data file (with its types) + spec
  test-setup.ts       installs i18n for all tests, resets locale, storage and the .dark class
```

## Data flow

- Theme: localStorage 'theme' or prefers-color-scheme → inline script → `<html class="dark">`.
  `useTheme()` holds a module-level ref, `toggle()` updates class + storage. No live OS-change listener.
- Language: localStorage 'locale' or 'en' → vue-i18n. `setLocale()` updates locale + `<html lang>` + storage.
- Content: each section imports its own data + `t()`. App passes nothing down. Section → child via one prop.

## Tokens (Tailwind v4, CSS only)

- `@custom-variant dark (&:where(.dark, .dark *))`.
- Semantic vars in `:root` / `.dark` built from Tailwind's zinc/teal palette; exposed via `@theme inline`
  as `canvas, surface, fg, fg-muted, line, accent, on-accent, focus, danger`. Components use `bg-canvas text-fg`,
  no `dark:` classes. Add roles only when needed.
- Spacing, type scale, radii, shadows: Tailwind defaults. Font: Inter via `@fontsource-variable/inter`.
  No JetBrains Mono for now (system mono).

## i18n

- UI strings → `en.ts`/`de.ts`, `de` typed as `typeof en`.
- Structured content (jobs, projects) → section data files with `Localized<string>` = `{ en; de }` fields,
  rendered with `localize(value)` from `i18n/index.ts` (reactive: re-renders on language change).

## Types

Type lives where it's used: `Locale`/`Localized` in i18n, `Theme` in useTheme, `Experience` etc. in the
section data file, props inline in `defineProps`. Shared file only when 2+ features need it.

## Components

PascalCase multi-word; sections end in `…Section`. Split at ~150 lines or clear repetition.
Sections wrap their content in `<PageSection id>` (labelled section + h2 from the nav label + 4/8 grid).

## Accessibility

`<html lang>` synced; skip link; landmarks; global `:focus-visible` outline; `color-scheme` per theme;
smooth scroll + scroll-padding only under `prefers-reduced-motion: no-preference`; animations use
`motion-safe:`; one h1; `<section aria-labelledby>` + h2; native elements over ARIA; alt text;
translated aria-labels on icon-only buttons.

## Errors

Only `storage.ts` catches silently. Missing translations: type error + English fallback. Typed data, no
runtime validation. Contact form (step 11) gets visible translated error/success states. No `console.log`.

## Do NOT abstract (yet)

Pinia, Router, event bus, provide/inject, BaseSection wrappers, VueUse/useLocalStorage, JS token objects,
Tailwind config/plugins, lazy locales, zod, icon libraries (inline SVG), global error handler.

## Tests

Behavior only (text, roles, attributes) — no class assertions or snapshots.
Step 5: useTheme toggle, setLocale, storage fallback, App skip link + main landmark.
