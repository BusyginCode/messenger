import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { intlShape, defineMessages } from 'react-intl'
import Box from 'components/uikit/box'
import Text from 'components/uikit/text'
import Input from 'components/uikit/input'
import { Button } from 'antd'

import styles from './registration-form.scss'

let Avatar

const messages = defineMessages({
  REGISTER: {
    id: 'MESSENGER.AUTH.REGISTER.REGISTER',
    defaultMessage: 'REGISTER'
  },
  EMAIL: {
    id: 'MESSENGER.AUTH.REGISTER.EMAIL',
    defaultMessage: 'EMAIL'
  },
  PASSWORD: {
    id: 'MESSENGER.AUTH.REGISTER.PASSWORD',
    defaultMessage: 'PASSWORD'
  },
  NAME: {
    id: 'MESSENGER.AUTH.REGISTER.NAME',
    defaultMessage: 'Name'
  },
  SIGN_IN: {
    id: 'MESSENGER.AUTH.REGISTER.SIGN_IN',
    defaultMessage: 'SIGN IN'
  },
  SIGN_UP: {
    id: 'MESSENGER.AUTH.REGISTER.SIGN_UP',
    defaultMessage: 'SIGN UP'
  },
  NEED_TO_LOGIN: {
    id: 'MESSENGER.AUTH.REGISTER.NEED_TO_LOGIN',
    defaultMessage: 'If you already have an account, click'
  }
})

class RegistrationForm extends PureComponent {
  static propTypes = {
    intl: intlShape,
    handleSubmit: PropTypes.func,
    isSubmitting: PropTypes.bool,
    isValid: PropTypes.bool,
    errors: PropTypes.object,
    setFieldValue: PropTypes.func,
    values: PropTypes.object,
    onLogin: PropTypes.func
  }

  onClose = () => {
    const { setFieldValue } = this.props
    setFieldValue('avatar', null)
  }

  onCrop = preview => {
    const { setFieldValue } = this.props
    setFieldValue('avatar', preview)
  }

  onBeforeFileLoad = elem => {
    if (elem.target.files[0].size > 71680) {
      alert('File is too big!')
      elem.target.value = ''
    }
  }

  onChange = type => e => {
    const { setFieldValue } = this.props
    setFieldValue(type, e.target.value)
  }

  render() {
    const { intl, handleSubmit, isSubmitting, onLogin, values, errors } = this.props

    if (!Avatar && typeof window !== 'undefined') {
      Avatar = require('react-avatar-edit').default
    }

    return (
      <form className={styles.general} onSubmit={handleSubmit}>
        <Box className={styles.formBack} justify="center">
          <Box direction="column" className={styles.form}>
            <Box bottom="m" justify="center">
              {typeof window !== 'undefined' && Avatar && (
                <Avatar
                  width={200}
                  height={200}
                  onCrop={this.onCrop}
                  onClose={this.onClose}
                  onBeforeFileLoad={this.onBeforeFileLoad}
                  src={values.avatar}
                />
              )}
              {values.avatar && (
                <Box className={styles.previewContainer} left="m" align="center">
                  <img className={styles.preview} src={values.avatar} alt="Preview" />
                </Box>
              )}
            </Box>
            <Input
              size="large"
              errorMessage={errors.email}
              placeholder={intl.formatMessage(messages.EMAIL)}
              onChange={this.onChange('email')}
              value={values.email}
            />
            <Box top="m">
              <Input
                size="large"
                errorMessage={errors.nickname}
                placeholder={intl.formatMessage(messages.NAME)}
                onChange={this.onChange('nickname')}
                value={values.nickname}
              />
            </Box>
            <Box top="m">
              <Input
                size="large"
                type="password"
                errorMessage={errors.password}
                placeholder={intl.formatMessage(messages.PASSWORD)}
                onChange={this.onChange('password')}
                value={values.password}
              />
            </Box>
            <Box top="l" direction="column">
              <Button
                htmlType="submit"
                className={styles.loginButton}
                type="primary"
                loading={isSubmitting}
                size="large"
              >
                {intl.formatMessage(messages.SIGN_UP)}
              </Button>
            </Box>
            <Box justify="center" align="center" top="l" className={styles.withoutAcc}>
              <Text>{intl.formatMessage(messages.NEED_TO_LOGIN)}</Text>
              <Button type="primary" ghost onClick={onLogin} className={styles.regButton}>
                {intl.formatMessage(messages.SIGN_IN)}
              </Button>
            </Box>
          </Box>
        </Box>
      </form>
    )
  }
}

export default RegistrationForm
