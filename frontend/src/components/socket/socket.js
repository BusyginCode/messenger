import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import socket from 'store/socket'

class Socket extends PureComponent {
  static propTypes = {
    receiveMessage: PropTypes.func
  }

  componentDidMount() {
    const { receiveMessage } = this.props
    socket.on('receive message', msg => {
      receiveMessage(msg)
      console.log('receive message ', msg)
    })
  }

  render() {
    return null
  }
}

export default Socket
