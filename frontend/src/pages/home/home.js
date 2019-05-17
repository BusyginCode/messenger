import React, { PureComponent } from 'react'
import { intlShape } from 'react-intl'
import Box from 'components/uikit/box'
import Media from 'react-media'
import { Drawer } from 'antd'
import BottomNav from './bottom-nav'
import Channels from './channels'
import Profile from './profile'
import Channel from './channel'

import styles from './home.scss'

// const messages = defineMessages({})

class Home extends PureComponent {
  static propTypes = {
    intl: intlShape
  }

  state = {
    sideDrawerOpen: true,
    tabPosition: 'channels'
  }

  onToggleSideDrawer = () => {
    this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen })
  }

  changeTabPosition = tabPosition => () => {
    this.setState({ tabPosition })
  }

  renderSide() {
    const { tabPosition } = this.state

    return (
      <Box className={styles.sider} direction="column" justify="start">
        {tabPosition === 'channels' ? <Channels /> : <Profile />}
        <BottomNav tabPosition={tabPosition} changeTabPosition={this.changeTabPosition} />
      </Box>
    )
  }

  render() {
    const side = this.renderSide()
    return (
      <Box className={styles.general}>
        <Box>
          <Media query="(max-width: 1136px)">
            {matches => {
              return matches ? (
                <Drawer
                  placement="left"
                  bodyStyle={{ height: '100%', padding: 0, paddingTop: 24 }}
                  width={300}
                  visible={this.state.sideDrawerOpen}
                  onClose={this.onToggleSideDrawer}
                >
                  {side}
                </Drawer>
              ) : (
                side
              )
            }}
          </Media>
        </Box>
        <Channel onToggleSideDrawer={this.onToggleSideDrawer} />
      </Box>
    )
  }
}

export default Home
