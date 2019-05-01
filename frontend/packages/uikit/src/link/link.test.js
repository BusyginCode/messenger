import React from 'react'
import { render } from 'enzyme'
import Link from './link'

describe('uikit/Link', () => {
  it('should render correctly', () => {
    const props = {
      intent: 'primary',
      disabled: true,
      underlined: true,
      className: 'className',
      href: '/'
    }
    expect(render(<Link {...props}>link</Link>)).toMatchSnapshot()
  })
})
