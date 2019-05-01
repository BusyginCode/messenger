import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class ScrollTo extends PureComponent {
  static propTypes = {
    children: PropTypes.any
  }

  elementEl = React.createRef()

  componentDidMount() {
    const el = this.elementEl.current

    if (el) {
      el.parentNode.parentNode.parentNode.scrollTop = el.parentNode.offsetTop
    }
  }

  render() {
    const { children } = this.props
    return <div ref={this.elementEl}>{children}</div>
  }
}

export default ScrollTo
