import type { Localized } from '../../i18n'

// Professional projects, described from the user's own work. No client or company names.
// `industry`, `links` and `image` are optional and only rendered when set.

export type Project = {
  title: Localized
  summary: Localized
  stack: string[]
  industry?: Localized
  links?: { source?: string; demo?: string }
  image?: { src: string; alt: Localized }
}

export const projects: Project[] = [
  {
    title: {
      en: 'Operational Cockpit & Workflow Digitalization',
      de: 'Operatives Cockpit & Digitalisierung von Arbeitsabläufen',
    },
    summary: {
      en: 'Developed and enhanced an operational cockpit that digitized manual Excel- and email-based workflows. The application centralized task tracking, file handling and notifications, while improvements to reusable components and dependencies helped improve UI/UX and maintainability.',
      de: 'Entwicklung und Weiterentwicklung eines operativen Cockpits, das manuelle, auf Excel und E-Mail basierende Arbeitsabläufe digitalisierte. Die Anwendung bündelte Aufgabenverfolgung, Dateiverwaltung und Benachrichtigungen; Verbesserungen an wiederverwendbaren Komponenten und Abhängigkeiten trugen zu besserer UI/UX und Wartbarkeit bei.',
    },
    stack: [
      'Vue.js',
      'JavaScript/TypeScript',
      'REST APIs',
      'C#/.NET',
      'Azure Application Insights',
    ],
  },
  {
    title: {
      en: 'Legacy Application Modernization',
      de: 'Modernisierung einer Legacy-Anwendung',
    },
    summary: {
      en: 'Modernized an existing enterprise application by upgrading Angular from version 8 to 17 and Ionic from version 4 to 7. Resolved breaking changes and UI issues while introducing ESLint, unit tests and technical documentation.',
      de: 'Modernisierung einer bestehenden Enterprise-Anwendung durch das Upgrade von Angular 8 auf 17 und von Ionic 4 auf 7. Behebung von Breaking Changes und UI-Problemen sowie Einführung von ESLint, Unit-Tests und technischer Dokumentation.',
    },
    stack: ['Angular', 'Ionic', 'JavaScript/TypeScript', 'ESLint', 'Unit Testing'],
  },
  {
    title: {
      en: 'Configuration Web Application',
      de: 'Webanwendung zur Konfiguration',
    },
    summary: {
      en: 'Built a full-stack configuration interface that transformed a command-line/Bash-based process into a customer-facing web application.',
      de: 'Entwicklung einer Fullstack-Konfigurationsoberfläche, die einen kommandozeilen- bzw. Bash-basierten Prozess in eine Webanwendung für Kunden überführte.',
    },
    stack: ['Vue.js', 'JavaScript/TypeScript', 'Python'],
  },
  {
    title: {
      en: 'Order Kiosk Application',
      de: 'Bestellkiosk-Anwendung',
    },
    summary: {
      en: 'Co-developed the frontend of an order kiosk application, translating provided UX concepts into a responsive and interactive ordering experience.',
      de: 'Mitentwicklung des Frontends einer Bestellkiosk-Anwendung – Umsetzung vorgegebener UX-Konzepte in ein responsives, interaktives Bestellerlebnis.',
    },
    stack: ['Vue.js', 'JavaScript/TypeScript'],
  },
]
