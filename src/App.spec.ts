import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { setLocale } from './i18n'
import App from './App.vue'
import { sections } from './sections/sections'

describe('App', () => {
  it('has a skip link that points to the main content', () => {
    const wrapper = mount(App)
    const skipLink = wrapper.get('a[href="#main"]')

    expect(skipLink.text()).toBe('Skip to content')
    expect(wrapper.find('main#main').exists()).toBe(true)
  })

  it('has exactly one h1', () => {
    expect(mount(App).findAll('h1')).toHaveLength(1)
  })

  it('has a target on the page for every header link', () => {
    const wrapper = mount(App)
    const hrefs = wrapper.findAll('header a').map((link) => link.attributes('href') ?? '')

    expect(hrefs.length).toBeGreaterThan(0)
    for (const href of hrefs) {
      expect(wrapper.find(href).exists(), `missing target for ${href}`).toBe(true)
    }
  })

  it('puts the footer after main, outside of it, so it is the page footer landmark', () => {
    const wrapper = mount(App)

    expect(wrapper.find('main footer').exists()).toBe(false)
    expect(wrapper.find('main + footer').exists()).toBe(true)
    expect(wrapper.find('#hero').exists()).toBe(true)
  })

  it('renders the sections in the same order as the navigation', () => {
    const ids = mount(App)
      .findAll('main > section')
      .map((section) => section.attributes('id'))

    expect(ids).toEqual(['hero', ...sections])
  })

  it('shows German text after switching the language', async () => {
    const wrapper = mount(App)
    setLocale('de')
    await wrapper.vm.$nextTick()

    expect(wrapper.get('a[href="#main"]').text()).toBe('Zum Inhalt springen')
  })
})
