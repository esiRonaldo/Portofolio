import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { setLocale } from '../../i18n'
import LearningSection from './LearningSection.vue'
import { course } from './learning'

describe('LearningSection', () => {
  it('shows the course with provider, status and full heading', () => {
    const wrapper = mount(LearningSection)
    const article = wrapper.get('article')

    expect(wrapper.get('h2').text()).toBe('Professional Development')
    expect(article.get('h3').text()).toBe(course.title.en)
    expect(article.text()).toContain('neue fische / SPICED')
    expect(article.text()).toContain('In Progress')
    expect(article.text()).toContain(course.summary.en)
  })

  it('shows the dates as machine-readable MM/YYYY', () => {
    const times = mount(LearningSection).findAll('time')

    expect(times.map((time) => time.attributes('datetime'))).toEqual(['2026-10', '2027-02'])
    expect(times.map((time) => time.text())).toEqual(['10/2026', '02/2027'])
  })

  it('lists the focus areas under their label', () => {
    const list = mount(LearningSection).get('ul[aria-labelledby="learning-focus"]')

    expect(list.findAll('li').map((li) => li.text())).toEqual(course.focus.en)
  })

  it('shows German content after switching the language', async () => {
    const wrapper = mount(LearningSection)
    setLocale('de')
    await wrapper.vm.$nextTick()

    expect(wrapper.get('h2').text()).toBe('Berufliche Weiterbildung')
    expect(wrapper.get('h3').text()).toBe('Advanced Software Development mit KI — Weiterbildung')
    expect(wrapper.text()).toContain('Laufend')
    expect(wrapper.get('ul li').text()).toBe('KI-gestützte Softwareentwicklung')
  })
})
