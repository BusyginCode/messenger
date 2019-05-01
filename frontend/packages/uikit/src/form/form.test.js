import React from 'react'
import { shallow, mount } from 'enzyme'
import Form from './form'
import Button from '../button'

describe('uikit/Input', () => {
  it('should renders correctly', () => {
    const form = shallow(<Form />)
    expect(form).toMatchSnapshot()
  })

  it('should handle submit', () => {
    const handleSubmit = jest.fn()
    const form = mount(
      <Form onSubmit={handleSubmit}>
        <Button type="submit">submit</Button>
      </Form>
    )
    form.find('button').simulate('submit')
    expect(handleSubmit).toHaveBeenCalledTimes(1)
  })

  describe('#handleSubmit', () => {
    let handleSubmit
    beforeAll(() => {
      const form = shallow(<Form />)
      handleSubmit = form.instance().handleSubmit
    })

    it('should prevent default event on submit', () => {
      const preventDefault = jest.fn()
      handleSubmit({ preventDefault })
      expect(preventDefault).toHaveBeenCalledTimes(1)
    })
  })
})
