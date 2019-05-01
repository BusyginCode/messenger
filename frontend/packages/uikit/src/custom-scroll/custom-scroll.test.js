import React from 'react'
import { shallow } from 'enzyme'
import CustomScroll from './custom-scroll'

describe('uikit/CustomScroll', () => {
  it('should render correctly', () => {
    expect(shallow(<CustomScroll>123</CustomScroll>)).toMatchSnapshot()
  })
})
