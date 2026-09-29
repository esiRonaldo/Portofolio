import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { setLocale } from '../../i18n'
import SkillsSection from './SkillsSection.vue'
import { certifications } from './skills'

function groupHeadings(wrapper: ReturnType<typeof mount>) {
  return wrapper.findAll('h3').map((heading) => heading.text())
}

describe('SkillsSection', () => {
  it('shows Frontend first, marked as the main focus', () => {
    const headings = groupHeadings(mount(SkillsSection))

    expect(headings[0]).toBe('Frontend Main focus')
    expect(headings).toEqual([
      'Frontend Main focus',
      'Backend & Databases',
      'Tools & Methods',
      'Basic knowledge',
      'Certifications',
    ])
  })

  it('lists the skills of each group as a list', () => {
    const wrapper = mount(SkillsSection)
    const frontendItems = wrapper
      .findAll('ul')[0]
      ?.findAll('li')
      .map((item) => item.text())

    expect(frontendItems).toContain('Vue.js')
    expect(frontendItems).toContain('TypeScript')
  })

  it('lists every certification', () => {
    const text = mount(SkillsSection).text()

    for (const certification of certifications) expect(text).toContain(certification)
  })

  it('shows no ratings or percentages', () => {
    const wrapper = mount(SkillsSection)

    expect(wrapper.text()).not.toMatch(/\d+\s*%/)
    expect(wrapper.find('progress, meter, [role="progressbar"]').exists()).toBe(false)
  })

  it('translates group names and localized skills', async () => {
    const wrapper = mount(SkillsSection)
    expect(wrapper.text()).toContain('Accessibility')

    setLocale('de')
    await wrapper.vm.$nextTick()

    expect(groupHeadings(wrapper)).toContain('Backend & Datenbanken')
    expect(wrapper.text()).toContain('Barrierefreiheit')
    expect(wrapper.text()).not.toContain('Accessibility')
  })
})
