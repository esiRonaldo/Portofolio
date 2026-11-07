import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { setLocale } from '../../i18n'
import ExperienceSection from './ExperienceSection.vue'
import { jobs } from './experience'

function jobItems(wrapper: ReturnType<typeof mount>) {
  return wrapper.findAll('ol > li')
}

describe('ExperienceSection', () => {
  it('lists the Weiterbildung and every job as an ordered list, newest first', () => {
    const items = jobItems(mount(ExperienceSection))

    expect(items.map((item) => item.get('h3').text())).toEqual([
      'Advanced Software Development with AI — Weiterbildung',
      'Frontend Software Engineer (IT Technical Consultant)',
      'Junior Software Developer',
      'Software Development Intern',
    ])

    const starts = jobs.map((job) => job.start)
    expect(starts).toEqual([...starts].sort().reverse())
  })

  it('marks only the ongoing Weiterbildung as in progress', () => {
    const items = jobItems(mount(ExperienceSection))

    expect(items.map((item) => item.text().includes('In Progress'))).toEqual([
      true,
      false,
      false,
      false,
    ])
    expect(items[0]?.text()).toContain('neue fische / SPICED')
  })

  it('shows company, summary and machine-readable dates', () => {
    const job = jobItems(mount(ExperienceSection))[1]
    const times = job?.findAll('time') ?? []

    expect(job?.text()).toContain('NTT DATA Deutschland SE')
    expect(job?.text()).toContain('helped digitalize manual business processes')
    expect(times.map((time) => [time.attributes('datetime'), time.text()])).toEqual([
      ['2022-04', '04/2022'],
      ['2025-12', '12/2025'],
    ])
  })

  it('shows German content after switching the language', async () => {
    const wrapper = mount(ExperienceSection)
    setLocale('de')
    await wrapper.vm.$nextTick()

    const [course, , junior] = jobItems(wrapper)
    expect(course?.get('h3').text()).toBe('Advanced Software Development mit KI — Weiterbildung')
    expect(course?.text()).toContain('Laufend')
    expect(junior?.get('h3').text()).toBe('Junior Softwareentwickler')
    expect(junior?.text()).toContain('interaktiver Benutzeroberflächen')
  })
})
