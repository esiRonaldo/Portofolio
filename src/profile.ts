// Public profile links, shown in the contact section.

export type SocialLink = {
  name: string
  href: string
  /** Icon file in public/icons/. */
  icon: string
}

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', href: 'https://github.com/esiRonaldo', icon: '/icons/github.svg' },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ehsan-fani-92ba5a52',
    icon: '/icons/linkedin.svg',
  },
  { name: 'XING', href: 'https://www.xing.com/profile/Ehsan_Fani', icon: '/icons/xing.svg' },
]
