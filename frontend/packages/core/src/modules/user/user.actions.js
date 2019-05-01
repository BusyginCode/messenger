import { createAction } from 'redux-actions'

export const load = createAction('USER_LOAD', () => async ({ client, getState }) => {
  const { authToken } = getState().auth

  if (!authToken) {
    return { isLoggedIn: false }
  }

  return client.get('/me')
})
