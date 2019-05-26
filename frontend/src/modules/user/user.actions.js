import { createAction } from 'redux-actions'

export const loadUser = createAction('LOAD_USER', id => async ({ dispatch, client }) => client.get(`/users/me`))
