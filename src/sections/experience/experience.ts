import type { Localized } from '../../i18n'

// Work experience from the CV (EN + DE), newest first.
// `summary` describes the work in one short paragraph; the full CV bullets are in Git history (commit 09a7e6b).

export type Job = {
  role: Localized
  company: string
  /** 'YYYY-MM' */
  start: string
  /** 'YYYY-MM' */
  end: string
  summary: Localized
  /** Icon file in public/icons/. */
  icon: string
}

export const jobs: Job[] = [
  {
    role: { en: 'Technical Consultant', de: 'Technical Consultant' },
    company: 'NTT DATA Deutschland SE',
    start: '2022-04',
    end: '2025-12',
    summary: {
      en: 'Worked on client software projects within a DevOps environment, primarily developing frontend solutions while also contributing to backend development, API integration, testing and deployment. Developed new features, modernized legacy applications and helped digitalize manual business processes.',
      de: 'Mitarbeit an Softwareprojekten für Kunden in einem DevOps-Umfeld, mit Schwerpunkt auf der Frontend-Entwicklung sowie Beiträgen zu Backend-Entwicklung, API-Integration, Testing und Deployment. Entwicklung neuer Features, Modernisierung von Legacy-Anwendungen und Mitwirkung an der Digitalisierung manueller Geschäftsprozesse.',
    },
    icon: '/icons/briefcase.svg',
  },
  {
    role: { en: 'Junior Software Developer', de: 'Junior Softwareentwickler' },
    company: 'Ben Hur GmbH',
    start: '2020-11',
    end: '2022-03',
    summary: {
      en: 'Developed customer-facing web applications and interactive interfaces, primarily working on frontend development while also contributing to backend functionality, API integration and bug fixing.',
      de: 'Entwicklung kundenorientierter Webanwendungen und interaktiver Benutzeroberflächen, mit Schwerpunkt auf der Frontend-Entwicklung sowie Beiträgen zu Backend-Funktionen, API-Integration und Fehlerbehebung.',
    },
    icon: '/icons/code-xml.svg',
  },
  {
    role: { en: 'Software Development Intern', de: 'Praktikum Softwareentwicklung' },
    company: 'DFKI',
    start: '2018-06',
    end: '2018-11',
    summary: {
      en: 'Created 3D models and integrated APIs for speech recognition functionality.',
      de: 'Erstellung von 3D-Modellen und Integration von APIs für Spracherkennungsfunktionen.',
    },
    icon: '/icons/graduation-cap.svg',
  },
]
