import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link as ReactLink } from 'react-router-dom'
import Text from '../text'

import styles from './link.scss'

const Link = ({ disabled, className, intent, underlined, component, href, target, to, external, ...props }) => {
  const Component = component || (to ? ReactLink : href ? 'a' : 'span')
  const classes = classNames(className, styles.link, {
    [`${styles[intent]}`]: !!intent,
    [`${styles.disabled}`]: !!disabled,
    [`${styles.underlined}`]: !!underlined,
    [`${styles.nonUnderlined}`]: !underlined
  })

  if (disabled) return <Text component="h2" className={classes} {...props} />

  return (
    <Component className={classes} target={target} to={external ? to : to && to.toLowerCase()} href={href} {...props} />
  )
}

Link.propTypes = {
  href: PropTypes.string,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  intent: PropTypes.oneOf(['primary', 'secondary', 'info']),
  disabled: PropTypes.bool,
  underlined: PropTypes.bool,
  external: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  target: PropTypes.string
}

export default Link
