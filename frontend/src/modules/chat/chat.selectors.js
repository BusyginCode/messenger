import { getUserId } from 'modules/user'

export const getCurrentChat = state => state.chat.openChat

export const getMessages = (state, chatId) => {
  return (
    state.chat.messages[chatId] &&
    state.chat.messages[chatId].map(m => ({ ...m, isMyMessage: getUserId(state) === m.senderId }))
  )
}

export const getUnread = (state, id) => state.chat.unreaded[id]
export const getUnreaded = state => state.chat.unreaded
