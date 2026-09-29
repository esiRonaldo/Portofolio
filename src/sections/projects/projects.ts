import type { Localized } from '../../i18n'

// Projects shown on the page. Only this portfolio for now — employer projects are confidential.
// A source link is added once the repository URL is confirmed.

export type Project = {
  title: Localized
  summary: Localized
  highlights: Localized<string[]>
  stack: string[]
}

export const projects: Project[] = [
  {
    title: { en: 'This portfolio', de: 'Dieses Portfolio' },
    summary: {
      en: 'A bilingual single-page portfolio, built step by step as a work sample.',
      de: 'Ein zweisprachiges Single-Page-Portfolio, Schritt für Schritt als Arbeitsprobe entwickelt.',
    },
    highlights: {
      en: [
        'Typed translations: a missing German string fails the type-check',
        'Two-layer design tokens (primitives → semantic variables), so light and dark mode need no extra classes in components',
        'Accessibility aimed at WCAG 2.2 AA: skip link, landmarks, current section marked in the navigation, motion off under reduced motion',
        'GDPR-minded: self-hosted font, no third-party requests',
        'Tests check behavior, not styling; formatting, linting, type-check, tests and build run on every step',
      ],
      de: [
        'Typisierte Übersetzungen: Ein fehlender deutscher Text lässt den Type-Check fehlschlagen',
        'Design-Tokens in zwei Ebenen (Primitive → semantische Variablen), sodass Hell- und Dunkelmodus keine zusätzlichen Klassen in Komponenten brauchen',
        'Barrierefreiheit nach WCAG 2.2 AA als Ziel: Skip-Link, Landmarks, aktueller Abschnitt in der Navigation markiert, keine Animationen bei reduzierter Bewegung',
        'DSGVO-bewusst: selbst gehostete Schrift, keine Anfragen an Drittanbieter',
        'Tests prüfen Verhalten statt Styling; Formatierung, Linting, Type-Check, Tests und Build laufen bei jedem Schritt',
      ],
    },
    stack: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Vue I18n', 'Vite', 'Vitest'],
  },
]
