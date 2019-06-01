import io from 'socket.io-client'

const socket = io(`http://${process.env.RAZZLE_API_HOST}`)

socket.on('receive message', msg => {
  console.log('receive message ', msg)
})

export default socket
