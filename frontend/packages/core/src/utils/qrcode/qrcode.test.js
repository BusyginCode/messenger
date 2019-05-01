import qrcode from './index'

describe('core/utils/qrcode', () => {
  it('should make correct', () => {
    expect(qrcode.make({})).toMatchSnapshot()
  })
})
