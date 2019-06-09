import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import compose from 'recompose/compose'
import { withRouter } from 'react-router'
import { receiveMessage, closeChat } from 'modules/chat'
import { loadContacts } from 'modules/contacts'
import Socket from './socket'

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  receiveMessage,
  loadContacts,
  closeChat
}

const enhance = compose(
  injectIntl,
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export default enhance(Socket)
