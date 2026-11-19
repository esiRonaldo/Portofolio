import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SkillLogo from './SkillLogo.vue'

describe('SkillLogo', () => {
  it('shows the logo of a known skill as a decorative image', () => {
    const img = mount(SkillLogo, { props: { skill: 'Vue.js' } }).get('img')

    expect(img.attributes('src')).toBe('/icons/skills/vuejs.svg')
    expect(img.attributes('alt')).toBe('')
  })

  it('renders nothing for a skill without a logo', () => {
    expect(
      mount(SkillLogo, { props: { skill: 'SQL' } })
        .find('img')
        .exists(),
    ).toBe(false)
  })
})
