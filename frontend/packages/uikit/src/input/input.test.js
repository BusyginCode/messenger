import React from 'react'
import { mount } from 'enzyme'
import Input from './input'

describe('uikit/Input', () => {
  it('should renders correctly', () => {
    const onChange = jest.fn()
    const onFocus = jest.fn()
    const input = mount(<Input name="someInput" onChange={onChange} onFocus={onFocus} value={'some text'} />)

    expect(input).toMatchSnapshot()

    input
      .find('input')
      .simulate('change')
      .simulate('focus')

    expect(onChange).toHaveBeenCalledWith({
      target: {
        name: 'someInput',
        value: 'some text'
      }
    })

    expect(onFocus).toHaveBeenCalled()
  })

  it('should renders correctly with prependValue', () => {
    const onChange = jest.fn()
    const onFocus = jest.fn()
    const input = mount(
      <Input name="someInput" onChange={onChange} onFocus={onFocus} prependValue={'steam://'} value={'some text'} />
    )

    expect(input).toMatchSnapshot()

    input
      .find('input')
      .simulate('change')
      .simulate('focus')

    expect(onChange).toHaveBeenCalledWith({
      target: {
        name: 'someInput',
        value: 'some text'
      }
    })

    expect(onFocus).toHaveBeenCalled()
  })
})
