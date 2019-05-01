import React from 'react'
import { render } from 'enzyme'
import Button from '../button'

describe('uikit/Button', () => {
  it('should renders correctly', () => {
    const button = render(<Button iconLeft={<span />} />)
    expect(button).toMatchSnapshot()
  })

  it('should renders correctly with component', () => {
    const button = render(<Button component="a" iconRight={<span />} />)
    expect(button).toMatchSnapshot()
  })
})
