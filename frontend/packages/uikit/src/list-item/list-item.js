import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Box from '../box'
import styles from './list-item.scss'

const ListItem = props => {
  const { icon, children, className, marginBottom, iconMargin } = props

  return (
    <Box align="center" bottom={marginBottom} className={cn(styles.general, className)}>
      <Box right={iconMargin}>{icon || <div className={styles.dot} />}</Box>
      {children}
    </Box>
  )
}

ListItem.propTypes = {
  icon: PropTypes.node,
  marginBottom: PropTypes.string,
  iconMargin: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
}

ListItem.defaultProps = {
  marginBottom: 's',
  iconMargin: 'm'
}

export default ListItem
