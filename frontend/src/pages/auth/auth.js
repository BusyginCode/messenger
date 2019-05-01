import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { intlShape, defineMessages } from 'react-intl'
import cn from 'classnames'
import Media from 'react-media'
import Box from 'components/uikit/box'
import Text from 'components/uikit/text'
import { Drawer } from 'antd'
import LoginForm from './login-form'
import RegisterForm from './registration-form'
import styles from './auth.scss'

const messages = defineMessages({
  SIGN_IN: {
    id: 'MESSENGER.AUTH.SIGN_IN',
    defaultMessage: 'Sign In'
  },
  SIGN_UP: {
    id: 'MESSENGER.AUTH.SIGN_UP',
    defaultMessage: 'Sign Up'
  },
  DFD: {
    id: 'MESSENGER.AUTH.DFD',
    defaultMessage: 'DFD'
  },
  DIRECT_FURIOUS_DELIVERY: {
    id: 'MESSENGER.AUTH.DIRECT_FURIOUS_DELIVERY',
    defaultMessage: 'Direct and furious delivery, for your messages'
  }
})

class Auth extends PureComponent {
  static propTypes = {
    intl: intlShape,
    history: PropTypes.object
  }

  state = {
    page: 'login',
    isOpenDrawer: true
  }

  onChangePage = page => () => {
    this.setState({ isOpenDrawer: false })
    setTimeout(() => this.setState({ page: page, isOpenDrawer: true }), 500)
  }

  render() {
    const { intl } = this.props
    const { page, isOpenDrawer } = this.state
    return (
      <Box className={styles.general}>
        <Box className={styles.title} direction="column" top="xl">
          <Text className={cn(styles.title1, styles.zIndex)} intent="white" size="xxxxl">
            {intl.formatMessage(messages.DFD)}
          </Text>
          <Box top="s">
            <Text className={cn(styles.title2, styles.zIndex)} intent="white" size="xxl">
              {intl.formatMessage(messages.DIRECT_FURIOUS_DELIVERY)}
            </Text>
          </Box>
        </Box>
        <Media query="(max-width: 1136px)">
          {matches => (
            <Drawer
              title={
                <Text bold size="xxxxl">
                  {intl.formatMessage(messages[page === 'login' ? 'SIGN_IN' : 'SIGN_UP'])}
                </Text>
              }
              width={matches ? 300 : 600}
              closable={false}
              visible={isOpenDrawer}
            >
              {page === 'login' ? (
                <LoginForm onRegister={this.onChangePage('register')} />
              ) : (
                <RegisterForm onLogin={this.onChangePage('login')} />
              )}
            </Drawer>
          )}
        </Media>
      </Box>
    )
  }
}

export default Auth
