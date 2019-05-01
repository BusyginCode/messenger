import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { intlShape, defineMessages } from 'react-intl'
import Text from '@messenger/uikit/lib/text'
import Box from '@messenger/uikit/lib/box'
import Svg from '@messenger/icons/lib/icon/svgr/l/steam'

import Bg from './img/background.png'
import styles from './login.scss'

const messages = defineMessages({
  LOGIN: {
    id: 'AUTH.LOGIN.LOGIN',
    defaultMessage: 'Log In'
  }
})

class Login extends PureComponent {
  static propTypes = {
    intl: intlShape,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    userID: PropTypes.number,
    authToken: PropTypes.string,
    userEmail: PropTypes.string,
    userName: PropTypes.string,
    activeGame: PropTypes.string
  }

  render() {
    const { intl } = this.props

    return (
      <Box direction="column" className={styles.general}>
        <img src={Bg} />
        <Svg />
        <Text>{intl.formatMessage(messages.LOGIN)}</Text>
      </Box>
    )
  }
}

export default Login
