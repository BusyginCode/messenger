import cn from 'classnames'
import PropTypes from 'prop-types'
import ReactRadio from 'rc-checkbox'
import React from 'react'
import './radio.scss'

const Radio = props => {
  return (
    <ReactRadio
      type="radio"
      prefixCls={'dt-radio'}
      {...props}
      className={cn(props.className, {
        premium: !!props.premium
      })}
    />
  )
}

Radio.propTypes = {
  label: PropTypes.any,
  value: PropTypes.any,
  premium: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string
}

export default Radio
