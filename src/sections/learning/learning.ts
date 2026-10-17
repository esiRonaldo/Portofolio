import type { Localized } from '../../i18n'

// Ongoing professional training from the CV. `focus` lists the course topics; they are not
// work experience and stay out of the Skills section.

export type Course = {
  /** Course name as written in the EN / DE CV. */
  title: Localized
  provider: string
  /** 'YYYY-MM' */
  start: string
  /** 'YYYY-MM' */
  end: string
  summary: Localized
  focus: Localized<string[]>
}

export const course: Course = {
  title: {
    en: 'Advanced Software Development with AI — Weiterbildung',
    de: 'Advanced Software Development mit KI — Weiterbildung',
  },
  provider: 'neue fische / SPICED',
  start: '2026-10',
  end: '2027-02',
  summary: {
    en: 'Expanding my software engineering expertise through advanced training in AI-assisted development, modern frontend and backend technologies, and CI/CD practices.',
    de: 'Ausbau meiner Software-Engineering-Kompetenzen durch eine vertiefende Fortbildung in KI-gestützter Entwicklung, modernen Frontend- und Backend-Technologien sowie CI/CD-Praktiken.',
  },
  focus: {
    en: [
      'AI-assisted Software Development',
      'TypeScript',
      'Node.js',
      'NestJS',
      'React / Next.js',
      'CI/CD',
    ],
    de: [
      'KI-gestützte Softwareentwicklung',
      'TypeScript',
      'Node.js',
      'NestJS',
      'React / Next.js',
      'CI/CD',
    ],
  },
}
