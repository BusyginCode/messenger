import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import compose from 'recompose/compose'
import { withRouter } from 'react-router'
import { getCurrentChat, getMessages, sendMessage, readMessages, getUnread } from 'modules/chat'
import { haveContact } from 'modules/user'
import { addContact } from 'modules/contacts'
import Channel from './channel'

const mapStateToProps = (state, props) => {
  const currentChat = getCurrentChat(state)
  return {
    currentChat,
    isUnread: getUnread(state, currentChat && currentChat.id),
    messages: getMessages(state, currentChat && currentChat.id),
    haveContact: haveContact(state, currentChat && currentChat.id)
  }
}

const mapDispatchToProps = {
  sendMessage,
  readMessages,
  addContact
}

const enhance = compose(
  injectIntl,
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export default enhance(Channel)
