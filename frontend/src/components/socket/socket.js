import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import socket from 'store/socket'

class Socket extends PureComponent {
  static propTypes = {
    receiveMessage: PropTypes.func,
    loadContacts: PropTypes.func,
    closeChat: PropTypes.func,
    history: PropTypes.object
  }

  componentDidMount() {
    const { receiveMessage, loadContacts, history, closeChat } = this.props
    socket.on('receive message', msg => {
      receiveMessage(msg)
      console.log('receive message ', msg)
    })

    socket.on('add-contact', () => {
      console.log('add-contact ')
      loadContacts()
    })

    socket.on('remove-contact', () => {
      console.log('remove-contact ')
      loadContacts()
      closeChat()
      history.push('/')
    })
  }

  render() {
    return null
  }
}

export default Socket
