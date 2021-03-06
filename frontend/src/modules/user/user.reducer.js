import { handleActions } from 'redux-actions'
import { addContact, removeContact } from 'modules/contacts'
import { loadUser } from './user.actions'

const initialState = {
  isLoggedIn: false
}

const handlerLoadUser = (state, { payload }) => ({
  ...state,
  ...payload,
  isLoggedIn: true
})

const handlerAddContact = (state, { payload }) => {
  return {
    ...state,
    contacts: [payload.id, ...state.contacts]
  }
}

const handlerRemoveContact = (state, { payload, meta }) => ({
  ...state,
  contacts: state.contacts.filter(c => c !== meta.contactId)
})

const reducer = handleActions(
  {
    [loadUser]: handlerLoadUser,
    [addContact]: handlerAddContact,
    [removeContact]: handlerRemoveContact
  },
  initialState
)

export default reducer
