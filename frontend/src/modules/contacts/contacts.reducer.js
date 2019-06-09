import { handleActions } from 'redux-actions'
import { loadContacts, addContact, removeContact } from './contacts.actions'

const initialState = {
  list: []
}

const handlerLoadContacts = (state, { payload }) => ({
  ...state,
  list: payload
})

const handlerAddContact = (state, { payload }) => {
  return {
    ...state,
    list: [payload, ...state.list]
  }
}

const handlerRemoveContact = (state, { payload, meta }) => ({
  ...state,
  list: state.list.filter(c => c.id !== meta.contactId)
})

const reducer = handleActions(
  {
    [loadContacts]: handlerLoadContacts,
    [addContact]: handlerAddContact,
    [removeContact]: handlerRemoveContact
  },
  initialState
)

export default reducer
