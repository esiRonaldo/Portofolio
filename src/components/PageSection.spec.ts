import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PageSection from './PageSection.vue'

describe('PageSection', () => {
  it('is a section labelled by its translated heading', () => {
    const wrapper = mount(PageSection, { props: { id: 'skills' } })

    expect(wrapper.get('section').attributes('id')).toBe('skills')
    expect(wrapper.get('section').attributes('aria-labelledby')).toBe('skills-title')
    expect(wrapper.get('h2#skills-title').text()).toBe('Skills')
  })

  it('renders its content', () => {
    const wrapper = mount(PageSection, {
      props: { id: 'about' },
      slots: { default: '<p>Content</p>' },
    })

    expect(wrapper.get('p').text()).toBe('Content')
  })
})
