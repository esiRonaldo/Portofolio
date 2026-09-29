import type en from './en'

// Typed as the English messages, so a missing or extra key is a type error.
const de: typeof en = {
  a11y: {
    skipToContent: 'Zum Inhalt springen',
  },
  hero: {
    status: 'Offen für neue Positionen',
    role: 'Softwareentwickler (Frontend/Fullstack)',
    summary:
      'Ich entwickle moderne Webanwendungen mit Vue.js, Angular und TypeScript – mit Fullstack-Erfahrung in Node.js, Python/Django und REST APIs.',
    primaryCta: 'Erfahrung ansehen',
    secondaryCta: 'Kontakt',
    linksLabel: 'Profile',
    facts: {
      experience: { label: 'Erfahrung', value: '5+ Jahre' },
      frontend: { label: 'Frontend', value: 'Vue.js, Angular, TypeScript' },
      backend: { label: 'Backend', value: 'Node.js, Python/Django, REST APIs' },
      location: { label: 'Standort', value: 'Köln, Deutschland' },
    },
  },
  nav: {
    label: 'Hauptnavigation',
    about: 'Über mich',
    experience: 'Erfahrung',
    projects: 'Projekte',
    skills: 'Kenntnisse',
    contact: 'Kontakt',
  },
  theme: {
    dark: 'Dunkles Design',
  },
  language: {
    switch: 'English',
  },
}

export default de
