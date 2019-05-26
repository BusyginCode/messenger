import { isLoggedIn } from 'modules/user'
import redirect from '../redirect'

export default (path = '/') => ({
  promise: ({ helpers, history, store: { getState } }) => redirect(path, helpers, history, isLoggedIn(getState()))
})
