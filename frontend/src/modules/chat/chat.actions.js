import { createAction } from 'redux-actions'
import { getUserId } from 'modules/user'

export const openChat = createAction('CHAT_OPEN_CHAT')

export const loadMessages = createAction(
  'GET_MESSAGES',
  (senderId, recipientId) => async ({ dispatch, client }) => client.get(`/messages/${senderId}/${recipientId}`),
  (senderid, recipientId) => ({ recipientId })
)

export const sendMessage = createAction(
  'SEND_MESSAGE',
  (text, recipientId) => async ({ dispatch, socket, getState, client }) => {
    const myId = getUserId(getState())
    socket.emit('send-message', myId, recipientId, text)
    return { recipientId, senderId: myId, text, timestamp: new Date().getTime() }
  },
  (text, recipientId) => ({ recipientId })
)

export const receiveMessage = createAction('RECEIVE_MESSAGE', msg => async ({ dispatch }) => {
  return msg
})
