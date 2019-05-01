import { handleActions } from 'redux-actions'
import { load } from './user.actions'

const initialState = {}

const handlerLoad = (state, { payload }) => {
  return {
    ...state
  }
}

const reducer = handleActions(
  {
    [load]: handlerLoad
  },
  initialState
)

export default reducer
