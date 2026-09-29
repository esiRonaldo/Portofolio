import type { Localized } from '../../i18n'

// Work experience exactly as in the CV (EN + DE), newest first.
// `stack` lists only technologies that the highlights themselves mention.

export type Job = {
  role: Localized
  company: string
  location: Localized
  /** 'YYYY-MM' */
  start: string
  /** 'YYYY-MM' */
  end: string
  highlights: Localized<string[]>
  stack: string[]
}

export const jobs: Job[] = [
  {
    role: { en: 'Technical Consultant', de: 'Technical Consultant' },
    company: 'NTT DATA Deutschland SE',
    location: { en: 'Cologne', de: 'Köln' },
    start: '2022-04',
    end: '2025-12',
    highlights: {
      en: [
        'Designed and developed a scalable web application for import/export management using Vue.js and Vuetify',
        'Integrated and optimized REST APIs; analyzed and fixed backend bugs to improve application stability',
        'Enhanced, maintained and improved the performance of enterprise web applications with Angular, TypeScript and Ionic',
        'Worked with Azure DevOps in agile Scrum processes: sprint planning, task management, regression testing and deployments to test environments',
        'Built internal applications and proof-of-concepts with Microsoft Power Platform and OutSystems',
      ],
      de: [
        'Konzeption und Entwicklung einer skalierbaren Webanwendung für das Import- und Exportmanagement mit Vue.js und Vuetify',
        'Integration und Optimierung von REST APIs sowie Analyse und Behebung von Backend-Fehlern zur Verbesserung der Anwendungsstabilität',
        'Weiterentwicklung, Wartung und Performance-Optimierung von Enterprise-Webanwendungen mit Angular, TypeScript und Ionic',
        'Arbeit mit Azure DevOps in agilen Scrum-Prozessen: Sprintplanung, Task-Management, Regressionstests und Deployments auf Testumgebungen',
        'Entwicklung interner Anwendungen und Proof-of-Concepts mit Microsoft Power Platform und OutSystems',
      ],
    },
    stack: [
      'Vue.js',
      'Vuetify',
      'Angular',
      'TypeScript',
      'Ionic',
      'REST APIs',
      'Azure DevOps',
      'Power Platform',
      'OutSystems',
    ],
  },
  {
    role: { en: 'Junior Software Developer', de: 'Junior Softwareentwickler' },
    company: 'Ben Hur GmbH',
    location: { en: 'Cologne', de: 'Köln' },
    start: '2020-11',
    end: '2022-03',
    highlights: {
      en: [
        'Developed a new Vue.js frontend for an existing system configuration application with a Python backend',
        'Designed and developed an order kiosk frontend with Vue.js',
        'Enhanced an audio player application with Vue.js & Django',
        'Integrated REST APIs in close collaboration with the backend team',
      ],
      de: [
        'Entwicklung eines neuen Frontends mit Vue.js für eine bestehende Systemkonfigurationsanwendung mit Python-Backend',
        'Konzeption und Entwicklung eines Bestell-Kiosk-Frontends mit Vue.js',
        'Weiterentwicklung einer Audio-Player-Anwendung mit Vue.js & Django',
        'Integration von REST APIs in enger Zusammenarbeit mit dem Backend-Team',
      ],
    },
    stack: ['Vue.js', 'Python', 'Django', 'REST APIs'],
  },
  {
    role: { en: 'Software Development Intern', de: 'Praktikum Softwareentwicklung' },
    company: 'DFKI',
    location: { en: 'Saarbrücken', de: 'Saarbrücken' },
    start: '2018-06',
    end: '2018-11',
    highlights: {
      en: [
        'Developed a console application in C/C++',
        'Created and documented 3D models with Unity and Blender',
      ],
      de: [
        'Entwicklung einer Konsolenanwendung mit C/C++',
        'Erstellung und Dokumentation von 3D-Modellen mit Unity und Blender',
      ],
    },
    stack: ['C/C++', 'Unity', 'Blender'],
  },
]
