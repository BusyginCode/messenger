import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './scale-item.scss'

class SkillLevelSliderScaleItem extends PureComponent {
  static propTypes = {
    item: PropTypes.number.isRequired,
    active: PropTypes.bool,
    onItemMouseEnter: PropTypes.func,
    onItemMouseOut: PropTypes.func,
    fnClassName: PropTypes.string,
    theme: PropTypes.string,
    inActiveRange: PropTypes.bool,
    lastInActiveRange: PropTypes.bool
  }

  static defaultProps = {
    active: false,
    onItemMouseEnter: () => {},
    onItemMouseOut: () => {}
  }

  onMouseEnter = () => {
    const { item, inActiveRange, onItemMouseEnter } = this.props
    onItemMouseEnter(item, inActiveRange)
  }

  onMouseLeave = () => {
    const { onItemMouseOut, item } = this.props
    onItemMouseOut(item)
  }

  render() {
    const {
      active,
      item,
      theme,
      onItemMouseEnter,
      onItemMouseOut,
      fnClassName,
      inActiveRange,
      lastInActiveRange,
      ...props
    } = this.props

    const classes = classNames(styles.scaleItem, fnClassName, {
      [`${styles.active}`]: active,
      [styles[theme]]: theme,
      [`${styles.inActiveRange}`]: inActiveRange,
      [`${styles.lastInActiveRange}`]: lastInActiveRange
    })

    return (
      <div
        data-role={`scale_item_${item || 'item'}`}
        className={classes}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        {...props}
      >
        {item}
      </div>
    )
  }
}

export default SkillLevelSliderScaleItem
