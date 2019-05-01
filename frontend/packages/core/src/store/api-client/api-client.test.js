import { api } from '@messenger/testing'
import apiClient from './api-client'

describe('app/store/api-client', () => {
  it('should correct', () => {
    const client = apiClient()
    client.store = {
      dispatch: jest.fn(),
      getState: jest.fn().mockImplementation(() => ({
        app: {},
        auth: {
          authToken: 'token'
        }
      }))
    }

    api.onGet('/test').reply(200, {
      data: {}
    })

    client.get('/test').then(() => {
      expect(client.store.getState).toHaveBeenCalledTimes(1)
    })
  })

  it('should correct error catch 200', () => {
    const client = apiClient()
    client.store = {
      dispatch: jest.fn(),
      getState: jest.fn().mockImplementation(() => ({
        app: {},
        auth: {
          authToken: 'token'
        }
      }))
    }

    api.onPost('/auth/token/refresh').reply(200, {
      status: true
    })

    api.onGet('/test2').reply(200, {
      errors: {
        error_code: 10
      }
    })

    client.get('/test2').catch(() => {
      expect(client.store.getState).toHaveBeenCalledTimes(1)
    })
  })

  it('should correct error catch 200 JWT', () => {
    const client = apiClient()
    client.store = {
      dispatch: jest.fn().mockImplementation(() => Promise.resolve()),
      getState: jest.fn().mockImplementation(() => ({
        app: {},
        auth: {
          authToken: 'token'
        }
      }))
    }

    api.onPost('/auth/token/refresh').reply(200, {
      status: true
    })

    api.onGet('/test2').reply(200, {
      errors: {
        error_code: 1010
      }
    })

    client.get('/test2').catch(() => {
      expect(client.store.getState).toHaveBeenCalledTimes(2)
    })
  })

  it('should correct error catch 500', () => {
    const client = apiClient()
    client.store = {
      dispatch: jest.fn(),
      getState: jest.fn().mockImplementation(() => ({
        app: {},
        auth: {
          authToken: 'token'
        }
      }))
    }

    api.onPost('/auth/token/refresh').reply(500, {
      status: true
    })

    api.onGet('/test2').reply(500, {
      data: {}
    })

    client.get('/test2').catch(() => {
      expect(client.store.getState).toHaveBeenCalledTimes(1)
    })
  })
})
