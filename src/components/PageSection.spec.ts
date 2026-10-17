import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import PageSection from './PageSection.vue'

describe('PageSection', () => {
  it('is a section labelled by its translated heading', () => {
    const wrapper = mount(PageSection, { props: { id: 'skills' } })

    expect(wrapper.get('section').attributes('id')).toBe('skills')
    expect(wrapper.get('section').attributes('aria-labelledby')).toBe('skills-title')
    expect(wrapper.get('h2#skills-title').text()).toBe('Skills')
  })

  it('uses a given title as the heading instead of the nav label', () => {
    const wrapper = mount(PageSection, {
      props: { id: 'learning', title: 'Professional Development' },
    })

    expect(wrapper.get('h2#learning-title').text()).toBe('Professional Development')
  })

  it('renders its content', () => {
    const wrapper = mount(PageSection, {
      props: { id: 'about' },
      slots: { default: '<p>Content</p>' },
    })

    expect(wrapper.get('p').text()).toBe('Content')
  })

  it('marks itself as revealed once it comes on screen, then stops observing', async () => {
    let report: (isIntersecting: boolean) => void = () => {}
    const disconnect = vi.fn()
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        constructor(callback: (entries: Partial<IntersectionObserverEntry>[]) => void) {
          report = (isIntersecting) => callback([{ isIntersecting }])
        }
        observe() {}
        disconnect = disconnect
      },
    )

    const wrapper = mount(PageSection, {
      props: { id: 'skills' },
      slots: { default: '<p>Content</p>' },
    })
    const section = wrapper.get('section')

    // Content is in the page before the reveal; only its animation waits.
    expect(wrapper.text()).toContain('Content')
    expect(section.attributes('data-revealed')).toBeUndefined()

    report(false)
    await wrapper.vm.$nextTick()
    expect(section.attributes('data-revealed')).toBeUndefined()

    report(true)
    await wrapper.vm.$nextTick()
    expect(section.attributes('data-revealed')).toBeDefined()
    expect(disconnect).toHaveBeenCalled()
  })
})
