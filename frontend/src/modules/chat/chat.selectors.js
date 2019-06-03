import { getUserId } from 'modules/user'

export const getCurrentChat = state => state.chat.openChat

export const getMessages = (state, chatId) => {
  console.log('getMessages ', state, getUserId(state))
  return (
    state.chat.messages[chatId] &&
    state.chat.messages[chatId].map(m => ({ ...m, isMyMessage: getUserId(state) === m.senderId }))
  )
}
