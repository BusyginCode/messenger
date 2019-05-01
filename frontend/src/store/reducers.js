import { reducer as reduxAsyncConnect } from 'redux-connect'
import { intlReducer } from 'react-intl-redux'
import { loadingBarReducer } from 'react-redux-loading-bar'

import loadingStatus from 'modules/loading-status'
import globalError from 'modules/global-error'
import notification from 'modules/notification'
import modal from 'modules/modal'
import auth from 'modules/auth'

export default {
  loadingStatus,
  globalError,
  modal,
  auth,
  notification,
  loadingBar: loadingBarReducer,
  reduxAsyncConnect,
  intl: intlReducer
}
