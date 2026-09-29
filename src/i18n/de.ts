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
  projects: {
    highlightsLabel: 'Was es zeigt',
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
  contact: {
    intro:
      'Ich bin offen für neue Positionen in der Frontend- oder Fullstack-Entwicklung. Am schnellsten erreichen Sie mich per E-Mail.',
    channelsLabel: 'Kontaktwege',
    emailLabel: 'E-Mail',
    formTitle: 'Nachricht schreiben',
    formNote:
      'Beim Senden öffnet sich Ihr E-Mail-Programm mit der ausgefüllten Nachricht. Auf dieser Website wird nichts gespeichert.',
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
    submit: 'Im E-Mail-Programm öffnen',
    sent: 'Ihr E-Mail-Programm sollte sich jetzt öffnen. Falls nicht, schreiben Sie bitte an die Adresse oben.',
    subject: 'Portfolio-Kontakt von {name}',
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
