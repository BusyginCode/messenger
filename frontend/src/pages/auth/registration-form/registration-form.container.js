import { connect } from 'react-redux'
import { withFormik } from 'formik'
import { injectIntl, defineMessages } from 'react-intl'
import compose from 'recompose/compose'
import { withRouter } from 'react-router'
import Yup from 'yup'
import RegistrationForm from './registration-form'

const mapDispatchToProps = {}

const mapStateToProps = state => ({})

const messages = defineMessages({
  EMAIL_INVALID: {
    id: 'AUTH.REGISTER.EMAIL_INVALID',
    defaultMessage: 'Invalid email address.'
  }
})

const emailShema = intl =>
  Yup.string()
    .email(intl.formatMessage(messages.EMAIL_INVALID))
    .required(intl.formatMessage(messages.EMAIL_REQUIRED))

const nameShema = intl =>
  Yup.string()
    .min(4, intl.formatMessage(messages.NAME_CHARS))
    .max(30, intl.formatMessage(messages.NAME_CHARS))
    .matches(/^([A-Za-z0-9\-_]{4,30}$)/, intl.formatMessage(messages.MAME_SYMBOLS))
    .required(intl.formatMessage(messages.NAME_CHARS))

const validationSchema = props =>
  Yup.object({
    email: emailShema(props.intl),
    name: nameShema(props.intl),
    country: Yup.string().required(props.intl.formatMessage(messages.COUNTRY_CHARS)),
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
    mapPropsToValues: () => ({
      name: '',
      email: '',
      password: '',
      nickname: '',
      platform: 'pc'
    }),
    handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
      try {
        console.log('submit')
        if (props.onSubmitSuccess) {
          props.onSubmitSuccess()
        }
      } catch (error) {
        setErrors({ ...error.errors })
        if (error.message) {
          props.show({
            content: error.message,
            type: 'toast',
            intent: 'danger',
            id: 'REGISTER_FAIL',
            duration: 5000
          })
        }
      }
      setSubmitting(false)
    },
    validationSchema: validationSchema
  })
)

export default enhance(RegistrationForm)
