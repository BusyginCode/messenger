import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { intlShape, defineMessages } from 'react-intl'
import Box from 'components/uikit/box'
import { Button, Typography } from 'antd'
import Input from 'components/uikit/input'
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
  NICKNAME: {
    id: 'MESSENGER.AUTH.LOGIN.NICKNAME',
    defaultMessage: 'NICKNAME'
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
    errors: PropTypes.object,
    setFieldValue: PropTypes.func,
    onRegister: PropTypes.func
  }

  onChange = type => e => {
    const { setFieldValue } = this.props
    setFieldValue(type, e.target.value)
  }

  render() {
    const { intl, isSubmitting, handleSubmit, onRegister, errors } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Box className={styles.formBack} justify="center">
          <Box direction="column" className={styles.form}>
            <Input
              errorMessage={errors.nickname}
              onChange={this.onChange('nickname')}
              size="large"
              name="nickname"
              placeholder={intl.formatMessage(messages.NICKNAME)}
            />
            <Box top="m">
              <Input
                errorMessage={errors.password}
                onChange={this.onChange('password')}
                size="large"
                name="password"
                type="password"
                placeholder={intl.formatMessage(messages.PASSWORD)}
              />
            </Box>
            <Box top="l" direction="column">
              <Button
                className={styles.loginButton}
                type="primary"
                htmlType="submit"
                loading={isSubmitting}
                size="large"
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
