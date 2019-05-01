import React from 'react'
import cn from 'classnames'
import styles from './custom-scroll.scss'

// still not stateless component, becouse sometimes we need ref of this component

class CustomScroll extends React.PureComponent {
  render() {
    const { children, ...rest } = this.props

    return (
      <div {...rest} className={cn(styles.general, rest.className)}>
        {children}
      </div>
    )
  }
}

export default CustomScroll
