import { createAction } from 'redux-actions'

export const openChat = createAction('CHAT_OPEN_CHAT')

export const loadMessages = createAction(
  'GET_MESSAGES',
  (senderId, recipientId) => async ({ dispatch, client }) => client.get(`/messages/${senderId}/${recipientId}`),
  (senderid, recipientId) => ({ recipientId })
)
