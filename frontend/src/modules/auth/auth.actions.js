import { createAction } from 'redux-actions'
// import cookies from 'utils/cookies'

export const setTokens = createAction('AUTH_SET_TOKENS')

export const logIn = values => async ({ dispatch, client }) => {}

export const logOut = () => ({ dispatch }) => {}

export const register = params => async ({ dispatch, client }) => {
  client.post('/users/register', params)
}

export const refreshToken = serverRes => async ({ dispatch, getState, client }) => {}
