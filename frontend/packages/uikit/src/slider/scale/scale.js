import React from 'react'
import PropTypes from 'prop-types'
import range from 'lodash/range'

import ScaleItem from '../scale-item'
import styles from './scale.scss'

class SkillLevelSliderScale extends React.PureComponent {
  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    theme: PropTypes.string,
    range: PropTypes.arrayOf(PropTypes.number),
    onItemMouseEnter: PropTypes.func,
    onItemMouseOut: PropTypes.func,
    onItemClick: PropTypes.func,
    fnClassName: PropTypes.string,
    activeRange: PropTypes.array
  }

  onItemClick = item => () => {
    const { onItemClick } = this.props
    onItemClick(item)
  }

  render() {
    const {
      min,
      max,
      theme,
      range: [from, to],
      onItemClick,
      fnClassName,
      activeRange = [],
      ...props
    } = this.props

    return (
      <div className={styles.scale}>
        {range(min, max + 1).map(item => {
          const component = (
            <ScaleItem
              fnClassName={`${fnClassName}-${item}`}
              theme={theme}
              key={item}
              item={item}
              inActiveRange={range(activeRange[0], activeRange[1] + 1).includes(item)}
              lastInActiveRange={activeRange[1] === item}
              active={item >= from && item <= to}
              onClick={this.onItemClick(item)}
              {...props}
            />
          )

          return component
        })}
      </div>
    )
  }
}

export default SkillLevelSliderScale
