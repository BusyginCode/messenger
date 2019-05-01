import React from 'react'
import { shallow } from 'enzyme'
import ChildWrapper from './child-wrapper'

describe('uikit/Tooltip/ChildWrapper', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <ChildWrapper>
        <button>Press</button>
      </ChildWrapper>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('componentWillUnmount should be called on unmount', () => {
    const wrapper = shallow(
      <ChildWrapper>
        <button>Press</button>
      </ChildWrapper>
    )
    const componentWillUnmount = jest.spyOn(wrapper.instance(), 'componentWillUnmount')
    const onMouseLeave = jest.spyOn(wrapper.instance(), 'onMouseLeave')

    wrapper.unmount()
    expect(componentWillUnmount).toHaveBeenCalled()
    expect(onMouseLeave).toHaveBeenCalled()
  })
})
