import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import throttle from 'lodash/throttle'
import Preloader from '@messenger/uikit/lib/preloader'
import CustomScroll from '@messenger/uikit/lib/custom-scroll'

class InfiniteScroll extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    onLoad: PropTypes.func,
    hasNext: PropTypes.bool,
    direction: PropTypes.oneOf(['top', 'bottom']),
    loader: PropTypes.node,
    delay: PropTypes.number
  }

  constructor(props) {
    super(props)
    this.loadMoreTrottled = throttle(this.loadMore, props.delay, { leading: false })
  }

  static defaultProps = {
    direction: 'bottom',
    loader: <Preloader />,
    onLoad: () => {},
    delay: 500
  }

  state = {
    isLoading: false
  }

  loadMore = async scrollRest => {
    const { onLoad, hasNext } = this.props
    if (hasNext) {
      if (scrollRest === 0) {
        this.setState({ isLoading: true })
        await onLoad()
        this.setState({ isLoading: false })
      }
    }
  }

  handleScroll = e => {
    this.loadMoreTrottled(e.target.scrollHeight - (e.target.scrollTop + e.target.offsetHeight))
  }

  render() {
    const { children, direction, loader, onLoad, delay, hasNext, ...props } = this.props
    const { isLoading } = this.state
    return (
      <Fragment>
        {direction === 'top' && isLoading && loader}
        <CustomScroll {...props} onScroll={this.handleScroll}>
          {children}
        </CustomScroll>
        {direction === 'bottom' && isLoading && loader}
      </Fragment>
    )
  }
}

export default InfiniteScroll
