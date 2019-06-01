import { handleActions } from 'redux-actions'
import { loadUserById } from './users.actions'

const initialState = {
  users: {}
}

const handlerLoadUser = (state, { payload }) => {
  return {
    ...state,
    users: {
      ...state.users,
      [payload.id]: payload
    }
  }
}

const reducer = handleActions(
  {
    [loadUserById]: handlerLoadUser
  },
  initialState
)

export default reducer
