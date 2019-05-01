import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './dream-level.scss'

const sizes = {
  s: 4.24
}

const DreamLevel = props => {
  const { max, size, value } = props
  const percentInPixels = sizes[size]

  const sliderValue = value
  const [start, end] = sliderValue
  const onlyMax = end === max && start === max

  const width = `${(end - start) * (100 / (max - 1))}%`

  const left = `${(start - 1) * (100 / (max - 1))}%`

  const backgroundPosition = `-${Math.floor((start - 1) * (100 / (max - 1)) * percentInPixels)}px center`

  return (
    <div className={styles.general}>
      <div className={cn(styles.substrate, styles.block, styles[size])} />
      <div
        className={cn(styles.gradient, styles.block, styles[size])}
        style={{
          width: onlyMax ? `5%` : width,
          left: onlyMax ? `95%` : left,
          backgroundPosition: onlyMax ? `right` : backgroundPosition
        }}
      />
    </div>
  )
}

DreamLevel.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  range: PropTypes.bool,
  size: PropTypes.string
}

DreamLevel.defaultProps = {
  min: 1,
  max: 10,
  range: false,
  size: 's'
}

export default DreamLevel
