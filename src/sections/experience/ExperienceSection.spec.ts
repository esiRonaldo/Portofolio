import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { setLocale } from '../../i18n'
import ExperienceSection from './ExperienceSection.vue'
import { jobs } from './experience'

function jobItems(wrapper: ReturnType<typeof mount>) {
  return wrapper.findAll('ol > li')
}

describe('ExperienceSection', () => {
  it('lists every job as an ordered list, newest first', () => {
    const items = jobItems(mount(ExperienceSection))

    expect(items.map((item) => item.get('h3').text())).toEqual([
      'Technical Consultant',
      'Junior Software Developer',
      'Software Development Intern',
    ])

    const starts = jobs.map((job) => job.start)
    expect(starts).toEqual([...starts].sort().reverse())
  })

  it('shows company, summary and machine-readable dates', () => {
    const first = jobItems(mount(ExperienceSection))[0]
    const times = first?.findAll('time') ?? []

    expect(first?.text()).toContain('NTT DATA Deutschland SE')
    expect(first?.text()).toContain('import/export management')
    expect(times.map((time) => [time.attributes('datetime'), time.text()])).toEqual([
      ['2022-04', '04/2022'],
      ['2025-12', '12/2025'],
    ])
  })

  it('shows German roles and summaries after switching the language', async () => {
    const wrapper = mount(ExperienceSection)
    setLocale('de')
    await wrapper.vm.$nextTick()

    const second = jobItems(wrapper)[1]
    expect(second?.get('h3').text()).toBe('Junior Softwareentwickler')
    expect(second?.text()).toContain('Systemkonfigurationsanwendung')
  })
})
