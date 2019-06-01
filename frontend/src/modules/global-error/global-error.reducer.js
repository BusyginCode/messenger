import { handleActions } from 'redux-actions'
import { setError } from './global-error.actions'

const initialState = {
  error: null
}

const handleSetGlobalError = (state, { payload }) => ({
  error: {
    ...payload
  }
})

export default handleActions(
  {
    [setError]: handleSetGlobalError
  },
  initialState
)
