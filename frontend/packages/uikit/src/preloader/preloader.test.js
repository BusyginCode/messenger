import React from 'react'
import { shallow } from 'enzyme'
import Preloader from './preloader'

describe('uikit/progress-indicator', () => {
  it('should render correctly', () => {
    expect(shallow(<Preloader />)).toMatchSnapshot()
  })
})
