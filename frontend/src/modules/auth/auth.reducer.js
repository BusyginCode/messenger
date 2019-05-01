import { handleActions } from 'redux-actions'
import { setTokens } from './auth.actions'

const initialState = {
  authToken: null,
  refreshToken: null
}

const reducer = handleActions(
  {
    [setTokens]: (state, { payload }) => ({
      ...state,
      ...payload
    })
  },
  initialState
)

export default reducer
