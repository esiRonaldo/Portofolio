import type { Localized } from '../../i18n'

// Skills and certifications exactly as listed in the CV. Most names are the same in every
// language; the few that aren't are Localized.

export type Skill = string | Localized

export type SkillGroup = {
  id: 'frontend' | 'backend' | 'tools' | 'basics'
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
    id: 'backend',
    items: ['Node.js', 'Express.js', 'Python', 'Django', 'REST APIs', 'SQL', 'MongoDB'],
  },
  {
    id: 'tools',
    items: [
      'Git',
      'Azure DevOps',
      'Power Platform',
      'OutSystems',
      'Scrum',
      { en: 'Accessibility', de: 'Barrierefreiheit' },
    ],
  },
  {
    id: 'basics',
    items: ['Java', 'Spring Boot'],
  },
]

export const certifications: string[] = [
  'Microsoft Certified: Power Platform Fundamentals (PL-900)',
  'AI Yellow Belt (NTT DATA)',
  'OutSystems – Reactive Web Development',
  'Scrum Master Fundamentals (Udemy)',
  'API Integration (Alfa)',
]
