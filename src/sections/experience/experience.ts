import type { Localized } from '../../i18n'

// Work experience from the CV (EN + DE), newest first.
// `summary` is a shortened version of the first CV bullet; the full bullets are in Git history (commit 09a7e6b).

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
      en: 'Built a scalable web application for import/export management with Vue.js and Vuetify.',
      de: 'Entwicklung einer skalierbaren Webanwendung für Import- und Exportmanagement mit Vue.js und Vuetify.',
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
