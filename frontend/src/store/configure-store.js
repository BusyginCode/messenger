import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxCatch from 'redux-catch'
import { setError } from 'modules/global-error'
import thunk from './redux-thunk'
import reducers from './reducers'
import reduxPromiseAction from './redux-promise-action'

function errorHandler(error, getState, lastAction, dispatch) {
  dispatch(setError({ error, lastAction }))
}

const configureStore = (reducers, customMiddlewares = [], { withLoading } = {}) => {
  return ({ preloadedState = {}, apiClient = {}, socket, addedClients = {} }) => {
    const middlewares = [
      reduxCatch(errorHandler),
      thunk({ client: apiClient, socket, ...addedClients }),
      reduxPromiseAction(apiClient, { withLoading, addedClients })
    ]

    return createStore(
      combineReducers(reducers),
      preloadedState,
      composeWithDevTools(applyMiddleware(...middlewares, ...customMiddlewares))
    )
  }
}

export default configureStore(reducers)
