// Skills grouped by proficiency and certifications, as listed in the CV. Names are the same in every language.

export type SkillGroup = {
  id: 'advanced' | 'proficient' | 'working' | 'exposure'
  items: string[]
  /** Icon file in public/icons/. */
  icon: string
  /** The main focus — shown first and emphasised. */
  primary?: boolean
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'advanced',
    primary: true,
    icon: '/icons/code-xml.svg',
    items: ['Vue.js', 'JavaScript/TypeScript', 'HTML', 'CSS', 'Vuetify', 'Vuex', 'Pinia'],
  },
  {
    id: 'proficient',
    icon: '/icons/check.svg',
    items: ['Angular', 'REST APIs', 'Git'],
  },
  {
    id: 'working',
    icon: '/icons/server.svg',
    items: ['Node.js', 'Express.js', 'Python', 'Django', 'SQL', 'MongoDB', 'Ionic'],
  },
  {
    id: 'exposure',
    icon: '/icons/wrench.svg',
    items: ['Power Platform', 'OutSystems', 'Java', 'Spring Boot'],
  },
]

// Colorful logos (Devicon, MIT) in public/icons/skills/, keyed by the skill name.
// Skills without a logo are shown as text only.
export const skillIcons: Record<string, string> = {
  'Vue.js': 'vuejs',
  Vuetify: 'vuetify',
  Angular: 'angular',
  Ionic: 'ionic',
  'JavaScript/TypeScript': 'typescript',
  HTML: 'html5',
  CSS: 'css3',
  'Node.js': 'nodejs',
  'Express.js': 'express',
  Python: 'python',
  Django: 'django',
  MongoDB: 'mongodb',
  Git: 'git',
  Java: 'java',
  'Spring Boot': 'spring',
}

/** Logos that are (almost) black; inverted in the dark theme so they stay visible. */
export const darkLogos = ['Express.js', 'Django']

export const certifications: string[] = [
  'Microsoft Certified: Power Platform Fundamentals (PL-900)',
  'AI Yellow Belt (NTT DATA)',
  'OutSystems – Reactive Web Development',
  'Scrum Master Fundamentals (Udemy)',
  'API Integration (Alfa)',
]
