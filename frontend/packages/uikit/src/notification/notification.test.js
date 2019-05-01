import React from 'react'
import { shallow } from 'enzyme'
import Notification from './notification'

describe('uikit/notification', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Notification title="title" />)
    expect(wrapper).toMatchSnapshot()
  })
})
