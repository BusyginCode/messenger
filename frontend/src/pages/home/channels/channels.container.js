import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import compose from 'recompose/compose'
import { withRouter } from 'react-router'
import { searchUsers } from 'modules/users'
import Channels from './channels'

const mapDispatchToProps = {
  searchUsers
}

const enhance = compose(
  injectIntl,
  withRouter,
  connect(
    null,
    mapDispatchToProps
  )
)

export default enhance(Channels)
