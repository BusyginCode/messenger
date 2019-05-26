import { handleActions } from 'redux-actions'
import { loadUser } from './user.actions'

const initialState = {
  isLoggedIn: false
}

const handlerLoadUser = (state, { payload }) => ({
  ...state,
  ...payload,
  isLoggedIn: true
})

const reducer = handleActions(
  {
    [loadUser]: handlerLoadUser
  },
  initialState
)

export default reducer
