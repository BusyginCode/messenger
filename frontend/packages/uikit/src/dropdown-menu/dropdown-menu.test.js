import React from 'react'
import { shallow } from 'enzyme'
import DropdownMenu from './dropdown-menu'

describe('uikit/DropdownMenu', () => {
  it('should render correctly with custom trigger', () => {
    const wrapper = shallow(
      <DropdownMenu
        placement="topLeft"
        options={[{ id: 1, component: 'div' }, { id: 2, component: 'div' }]}
        trigger={['click']}
      >
        <button>...</button>
      </DropdownMenu>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
