import React, { PureComponent } from 'react'
import { injectIntl, defineMessages, intlShape } from 'react-intl'
import PropTypes from 'prop-types'
import { Avatar, Button, Divider } from 'antd'
import Box from 'components/uikit/box'
import Text from 'components/uikit/text'

import styles from './profile.scss'

const messages = defineMessages({
  LOGOUT: {
    id: 'MESSENGER.HOME.PROFILE.LOGOUT',
    defaultMessage: 'Logout'
  }
})

class Profile extends PureComponent {
  static propTypes = {
    intl: intlShape,
    userAvatar: PropTypes.string,
    logOut: PropTypes.func,
    location: PropTypes.object,
    userNickname: PropTypes.string
  }

  onLogout = () => {
    const { logOut } = this.props
    logOut()
    window.location.assign('/auth')
  }

  render() {
    const { intl, userAvatar, userNickname } = this.props
    console.log('userAvatar ', userAvatar)
    return (
      <Box direction="column" flexGrow={1} className={styles.general}>
        <Box>
          <Avatar size={64} src={userAvatar} />
          <Box left="s" direction="column">
            <Text className={styles.nickname} size="l" overflow="ellipsis">
              {userNickname}
            </Text>
            <Box top="s">
              <Button type="primary" ghost onClick={this.onLogout}>
                {intl.formatMessage(messages.LOGOUT)}
              </Button>
            </Box>
          </Box>
        </Box>
        <Divider />
      </Box>
    )
  }
}

export default injectIntl(Profile)
