import { handleActions } from 'redux-actions'

import { setEntityLoading, setEntityLoaded, setEntityFailed } from './loading-status.actions'
import { loadingStatus } from './loading-status.constants'

const initialState = {}

const handleEntityLoading = (state, { payload: { entity, uid = 'list' } }) => ({
  ...state,
  [`${entity}/${uid}`]: loadingStatus.LOADING
})

const handleEntityLoaded = (state, { payload: { entity, uid = 'list' } }) => ({
  ...state,
  [`${entity}/${uid}`]: loadingStatus.LOADED
})

const handleEntityFailed = (state, { payload: { entity, uid = 'list' } }) => ({
  ...state,
  [`${entity}/${uid}`]: loadingStatus.FAILED
})

const reducer = handleActions(
  {
    [setEntityLoading]: handleEntityLoading,
    [setEntityLoaded]: handleEntityLoaded,
    [setEntityFailed]: handleEntityFailed
  },
  initialState
)

export default reducer
