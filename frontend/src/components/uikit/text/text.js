import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Typography } from 'antd'

import styles from './text.scss'

const { Text } = Typography

class TextComponent extends PureComponent {
  static propTypes = {
    intent: PropTypes.oneOf(['primary', 'white']),
    color: PropTypes.string,
    size: PropTypes.oneOf(['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl']),
    transform: PropTypes.oneOf(['capitalize', 'lowercase', 'uppercase']),
    decoration: PropTypes.oneOf(['underline', 'overline', 'line-through']),
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    align: PropTypes.oneOf(['left', 'right', 'center', 'justify']),
    breakWord: PropTypes.oneOf(['break-all', 'break-word', 'keep-all', 'normal']),
    children: PropTypes.node,
    overflow: PropTypes.oneOf(['ellipsis', 'hidden']),
    inject: PropTypes.bool,
    className: PropTypes.string,
    bold: PropTypes.bool,
    semibold: PropTypes.bool,
    typeface: PropTypes.oneOf(['base', 'condensed']),
    lsize: PropTypes.oneOf(['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl']),
    danger: PropTypes.bool
  }

  static defaultProps = {
    component: Text,
    size: 'm',
    align: 'left',
    typeface: 'base',
    intent: 'primary'
  }

  render() {
    const {
      component: Component,
      intent,
      size,
      lsize,
      className,
      align,
      transform,
      decoration,
      bold,
      semibold,
      typeface,
      overflow,
      inject,
      breakWord,
      danger,
      color,
      ...props
    } = this.props

    const classes = classNames(className, styles[typeface], styles.general, {
      [styles[intent]]: !!intent,
      [styles[size]]: !!size,
      [styles[align]]: !!align,
      [styles.bold]: !!bold,
      [styles[breakWord]]: !!breakWord,
      [styles.semibold]: !!semibold,
      [styles[transform]]: !!transform,
      [styles[decoration]]: !!decoration,
      [styles[overflow]]: !!overflow,
      [styles[color]]: !!color,
      [styles[`l_${lsize}`]]: !!lsize
    })

    if (inject) {
      return React.cloneElement(props.children, {
        className: classes
      })
    }

    if (danger) {
      const { children, ...rest } = props
      return <Component {...rest} dangerouslySetInnerHTML={{ __html: children }} className={classes} />
    }

    return <Component {...props} className={classes} />
  }
}

export default TextComponent
