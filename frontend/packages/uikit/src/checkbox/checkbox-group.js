import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import snakeCase from 'lodash/snakeCase'
import Checkbox from './checkbox'
import Text from '../text'

import styles from './checkbox-group.scss'

class CheckboxGroup extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    value: PropTypes.array,
    inline: PropTypes.bool,
    disabled: PropTypes.bool,
    radio: PropTypes.bool,
    hidden: PropTypes.bool,
    checkboxRadio: PropTypes.bool,
    size: PropTypes.string,
    checkboxSize: PropTypes.string,
    transparent: PropTypes.bool,
    checkboxWrapperClassName: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
    max: PropTypes.number
  }

  static defaultProps = {
    value: [],
    size: 'l',
    onFocus() {},
    onBlur() {},
    inline: true
  }

  handleChange = optionValue => event => {
    const { name, onChange, radio, value, checkboxRadio } = this.props
    let groupValues = [...(value || [])]
    const index = groupValues.findIndex(v => v === optionValue)

    if (checkboxRadio) {
      groupValues = groupValues.includes(optionValue) ? [] : [optionValue]
    } else if (radio) {
      groupValues = [optionValue]
    } else if (index === -1) {
      groupValues.push(optionValue)
    } else {
      groupValues.splice(index, 1)
    }

    onChange({ target: { name, value: groupValues } })
  }

  onBlur = () => {
    const { name, onBlur } = this.props

    onBlur({ target: { name } })
  }

  onFocus = () => {
    const { name, onFocus } = this.props

    onFocus({ target: { name } })
  }

  render() {
    const {
      disabled,
      size,
      options,
      value,
      inline,
      radio,
      hidden,
      checkboxWrapperClassName,
      checkboxSize,
      transparent,
      max
    } = this.props
    const wrapperClasses = classNames(styles.checkboxGroup, inline && styles.inline, disabled && styles.disabled)

    let nonActiveDisabled = false

    if (value && max && value.length >= max) {
      nonActiveDisabled = true
    }

    return (
      <div className={wrapperClasses}>
        {options.map(({ label, imageLabel, iconLeft, iconTop, iconRight, className, labelClassName, ...option }) => {
          const optionValue = (value || []).includes(option.value)
          const optionDisabled = disabled || option.disabled

          return (
            <label
              data-role={`checkbox_group_${snakeCase(option.value)}`}
              key={option.value}
              className={classNames(className, styles.checkboxWrapper, checkboxWrapperClassName, {
                [styles.checkboxWrapperColumn]: iconTop,
                [styles.active]: optionValue,
                [styles.disabled]: optionDisabled
              })}
            >
              {iconLeft && (
                <div data-role={`checkbox_group_icon_left_${snakeCase(option.value)}`} className={styles.icon}>
                  {iconLeft}
                </div>
              )}
              {iconTop && (
                <div data-role={`checkbox_group_icon_top_${snakeCase(option.value)}`} className={styles.icon}>
                  {iconTop}
                </div>
              )}
              <Checkbox
                size={checkboxSize}
                {...option}
                radio={radio}
                transparent={transparent}
                disabled={optionDisabled || (nonActiveDisabled && !optionValue)}
                value={optionValue}
                hidden={hidden}
                onChange={this.handleChange(option.value)}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
              />
              {imageLabel && (
                <div
                  data-role={`checkbox_group_image_label_${option.value ? snakeCase(option.value) : 'item'}`}
                  className={styles.icon}
                >
                  {imageLabel}
                </div>
              )}
              {iconRight && (
                <div
                  data-role={`checkbox_group_icon_right_${option.value ? snakeCase(option.value) : 'item'}`}
                  className={styles.icon}
                >
                  {iconRight}
                </div>
              )}
              {label && (
                <Text size={size} semibold={optionValue} className={classNames(styles.label, labelClassName)}>
                  {label}
                </Text>
              )}
            </label>
          )
        })}
      </div>
    )
  }
}

export default CheckboxGroup
