import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { setLocale } from '../../i18n'
import ExperienceSection from './ExperienceSection.vue'
import { jobs } from './experience'

function entries(wrapper: ReturnType<typeof mount>) {
  return wrapper.findAll('ol > li')
}

describe('ExperienceSection', () => {
  it('lists the Weiterbildung and every job as an ordered list, newest first', () => {
    const items = entries(mount(ExperienceSection))

    expect(items.map((item) => item.get('h3').text())).toEqual([
      'Advanced Software Development with AI — Weiterbildung',
      'Frontend Software Engineer (IT Technical Consultant)',
      'Junior Software Developer',
      'Software Development Intern',
    ])

    const starts = jobs.map((job) => job.start)
    expect(starts).toEqual([...starts].sort().reverse())
  })

  it('shows company, summary and machine-readable dates', () => {
    const job = entries(mount(ExperienceSection))[1]
    const times = job?.findAll('time') ?? []

    expect(job?.text()).toContain('NTT DATA Deutschland SE')
    expect(job?.text()).toContain('Client software projects in a DevOps department')
    expect(times.map((time) => [time.attributes('datetime'), time.text()])).toEqual([
      ['2022-04', '04/2022'],
      ['2025-12', '12/2025'],
    ])
  })

  it('marks the Weiterbildung as ongoing professional development with its focus areas', () => {
    const items = entries(mount(ExperienceSection))
    const course = items[0]

    expect(course?.text()).toContain('Professional Development')
    expect(course?.text()).toContain('In Progress')
    expect(course?.text()).toContain('neue fische / SPICED')
    expect(course?.findAll('ul[aria-labelledby] li').map((li) => li.text())).toEqual([
      'AI-assisted software development',
      'JavaScript/TypeScript',
      'Node.js',
      'NestJS',
      'React/Next.js',
      'CI/CD',
    ])

    for (const job of items.slice(1)) {
      expect(job.text()).not.toContain('In Progress')
      expect(job.text()).not.toContain('Professional Development')
    }
  })

  it('shows a Show more button only for entries with details', () => {
    const items = entries(mount(ExperienceSection))

    expect(items.map((item) => item.find('button').exists())).toEqual([false, true, true, false])
  })

  it('links each button to its details and its job title', () => {
    const job = entries(mount(ExperienceSection))[1]
    const button = job?.get('button')

    expect(button?.attributes('type')).toBe('button')
    expect(job?.findAll(`#${button?.attributes('aria-controls')} li`)).toHaveLength(5)
    expect(job?.get(`#${button?.attributes('aria-describedby')}`).text()).toBe(
      'Frontend Software Engineer (IT Technical Consultant)',
    )
  })

  it('expands and collapses the details', async () => {
    const job = entries(mount(ExperienceSection))[1]
    const button = job?.get('button')
    const details = job?.get(`#${button?.attributes('aria-controls')}`)

    expect(button?.text()).toBe('Show more')
    expect(button?.attributes('aria-expanded')).toBe('false')
    expect(details?.attributes('inert')).toBeDefined()

    await button?.trigger('click')
    expect(button?.text()).toBe('Show less')
    expect(button?.attributes('aria-expanded')).toBe('true')
    expect(details?.attributes('inert')).toBeUndefined()
    expect(details?.text()).toContain('Angular 8 to 17 and Ionic 4 to 7')

    await button?.trigger('click')
    expect(button?.text()).toBe('Show more')
    expect(button?.attributes('aria-expanded')).toBe('false')
    expect(details?.attributes('inert')).toBeDefined()
  })

  it('expands each entry independently', async () => {
    const [, ntt, benHur] = entries(mount(ExperienceSection))

    await ntt?.get('button').trigger('click')

    expect(ntt?.get('button').attributes('aria-expanded')).toBe('true')
    expect(benHur?.get('button').attributes('aria-expanded')).toBe('false')
  })

  it('shows German content and button labels after switching the language', async () => {
    const wrapper = mount(ExperienceSection)
    setLocale('de')
    await wrapper.vm.$nextTick()

    const [course, ntt, benHur] = entries(wrapper)
    expect(course?.get('h3').text()).toBe('Advanced Software Development mit KI — Weiterbildung')
    expect(course?.text()).toContain('Berufliche Weiterbildung')
    expect(course?.text()).toContain('Laufend')
    expect(course?.text()).toContain('KI-gestützte Softwareentwicklung')
    expect(benHur?.get('h3').text()).toBe('Junior Softwareentwickler')
    expect(benHur?.text()).toContain('Kundenorientierte Webanwendungen')

    const button = ntt?.get('button')
    expect(button?.text()).toBe('Mehr anzeigen')
    await button?.trigger('click')
    expect(button?.text()).toBe('Weniger anzeigen')
    expect(ntt?.text()).toContain('Modernisierung einer Legacy-Anwendung von Angular 8 auf 17')
  })
})
