import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './divider.scss'

const Divider = props => {
  const { children, intent, size, vertical, height, ...rest } = props
  return (
    <div
      className={cn(styles.divider, styles[intent], styles[size], { [styles.vertical]: vertical }, rest.className)}
      style={{ height }}
    />
  )
}

Divider.propTypes = {
  intent: PropTypes.oneOf(['hot', 'default', 'primary', 'light']),
  size: PropTypes.oneOf(['xs', 's', 'm']),
  vertical: PropTypes.bool,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Divider.defaultProps = {
  intent: 'default',
  size: 'm',
  vertical: false
}

export default Divider
