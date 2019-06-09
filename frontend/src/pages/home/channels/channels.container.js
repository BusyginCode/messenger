import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import compose from 'recompose/compose'
import { withRouter } from 'react-router'
import { searchUsers } from 'modules/users'
import { openChat, closeChat, getUnreaded } from 'modules/chat'
import { getContacts, removeContact } from 'modules/contacts'
import Channels from './channels'

const mapDispatchToProps = {
  searchUsers,
  openChat,
  removeContact,
  closeChat
}

const mapStateToProps = state => ({
  contacts: getContacts(state),
  unreaded: getUnreaded(state)
})

const enhance = compose(
  injectIntl,
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export default enhance(Channels)
