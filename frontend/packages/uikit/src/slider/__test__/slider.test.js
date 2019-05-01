import React from 'react'
import { render, mount } from 'enzyme'
import Slider from '../slider'
import ScaleItem from '../scale-item'

describe('uikit/Slider', () => {
  it('should renders correctly', () => {
    const wrapper = render(<Slider fnClassName="fnClass" min={0} max={10} value={3} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should change value by click on the scale item', () => {
    const wrapper = mount(<Slider fnClassName="fnClass" min={1} max={10} value={3} />)
    const scaleItems = wrapper.find(ScaleItem)

    scaleItems.at(8).simulate('click')
    expect(wrapper.state('value')).toBe(9)

    scaleItems.at(0).simulate('click')
    expect(wrapper.state('value')).toBe(1)
  })

  it('should change value by click on the scale item for a range slider', () => {
    const wrapper = mount(<Slider fnClassName="fnClass" min={1} max={10} value={[1, 9]} range />)
    const scaleItems = wrapper.find(ScaleItem)

    scaleItems.at(2).simulate('click')
    expect(wrapper.state('value')).toEqual([3, 9])

    scaleItems.at(5).simulate('click')
    expect(wrapper.state('value')).toEqual([3, 6])

    scaleItems.at(3).simulate('click')
    expect(wrapper.state('value')).toEqual([4, 6])

    scaleItems.at(4).simulate('click')
    expect(wrapper.state('value')).toEqual([4, 5])

    scaleItems.at(9).simulate('click')
    expect(wrapper.state('value')).toEqual([4, 10])
  })
})
