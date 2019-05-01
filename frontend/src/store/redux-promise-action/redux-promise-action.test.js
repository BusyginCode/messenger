import reduxPromiseAction from './redux-promise-action'

describe('app/store/redux-promise-action', () => {
  it('should correct next', () => {
    const client = {}
    const store = { getState: jest.fn(), dispatch: jest.fn() }
    const next = jest.fn()
    const action = {
      type: 'CALL'
    }

    reduxPromiseAction(client)(store)(next)(action)

    expect(next).toHaveBeenCalledTimes(1)
  })

  it('should correct async success', () => {
    const client = {}
    const store = { getState: jest.fn(), dispatch: jest.fn() }
    const next = jest.fn()
    const action = {
      type: 'CALL',
      meta: { _loading: true },
      payload: jest.fn()
    }

    reduxPromiseAction(client)(store)(next)(action).then(() => {
      expect(action.payload).toHaveBeenCalledTimes(1)
      expect(store.dispatch).toHaveBeenCalledTimes(3)
    })

    expect(next).toHaveBeenCalledTimes(1)
  })

  it('should correct async success error', () => {
    const client = {}
    const store = { getState: jest.fn(), dispatch: jest.fn() }
    const next = jest.fn()
    const action = {
      type: 'CALL',
      meta: { _loading: true, _error: true },
      payload: jest.fn().mockImplementation(() => {
        throw new Error()
      })
    }

    reduxPromiseAction(client)(store)(next)(action).catch(() => {
      expect(action.payload).toHaveBeenCalledTimes(1)
      expect(store.dispatch).toHaveBeenCalledTimes(3)
    })

    expect(next).toHaveBeenCalledTimes(1)
  })
})
