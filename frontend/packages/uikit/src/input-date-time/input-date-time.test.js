import React from 'react'
import { shallow } from 'enzyme'
import InputDateTime from './input-date-time'

describe('uikit/InputDateTime', () => {
  it('should render correctly', () => {
    expect(shallow(<InputDateTime />)).toMatchSnapshot()
  })
})
