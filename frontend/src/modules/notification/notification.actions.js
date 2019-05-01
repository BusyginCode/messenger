import { createAction } from 'redux-actions'
import uniqueId from 'lodash/uniqueId'

export const addNotification = createAction('NOTIFICATIONS_ADD')
export const hide = createAction('NOTIFICATIONS_HIDE')

export const show = notification => {
  return ({ dispatch }) => {
    let { duration, id = uniqueId('notification_'), ...data } = notification
    if (data.type === 'toast') {
      duration = duration || 5000
    }

    const uniqueNotification = {
      ...data,
      id
    }

    dispatch(addNotification(uniqueNotification))

    if (typeof duration === 'number') {
      setTimeout(() => {
        dispatch(hide(id))
      }, duration)
    }
  }
}
