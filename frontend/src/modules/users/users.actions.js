import { createAction } from 'redux-actions'

export const searchUsers = createAction('SEARCH_USERS', value => async ({ dispatch, client }) =>
  client.get(`/users/search/${value}`)
)

export const loadUserById = createAction('USERS_GET_BY_ID', id => async ({ dispatch, client }) =>
  client.get(`/users/${id}`)
)
