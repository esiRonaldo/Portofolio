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
  about: {
    intro:
      'Ich bin Softwareentwickler in Köln mit über 5 Jahren Berufserfahrung in der Entwicklung von Webanwendungen. Mein Schwerpunkt liegt im Frontend – Vue.js, Angular und TypeScript – und ich arbeite auch im Backend mit Node.js, Python/Django und REST APIs.',
    teamwork:
      'Ich habe in agilen Scrum-Teams bei NTT DATA und Ben Hur gearbeitet und arbeite mich schnell in neue Technologien ein.',
    education: {
      label: 'Ausbildung',
      master: 'M.Sc. Automotive Software Engineering, Technische Universität Chemnitz',
      bachelor: 'Bachelor of Software Technologies, Zarghan Azad University',
    },
    languages: {
      label: 'Sprachen',
      value: 'Deutsch (B2), Englisch (fließend), Persisch (Muttersprache)',
    },
  },
  experience: {
    stackLabel: 'Technologien',
  },
  skills: {
    primary: 'Schwerpunkt',
    certifications: 'Zertifikate',
    groups: {
      frontend: 'Frontend',
      backend: 'Backend & Datenbanken',
      tools: 'Tools & Methoden',
      basics: 'Grundkenntnisse',
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
