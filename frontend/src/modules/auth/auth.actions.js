import { createAction } from 'redux-actions'
import { getUserId } from 'modules/user'
import cookies from 'utils/cookies'

export const setTokens = createAction('AUTH_SET_TOKENS')

export const logIn = values => async ({ dispatch, client }) => {
  const { token: authToken } = await client.post('/users/login', values)
  cookies.set('authToken', authToken)
  dispatch(setTokens({ authToken }))
}

export const logOut = () => ({ dispatch, socket, getState }) => {
  cookies.remove('authToken')
  socket.emit('user logout', getUserId(getState()))
  dispatch(
    setTokens({
      authToken: null
    })
  )
}

export const register = params => async ({ dispatch, client }) => {
  await client.post('/users/register', params)
  await dispatch(logIn({ nickname: params.nickname, password: params.password }))
}
