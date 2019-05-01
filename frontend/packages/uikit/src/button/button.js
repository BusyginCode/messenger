import React from 'react'
import PropTypes from 'prop-types'
import omit from 'lodash/omit'
import cn from 'classnames'
import Box from '../box'

import styles from './button.scss'
export const intents = ['primary', 'secondary', 'tertiary', 'transparent']
export const sizes = ['s', 'm', 'l', 'xl']
export const actionTypes = ['navigational', 'danger', 'success', 'hot', 'dark', 'premium', 'platform']

const Button = ({
  circle,
  className,
  contentClass,
  intent,
  rounded,
  premium,
  size,
  component: Component,
  loading,
  children,
  iconLeft,
  iconTop,
  iconRight,
  fullWidth,
  width,
  actionType,
  disabled,
  noWrap,
  ...props
}) => {
  const type = Component === 'button' ? 'button' : null
  const isDisabled = loading || disabled

  const classes = cn(styles.button, styles[intent], styles[size], styles[actionType], className, {
    [styles.disabled]: isDisabled,
    [styles.circle]: circle,
    [styles.rounded]: rounded,
    [styles.premiumMod]: premium,
    [styles.vertical]: iconTop,
    [styles.fullWidth]: fullWidth,
    [styles[`width-${width}`]]: width,
    [styles.noWrap]: noWrap
  })

  const iconBefore = iconLeft || iconTop

  return (
    <Component className={classes} type={type} disabled={isDisabled} {...omit(props, 'highlighted')}>
      {iconBefore && (
        <Box
          component="span"
          className={cn({
            [styles.iconLeft]: iconLeft,
            [styles.iconTop]: iconTop
          })}
        >
          {iconBefore}
        </Box>
      )}
      {children && (
        <Box component="span" className={cn(styles.content, contentClass)}>
          {children}
        </Box>
      )}
      {iconRight && !iconTop && (
        <Box component="span" className={styles.iconRight}>
          {iconRight}
        </Box>
      )}
    </Component>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  contentClass: PropTypes.string,
  circle: PropTypes.bool,
  intent: PropTypes.oneOf(intents),
  rounded: PropTypes.bool,
  premium: PropTypes.bool,
  size: PropTypes.oneOf(sizes),
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  loading: PropTypes.bool,
  iconLeft: PropTypes.element,
  iconTop: PropTypes.element,
  iconRight: PropTypes.element,
  fullWidth: PropTypes.bool,
  width: PropTypes.oneOf(sizes),
  actionType: PropTypes.oneOf(actionTypes),
  disabled: PropTypes.bool,
  noWrap: PropTypes.bool
}

Button.defaultProps = {
  // @TODO delete legacy?
  circle: false,
  intent: 'primary',
  // @TODO delete legacy?
  rounded: false,
  size: 'm',
  component: 'button',
  actionType: 'navigational'
}

export default Button
