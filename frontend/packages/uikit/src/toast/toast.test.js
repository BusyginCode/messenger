import React from 'react'
import { shallow } from 'enzyme'
import Toast from './toast'

const icon = <svg />

describe('uikit/Toast', () => {
  it('renders content as a text with success intent', () => {
    const toast = shallow(<Toast icon={icon} content="Simple text" onClose={jest.fn()} intent="success" />)

    expect(toast).toMatchSnapshot()
  })

  it('renders toast with warning intent', () => {
    const onClose = jest.fn()
    const toast = shallow(<Toast icon={icon} content="Simple text" onClose={onClose} intent="warning" />)

    toast
      .find('Svg(close)')
      .at(0)
      .prop('onClick')()

    expect(onClose).toHaveBeenCalledTimes(1)
    expect(toast).toMatchSnapshot()
  })
})
