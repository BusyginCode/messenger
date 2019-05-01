import React from 'react'
import { shallow } from 'enzyme'
import ScrollTo from './scroll-to'

describe('uikit/Select/ScrollTo', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ScrollTo />)
    expect(wrapper).toMatchSnapshot()
  })
})
