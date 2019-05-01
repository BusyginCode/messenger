import React from 'react'
import { shallow } from 'enzyme'
import Tooltip from './tooltip'

describe('uikit/Tooltip', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Tooltip id={1} />)
    expect(wrapper).toMatchSnapshot()
  })
})
