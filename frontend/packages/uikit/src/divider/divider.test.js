import React from 'react'
import { shallow } from 'enzyme'
import Divider from './divider'

describe('uikit/Divider', () => {
  it('should render correctly', () => {
    expect(shallow(<Divider />)).toMatchSnapshot()
  })
})
