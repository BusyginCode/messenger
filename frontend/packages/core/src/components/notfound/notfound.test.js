import React from 'react'
import { shallowWithIntl } from '@messenger/testing'
import NotFound from './notfound'

describe('app/components/NotFound', () => {
  it('should render correctly', () => {
    const staticContext = {}
    expect(shallowWithIntl(<NotFound staticContext={staticContext} />).dive()).toMatchSnapshot()
    expect(staticContext.is404).toBe(true)
  })
})
