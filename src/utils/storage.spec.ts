import { describe, it, expect, vi } from 'vitest'
import { readStorage, writeStorage } from './storage'

describe('storage', () => {
  it('reads back what was written', () => {
    writeStorage('key', 'value')
    expect(readStorage('key')).toBe('value')
  })

  it('falls back instead of throwing when storage is blocked', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('blocked')
    })
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('blocked')
    })

    expect(readStorage('key')).toBeNull()
    expect(() => writeStorage('key', 'value')).not.toThrow()
  })
})
