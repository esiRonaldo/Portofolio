import type { Localized } from '../../i18n'

// Skills and certifications exactly as listed in the CV. Most names are the same in every
// language; the few that aren't are Localized.

export type Skill = string | Localized

export type SkillGroup = {
  id: 'frontend' | 'more'
  items: Skill[]
  /** The main focus — shown first and emphasised. */
  primary?: boolean
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    primary: true,
    items: [
      'Vue.js',
      'Vuetify',
      'Vuex',
      'Pinia',
      'Angular',
      'Ionic',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
    ],
  },
  {
    // Backend & databases, tools & methods and basic knowledge, in one group.
    id: 'more',
    items: [
      'Node.js',
      'Express.js',
      'Python',
      'Django',
      'REST APIs',
      'SQL',
      'MongoDB',
      'Git',
      'Azure DevOps',
      'Power Platform',
      'OutSystems',
      'Scrum',
      { en: 'Accessibility', de: 'Barrierefreiheit' },
      'Java',
      'Spring Boot',
    ],
  },
]

// Colorful logos (Devicon, MIT) in public/icons/skills/, keyed by the English skill name.
// Skills without a logo are shown as text only.
export const skillIcons: Record<string, string> = {
  'Vue.js': 'vuejs',
  Vuetify: 'vuetify',
  Angular: 'angular',
  Ionic: 'ionic',
  TypeScript: 'typescript',
  JavaScript: 'javascript',
  HTML: 'html5',
  CSS: 'css3',
  'Node.js': 'nodejs',
  'Express.js': 'express',
  Python: 'python',
  Django: 'django',
  MongoDB: 'mongodb',
  Git: 'git',
  'Azure DevOps': 'azuredevops',
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
