import _each from 'lodash/map'
import { createMockStore } from '@messenger/testing'
import { setEntityLoading, setEntityLoaded, setEntityFailed } from './loading-status.actions'
import * as selectors from './loading-status.selectors'
import reducer from './loading-status.reducer'
import { loadingStatus } from './loading-status.constants'
const { isEntityNotStarted, isEntityLoading, isEntityLoaded, isEntityFailed, isEntityCompleted, builder } = selectors

describe('loadingStatus actions', () => {
  const store = createMockStore({ app: {}, auth: {} })

  describe('#setEntityLoading', () => {
    beforeEach(() => {
      store.clearActions()
    })

    it('should run action', () => {
      expect(store.dispatch(setEntityLoading({ entity: 'playersById', uid: '3j4kj34kjnjnkjn' }))).toMatchSnapshot()
    })
  })

  describe('#setEntityFailed', () => {
    beforeEach(() => {
      store.clearActions()
    })

    it('should run action', () => {
      expect(store.dispatch(setEntityFailed({ entity: 'playersById', uid: '3j4kj34kjnjnkjn' }))).toMatchSnapshot()
    })
  })

  describe('#setEntityLoaded', () => {
    beforeEach(() => {
      store.clearActions()
    })

    it('should run action', () => {
      expect(store.dispatch(setEntityLoaded({ entity: 'playersById', uid: '3j4kj34kjnjnkjn' }))).toMatchSnapshot()
    })
  })
})

describe('selectors', () => {
  const state = {
    loadingStatus: {
      'playersById/ent1': loadingStatus.INITIAL,
      'playersById/ent2': loadingStatus.LOADING,
      'playersById/ent3': loadingStatus.LOADED,
      'playersById/ent4': loadingStatus.FAILED
    }
  }

  describe('#isEntityLoading', () => {
    it('should return `true` in case entity has loading status', () => {
      _each([2], i => {
        expect(isEntityLoading(state, 'playersById', `ent${i}`)).toEqual(true)
      })
    })

    it('should return `false` in case entity has other status', () => {
      _each([0, 1, 3, 4], i => {
        expect(isEntityLoading(state, 'playersById', `ent${i}`)).toEqual(false)
      })
    })
  })

  describe('#isEntityLoaded', () => {
    it('should return `true` in case entity has loaded status', () => {
      _each([3], i => {
        expect(isEntityLoaded(state, 'playersById', `ent${i}`)).toEqual(true)
      })
    })

    it('should return `false` in case entity has other status', () => {
      _each([0, 1, 2, 4], i => {
        expect(isEntityLoaded(state, 'playersById', `ent${i}`)).toEqual(false)
      })
    })
  })

  describe('#isEntityFailed', () => {
    it('should return `true` in case entity has loaded status', () => {
      _each([4], i => {
        expect(isEntityFailed(state, 'playersById', `ent${i}`)).toEqual(true)
      })
    })

    it('should return `false` in case entity has other status', () => {
      _each([0, 1, 2, 3], i => {
        expect(isEntityFailed(state, 'playersById', `ent${i}`)).toEqual(false)
      })
    })
  })

  describe('#isEntityCompleted', () => {
    it('should return `true` in case entity has completed status', () => {
      _each([3, 4], i => {
        expect(isEntityCompleted(state, 'playersById', `ent${i}`)).toEqual(true)
      })
    })

    it('should return `false` in case entity has other status', () => {
      _each([0, 1, 2], i => {
        expect(isEntityCompleted(state, 'playersById', `ent${i}`)).toEqual(false)
      })
    })
  })

  describe('#isEntityNotStarted', () => {
    it('should return `true` in case entity has completed status', () => {
      _each([0, 1], i => {
        expect(isEntityNotStarted(state, 'playersById', `ent${i}`)).toEqual(true)
      })
    })

    it('should return `false` in case entity has other status', () => {
      _each([2, 3, 4], i => {
        expect(isEntityNotStarted(state, 'playersById', `ent${i}`)).toEqual(false)
      })
    })
  })

  describe('#build', () => {
    it('should return selector functions', () => {
      expect(builder('player')).toMatchSnapshot()
    })

    it('should return selector functions with short name in case extended: false option provided', () => {
      expect(builder('player', { extended: false })).toMatchSnapshot()
    })

    it('output functions should work exactly the same', () => {
      const builtFunctions = builder('playersById', { extended: false })
      const state = {
        loadingStatus: {
          'playersById/ent1': loadingStatus.INITIAL,
          'playersById/ent2': loadingStatus.LOADING,
          'playersById/ent3': loadingStatus.LOADED,
          'playersById/ent4': loadingStatus.FAILED
        }
      }
      _each(['Loading', 'Loaded', 'Failed', 'Completed', 'NotStarted'], stateId => {
        _each([0, 1, 2, 3, 4], i => {
          const builtFunctionResult = builtFunctions[`is${stateId}`](state, 'playersById', `ext${i}`)
          const functionResult = selectors[`isEntity${stateId}`](state, 'playersById', `ext${i}`)
          expect(builtFunctionResult).toEqual(functionResult)
        })
      })
    })

    it('output function with extended name should work the same as output function with short name', () => {
      const builtFunctionsExtended = builder('playersById')
      const builtFunctions = builder('playersById', { extended: false })
      const state = {
        loadingStatus: {
          'playersById/ent1': loadingStatus.INITIAL,
          'playersById/ent2': loadingStatus.LOADING,
          'playersById/ent3': loadingStatus.LOADED,
          'playersById/ent4': loadingStatus.FAILED
        }
      }
      _each(['Loading', 'Loaded', 'Failed', 'Completed', 'NotStarted'], stateId => {
        _each([0, 1, 2, 3, 4], i => {
          const extendedBuiltFunctionResult = builtFunctionsExtended[`isPlayersById${stateId}`](
            state,
            'playersById',
            `ext${i}`
          )
          const builtFunctionResult = builtFunctions[`is${stateId}`](state, 'playersById', `ext${i}`)
          expect(extendedBuiltFunctionResult).toEqual(builtFunctionResult)
        })
      })
    })
  })
})

describe('loadingStatus reducer', () => {
  it('should reduce setEntityLoading correctly', () => {
    const state = {}

    expect(
      reducer(state, {
        type: setEntityLoading,
        payload: { entity: 'player', uid: '343434' }
      })
    ).toMatchSnapshot()
  })
})

describe('loadingStatus reducer', () => {
  it('should reduce setEntityLoading correctly', () => {
    const state = {}

    expect(
      reducer(state, {
        type: setEntityLoaded,
        payload: { entity: 'player', uid: '343434' }
      })
    ).toMatchSnapshot()
  })
})

describe('loadingStatus reducer', () => {
  it('should reduce setEntityLoading correctly', () => {
    const state = {}

    expect(
      reducer(state, {
        type: setEntityFailed,
        payload: { entity: 'player', uid: '343434' }
      })
    ).toMatchSnapshot()
  })
})
