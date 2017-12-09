import { whetherInBetween } from '../src/core/date-time'

describe('test whetherInBetween function', () => {
  const RealDate = Date
  function mockDate(hours: number, minutes: number) {
    class FakeDate extends RealDate {
      constructor(...args) {
        super()
        if (args.length === 0) {
          const now = new RealDate()
          now.setHours(hours)
          now.setMinutes(minutes)
          now.setSeconds(0)
          now.setMilliseconds(0)
          return now
        } else {
          return new RealDate(...args)
        }
      }
    }
    (global.Date as any) = FakeDate
  }

  afterEach(() => {
    global.Date = RealDate
  })

  describe('test boundary scenes', () => {
    test('00:00 not in between 00:00 and 11:11', () => {
      mockDate(0, 0)
      expect(whetherInBetween('00:00', '11:11')).toBe(false)
    })
    test('11:11 not in between 00:00 and 11:11', () => {
      mockDate(11, 11)
      expect(whetherInBetween('00:00', '11:11')).toBe(false)
    })
  })

  describe('begin time less than end time', () => {
    test('11:11 in between 08:00 and 21:21', () => {
      mockDate(11, 11)
      expect(whetherInBetween('08:00', '21:21')).toBe(true)
    })
    test('12:12 in between 7:00 and 21:21', () => {
      mockDate(12, 12)
      expect(whetherInBetween('7:00', '21:21')).toBe(true)
    })
  })

  describe('begin time more than end time', () => {
    test('11:11 in between 23:59 and 00:00', () => {
      mockDate(11, 11)
      expect(whetherInBetween('23:59', '00:00')).toBe(true)
    })
    test('12:12 in between 17:00 and 09:21', () => {
      mockDate(12, 12)
      expect(whetherInBetween('17:00', '09:21')).toBe(true)
    })
  })
})
