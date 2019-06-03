import io from 'socket.io-client'

const socket = io(`http://${process.env.RAZZLE_API_HOST}`)

export default socket
