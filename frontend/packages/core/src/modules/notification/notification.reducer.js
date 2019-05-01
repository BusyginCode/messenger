import { handleActions } from 'redux-actions'
import { addNotification, hide } from './notification.actions'

export const initialState = {
  notifications: [],
  isLoaded: false
}

const handlerAddNotification = (state, { payload }) => ({
  ...state,
  notifications: [...state.notifications.filter(n => n.id !== payload.id), payload]
})

const handlerClose = (state, { payload }) => ({
  ...state,
  notifications: state.notifications.filter(
    payload instanceof Array ? n => !payload.includes(n.id) : n => n.id !== payload
  )
})

const reducer = handleActions(
  {
    [addNotification]: handlerAddNotification,
    [hide]: handlerClose
  },
  initialState
)

export default reducer
