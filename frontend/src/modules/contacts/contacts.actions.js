import { createAction } from 'redux-actions'
import { getUserId } from 'modules/user'

export const loadContacts = createAction('LOAD_CONTACTS', () => async ({ dispatch, client }) =>
  client.get(`/users/contacts`)
)

export const addContact = createAction('ADD_CONTACT', contactId => async ({ dispatch, client, getState, socket }) => {
  const userId = getUserId(getState())
  const contact = await client.post(`/users/addContact`, { userId, contactId })
  socket.emit('add-contact', contactId)
  console.log('addContact action', contact)
  return contact
})

export const removeContact = createAction(
  'REMOVE_CONTACT',
  contactId => async ({ dispatch, client, getState, socket }) => {
    const userId = getUserId(getState())
    await client.post(`/users/deleteContact`, { userId, contactId })
    socket.emit('remove-contact', contactId)
  },
  contactId => ({ contactId })
)
