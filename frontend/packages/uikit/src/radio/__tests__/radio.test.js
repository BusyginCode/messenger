import React from 'react'
import { render } from 'enzyme'
import Radio from '../radio'

describe('uikit/Radio', () => {
  it('renders correctly', () => {
    const wrapper = render(<Radio value="some-val" checked />)
    expect(wrapper).toMatchSnapshot()
  })
})
