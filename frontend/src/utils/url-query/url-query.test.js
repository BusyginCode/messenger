import { parse, stringify, csvify, handleBackUrl, addBackUrl } from './url-query'

describe('app/utils/url-query', () => {
  it('should correct parse', () => {
    const query = '?ids[]=1'

    expect(parse(query)).toEqual({ ids: ['1'] })
  })

  it('should correct parse with shema', () => {
    const query = '?ids[]=1&id=1&names[]=a&names[]=b'

    expect(parse(query, { ids: 'number[]', id: 'number', names: 'string[]' })).toEqual({
      ids: [1],
      id: 1,
      names: ['a', 'b']
    })
  })

  it('should correct parse with shema string[] 1 element', () => {
    const query = '?ids[]=1&id=1&names=a'

    expect(parse(query, { ids: 'number[]', id: 'number', names: 'string[]' })).toEqual({
      ids: [1],
      id: 1,
      names: ['a']
    })
  })

  it('should correct stringify', () => {
    const values = { id: 1, ids: [1] }
    expect(stringify(values)).toBe('?id=1&ids[]=1')
  })

  it('should correct csvify', () => {
    const values = { id: 1, ids: [1, 2, 3] }
    expect(csvify(values)).toBe('?id=1&ids=1,2,3')
  })

  it('should correct csvify empty request', () => {
    expect(csvify({})).toBe('?')
    expect(csvify({}, '?a=a')).toBe('?a=a')
  })

  it('should correct csvify with search', () => {
    const values = { id: 1, ids: [1, 2, 3] }
    expect(csvify(values, '?a=a')).toBe('?a=a&id=1&ids=1,2,3')
  })

  it('should correct stringify with search', () => {
    const values = { id: 1, ids: [1] }
    expect(stringify(values, '?a=a')).toBe('?a=a&id=1&ids[]=1')
  })

  it('should addBackUrl correct', () => {
    expect(addBackUrl('/login', 'https://google.com')).toBe('/login?back_url=https%3A%2F%2Fgoogle.com')
    expect(addBackUrl('/login?name=name', 'https://google.com')).toBe(
      '/login?name=name&back_url=https%3A%2F%2Fgoogle.com'
    )
    expect(addBackUrl('/login')).toBe('/login')
  })

  describe('app/utils/url-query/handleBackUrl', () => {
    it('call with proper params when no back url', () => {
      const history = {
        push: jest.fn()
      }

      const location = {
        search: ''
      }
      const url = '/register'
      handleBackUrl(location, history, url)

      expect(history.push).toBeCalledWith(url)
    })

    it('call with proper params with back url', () => {
      window.location.assign = jest.fn()

      const history = {
        push: jest.fn()
      }

      const location = {
        search: '?back_url=1'
      }

      const url = '/register'
      handleBackUrl(location, history, url)

      expect(window.location.assign).toBeCalledWith('1')
    })
  })
})
