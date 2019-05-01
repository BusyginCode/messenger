import { connect } from 'react-redux'
import { withFormik } from 'formik'
import { withRouter } from 'react-router'
import { injectIntl, defineMessages } from 'react-intl'
import compose from 'recompose/compose'
// import { getUserId, getUserName, getUserEmail } from 'modules/user'
import { getAuthToken, logIn } from 'modules/auth'
import { show } from 'modules/notification'
import Login from './login-form'

const mapStateToProps = state => ({
  // nickname: getUserName(state),
  // userID: getUserId(state),
  // userEmail: getUserEmail(state),
  authToken: getAuthToken(state)
})

const mapDispatchToProps = {
  logIn,
  show
}

const messages = defineMessages({
  INVALID_CREDENTIALS: {
    id: 'APEX.AUTH.LOGIN.INVALID_CREDENTIALS',
    defaultMessage: 'These credentials do not match our records.'
  }
})

const enhance = compose(
  injectIntl,
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withFormik({
    mapPropsToValues: () => ({ email: '', password: '' }),
    validateOnChange: false,
    handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
      let isError = false

      try {
        props.history.push('/')
        await props.logIn(values)
      } catch (error) {
        isError = true
        if (error.message) {
          props.show({
            content: props.intl.formatMessage(messages.INVALID_CREDENTIALS),
            type: 'toast',
            intent: 'danger',
            page: true,
            id: 'LOGIN_FAIL'
          })
        }
      }

      if (!isError && props.onSubmitSuccess) {
        props.onSubmitSuccess()
      }
      setSubmitting(false)
    }
  })
)

export default enhance(Login)
