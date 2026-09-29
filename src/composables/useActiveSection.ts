import { onMounted, onUnmounted, readonly, ref } from 'vue'

/**
 * Tracks which section is currently on screen.
 * The observer watches a thin band about 40% down the viewport; the section crossing it is active.
 */
export function useActiveSection<Id extends string>(ids: readonly Id[]) {
  const active = ref<Id | null>(null)
  let observer: IntersectionObserver | undefined

  function isId(value: string): value is Id {
    return (ids as readonly string[]).includes(value)
  }

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && isId(entry.target.id)) active.value = entry.target.id
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    for (const id of ids) {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    }
  })

  onUnmounted(() => observer?.disconnect())

  return readonly(active)
}
