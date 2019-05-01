import { toBinaryString as bs } from './array'

describe('array', () => {
  it('should convert to binary string correct', () => {
    expect(bs([false, true, false, true])).toEqual('0101')
    expect(bs([undefined, null, false, true])).toEqual('0001')
  })
})
