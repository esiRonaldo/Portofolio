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
  projects: {
    highlightsLabel: 'Was es zeigt',
    stackLabel: 'Technologien',
  },
  skills: {
    primary: 'Schwerpunkt',
    certifications: 'Zertifikate',
    groups: {
      frontend: 'Frontend',
      more: 'Backend, Tools & mehr',
    },
  },
  contact: {
    backToTop: 'Nach oben',
    fields: {
      name: 'Name',
      email: 'E-Mail',
      message: 'Nachricht',
    },
    errors: {
      required: 'Bitte füllen Sie dieses Feld aus.',
      email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
      tooShort: 'Bitte schreiben Sie mindestens 10 Zeichen.',
    },
    submit: 'Absenden',
    sent: 'Danke! Der Versand ist noch nicht eingerichtet. Bitte kontaktieren Sie mich vorerst über LinkedIn oder XING.',
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
