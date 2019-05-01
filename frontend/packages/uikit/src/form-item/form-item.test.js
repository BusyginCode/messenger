import React from 'react'
import { render } from 'enzyme'
import FormItem from './form-item'

describe('uikit/FormItem', () => {
  it('should render correctly', () => {
    const formItem = render(<FormItem message="message" label="label" labelRight="labelRight" name="name" />, {
      context: { formik: {} }
    })
    expect(formItem).toMatchSnapshot()
  })

  it('should render with error correctly', () => {
    const formItem = render(<FormItem name="name" message="message" />, {
      context: {
        formik: {
          touched: { name: true },
          values: { name: 'name' },
          errors: { name: 'error' }
        }
      }
    })
    expect(formItem).toMatchSnapshot()
  })

  it('should render with success correctly', () => {
    const formItem = render(<FormItem name="name" successMessage="success" />, {
      context: { formik: { touched: { name: true }, values: {} } }
    })
    expect(formItem).toMatchSnapshot()
  })

  it('should render with isSuccess correctly', () => {
    const formItem = render(<FormItem name="name" isSuccess />, {
      context: { formik: { touched: { name: true }, values: {} } }
    })
    expect(formItem).toMatchSnapshot()
  })
})
