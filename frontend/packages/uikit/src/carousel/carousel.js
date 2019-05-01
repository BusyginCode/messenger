import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import RSlider from 'react-slick'
import findLastIndex from 'lodash/findLastIndex'
import findIndex from 'lodash/findIndex'
// import cn from 'classnames'

import './slick.css'
import './slick-theme.css'
import styles from './carousel.scss'

class Carousel extends PureComponent {
  static propTypes = {
    items: PropTypes.array,
    settings: PropTypes.object,
    beforeChange: PropTypes.func,
    disabledItems: PropTypes.array,
    scale: PropTypes.bool
  }

  static defaultProps = {
    settings: {},
    disabledItems: [],
    beforeChange() {}
  }

  constructor(props) {
    super(props)
    this.state = {
      index: props.settings.initialSlide || 0,
      key: 0
    }
  }

  /**
   * #magic
   */

  getRange(index) {
    const { items } = this.props

    const indexes = items.map((el, i) => i)
    const infiniteIndexes =
      items.length / 2 < this.state.index
        ? [...indexes, ...indexes.slice(0, this.state.index)]
        : [...indexes.slice(this.state.index + 1), ...indexes]

    const leftIndex = findIndex(infiniteIndexes, i => i === index)
    const rightIndex = findLastIndex(infiniteIndexes, i => i === index)
    const currentIndex = findIndex(infiniteIndexes, i => i === this.state.index)

    return Math.min(Math.abs(leftIndex - currentIndex), Math.abs(rightIndex - currentIndex))
  }

  beforeChange = (old, newIndex) => {
    const { disabledItems, beforeChange } = this.props
    if (disabledItems.includes(newIndex)) {
      this.setState({ key: this.state.key + 1 })
    } else {
      setTimeout(() => {
        this.setState({ index: newIndex })
        setTimeout(() => {
          beforeChange(newIndex)
        }, 1)
      }, 1)
    }
  }

  render() {
    const { settings, items, scale } = this.props

    const defaultSettings = {
      centerMode: true,
      infinite: true,
      speed: 350,
      focusOnSelect: true,
      variableWidth: true,
      className: 'dt_center',
      initialSlide: this.state.index,
      beforeChange: this.beforeChange
    }

    return (
      <RSlider key={this.state.key} {...defaultSettings} {...settings}>
        {items.map((item, index) => {
          const range = scale ? this.getRange(index) : 0
          return (
            <div key={index} className={styles[`range_${range}`]}>
              {React.cloneElement(item, {
                className: cn(item.props.className, styles.disabled, { [styles.range_center]: range === 0 })
              })}
            </div>
          )
        })}
      </RSlider>
    )
  }
}

export default Carousel
