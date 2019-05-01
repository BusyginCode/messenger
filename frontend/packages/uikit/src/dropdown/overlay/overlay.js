import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './overlay.scss'

class Overlay extends PureComponent {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
    overlayRef: PropTypes.any,
    overlayClassName: PropTypes.string
  }

  static defaultProps = {
    options: []
  }

  render() {
    const { options, overlayClassName, overlayRef } = this.props
    return (
      <div ref={overlayRef} className={overlayClassName}>
        {options.map(({ component: Component = 'div', id, ...rest }, index) => (
          <Component {...rest} key={id || index} className={cn(styles.item, rest.className)} />
        ))}
      </div>
    )
  }
}

export default Overlay
