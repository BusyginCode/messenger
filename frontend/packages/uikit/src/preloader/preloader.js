import React from 'react'
import PropTypes from 'prop-types'
import Icon from '@messenger/icons/lib/icon/svgr/m/preloader'
import Box from '../box'
import styles from './preloader.scss'

const Preloader = props => {
  const { iconProps, ...rest } = props
  return (
    <Box padding="s" justify="center" align="center" flexGrow={1} {...rest}>
      <Icon className={styles.icon} {...iconProps} />
    </Box>
  )
}

Preloader.propTypes = {
  iconProps: PropTypes.object
}

Preloader.defaultProps = {
  iconProps: {}
}

export default Preloader
