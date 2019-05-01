import { handleActions } from 'redux-actions'

const initialState = {
  locale: null
}

const reducer = handleActions({}, initialState)

export default reducer
