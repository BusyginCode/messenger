export const isLoggedIn = state => state.user.isLoggedIn

const getUser = state => state.user
export const getUserAvatar = state => getUser(state).avatar
export const getUserId = state => getUser(state).id
export const getUserNickname = state => getUser(state).nickname
