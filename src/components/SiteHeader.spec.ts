import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SiteHeader from './SiteHeader.vue'

function currentLinks(wrapper: ReturnType<typeof mount>) {
  return wrapper
    .findAll('nav a')
    .filter((link) => link.attributes('aria-current') === 'true')
    .map((link) => link.text())
}

describe('SiteHeader', () => {
  it('links to every section with translated labels', () => {
    const wrapper = mount(SiteHeader, { props: { activeSection: null } })
    const links = wrapper.findAll('nav a')

    expect(links.map((link) => link.text())).toEqual([
      'About',
      'Experience',
      'Projects',
      'Skills',
      'Contact',
    ])
    expect(links.map((link) => link.attributes('href'))).toEqual([
      '#about',
      '#experience',
      '#projects',
      '#skills',
      '#contact',
    ])
  })

  it('marks only the active section as current', async () => {
    const wrapper = mount(SiteHeader, { props: { activeSection: null } })
    expect(currentLinks(wrapper)).toEqual([])

    await wrapper.setProps({ activeSection: 'experience' })
    expect(currentLinks(wrapper)).toEqual(['Experience'])
  })
})
