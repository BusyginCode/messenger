import React from 'react'
import { shallow } from 'enzyme'
import { createContext } from '@messenger/testing'
import Select from './select'

describe('uikit/Select', () => {
  it('renders correctly', () => {
    const context = createContext({})
    const wrapper = shallow(<Select />, context)
    expect(wrapper.dive()).toMatchSnapshot()
  })

  it('renders correctly with multiple', () => {
    const context = createContext({})
    const wrapper = shallow(<Select multiple />, context)
    expect(wrapper.dive()).toMatchSnapshot()
  })

  it('renders correctly with size', () => {
    const context = createContext({})
    const wrapper = shallow(<Select size="m" />, context)
    expect(wrapper.dive()).toMatchSnapshot()
  })

  it('renders correctly with showSearch', () => {
    const context = createContext({})
    const wrapper = shallow(<Select showSearch />, context)
    expect(wrapper.dive()).toMatchSnapshot()
  })

  it('renders correctly with premium', () => {
    const context = createContext({})
    const wrapper = shallow(<Select premium />, context)
    expect(wrapper.dive()).toMatchSnapshot()
  })
})
