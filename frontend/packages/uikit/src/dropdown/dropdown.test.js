import React from 'react'
import { shallow } from 'enzyme'
import Dropdown from './dropdown'

describe('uikit/Dropdown', () => {
  it('should render correctly', () => {
    expect(
      shallow(
        <Dropdown overlay={<div>overlay</div>}>
          <div>trigger</div>
        </Dropdown>
      )
    ).toMatchSnapshot()
  })

  it('should render with options correctly', () => {
    expect(
      shallow(
        <Dropdown options={[{ id: 1 }]}>
          <div>trigger</div>
        </Dropdown>
      )
    ).toMatchSnapshot()
  })
})
