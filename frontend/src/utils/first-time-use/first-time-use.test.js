import firstTimeUse from './first-time-use'

describe('core/utils/first-time-use', () => {
  it('should make correct first time without premium', () => {
    expect(firstTimeUse('first')).toBe(true)
  })

  it('should make correct not first time without premium', () => {
    expect(firstTimeUse('first')).toBe(false)
  })

  it('should make correct not first time with premium', () => {
    expect(firstTimeUse('first', true)).toBe(false)
  })

  it('should make correct first time with not premium', () => {
    expect(firstTimeUse('first', false)).toBe(true)
  })

  it('should make correct first time after premium', () => {
    expect(firstTimeUse('first')).toBe(true)
  })
})
