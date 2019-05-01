import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import CloseIcon from '@messenger/icons/lib/icon/svgr/m/close'
import omit from 'lodash/omit'
import styles from './input.scss'

class Input extends PureComponent {
  static propTypes = {
    intent: PropTypes.oneOf(['default', 'success', 'warning', 'danger']),
    size: PropTypes.oneOf(['m', 'l']),
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    cursorEndOnFocus: PropTypes.bool,
    prependValue: PropTypes.any,
    icon: PropTypes.func,
    iconPosition: PropTypes.oneOf(['left', 'right']),
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onAfterChange: PropTypes.func,
    clearable: PropTypes.bool,
    premium: PropTypes.bool
  }

  static defaultProps = {
    size: 'l',
    type: 'text',
    intent: 'default'
  }

  input = React.createRef()

  onClickClear = () => {
    const { onChange, name } = this.props
    onChange({ target: { name, value: '' } })
  }

  onFocus = e => {
    const { value, prependValue, onFocus, cursorEndOnFocus } = this.props

    if (!value && !e.currentTarget.value && prependValue) {
      e.currentTarget.value = prependValue
    }

    if (cursorEndOnFocus) {
      const target = e.currentTarget
      setTimeout(function() {
        target.selectionStart = target.selectionEnd = 10000
      }, 0)
    }

    if (onFocus) onFocus(e)
  }

  onChange = e => {
    const { onChange, name, prependValue } = this.props
    let value = e.currentTarget.value

    if (prependValue) {
      if (value.includes(prependValue)) {
        value = value.replace(prependValue, '')
      } else {
        e.currentTarget.value = prependValue
        value = ''
      }
    }

    if (onChange) onChange({ target: { name, value } })
  }

  render() {
    const {
      value,
      prependValue,
      icon: Icon,
      iconPosition,
      className,
      clearable,
      premium,
      size,
      intent,
      placeholder,
      ...props
    } = this.props

    const hasIcon = !!Icon
    const classes = classNames(className, styles.input, {
      [styles.premium]: premium,
      [styles[intent]]: !!intent
    })
    const inputValue = prependValue ? (value ? prependValue + value : prependValue) : value

    return (
      <div
        className={classNames(styles.wrapper, {
          [styles[`size-${size}`]]: !!size,
          [styles[`iconPosition-${iconPosition}`]]: iconPosition,
          [styles.hasIcon]: hasIcon
        })}
      >
        <input
          {...omit(props, ['getPopupContainer', 'cursorEndOnFocus'])}
          onChange={this.onChange}
          onFocus={this.onFocus}
          ref={this.input}
          placeholder={prependValue || placeholder}
          value={inputValue}
          className={classes}
        />

        {Icon && (
          <span className={classNames(styles.iconEl, { [styles[`iconIntent-${intent}`]]: intent !== 'default' })}>
            <Icon />
          </span>
        )}

        {clearable && value && (
          <span className={styles.clearEl} onClick={this.onClickClear}>
            <CloseIcon />
          </span>
        )}
      </div>
    )
  }
}

export default Input
