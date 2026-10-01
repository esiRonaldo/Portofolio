import type { Localized } from '../../i18n'

// Projects shown on the page. Only this portfolio for now — employer projects are confidential.
// `links` and `image` are optional and only rendered when set (no repository URL or screenshot yet).

export type Highlight = {
  title: Localized
  detail: Localized
}

export type Project = {
  title: Localized
  summary: Localized
  highlights: Highlight[]
  stack: string[]
  links?: { source?: string; demo?: string }
  image?: { src: string; alt: Localized }
}

export const projects: Project[] = [
  {
    title: { en: 'This portfolio', de: 'Dieses Portfolio' },
    summary: {
      en: 'A bilingual single-page portfolio, built step by step as a work sample.',
      de: 'Ein zweisprachiges Single-Page-Portfolio, Schritt für Schritt als Arbeitsprobe entwickelt.',
    },
    highlights: [
      {
        title: { en: 'Typed i18n', de: 'Typisierte Übersetzungen' },
        detail: {
          en: 'A missing German string fails the type-check.',
          de: 'Ein fehlender deutscher Text lässt den Type-Check fehlschlagen.',
        },
      },
      {
        title: { en: 'Semantic design tokens', de: 'Semantische Design-Tokens' },
        detail: {
          en: 'Two layers (primitives → semantic variables), so light and dark mode need no extra classes in components.',
          de: 'Zwei Ebenen (Primitive → semantische Variablen), sodass Hell- und Dunkelmodus keine zusätzlichen Klassen in Komponenten brauchen.',
        },
      },
      {
        title: { en: 'Accessibility', de: 'Barrierefreiheit' },
        detail: {
          en: 'Aimed at WCAG 2.2 AA: skip link, landmarks, current section marked in the navigation, motion off under reduced motion.',
          de: 'WCAG 2.2 AA als Ziel: Skip-Link, Landmarks, aktueller Abschnitt in der Navigation markiert, keine Animationen bei reduzierter Bewegung.',
        },
      },
      {
        title: { en: 'Privacy', de: 'Datenschutz' },
        detail: {
          en: 'GDPR-minded: self-hosted font, no third-party requests.',
          de: 'DSGVO-bewusst: selbst gehostete Schrift, keine Anfragen an Drittanbieter.',
        },
      },
      {
        title: { en: 'Testing', de: 'Tests' },
        detail: {
          en: 'Tests check behavior, not styling; formatting, linting, type-check, tests and build run on every step.',
          de: 'Tests prüfen Verhalten statt Styling; Formatierung, Linting, Type-Check, Tests und Build laufen bei jedem Schritt.',
        },
      },
    ],
    stack: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Vue I18n', 'Vite', 'Vitest'],
  },
]
