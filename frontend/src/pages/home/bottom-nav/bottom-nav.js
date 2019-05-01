import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Box from 'components/uikit/box'
import { Icon } from 'antd'

import styles from './bottom-nav.scss'

class BottomNav extends PureComponent {
  static propTypes = {
    tabPosition: PropTypes.string,
    changeTabPosition: PropTypes.func
  }

  render() {
    const { tabPosition, changeTabPosition } = this.props
    return (
      <Box className={styles.bottomNavigation}>
        <Box
          onClick={changeTabPosition('profile')}
          className={cn(styles.bottomNavigationItem, {
            [styles.bottomNavigationItemActive]: tabPosition === 'profile'
          })}
        >
          <Icon type="user" />
        </Box>
        <Box
          onClick={changeTabPosition('channels')}
          className={cn(styles.bottomNavigationItem, {
            [styles.bottomNavigationItemActive]: tabPosition === 'channels'
          })}
        >
          <Icon type="message" />
        </Box>
      </Box>
    )
  }
}

export default BottomNav
