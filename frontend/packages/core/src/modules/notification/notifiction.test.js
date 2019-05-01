import { createStore } from '@messenger/testing'
import { addNotification, show, hide } from './notification.actions'
import { getNotifications } from './notification.selectors'
import notificationReducer from './notification.reducer'

jest.mock('lodash/uniqueId', () => {
  return () => 'ID'
})

const uniqueNotification = {
  id: 'ID',
  message: 'message',
  type: 'alert',
  page: true
}

describe('notifications actions', () => {
  const { dispatch, getState } = createStore({
    notification: notificationReducer
  })

  it('should add notification correctly', () => {
    expect(dispatch(addNotification(uniqueNotification))).toMatchSnapshot()
    expect(getState()).toMatchSnapshot()
  })

  it('should hide correctly', () => {
    expect(dispatch(hide('ID'))).toMatchSnapshot()
    expect(getState()).toMatchSnapshot()
  })

  describe('show', () => {
    it('adds notification without timeout when duration is not provided', () => {
      const notification = {
        message: 'message',
        type: 'alert',
        page: true
      }

      const dispatch = jest.fn()
      global.setTimeout = jest.fn()

      show(notification)({ dispatch })

      expect(dispatch).toHaveBeenCalledWith({
        payload: uniqueNotification,
        type: 'NOTIFICATIONS_ADD'
      })

      expect(global.setTimeout).not.toHaveBeenCalled()
    })

    it('hide notification with "toast" type with default timeout when duration is not provided', () => {
      const notification = {
        message: 'message',
        type: 'toast',
        page: true
      }

      const dispatch = jest.fn()
      global.setTimeout = jest.fn()

      show(notification)({ dispatch })

      expect(global.setTimeout).toHaveBeenCalledWith(expect.any(Function), 5000)
    })

    it('adds notification with timeout when duration is provided', () => {
      const duration = 1000
      const notification = {
        message: 'message',
        type: 'alert',
        page: true,
        duration
      }

      const dispatch = jest.fn()
      global.setTimeout = jest.fn(func => func())

      show(notification)({ dispatch })

      expect(dispatch).toHaveBeenCalledWith({
        payload: uniqueNotification,
        type: 'NOTIFICATIONS_ADD'
      })

      expect(global.setTimeout).toHaveBeenCalledWith(expect.any(Function), duration)

      expect(dispatch).toHaveBeenCalledWith({
        payload: 'ID',
        type: 'NOTIFICATIONS_HIDE'
      })
    })
  })
})

describe('notification selectors', () => {
  it('should getNotifications correctly', () => {
    const notifications = [1, 2, 3]
    expect(getNotifications({ notification: { notifications } })).toBe(notifications)
  })
})

describe('notification reducer', () => {
  it('should reduce initialState correctly', () => {
    expect(notificationReducer(undefined, {})).toMatchSnapshot()
  })

  it('should reduce [addNotification] correctly', () => {
    expect(notificationReducer(undefined, addNotification(uniqueNotification))).toMatchSnapshot()
  })

  it('should reduce [hide] correctly', () => {
    expect(notificationReducer({ notifications: [{ id: 'a' }] }, hide('a'))).toMatchSnapshot()
  })

  it('should reduce [hide] array correctly', () => {
    expect(
      notificationReducer(
        {
          notifications: [{ id: 'a' }, { id: 'b' }]
        },
        hide(['a', 'b'])
      )
    ).toMatchSnapshot()
  })
})
