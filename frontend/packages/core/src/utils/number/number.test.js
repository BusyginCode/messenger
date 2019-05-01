import { getFixedNumber, getRoundedNumber, getFormattedCurrency, getMaxCountString } from './number'

describe('app/utils/number', () => {
  it('should correct getFixedNumber', () => {
    expect(getFixedNumber(10.14214123)).toBe(10.1)
  })

  it('should correct getFixedNumber', () => {
    expect(getFixedNumber(10.16214123)).toBe(10.2)
  })

  it('should round by any number', () => {
    expect(getFixedNumber(10.16214123, 1)).toBe(10.2)
    expect(getFixedNumber(543.3234, 2)).toBe(543.32)
    expect(getFixedNumber(575.3234, 5)).toBe(575.3234)
  })

  it('should round up to 10', () => {
    expect(getRoundedNumber(113.16214123)).toBe(110)
    expect(getRoundedNumber(118, 10)).toBe(120)
  })

  it('should round up to any number', () => {
    expect(getRoundedNumber(10.16214123, 3)).toBe(9)
    expect(getRoundedNumber(543, 20)).toBe(540)
    expect(getRoundedNumber(57, 15)).toBe(60)
  })

  it('should format currency', () => {
    expect(getFormattedCurrency(0)).toBe('$0')
    expect(getFormattedCurrency(1)).toBe('$1')
    expect(getFormattedCurrency(999)).toBe('$999')
    expect(getFormattedCurrency(1000)).toBe('$1,000')
    expect(getFormattedCurrency(20000)).toBe('$20,000')
  })

  it('should getMaxCountString <=9', () => {
    expect(getMaxCountString(5)).toBe(5)
  })

  it('should getMaxCountString 9>', () => {
    expect(getMaxCountString(10)).toBe('9+')
  })
})
