import { handleActions } from 'redux-actions'
import omit from 'lodash/omit'
import { openModal, closeModal } from './modal.actions'

const initialState = {}

const handlerOpen = (state, { payload: { name = `default_${Math.random()}`, ...rest } }) => ({
  ...state,
  [name]: {
    ...rest,
    name
  }
})

const handlerClose = (state, { payload: name }) => omit(state, [name])

const modalReducer = handleActions(
  {
    [openModal]: handlerOpen,
    [closeModal]: handlerClose
  },
  initialState
)

export default modalReducer
