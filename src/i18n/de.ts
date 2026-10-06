import type en from './en'

// Typed as the English messages, so a missing or extra key is a type error.
const de: typeof en = {
  a11y: {
    skipToContent: 'Zum Inhalt springen',
    backToTop: 'Nach oben',
  },
  hero: {
    status: 'Offen für neue Positionen',
    role: "Frontend Software Engineer {'|'} Fullstack-Erfahrung",
    summary:
      'Ich entwickle moderne, wartbare Webanwendungen – mit fundierter Erfahrung in Vue.js, Angular und JavaScript/TypeScript, ergänzt durch Fullstack-Erfahrung mit Node.js, Python/Django und REST APIs.',
    cv: 'Lebenslauf',
    contact: 'Kontakt',
    coreLabel: 'Kerntechnologien',
  },
  about: {
    intro:
      'Ich bin Frontend Software Engineer in Köln mit über 5 Jahren Berufserfahrung in der Entwicklung von Enterprise-Webanwendungen. Mein Schwerpunkt liegt auf der Frontend-Entwicklung, ergänzt durch Fullstack-Erfahrung in Backend-Entwicklung, Integration von REST APIs, Testing und Deployment.',
    teamwork:
      'In agilen Teams habe ich an der Entwicklung neuer Features, der Modernisierung von Anwendungen und der Digitalisierung manueller Geschäftsprozesse gearbeitet – von der Implementierung über das Testing bis zur Auslieferung.',
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
    stackLabel: 'Technologien',
    source: 'Quellcode',
    demo: 'Live-Demo',
  },
  skills: {
    primary: 'Schwerpunkt',
    certifications: 'Zertifikate',
    groups: {
      advanced: 'Fortgeschritten',
      proficient: 'Gute Kenntnisse',
      working: 'Praxiskenntnisse',
      exposure: 'Weitere Kenntnisse',
    },
  },
  contact: {
    intro:
      'Lassen Sie uns in Kontakt treten. Ich bin offen für neue berufliche Herausforderungen und spannende Projekte. Wenn Sie über eine Position oder eine Zusammenarbeit sprechen oder einfach Kontakt aufnehmen möchten, schreiben Sie mir gerne eine Nachricht.',
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
  footer: {
    rights: 'Alle Rechte vorbehalten.',
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
