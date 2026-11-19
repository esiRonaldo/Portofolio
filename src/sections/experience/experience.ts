import type { Localized } from '../../i18n'

// Work experience and the ongoing Weiterbildung from the CVs of 4 Nov 2026 (EN + DE), newest first.
// `summary` is always visible; `details` (CV bullets) make an entry expandable; `focus` shows as chips.

export type ExperienceEntry = {
  /** 'course' = professional development, shown with a category label instead of looking like an employer. */
  kind: 'job' | 'course'
  role: Localized
  /** Employer, or the provider of a course. */
  organization: string
  /** 'YYYY-MM' */
  start: string
  /** 'YYYY-MM' (planned end while in progress) */
  end: string
  isInProgress?: boolean
  summary: Localized
  details?: Localized<string[]>
  focus?: Localized<string[]>
  /** Icon file in public/icons/. */
  icon: string
}

export const experienceEntries: ExperienceEntry[] = [
  {
    kind: 'course',
    role: {
      en: 'Advanced Software Development with AI — Weiterbildung',
      de: 'Advanced Software Development mit KI — Weiterbildung',
    },
    organization: 'neue fische / SPICED',
    start: '2026-10',
    end: '2027-02',
    isInProgress: true,
    summary: {
      en: 'Ongoing advanced training to broaden my full-stack skills, with a focus on AI-assisted software development.',
      de: 'Laufende Weiterbildung zur Erweiterung meiner Full-Stack-Kenntnisse mit Schwerpunkt auf KI-gestützter Softwareentwicklung.',
    },
    focus: {
      en: [
        'AI-assisted software development',
        'JavaScript/TypeScript',
        'Node.js',
        'NestJS',
        'React/Next.js',
        'CI/CD',
      ],
      de: [
        'KI-gestützte Softwareentwicklung',
        'JavaScript/TypeScript',
        'Node.js',
        'NestJS',
        'React/Next.js',
        'CI/CD',
      ],
    },
    icon: '/icons/graduation-cap.svg',
  },
  {
    kind: 'job',
    role: {
      en: 'Frontend Software Engineer (IT Technical Consultant)',
      de: 'Frontend Software Engineer (IT Technical Consultant)',
    },
    organization: 'NTT DATA Deutschland SE',
    start: '2022-04',
    end: '2025-12',
    summary: {
      en: 'Client software projects in a DevOps department, focused on frontend development with contributions to backend, API integration, testing and deployment.',
      de: 'Kundenprojekte in einer DevOps-Abteilung mit Schwerpunkt Frontend-Entwicklung sowie Mitarbeit an Backend, API-Integration, Testing und Deployment.',
    },
    details: {
      en: [
        'Developed a Vue.js operational cockpit that replaced Excel- and email-based processes with central task tracking, file handling and notifications.',
        'Improved maintainability and usability with reusable Vue.js components, UI refinements and dependency upgrades.',
        'Contributed to C#/.NET backend features and an Azure Application Insights prototype.',
        'Modernized a legacy application from Angular 8 to 17 and Ionic 4 to 7, resolved breaking changes and UI issues, and introduced ESLint, unit tests and technical documentation.',
        'Built Power Platform and OutSystems proofs of concept for workflow automation, data visualization and the digitization of Excel-based processes.',
      ],
      de: [
        'Entwicklung eines Vue.js-basierten Operational Cockpits, das Excel- und E-Mail-Prozesse durch zentrale Aufgabenverfolgung, Dateiverwaltung und Benachrichtigungen ersetzte.',
        'Bessere Wartbarkeit und Bedienbarkeit durch wiederverwendbare Vue.js-Komponenten, UI-Optimierungen und Dependency-Upgrades.',
        'Mitarbeit an C#/.NET-Backend-Features und an einem Prototyp für die Azure-Application-Insights-Integration.',
        'Modernisierung einer Legacy-Anwendung von Angular 8 auf 17 und Ionic 4 auf 7: Breaking Changes und UI-Probleme behoben, ESLint, Unit Tests und technische Dokumentation eingeführt.',
        'Proofs of Concept mit Power Platform und OutSystems für Workflow-Automatisierung, Datenvisualisierung und die Digitalisierung Excel-basierter Prozesse.',
      ],
    },
    icon: '/icons/briefcase.svg',
  },
  {
    kind: 'job',
    role: { en: 'Junior Software Developer', de: 'Junior Softwareentwickler' },
    organization: 'Ben Hur GmbH',
    start: '2020-11',
    end: '2022-03',
    summary: {
      en: 'Customer-facing web applications with a focus on Vue.js frontends and contributions to Python/Django backends.',
      de: 'Kundenorientierte Webanwendungen mit Schwerpunkt auf Vue.js-Frontends und Beiträgen zu Python/Django-Backends.',
    },
    details: {
      en: [
        'Built a full-stack configuration interface with Vue.js and Python that turned a Bash/command-line workflow into a customer-facing web application.',
        'Co-developed a responsive Vue.js ordering kiosk frontend based on provided UX concepts.',
        'Enhanced a Vue.js/Django application with frontend features, backend contributions and bug fixes.',
      ],
      de: [
        'Entwicklung einer Full-Stack-Konfigurationsoberfläche mit Vue.js und Python, die einen Bash-/Kommandozeilenprozess in eine Webanwendung für Kunden überführte.',
        'Mitentwicklung eines responsiven Vue.js-Frontends für einen Bestellkiosk auf Basis vorgegebener UX-Konzepte.',
        'Weiterentwicklung einer Vue.js-/Django-Anwendung: Frontend-Features, Beiträge zum Backend und Fehlerbehebungen.',
      ],
    },
    icon: '/icons/code-xml.svg',
  },
  {
    kind: 'job',
    role: { en: 'Software Development Intern', de: 'Praktikum Softwareentwicklung' },
    organization: 'DFKI',
    start: '2018-06',
    end: '2018-11',
    summary: {
      en: 'Created 3D models and integrated speech-recognition APIs.',
      de: 'Erstellung von 3D-Modellen und Integration von APIs für Spracherkennung.',
    },
    icon: '/icons/flask-conical.svg',
  },
]
