import { reducer as reduxAsyncConnect } from 'redux-connect'
import { intlReducer } from 'react-intl-redux'
import { loadingBarReducer } from 'react-redux-loading-bar'

import notification from 'modules/notification'
import modal from 'modules/modal'
import auth from 'modules/auth'
import user from 'modules/user'
import users from 'modules/users'
import contacts from 'modules/contacts'
import chat from 'modules/chat'
import globalError from 'modules/global-error'
import loadingStatus from 'modules/loading-status'
import app from 'modules/app'

export default {
  modal,
  auth,
  user,
  app,
  users,
  contacts,
  chat,
  globalError,
  loadingStatus,
  notification,
  loadingBar: loadingBarReducer,
  reduxAsyncConnect,
  intl: intlReducer
}
