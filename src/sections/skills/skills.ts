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
    items: [
      'Vue.js',
      'JavaScript/TypeScript',
      'Node.js',
      'NestJS',
      'HTML',
      'CSS',
      'Vuetify',
      'Vuex',
      'Pinia',
    ],
  },
  {
    id: 'proficient',
    icon: '/icons/check.svg',
    items: ['Angular', 'Express.js', 'REST APIs', 'Git'],
  },
  {
    id: 'working',
    icon: '/icons/server.svg',
    items: ['Next.js', 'Python', 'Django', 'SQL', 'MongoDB', 'Ionic'],
  },
  {
    id: 'exposure',
    icon: '/icons/wrench.svg',
    items: ['Power Platform', 'OutSystems', 'Java', 'Spring Boot'],
  },
]

export type SkillLogo = {
  /** File name in public/icons/skills/, without `.svg`. */
  file: string
  /** The logo is (almost) black: inverted in the dark theme so it stays visible. */
  invertInDark?: boolean
}

// Colorful logos (Devicon, MIT), keyed by the skill name. Used by the Skills section and the Hero core stack.
// Skills without a logo are shown as text only.
export const skillLogos: Partial<Record<string, SkillLogo>> = {
  'Vue.js': { file: 'vuejs' },
  Vuetify: { file: 'vuetify' },
  Angular: { file: 'angular' },
  Ionic: { file: 'ionic' },
  'JavaScript/TypeScript': { file: 'typescript' },
  HTML: { file: 'html5' },
  CSS: { file: 'css3' },
  'Node.js': { file: 'nodejs' },
  NestJS: { file: 'nestjs' },
  'Express.js': { file: 'express', invertInDark: true },
  'Next.js': { file: 'nextjs', invertInDark: true },
  Python: { file: 'python' },
  Django: { file: 'django', invertInDark: true },
  MongoDB: { file: 'mongodb' },
  Git: { file: 'git' },
  Java: { file: 'java' },
  'Spring Boot': { file: 'spring' },
}

export const certifications: string[] = [
  'Microsoft Certified: Power Platform Fundamentals (PL-900)',
  'AI Yellow Belt (NTT DATA)',
  'OutSystems – Reactive Web Development',
  'Scrum Master Fundamentals (Udemy)',
  'API Integration (Alfa)',
]
