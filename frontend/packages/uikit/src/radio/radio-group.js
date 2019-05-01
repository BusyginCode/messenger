import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import snakeCase from 'lodash/snakeCase'
import Radio from './radio'
import Text from '../text'

import styles from './radio-group.scss'

class RadioGroup extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    size: PropTypes.string,
    disabled: PropTypes.bool,
    inline: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.object)
  }

  static defaultProps = {
    size: 'l',
    inline: true
  }

  handleChange = event => {
    const { name, onChange } = this.props
    onChange && onChange({ target: { name, value: event.target.value } })
  }

  renderIntent(option) {
    if (option.disabled) return 'gray'
  }

  render() {
    const { disabled, options, value, inline } = this.props

    return (
      <div className={cn(styles.radioGroup, inline && styles.inline)}>
        {options.map(({ label, labelProps = {}, ...option }, idx) => (
          <label key={option.value} className={cn(styles.radioWrapper, option.wrapClassName)}>
            <Radio
              className={option.className}
              disabled={disabled}
              data-role={`value_${option.value ? snakeCase(option.value) : 'item'}`}
              checked={option.value === value}
              onChange={this.handleChange}
              {...option}
            />
            {label && (
              <Text
                size={this.props.size}
                semibold={option.value === value}
                {...labelProps}
                className={cn(styles.label, labelProps.className)}
                intent={this.renderIntent(option)}
              >
                {label}
              </Text>
            )}
          </label>
        ))}
      </div>
    )
  }
}

export default RadioGroup
