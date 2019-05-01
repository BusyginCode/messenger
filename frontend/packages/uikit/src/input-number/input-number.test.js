import React from 'react'
import { shallow } from 'enzyme'
import InputNumber from './input-number'

describe('uikit/InputNumber', () => {
  it('should render correctly', () => {
    expect(shallow(<InputNumber value={1} />)).toMatchSnapshot()
  })
})
