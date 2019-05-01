import { getMinutesFromDayBeginning } from './formatter'
import camelCased from './camel-cased'
import pickCamelCased from './pick-camel-cased'
import reassign from './reassign'

describe('core/utils/formatter', () => {
  describe('#getMinutesFromDayBeginning', () => {
    it('should getMinutesFromDayBeginning correct', () => {
      expect(getMinutesFromDayBeginning()).toBe(0)
    })
  })

  describe('#camelCased', () => {
    it('should return the same object camelCase', () => {
      expect(
        camelCased({
          foo: 'foo',
          b_a__r: 'bar',
          BIZ: 'biz',
          PoP: 'pop'
        })
      ).toEqual({
        foo: 'foo',
        bAR: 'bar',
        biz: 'biz',
        poP: 'pop'
      })
    })
  })

  describe('#getCamelCased', () => {
    it('should return the same object camelCase', () => {
      expect(
        pickCamelCased(
          {
            foo: 'foo',
            b_a__r: 'bar',
            BIZ: 'biz',
            PoP: 'pop'
          },
          ['foo', 'b_a__r']
        )
      ).toEqual({
        foo: 'foo',
        bAR: 'bar'
      })
    })
  })

  describe('#reassign', () => {
    it('should return correctly', () => {
      expect(reassign({ a: 1, b: 5 }, ['a', b => b.b])).toEqual({ '0': 1, '1': 5 })
    })
  })
})
