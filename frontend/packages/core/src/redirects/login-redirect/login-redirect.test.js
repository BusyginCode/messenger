import { createStore } from '@messenger/testing'
import redirect from './login-redirect'

describe('Login Redirect', () => {
  it('should pass when user is logged in (client side)', () => {
    const store = createStore(null, {
      user: {
        isLoggedIn: false
      }
    })

    return redirect('/path').promise({
      helpers: {},
      history: {},
      store
    })
  })

  it('should pass when user is logged in (server side)', () => {
    const store = createStore(null, {
      user: {
        isLoggedIn: false
      }
    })

    return redirect('/path').promise({
      history: {},
      store,
      helpers: {
        isServer: true
      }
    })
  })

  it('should redirect when user is guest (client side)', () => {
    const replace = jest.fn()

    const store = createStore(null, {
      user: {
        isLoggedIn: true
      }
    })

    redirect('/path').promise({
      helpers: {},
      store,
      history: { replace }
    })

    expect(replace).toHaveBeenCalledTimes(1)
  })

  it('should redirect when user is guest (server side)', () => {
    const writeHead = jest.fn()
    const end = jest.fn()

    const store = createStore(null, {
      user: {
        isLoggedIn: true
      }
    })

    redirect('/path').promise({
      history: {},
      store,
      helpers: {
        isServer: true,
        res: { writeHead, end }
      }
    })

    expect(writeHead).toHaveBeenCalledTimes(1)
    expect(end).toHaveBeenCalledTimes(1)
  })
})
