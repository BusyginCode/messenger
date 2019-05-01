import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import snakeCase from 'lodash/snakeCase'
import ReactCheckbox from 'rc-checkbox'
import Box from '../box'
import Text from '../text'

import './checkbox.scss'

const Checkbox = ({
  className,
  labelClassName,
  premium,
  rounded,
  value,
  label,
  radio,
  hidden,
  transparent,
  size,
  ...props
}) => {
  const classes = cn(className, {
    'dt-checkbox-hidden': hidden,
    'dt-checkbox-premium': premium,
    'dt-checkbox-transparent': transparent,
    [`dt-checkbox-${size}`]: !!size,
    'dt-checkbox-rounded': rounded,
    'dt-checkbox-radio': radio
  })

  const checkbox = (
    <ReactCheckbox
      data-role={`checkbox_${props.name ? props.name : 'item'}`}
      type="checkbox"
      prefixCls="dt-checkbox"
      className={classes}
      {...props}
      checked={value}
    />
  )

  if (label) {
    return (
      <Box align="center" component="label" className={labelClassName}>
        {checkbox}
        {typeof label === 'string' ? (
          <Box inject left="s">
            <Text data-role={`checkbox_text_${label ? snakeCase(label) : 'item'}`} size="s">
              {label}
            </Text>
          </Box>
        ) : (
          label
        )}
      </Box>
    )
  }

  return checkbox
}

Checkbox.propTypes = {
  rounded: PropTypes.bool,
  label: PropTypes.node,
  name: PropTypes.string,
  size: PropTypes.oneOf(['l']),
  value: PropTypes.bool,
  premium: PropTypes.bool,
  radio: PropTypes.bool,
  hidden: PropTypes.bool,
  transparent: PropTypes.bool,
  onChange: PropTypes.func,
  labelClassName: PropTypes.string
}

export default Checkbox
