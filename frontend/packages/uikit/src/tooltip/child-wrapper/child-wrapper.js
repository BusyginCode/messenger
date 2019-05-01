import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class ChildWrapper extends PureComponent {
  static propTypes = {
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object
  }

  wrapperEl = React.createRef()

  onMouseLeave(el) {
    if (el.current) {
      el.current.addEventListener('mouseleave', this.props.onMouseLeave, false)
    }
  }

  componentDidMount() {
    this.onMouseLeave(this.wrapperEl)
  }

  componentWillUnmount() {
    this.onMouseLeave(this.wrapperEl)
  }

  render() {
    const { className, style } = this.props

    return (
      <span ref={this.wrapperEl} onMouseEnter={this.props.onMouseEnter} className={className} style={style}>
        {this.props.children}
      </span>
    )
  }
}

export default ChildWrapper
