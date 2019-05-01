import React from 'react'
import { shallow } from 'enzyme'
import RadioGroup from '../radio-group'

describe('uikit/RadioGroup', () => {
  it('renders correctly', () => {
    const options = [{ value: 'val1', label: 'Value1' }, { value: 'val2', label: 'Value2' }]
    const onChange = jest.fn()

    const wrapper = shallow(<RadioGroup options={options} value="val1" onChange={onChange} />)

    expect(wrapper).toMatchSnapshot()

    wrapper
      .find('Radio')
      .at(0)
      .prop('onChange')({ target: { value: 'val1' } })

    expect(onChange).toHaveBeenCalledTimes(1)
  })
})
