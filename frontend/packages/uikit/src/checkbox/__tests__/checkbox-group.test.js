import React from 'react'
import { shallow } from 'enzyme'
import Checkbox from '../checkbox'
import CheckboxGroup from '../checkbox-group'

describe('uikit/checkbox-group', () => {
  it('should renders correctly', () => {
    const onChange = jest.fn()
    const onBlur = jest.fn()
    const onFocus = jest.fn()
    const options = [
      {
        value: 'val1',
        label: 'Value1',
        iconLeft: 'left',
        iconTop: 'top',
        imageLabel: 'label',
        iconRight: 'right'
      },
      { value: 'val2', label: 'Value2', disabled: true }
    ]
    const wrapper = shallow(
      <CheckboxGroup
        max={2}
        options={options}
        value={['val1', 'val2']}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    )

    expect(wrapper).toMatchSnapshot()

    wrapper
      .find(Checkbox)
      .at(0)
      .prop('onBlur')({ target: { value: 'val1' } })

    wrapper
      .find(Checkbox)
      .at(0)
      .prop('onFocus')({ target: { value: 'val1' } })

    wrapper
      .find(Checkbox)
      .at(0)
      .prop('onChange')({ target: { value: 'val1' } })

    wrapper.setProps({ value: [] })

    wrapper
      .find(Checkbox)
      .at(0)
      .prop('onChange')({ target: { value: 'val1' } })

    wrapper.setProps({ radio: true, value: null })

    wrapper
      .find(Checkbox)
      .at(0)
      .prop('onChange')({ target: { value: 'val1' } })

    wrapper.setProps({ checkboxRadio: true })

    wrapper
      .find(Checkbox)
      .at(0)
      .prop('onChange')({ target: { value: 'val1' } })

    wrapper.setProps({ value: ['val1'] })

    wrapper
      .find(Checkbox)
      .at(0)
      .prop('onChange')({ target: { value: 'val1' } })

    expect(onChange).toHaveBeenCalledTimes(5)
  })

  it('should renders correctly disabled=true', () => {
    const onChange = jest.fn()
    const options = [{ value: 'val1', label: 'Value1' }, { value: 'val2', label: 'Value2' }]
    const wrapper = shallow(
      <CheckboxGroup
        disabled
        options={options}
        onChange={onChange}
        iconLeft="left"
        iconTop="top"
        imageLabel="label"
        iconRight="right"
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
