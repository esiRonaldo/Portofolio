import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { setLocale } from '../i18n'
import BackToTop from './BackToTop.vue'

// Stand-in observer that lets the test report whether the hero is on screen.
function stubObserver() {
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
  return { report: (visible: boolean) => report(visible), disconnect }
}

function mountWithHero() {
  const hero = document.createElement('section')
  hero.id = 'hero'
  document.body.append(hero)
  const wrapper = mount(BackToTop)
  hero.remove()
  return wrapper
}

describe('BackToTop', () => {
  it('appears only once the hero is out of view', async () => {
    const observer = stubObserver()
    const wrapper = mountWithHero()
    expect(wrapper.find('a').exists()).toBe(false)

    observer.report(false)
    await wrapper.vm.$nextTick()
    expect(wrapper.find('a').exists()).toBe(true)

    observer.report(true)
    await wrapper.vm.$nextTick()
    expect(wrapper.find('a').exists()).toBe(false)
  })

  it('links to the top with a translated accessible name', async () => {
    const observer = stubObserver()
    const wrapper = mountWithHero()
    observer.report(false)
    await wrapper.vm.$nextTick()

    const link = wrapper.get('a')
    expect(link.attributes('href')).toBe('#hero')
    expect(link.attributes('aria-label')).toBe('Back to top')

    setLocale('de')
    await wrapper.vm.$nextTick()
    expect(wrapper.get('a').attributes('aria-label')).toBe('Nach oben')
  })

  it('stops observing when removed', () => {
    const observer = stubObserver()
    mountWithHero().unmount()
    expect(observer.disconnect).toHaveBeenCalled()
  })
})
