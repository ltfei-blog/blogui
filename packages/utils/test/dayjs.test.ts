import { expect, it, describe } from 'vitest'
import { formatDate } from '../dayjs'

describe('dayjs', () => {
  it('formatDate', () => {
    expect(formatDate(Date.now())).toBe('刚刚')
  })
})
