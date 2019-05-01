import React from 'react'
import { shallow } from 'enzyme'
import { createContext } from '@messenger/testing'
import AuthRedirect from '../auth-redirect'
import redirect from './compose-redirects'

const Component = () => <div>Test</div>

describe('compose-redirects', () => {
  it('should correct', () => {
    const context = createContext()
    const Container = redirect([AuthRedirect()])
    expect(
      shallow(<Container route={{ routes: [{ component: Component }] }} />, context)
        .dive()
        .dive()
        .dive()
        .dive()
    ).toMatchSnapshot()
  })
})
