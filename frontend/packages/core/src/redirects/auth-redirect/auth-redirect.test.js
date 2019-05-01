import { createStore } from '@messenger/testing'
import redirect from './auth-redirect'

describe('Auth Redirect', () => {
  it('should pass when user is logged in (client side)', () => {
    const store = createStore(null, {
      user: {
        isLoggedIn: true
      }
    })

    return redirect('/path').promise({
      helpers: {
        req: {
          _parsedUrl: {
            search: '?as=us'
          }
        }
      },
      history: {},
      store
    })
  })

  it('should pass when user is logged in (server side)', () => {
    const store = createStore(null, {
      user: {
        isLoggedIn: true
      }
    })

    return redirect('/path').promise({
      history: {},
      store,
      helpers: {
        isServer: true,
        req: {
          _parsedUrl: {
            search: '?as=us'
          }
        }
      }
    })
  })

  it('should redirect when user is guest (client side)', () => {
    const replace = jest.fn()

    const store = createStore(null, {
      user: {
        isLoggedIn: false
      }
    })

    redirect('/path').promise({
      helpers: {
        req: {
          _parsedUrl: {
            search: '?as=us'
          }
        }
      },
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
        isLoggedIn: false
      }
    })

    redirect('/path').promise({
      history: {},
      store,
      helpers: {
        isServer: true,
        res: { writeHead, end },
        req: {
          _parsedUrl: {
            search: '?as=us'
          }
        }
      }
    })

    expect(writeHead).toHaveBeenCalledTimes(1)
    expect(end).toHaveBeenCalledTimes(1)
  })
})
