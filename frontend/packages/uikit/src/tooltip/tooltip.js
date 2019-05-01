import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'rc-tooltip'
import cn from 'classnames'
import Box from '@messenger/uikit/lib/box'
import ChildWrapper from './child-wrapper'
import styles from './tooltip.scss'

class Tooltip extends PureComponent {
  constructor({ placement, id }) {
    super()
    this.id = `tooltip-${id || Math.random()}`
    this.state = {
      placement,
      hasShown: false
    }
  }

  static propTypes = {
    id: PropTypes.number,
    onChange: PropTypes.func,
    onVisibleChange: PropTypes.func,
    children: PropTypes.any,
    placement: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),
    width: PropTypes.number,
    overlay: PropTypes.node,
    componentClassName: PropTypes.string,
    overflowMode: PropTypes.bool
  }

  static defaultProps = {
    onVisibleChange: () => {}
  }

  calculatePosition(target) {
    const { placement } = this.props
    const targetPosition = target.getBoundingClientRect()

    const windowDimensions = {
      top: 0,
      left: 0,
      right: document.documentElement.clientWidth,
      bottom: document.documentElement.clientHeight
    }

    const offset = windowDimensions[placement] - targetPosition[placement]

    switch (placement) {
      case 'top':
      case 'bottom':
        return offset > 0 ? 'bottom' : 'top'
      case 'left':
      case 'right':
        return offset > 0 ? 'right' : 'left'
    }
  }

  handleVisibleChange = hasShown => {
    const { onVisibleChange, placement } = this.props

    this.setState(state => ({
      hasShown,
      placement: hasShown ? state.placement : placement
    }))
    onVisibleChange(hasShown)
  }

  onPopupAlign = tooltip => {
    this.setState(state =>
      state.hasShown
        ? {
            placement: this.calculatePosition(tooltip),
            hasShown: false
          }
        : state
    )
  }

  handleMouseEnter = e => {
    const { overflowMode } = this.props
    const el = e.target
    const isOverflowText = el.scrollWidth > el.clientWidth
    this.setState({ isVisible: overflowMode ? isOverflowText : true })
  }

  handleMouseLeave = () => {
    this.setState({ isVisible: false })
  }

  render() {
    const { children, className, width, overlay, componentClassName, overflowMode, ...props } = this.props
    const { placement, isVisible } = this.state

    return (
      <ReactTooltip
        visible={isVisible}
        prefixCls="dt-tooltip"
        id={this.id}
        overlay={width ? <Box width={width}>{overlay}</Box> : overlay}
        className={cn(className, styles.tooltip)}
        {...props}
        placement={placement}
        onVisibleChange={this.handleVisibleChange}
        onPopupAlign={this.onPopupAlign}
      >
        <ChildWrapper
          className={componentClassName}
          style={overflowMode ? { maxWidth: '100%' } : {}}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          {children}
        </ChildWrapper>
      </ReactTooltip>
    )
  }
}

export default Tooltip
