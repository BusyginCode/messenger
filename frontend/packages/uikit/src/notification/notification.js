import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Box from '../box'
import Text from '../text'
import Button from '../button'
import styles from './notification.scss'

const Notification = props => {
  const { title, subTitle, icon, subIcon, type, isRead, button, ...rest } = props
  const hasSub = subTitle || subIcon

  return (
    <Box padding="m" className={cn(styles.general, styles[type], { [styles.isRead]: isRead })}>
      {icon && (
        <Box className={styles.icon} right="m">
          {icon}
        </Box>
      )}
      <Box justify="between" align="start" flexGrow={1} {...rest}>
        <div>
          <Text size="m">{title}</Text>
          {hasSub && (
            <Box top="s">
              {subIcon && (
                <Box className={styles.subIcon} right="s">
                  {subIcon}
                </Box>
              )}
              {subTitle && <Text size="s">{subTitle}</Text>}
            </Box>
          )}
        </div>
        {button && (
          <Box left="s" flexShrink={0}>
            <Button size="m" {...button} />
          </Box>
        )}
      </Box>
    </Box>
  )
}

Notification.propTypes = {
  icon: PropTypes.node,
  iconType: PropTypes.string,
  type: PropTypes.string,
  isRead: PropTypes.bool,
  subIcon: PropTypes.node,
  title: PropTypes.node,
  subTitle: PropTypes.node,
  button: PropTypes.object
}

Notification.defaultProps = {
  type: 'default'
}

export default Notification
