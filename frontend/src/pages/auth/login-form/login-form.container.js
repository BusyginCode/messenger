import { connect } from 'react-redux'
import { withFormik } from 'formik'
import { withRouter } from 'react-router'
import Yup from 'yup'
import { injectIntl, defineMessages } from 'react-intl'
import compose from 'recompose/compose'
import { logIn } from 'modules/auth'
import { error as errorNotification } from 'modules/notification'
import Login from './login-form'

const mapDispatchToProps = {
  logIn
}

const messages = defineMessages({
  ERROR: {
    id: 'AUTH.LOGIN.ERROR',
    defaultMessage: 'Something bad happened'
  },
  NICKNAME_CHARS: {
    id: 'AUTH.REGISTER.NICKNAME_CHARS',
    defaultMessage: 'Nickname required.'
  },
  PASSWORD_CHARS: {
    id: 'AUTH.REGISTER.PASSWORD_CHARS',
    defaultMessage: 'Password required.'
  }
})

const validationSchema = props =>
  Yup.object({
    nickname: Yup.string().required(props.intl.formatMessage(messages.NICKNAME_CHARS)),
    password: Yup.string()
      .min(6, props.intl.formatMessage(messages.PASSWORD_CHARS))
      .required(props.intl.formatMessage(messages.PASSWORD_CHARS))
  })

const enhance = compose(
  injectIntl,
  withRouter,
  connect(
    null,
    mapDispatchToProps
  ),
  withFormik({
    validationSchema,
    validateOnChange: false,
    mapPropsToValues: () => ({ nickname: '', password: '' }),
    handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
      try {
        await props.logIn(values)
        props.history.push('/')
        if (props.onSubmitSuccess) {
          props.onSubmitSuccess()
        }
      } catch (error) {
        setErrors({ ...error.errors })
        errorNotification(props.intl.formatMessage(messages.ERROR))
      }
      setSubmitting(false)
    }
  })
)

export default enhance(Login)
