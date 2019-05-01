import configureMockStore from 'redux-mock-store'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import mapValues from 'lodash/mapValues'
import thunk from '@messenger/core/lib/store/redux-thunk'
import reduxPromiseAction from '@messenger/core/lib/store/redux-promise-action'
import configureStore from '@messenger/core/lib/store/configure-store'
import apiClient from '@messenger/core/lib/store/api-client'

export const api = new MockAdapter(axios)
const client = apiClient()
const middlewares = [thunk({ client }), reduxPromiseAction(client)]

export const createStore = (reducers, initialState) =>
  configureStore(reducers || mapValues(initialState, () => (state = null) => state))({
    preloadedState: initialState,
    apiClient: client
  })

export const createMockStore = configureMockStore(middlewares)

export const createStoreWithState = (reducers, initialState) => {
  return createStore(reducers, initialState)
}
