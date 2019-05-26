import { reducer as reduxAsyncConnect } from 'redux-connect'
import { intlReducer } from 'react-intl-redux'
import { loadingBarReducer } from 'react-redux-loading-bar'

import notification from 'modules/notification'
import modal from 'modules/modal'
import auth from 'modules/auth'
import user from 'modules/user'
import app from 'modules/app'

export default {
  modal,
  auth,
  user,
  app,
  notification,
  loadingBar: loadingBarReducer,
  reduxAsyncConnect,
  intl: intlReducer
}
