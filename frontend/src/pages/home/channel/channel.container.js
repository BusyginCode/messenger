import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import compose from 'recompose/compose'
import { withRouter } from 'react-router'
import { getCurrentChat, getMessages, sendMessage } from 'modules/chat'
import Channel from './channel'

const mapStateToProps = (state, props) => {
  const currentChat = getCurrentChat(state)
  return {
    currentChat,
    messages: getMessages(state, currentChat && currentChat.id)
  }
}

const mapDispatchToProps = {
  sendMessage
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
