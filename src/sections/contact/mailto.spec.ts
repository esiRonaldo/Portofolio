import { describe, it, expect } from 'vitest'
import { mailtoUrl } from './mailto'

describe('mailtoUrl', () => {
  it('encodes subject and body so symbols and line breaks survive', () => {
    expect(mailtoUrl('me@example.com', 'Hi & bye?', 'a\nb')).toBe(
      'mailto:me@example.com?subject=Hi%20%26%20bye%3F&body=a%0Ab',
    )
  })
})
