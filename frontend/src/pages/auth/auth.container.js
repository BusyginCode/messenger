import { injectIntl } from 'react-intl'
import { withRouter } from 'react-router'
import compose from 'recompose/compose'
import Auth from './auth'

const enhance = compose(
  injectIntl,
  withRouter
)

export default enhance(Auth)
