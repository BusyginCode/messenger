import React, { Component } from 'react'
import PropTypes from 'prop-types'
import snakeCase from 'lodash/snakeCase'
import { Field as FormikField } from 'formik'
import cn from 'classnames'
import Input from '../input'
import Text from '../text'

import styles from './form-item.scss'

class FormItem extends Component {
  static propTypes = {
    name: PropTypes.string,
    required: PropTypes.bool,
    component: PropTypes.func,
    intent: PropTypes.string,
    message: PropTypes.node,
    error: PropTypes.string,
    fieldProps: PropTypes.object,
    componentProps: PropTypes.object,
    successMessage: PropTypes.node,
    errorMessage: PropTypes.node,
    withoutMessage: PropTypes.bool,
    isSuccess: PropTypes.bool,
    label: PropTypes.node,
    labelIcon: PropTypes.node,
    labelRight: PropTypes.node,
    labelClassName: PropTypes.string,
    wrapComponent: PropTypes.string,
    wrapClassName: PropTypes.string,
    size: PropTypes.string,
    breed: PropTypes.string,
    onChange: PropTypes.func,
    onAfterChange: PropTypes.func,
    onBlur: PropTypes.func
  }

  static defaultProps = {
    component: Input,
    wrapComponent: 'div',
    onBlur() {},
    onAfterChange() {},
    size: 'm',
    breed: 'subtitle'
  }

  static contextTypes = {
    formik: PropTypes.object
  }

  parameters = ({ errors = {}, touched = {} }) => {
    const { errorMessage, name, successMessage, isSuccess, intent: defaultIntent, message: defaultMessage } = this.props

    const error = errorMessage || (touched[name] && errors[name])
    const success = touched[name] && !errors[name] && (successMessage || isSuccess)
    const intent = error ? 'danger' : success ? 'success' : defaultIntent
    const message = error || ((success && successMessage) || defaultMessage)
    return {
      success,
      intent,
      message
    }
  }

  onBlur = field => e => {
    const { onBlur } = this.props

    field.onBlur(e)
    onBlur(e)
  }

  onChange = field => e => {
    const { onChange, onAfterChange } = this.props
    if (onChange) {
      onChange(e)
    } else {
      field.onChange(e)
    }

    onAfterChange(e)
  }

  renderComponent = ({ field, form }) => {
    const {
      label,
      labelIcon,
      labelRight,
      successMessage,
      errorMessage,
      withoutMessage,
      isSuccess,
      component: Component,
      fieldProps,
      componentProps,
      wrapClassName,
      labelClassName,
      wrapComponent: WrapComponent,
      size,
      breed,
      onAfterChange,
      message: defaultMessage,
      ...props
    } = this.props

    const { success, intent, message } = this.parameters(form)

    const classes = cn(styles.formItem, wrapClassName, styles[size], {
      [styles.disabled]: props.disabled,
      [styles.row]: labelRight,
      [styles[intent]]: !!intent
    })

    return (
      <WrapComponent className={classes} htmlFor={props.id} data-role={`formItem_${snakeCase(this.props.name)}`}>
        {label && (
          <Text size={size} breed={breed} className={cn(styles.label, labelClassName)}>
            {label}
            {props.required && ' *'}
            {labelIcon}
          </Text>
        )}

        <Component
          data-role={`formItem_control_${props.name ? snakeCase(props.name) : 'item'}`}
          {...field}
          {...props}
          intent={!success || !isSuccess ? intent : undefined}
          onBlur={this.onBlur(field)}
          onChange={this.onChange(field)}
          {...componentProps}
        />

        {labelRight && (
          <Text
            data-role={`formItem_label_right_${labelRight ? snakeCase(labelRight) : 'item'}`}
            size="s"
            className={styles.labelRight}
          >
            {labelRight}
          </Text>
        )}

        {message && !withoutMessage && (
          <Text
            className={styles.message}
            intent={!success || !isSuccess ? intent : undefined}
            size="s"
            dangerouslySetInnerHTML={{ __html: message }}
            data-role={`formItem_message_${message ? snakeCase(message) : 'item'}`}
          />
        )}
      </WrapComponent>
    )
  }

  render() {
    const { name, fieldProps } = this.props

    return <FormikField name={name} {...fieldProps} render={this.renderComponent} />
  }
}

export default FormItem
