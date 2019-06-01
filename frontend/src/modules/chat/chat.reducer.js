import { handleActions } from 'redux-actions'
import { openChat, loadMessages } from './chat.actions'

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

const reducer = handleActions(
  {
    [openChat]: handlerOpenChat,
    [loadMessages]: handlerGetMessages
  },
  initialState
)

export default reducer
