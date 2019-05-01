import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import csgo from './images/csgo.jpg'
import lol from './images/lol.jpg'
import styles from './layered-background.scss'

const images = {
  csgo,
  lol
}

const LayeredBackground = props => {
  const { children, className, image, height, game, theme } = props
  const backgroundUrl = image || images[game]

  return (
    <div className={cn(styles.general, className, [styles[theme]])}>
      <div style={{ height }} className={cn(styles.back)} />
      <div
        style={{
          height,
          backgroundImage: backgroundUrl ? `url(${backgroundUrl})` : 'none'
        }}
        className={cn(styles.image, styles[game])}
      />
      <div style={{ height }} className={styles.top} />
      <div className={cn(styles.content)}>{children}</div>
    </div>
  )
}

LayeredBackground.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  image: PropTypes.string,
  game: PropTypes.string,
  theme: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

LayeredBackground.defaultProps = {
  height: 'auto',
  theme: 'base'
}

export default LayeredBackground
