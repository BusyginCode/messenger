import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxCatch from 'redux-catch'
import { setError } from '@messenger/core/lib/modules/global-error'
import thunk from './redux-thunk'
import reduxPromiseAction from './redux-promise-action'

function errorHandler(error, getState, lastAction, dispatch) {
  dispatch(setError({ error, lastAction }))
}

const configureStore = (reducers, customMiddlewares = [], { withLoading } = {}) => {
  return ({ preloadedState = {}, apiClient = {}, addedClients = {} }) => {
    const middlewares = [
      reduxCatch(errorHandler),
      thunk({ client: apiClient, ...addedClients }),
      reduxPromiseAction(apiClient, { withLoading, addedClients })
    ]

    return createStore(
      combineReducers(reducers),
      preloadedState,
      composeWithDevTools(applyMiddleware(...middlewares, ...customMiddlewares))
    )
  }
}

export default configureStore
