import { createMockStore } from '@messenger/testing'
import { setError } from './global-error.actions'
import { getGlobalError } from './global-error.selectors'
import globalErrorReducer from './global-error.reducer'

describe('core/modules/global-error', () => {
  const store = createMockStore({ auth: {}, app: {} })

  beforeEach(() => {
    store.clearActions()
  })

  describe('actions', () => {
    it('should loadGlobalError correctly', () => {
      expect(setError({ error: {} })).toEqual({ type: 'SET_GLOBAL_ERROR', payload: { error: {} } })
    })
  })

  describe('selectors', () => {
    it('should return correct data for getGlobalError', () => {
      const state = { globalError: { error: null } }

      expect(getGlobalError(state)).toBe(null)
    })
  })

  describe('reducers', () => {
    const state = {
      globalError: { error: null }
    }

    it('should reduce correctly', () => {
      const action = { type: 'SET_GLOBAL_ERROR', payload: { error: {}, lastAction: {} } }

      expect(globalErrorReducer(state, action)).toEqual({ error: { error: {}, lastAction: {} } })
    })
  })
})
