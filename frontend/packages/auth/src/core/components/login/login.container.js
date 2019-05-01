import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import compose from 'recompose/compose'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import Login from './login'

const mapStateToProps = createStructuredSelector({})

const enhace = compose(
  withRouter,
  injectIntl,
  connect(mapStateToProps)
)

export default enhace(Login)
