import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { intlShape, defineMessages } from 'react-intl'
import Box from 'components/uikit/box'
import { Input, Button, Typography } from 'antd'
import styles from './login-form.scss'

const { Text } = Typography

const messages = defineMessages({
  SIGN_IN: {
    id: 'MESSENGER.AUTH.LOGIN.SIGN_IN',
    defaultMessage: 'SIGN IN'
  },
  SIGN_UP: {
    id: 'MESSENGER.AUTH.LOGIN.SIGN_UP',
    defaultMessage: 'SIGN UP'
  },
  EMAIL: {
    id: 'MESSENGER.AUTH.LOGIN.EMAIL',
    defaultMessage: 'EMAIL'
  },
  PASSWORD: {
    id: 'MESSENGER.AUTH.LOGIN.PASSWORD',
    defaultMessage: 'PASSWORD'
  },
  DO_NOT_HAVE_ACC: {
    id: 'MESSENGER.AUTH.LOGIN.DO_NOT_HAVE_ACC',
    defaultMessage: "Don't have an account"
  }
})

class LoginForm extends PureComponent {
  static propTypes = {
    intl: intlShape,
    handleSubmit: PropTypes.func,
    isSubmitting: PropTypes.bool,
    history: PropTypes.object,
    values: PropTypes.object,
    onRegister: PropTypes.func
  }

  render() {
    const { intl, isSubmitting, handleSubmit, onRegister } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Box className={styles.formBack} justify="center">
          <Box direction="column" className={styles.form}>
            <Input size="large" placeholder={intl.formatMessage(messages.EMAIL)} />
            <Box top="m">
              <Input size="large" name="password" required placeholder={intl.formatMessage(messages.PASSWORD)} />
            </Box>
            <Box top="l" direction="column">
              <Button
                className={styles.loginButton}
                type="primary"
                loading={isSubmitting}
                size="large"
                onClick={handleSubmit}
              >
                {intl.formatMessage(messages.SIGN_IN)}
              </Button>
            </Box>
            <Box justify="center" align="center" top="l" className={styles.withoutAcc}>
              <Text>{intl.formatMessage(messages.DO_NOT_HAVE_ACC)}</Text>
              <Button type="primary" ghost onClick={onRegister} className={styles.regButton}>
                {intl.formatMessage(messages.SIGN_UP)}
              </Button>
            </Box>
          </Box>
        </Box>
      </form>
    )
  }
}

export default LoginForm
