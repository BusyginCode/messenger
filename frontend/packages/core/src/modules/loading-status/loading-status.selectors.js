import get from 'lodash/get'
import includes from 'lodash/includes'
import upperFirst from 'lodash/upperFirst'
import { loadingStatus } from './loading-status.constants'

export const isEntityLoading = (state, entity, uid = 'list') => {
  return get(state, ['loadingStatus', `${entity}/${uid}`]) === loadingStatus.LOADING
}

export const isEntityLoaded = (state, entity, uid = 'list') => {
  return get(state, ['loadingStatus', `${entity}/${uid}`]) === loadingStatus.LOADED
}

export const isEntityFailed = (state, entity, uid = 'list') => {
  return get(state, ['loadingStatus', `${entity}/${uid}`]) === loadingStatus.FAILED
}

export const isEntityCompleted = (state, entity, uid = 'list') => {
  return includes([loadingStatus.LOADED, loadingStatus.FAILED], get(state, ['loadingStatus', `${entity}/${uid}`]))
}

export const isEntityNotStarted = (state, entity, uid = 'list') => {
  return includes([loadingStatus.INITIAL, undefined], get(state, ['loadingStatus', `${entity}/${uid}`]))
}

export const builder = (entity, options = {}) => {
  const { extended = true } = options
  return {
    [`is${extended ? upperFirst(entity) : ''}Loading`]: (state, uid = 'list') => isEntityLoading(state, entity, uid),
    [`is${extended ? upperFirst(entity) : ''}Loaded`]: (state, uid = 'list') => isEntityLoaded(state, entity, uid),
    [`is${extended ? upperFirst(entity) : ''}Failed`]: (state, uid = 'list') => isEntityFailed(state, entity, uid),
    [`is${extended ? upperFirst(entity) : ''}Completed`]: (state, uid = 'list') =>
      isEntityCompleted(state, entity, uid),
    [`is${extended ? upperFirst(entity) : ''}NotStarted`]: (state, uid = 'list') =>
      isEntityNotStarted(state, entity, uid)
  }
}
