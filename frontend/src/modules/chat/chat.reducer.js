import { handleActions } from 'redux-actions'
import { openChat, loadMessages, sendMessage, receiveMessage, closeChat, readMessages } from './chat.actions'

const initialState = {
  openChat: undefined,
  messages: {},
  unreaded: {}
}

const handlerOpenChat = (state, { payload }) => {
  return {
    ...state,
    openChat: payload
  }
}

const handlerCloseChat = (state, { payload }) => {
  return {
    ...state,
    openChat: undefined
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
    },
    unreaded: {
      ...state.unreaded,
      [payload.senderId]: true
    }
  }
}

const handlerReadMessages = (state, { payload }) => {
  return {
    ...state,
    unreaded: {
      ...state.unreaded,
      [payload]: false
    }
  }
}

const reducer = handleActions(
  {
    [openChat]: handlerOpenChat,
    [closeChat]: handlerCloseChat,
    [loadMessages]: handlerGetMessages,
    [sendMessage]: handlerSendMessages,
    [readMessages]: handlerReadMessages,
    [receiveMessage]: handlerReceiveMessages
  },
  initialState
)

export default reducer
