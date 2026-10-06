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
      en: 'Import/Export Management Application',
      de: 'Anwendung für Import-/Exportmanagement',
    },
    industry: { en: 'Reinsurance', de: 'Rückversicherung' },
    summary: {
      en: 'Developed and improved an enterprise application supporting import/export operations. Added new features to automate operational tasks, improved existing functionality and resolved application issues in collaboration with backend and operations teams.',
      de: 'Entwicklung und Weiterentwicklung einer Enterprise-Anwendung für Import- und Exportprozesse. Neue Funktionen zur Automatisierung betrieblicher Aufgaben, Verbesserungen bestehender Funktionen und Behebung von Anwendungsfehlern – in Zusammenarbeit mit Backend- und Betriebsteams.',
    },
    stack: ['Vue.js', 'JavaScript/TypeScript', 'REST APIs'],
  },
  {
    title: {
      en: 'Legacy Application Modernization',
      de: 'Modernisierung einer Legacy-Anwendung',
    },
    summary: {
      en: 'Modernized an existing enterprise application by upgrading Angular from version 8 to 17 and Ionic from version 4 to 7. Adapted the application to the newer framework versions and continued development with new functionality.',
      de: 'Modernisierung einer bestehenden Enterprise-Anwendung durch das Upgrade von Angular 8 auf 17 und von Ionic 4 auf 7. Anpassung der Anwendung an die neuen Framework-Versionen und Weiterentwicklung mit neuen Funktionen.',
    },
    stack: ['Angular', 'Ionic', 'JavaScript/TypeScript'],
  },
  {
    title: {
      en: 'Internal Workflow Digitalization',
      de: 'Digitalisierung interner Arbeitsabläufe',
    },
    summary: {
      en: 'Contributed to an internal Microsoft Power Platform solution designed to simplify workflows and reduce paperwork through digital processes.',
      de: 'Mitarbeit an einer internen Lösung auf Basis der Microsoft Power Platform, die Arbeitsabläufe vereinfacht und Papieraufwand durch digitale Prozesse reduziert.',
    },
    stack: ['Microsoft Power Platform'],
  },
]
