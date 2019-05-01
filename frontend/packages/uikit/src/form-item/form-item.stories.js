import React from 'react'
import { storiesOf } from '@storybook/react'
import { Formik, withFormik } from 'formik'
import FormItem from './form-item'

const Component = withFormik({
  mapPropsToValues: props => ({
    text: '@master'
  })
})(FormItem)

storiesOf('UIKit/c-form_item', module)
  .addDecorator(story => <Formik initialValues={{}}>{story()}</Formik>)
  .addDecorator(story => <div style={{ padding: 15, background: '#fff', width: '300px' }}>{story()}</div>)
  .add('@master', () => (
    <Component name={'text'} label={'Some Label'} placeholder={'Some Placeholder'} message={'Some message'} />
  ))
