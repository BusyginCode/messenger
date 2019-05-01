import React from 'react'
import { render } from 'enzyme'
import Checkbox from '../checkbox'

describe('uikit/checkbox', () => {
  it('should renders correctly', () => {
    const wrapper = render(<Checkbox value="some-val" checked label="label" />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should renders correctly label="label"', () => {
    const wrapper = render(<Checkbox value="some-val" checked />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should renders correctly label=<span />', () => {
    const wrapper = render(<Checkbox value="some-val" checked label={<span />} />)
    expect(wrapper).toMatchSnapshot()
  })
})
