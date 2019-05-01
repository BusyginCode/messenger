import { createAction } from 'redux-actions'
import { load as loadUser } from '../user'
import cookies from '../../utils/cookies'

export const setTokens = createAction('AUTH_SET_TOKENS')

export const logIn = values => async ({ dispatch, client }) => {
  const { token: authToken, refresh_token: refreshToken } = await client.post('/auth/login', values)
  cookies.set('authToken', authToken)
  cookies.set('refreshToken', refreshToken)
  dispatch(setTokens({ authToken, refreshToken }))
  await dispatch(loadUser())
}

export const logOut = () => ({ dispatch }) => {
  cookies.remove('authToken')
  cookies.remove('refreshToken')
  dispatch(
    setTokens({
      authToken: null,
      refreshToken: null
    })
  )
}

export const register = values => async ({ dispatch, client }) => {
  await client.post('/auth/register', values)
  await dispatch(logIn({ email: values.email, password: values.password }))
}

export const refreshToken = serverRes => async ({ dispatch, getState, client }) => {
  try {
    const state = getState()

    const response = await client.post('/auth/token/refresh', {
      token: state.auth.refreshToken
    })
    const { token: authToken } = response

    if (serverRes) {
      serverRes.cookie('authToken', authToken, { maxAge: 1000 * 60 * 60 * 24 * 7 })
    }
    cookies.set('authToken', authToken)

    dispatch(setTokens({ authToken }))
  } catch (e) {
    dispatch(logOut())
    if (typeof window !== 'undefined') {
      try {
        window.location.reload()
      } catch (e) {
        console.warn(e)
      }
    }
  }
}
