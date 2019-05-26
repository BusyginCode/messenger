import { connect } from 'react-redux'
import { withFormik } from 'formik'
import { injectIntl, defineMessages } from 'react-intl'
import compose from 'recompose/compose'
import { withRouter } from 'react-router'
import Yup from 'yup'
import { register } from 'modules/auth'
import { error as errorNotification } from 'modules/notification'
import RegistrationForm from './registration-form'

const mapDispatchToProps = {
  register,
  errorNotification
}

const mapStateToProps = state => ({})

const messages = defineMessages({
  EMAIL_INVALID: {
    id: 'AUTH.REGISTER.EMAIL_INVALID',
    defaultMessage: 'Invalid email address.'
  },
  EMAIL_REQUIRED: {
    id: 'AUTH.REGISTER.EMAIL_REQUIRED',
    defaultMessage: 'Email address required.'
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

const emailShema = intl =>
  Yup.string()
    .email(intl.formatMessage(messages.EMAIL_INVALID))
    .required(intl.formatMessage(messages.EMAIL_REQUIRED))

const validationSchema = props =>
  Yup.object({
    email: emailShema(props.intl),
    nickname: Yup.string().required(props.intl.formatMessage(messages.NICKNAME_CHARS)),
    password: Yup.string()
      .min(6, props.intl.formatMessage(messages.PASSWORD_CHARS))
      .required(props.intl.formatMessage(messages.PASSWORD_CHARS))
  })

const enhance = compose(
  injectIntl,
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withFormik({
    validationSchema,
    validateOnChange: false,
    mapPropsToValues: () => ({
      nickname: '',
      email: '',
      password: '',
      avatar: ''
    }),
    handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
      try {
        await props.register(values)
        if (props.onSubmitSuccess) {
          props.onSubmitSuccess()
        }
        props.history.push('/')
      } catch (error) {
        props.errorNotification({ message: error.message })
      }
      setSubmitting(false)
    }
  })
)

export default enhance(RegistrationForm)
