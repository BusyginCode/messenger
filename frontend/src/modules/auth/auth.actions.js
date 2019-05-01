import { createAction } from 'redux-actions'
// import cookies from 'utils/cookies'

export const setTokens = createAction('AUTH_SET_TOKENS')

export const logIn = values => async ({ dispatch, client }) => {}

export const logOut = () => ({ dispatch }) => {}

export const register = values => async ({ dispatch, client }) => {}

export const refreshToken = serverRes => async ({ dispatch, getState, client }) => {}
