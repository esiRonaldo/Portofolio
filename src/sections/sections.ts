// The page sections in order. Used for the nav links, the active-section tracking and the section ids.
export const sections = ['about', 'experience', 'projects', 'skills', 'contact'] as const

export type SectionId = (typeof sections)[number]
