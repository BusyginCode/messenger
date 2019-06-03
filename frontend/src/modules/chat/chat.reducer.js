import { handleActions } from 'redux-actions'
import { openChat, loadMessages, sendMessage, receiveMessage } from './chat.actions'

const initialState = {
  openChat: undefined,
  messages: {}
}

const handlerOpenChat = (state, { payload }) => {
  return {
    ...state,
    openChat: payload
  }
}

const handlerGetMessages = (state, { payload, meta }) => {
  return {
    ...state,
    messages: {
      ...state.messages,
      [meta.recipientId]: payload
    }
  }
}

const handlerSendMessages = (state, { payload, meta }) => {
  return {
    ...state,
    messages: {
      ...state.messages,
      [meta.recipientId]: state.messages[meta.recipientId] ? [...state.messages[meta.recipientId], payload] : [payload]
    }
  }
}

const handlerReceiveMessages = (state, { payload }) => {
  return {
    ...state,
    messages: {
      ...state.messages,
      [payload.senderId]: state.messages[payload.senderId] ? [...state.messages[payload.senderId], payload] : [payload]
    }
  }
}

const reducer = handleActions(
  {
    [openChat]: handlerOpenChat,
    [loadMessages]: handlerGetMessages,
    [sendMessage]: handlerSendMessages,
    [receiveMessage]: handlerReceiveMessages
  },
  initialState
)

export default reducer
