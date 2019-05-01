import { reducer as reduxAsyncConnect } from 'redux-connect'
import { intlReducer } from 'react-intl-redux'
import { loadingBarReducer } from 'react-redux-loading-bar'

import loadingStatus from '@messenger/core/lib/modules/loading-status'
import globalError from '@messenger/core/lib/modules/global-error'

import app from '@messenger/core/lib/modules/app'
import auth from '@messenger/core/lib/modules/auth'
import notification from '@messenger/core/lib/modules/notification'
import user from '@messenger/core/lib/modules/user'
import modal from '@messenger/core/lib/modules/modal'

export default {
  loadingStatus,
  globalError,
  app,
  auth,
  modal,
  notification,
  user,
  loadingBar: loadingBarReducer,
  reduxAsyncConnect,
  intl: intlReducer
}
