import { describe, it, expect, afterEach } from 'vitest'
import { mount, type VueWrapper } from '@vue/test-utils'
import CvDownload from './CvDownload.vue'

let wrapper: VueWrapper

function options() {
  return wrapper.get('#cv-options')
}

afterEach(() => wrapper.unmount())

describe('CvDownload', () => {
  it('starts closed and opens the language choice on click', async () => {
    wrapper = mount(CvDownload, { attachTo: document.body })
    const button = wrapper.get('button')

    expect(button.attributes('aria-expanded')).toBe('false')
    expect(options().isVisible()).toBe(false)

    await button.trigger('click')

    expect(button.attributes('aria-expanded')).toBe('true')
    expect(options().isVisible()).toBe(true)
  })

  it('offers the English and German CV as PDF downloads', () => {
    wrapper = mount(CvDownload, { attachTo: document.body })
    const links = options().findAll('a')

    expect(
      links.map((link) => [link.text(), link.attributes('href'), link.attributes('hreflang')]),
    ).toEqual([
      ['English PDF', '/cv/Ehsan-Fani-CV-EN.pdf', 'en'],
      ['Deutsch PDF', '/cv/Ehsan-Fani-Lebenslauf-DE.pdf', 'de'],
    ])
    for (const link of links) expect(link.attributes('download')).toBeDefined()
  })

  it('closes after a language is chosen', async () => {
    wrapper = mount(CvDownload, { attachTo: document.body })
    await wrapper.get('button').trigger('click')
    await options().get('a').trigger('click')

    expect(wrapper.get('button').attributes('aria-expanded')).toBe('false')
  })

  it('closes on Escape and returns focus to the button', async () => {
    wrapper = mount(CvDownload, { attachTo: document.body })
    const button = wrapper.get('button')
    await button.trigger('click')
    await options().get('a').trigger('keydown', { key: 'Escape' })

    expect(button.attributes('aria-expanded')).toBe('false')
    expect(document.activeElement).toBe(button.element)
  })

  it('closes on a click outside', async () => {
    wrapper = mount(CvDownload, { attachTo: document.body })
    await wrapper.get('button').trigger('click')

    document.body.dispatchEvent(new Event('pointerdown', { bubbles: true }))
    await wrapper.vm.$nextTick()

    expect(wrapper.get('button').attributes('aria-expanded')).toBe('false')
  })
})
