import cookies from './cookies'

describe('cookies', () => {
  it('should correct', () => {
    cookies.set('a', 'b', {})
    expect(cookies.get('a')).toBe(undefined)
    cookies.remove('a')
    expect(cookies.get('a')).toBe(undefined)
  })
})
