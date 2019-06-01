export const getCurrentChat = state => state.chat.openChat

export const getMessages = (state, chatId) => state.chat.messages[chatId]
