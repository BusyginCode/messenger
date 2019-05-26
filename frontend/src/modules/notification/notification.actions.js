import { createAction } from 'redux-actions'
import uniqueId from 'lodash/uniqueId'

export const addNotification = createAction('NOTIFICATIONS_ADD')
export const hide = createAction('NOTIFICATIONS_HIDE')

export const show = notification => {
  return ({ dispatch }) => {
    let { type = 'success', id = uniqueId('notification_'), duration = 2.5, message = '' } = notification

    const uniqueNotification = {
      type,
      message,
      id,
      duration
    }

    dispatch(addNotification(uniqueNotification))

    if (typeof duration === 'number') {
      setTimeout(() => {
        dispatch(hide(id))
      }, duration * 1000)
    }
  }
}

export const success = notification => show({ ...notification, type: 'success' })
export const error = notification => show({ ...notification, type: 'error' })
export const warning = notification => show({ ...notification, type: 'warning' })
export const info = notification => show({ ...notification, type: 'info' })
export const loading = notification => show({ ...notification, type: 'loading' })
