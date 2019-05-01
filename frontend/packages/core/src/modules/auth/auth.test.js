import { api, createMockStore } from '@messenger/testing'
import {
  setTokens,
  validateEmail,
  validateName,
  logOut,
  logIn,
  refreshToken,
  register,
  resendEmailToken,
  resendEmail,
  verifiEmail,
  resetPassword,
  changePassword
} from './auth.actions'
import { getAuthToken } from './auth.selectors'
import authReducer from './auth.reducer'

describe('auth actions', () => {
  const store = createMockStore({ auth: {}, app: {} })

  beforeEach(() => {
    store.clearActions()
  })

  it('should show correctly', () => {
    expect(setTokens({ authToken: 'authToken', refreshToken: 'refreshToken' })).toMatchSnapshot()
  })

  it('should validateEmail correctly', () => {
    const email = 'email@email.com'

    api.onGet('/auth/email/validate?email=email%40email.com').reply(200, {
      data: true
    })

    api.onGet('/me').reply(200)

    return store.dispatch(validateEmail(email)).then(data => {
      expect(data).toMatchSnapshot()
    })
  })

  it('should validateName correctly', () => {
    const name = 'name'

    api.onPost('/core/username/validate', { name }).reply(200, {
      data: true
    })

    return store.dispatch(validateName(name)).then(data => {
      expect(data).toMatchSnapshot()
    })
  })

  it('should logIn correctly', () => {
    const params = { email: 'email', password: 'password' }

    api.onPost('/auth/login', params).reply(200, {
      token: 'token',
      refresh_token: 'refresh_token'
    })

    return store.dispatch(logIn(params)).then(() => {
      expect(store.getActions()[0]).toMatchSnapshot()
      expect(store.getActions()[1]).toMatchSnapshot()
    })
  })

  it('should refreshToken correctly', () => {
    api.onPost('/auth/token/refresh').reply(200, {
      data: {
        token: 'token',
        refresh_token: 'refresh_token'
      }
    })

    return store.dispatch(refreshToken()).then(() => {
      expect(store.getActions()[0]).toMatchSnapshot()
      expect(store.getActions()[1]).toMatchSnapshot()
    })
  })

  it('should refreshToken correctly error', () => {
    api.onPost('/auth/refresh').reply(500, {})

    return store.dispatch(refreshToken()).then(() => {
      expect(store.getActions()[0]).toMatchSnapshot()
      expect(store.getActions()[1]).toMatchSnapshot()
    })
  })

  it('should register correctly', () => {
    const params = { email: 'email', password: 'password' }

    api.onPost('/auth/register', params).reply(200, {})

    return store.dispatch(register(params)).then(() => {
      expect(store.getActions()[0]).toMatchSnapshot()
    })
  })

  it('should resendEmailToken correctly', () => {
    api.onPost('/auth/resend/email/token').reply(200, {})

    return store.dispatch(resendEmailToken())
  })

  it('should resendEmail correctly', () => {
    api.onPost('/auth/resend/email/token').reply(200, { data: { resend_token: 'resend_token' } })
    api.onPost('/auth/resend/email').reply(200, {})

    return store.dispatch(resendEmail())
  })

  it('should verifiEmail correctly', () => {
    api.onPost('/auth/verify/email', { token: 'token' }).reply(200, { data: {} })

    return store.dispatch(verifiEmail('token'))
  })

  it('should resetPassword correctly', () => {
    const email = 'email'

    api.onPost('/auth/forgot/password/start', { email }).reply(200, {})

    return store.dispatch(resetPassword(email))
  })

  it('should changePassword correctly', () => {
    const password = 'password'
    const code = 'code'

    api.onPost('/auth/forgot/password/change', { password, code }).reply(200, {})

    return store.dispatch(changePassword(password, code))
  })

  it('should logOut correctly', () => {
    store.dispatch(logOut())
    expect(store.getActions()[0]).toMatchSnapshot()
  })
})

describe('auth selectors', () => {
  it('should getNotifications correctly', () => {
    const token = Math.random()
    expect(getAuthToken({ auth: { authToken: token } })).toBe(token)
  })
})

describe('auth reducer', () => {
  it('should reduce initialState correctly', () => {
    expect(authReducer(undefined, {})).toMatchSnapshot()
  })
})
