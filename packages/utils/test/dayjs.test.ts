import { expect, it, describe, vi, beforeEach, afterEach } from 'vitest'
import { formatDate } from '../dayjs'
import dayjs from 'dayjs'

describe('formatDate', () => {
  it('< 1 min', () => {
    expect(formatDate(Date.now())).toBe('刚刚')
  })
  it('< 1 day', () => {
    const mockDate = dayjs().hour(0).minute(0).second(0).millisecond(0)
    expect(formatDate(mockDate)).toBe('00:00')
  })
  it('yesterday', () => {
    const mockDate = dayjs().subtract(1, 'day')
    expect(formatDate(mockDate)).toBe('昨天')
  })
  describe('set system time', () => {
    beforeEach(() => {
      vi.useFakeTimers()
    })
    afterEach(() => {
      vi.useRealTimers()
    })
    it('< 1 year', () => {
      vi.setSystemTime(new Date(2081, 10, 1, 13))
      expect(formatDate(new Date(2081, 5, 2, 13))).toBe('6月2日')
    })
  })
  it('> 1 year', () => {
    const mockDate = dayjs().subtract(1, 'year')
    expect(formatDate(mockDate)).toBe(mockDate.format('YYYY年MM月DD日'))
  })
})
