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
      en: 'Worked in a Scrum team with backend developers and operations teams to develop, modernize and maintain enterprise applications. My work included building new features, automating operational processes, resolving application issues and modernizing legacy applications.',
      de: 'Im Scrum-Team mit Backend-Entwicklern und Betriebsteams habe ich Enterprise-Anwendungen weiterentwickelt, modernisiert und gewartet. Dazu gehörten neue Features, die Automatisierung betrieblicher Prozesse, die Behebung von Anwendungsfehlern und die Modernisierung von Legacy-Anwendungen.',
    },
    icon: '/icons/briefcase.svg',
  },
  {
    role: { en: 'Junior Software Developer', de: 'Junior Softwareentwickler' },
    company: 'Ben Hur GmbH',
    start: '2020-11',
    end: '2022-03',
    summary: {
      en: 'Developed a new Vue.js frontend for a system configuration application.',
      de: 'Entwicklung eines neuen Vue.js-Frontends für eine Systemkonfigurationsanwendung.',
    },
    icon: '/icons/code-xml.svg',
  },
  {
    role: { en: 'Software Development Intern', de: 'Praktikum Softwareentwicklung' },
    company: 'DFKI',
    start: '2018-06',
    end: '2018-11',
    summary: {
      en: 'Developed a console application in C/C++.',
      de: 'Entwicklung einer Konsolenanwendung mit C/C++.',
    },
    icon: '/icons/graduation-cap.svg',
  },
]
