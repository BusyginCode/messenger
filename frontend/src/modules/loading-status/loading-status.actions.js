import { createAction } from 'redux-actions'

export const setEntityLoading = createAction('APP_SET_ENTITY_LOADING')

export const setEntityLoaded = createAction('APP_SET_ENTITY_LOADED')

export const setEntityFailed = createAction('APP_SET_ENTITY_FAILED')
