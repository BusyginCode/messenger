import React from 'react'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { FormattedMessage } from 'react-intl'
import { setEntityLoading, setEntityLoaded, setEntityFailed } from '../../modules/loading-status/loading-status.actions'
import { show } from '../../modules/notification'

export default (client, { withLoading = true, addedClients } = {}) => {
  return store => {
    const { dispatch, getState } = store
    client.store = store

    return next => action => {
      if (!action.payload || typeof action.payload !== 'function') {
        return next(action)
      }

      const { payload, meta = {}, ...restAction } = action

      if (meta._loading) {
        next({ ...restAction, meta: { ...meta, loading: true } })
      }

      if (meta._entity) {
        dispatch(setEntityLoading({ entity: meta._entity, uid: meta._uid }))
      }

      if (withLoading) {
        dispatch(showLoading())
      }

      return (async () => {
        try {
          const result = await payload({ client, ...addedClients, dispatch, getState })

          dispatch({
            ...restAction,
            payload: result,
            meta: { ...meta, error: false, loading: false }
          })

          if (meta._entity) {
            dispatch(setEntityLoaded({ entity: meta._entity, uid: meta._uid }))
          }
          if (withLoading) {
            dispatch(hideLoading())
          }
          return result
        } catch (error) {
          if (!process.env.PRODUCTION) {
            console.error(error)
          }
          if (meta._error) {
            dispatch({
              ...restAction,
              payload: error,
              meta: { ...meta, error: true, loading: false }
            })
          }

          if (meta._error_notify) {
            dispatch(
              show({
                type: 'toast',
                duration: 5000,
                content: (
                  <span>
                    <FormattedMessage
                      id="APP.ERROR"
                      defaultMessage="Whoa! This isn't right. Please refresh the page or enjoy some games and try again later."
                    />
                  </span>
                ),
                intent: 'danger'
              })
            )
          }

          if (meta._entity) {
            dispatch(setEntityFailed({ entity: meta._entity, uid: meta._uid }))
          }
          dispatch(hideLoading())

          throw error
        }
      })()
    }
  }
}
