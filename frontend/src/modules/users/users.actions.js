import { createAction } from 'redux-actions'

export const searchUsers = createAction('SEARCH_USERS', value => async ({ dispatch, client }) =>
  client.get(`/users/search/${value}`)
)
