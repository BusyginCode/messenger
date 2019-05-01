import difference from './difference'

describe('core/utils/difference', () => {
  it('should diff correctly', () => {
    expect(difference({ a: 1 }, { b: 2 })).toEqual({ a: 1 })
  })
})
