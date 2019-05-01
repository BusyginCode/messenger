import React from 'react'
import { shallow } from 'enzyme'
import ErrorMessage from './error-message'

describe('App/ErrorMessage', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ErrorMessage error={new Error('404')} />)
    expect(wrapper).toMatchSnapshot()
  })
})
