import { describe, it, expect, vi } from 'vitest'
import { defineComponent, h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { useActiveSection } from './useActiveSection'

type Entry = { isIntersecting: boolean; target: Element }

// A controllable stand-in: we decide which section "crosses the band".
class FakeObserver {
  static latest: FakeObserver
  observed: string[] = []
  disconnected = false
  callback: (entries: Entry[]) => void

  constructor(callback: (entries: Entry[]) => void) {
    this.callback = callback
    FakeObserver.latest = this
  }
  observe(element: Element) {
    this.observed.push(element.id)
  }
  disconnect() {
    this.disconnected = true
  }
}

// A tiny component that renders two sections and shows the active id.
const Harness = defineComponent({
  setup() {
    const active = useActiveSection(['one', 'two'] as const)
    return () =>
      h('div', [
        h('section', { id: 'one' }),
        h('section', { id: 'two' }),
        h('p', active.value ?? 'none'),
      ])
  },
})

function sectionEntry(id: string, isIntersecting: boolean): Entry {
  const target = document.getElementById(id)
  if (!target) throw new Error(`No element #${id}`)
  return { isIntersecting, target }
}

describe('useActiveSection', () => {
  it('reports the section that crosses the band', async () => {
    vi.stubGlobal('IntersectionObserver', FakeObserver)
    const wrapper = mount(Harness, { attachTo: document.body })
    const observer = FakeObserver.latest

    expect(observer.observed).toEqual(['one', 'two'])
    expect(wrapper.get('p').text()).toBe('none')

    observer.callback([sectionEntry('two', true)])
    await nextTick()
    expect(wrapper.get('p').text()).toBe('two')

    // A section leaving the band doesn't change the active one.
    observer.callback([sectionEntry('one', false)])
    await nextTick()
    expect(wrapper.get('p').text()).toBe('two')

    wrapper.unmount()
  })

  it('stops observing when the component is removed', () => {
    vi.stubGlobal('IntersectionObserver', FakeObserver)
    const wrapper = mount(Harness, { attachTo: document.body })

    wrapper.unmount()
    expect(FakeObserver.latest.disconnected).toBe(true)
  })
})
