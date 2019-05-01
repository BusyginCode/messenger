import axios from 'axios'
import axiosRetry from 'axios-retry'
import get from 'lodash/get'
import { logOut, refreshToken, getAuthToken } from '../../modules/auth'

const getData = (res = {}, returnClearRes) => (res.data !== undefined && !returnClearRes ? res.data : res)

const apiClient = (serverRes, { disableAuthRefreshFlow, returnClearRes } = {}) => {
  const instance = axios.create({
    baseURL: `https://${process.env.RAZZLE_API_HOST}`,
    withCredentials: false,
    timeout: 10000
  })

  axiosRetry(instance, {
    retries: 3,
    retryCondition(error) {
      return (
        axiosRetry.isNetworkOrIdempotentRequestError(error) ||
        (get(error, 'config.method') === 'get' && error.code === 'ECONNABORTED')
      )
    },
    retryDelay() {
      return 1000
    }
  })

  let isAuthTokenRefreshFlowStarted = null

  const refreshAuthTokenAndRetry = response => {
    if (response.config.__isRetryRequest) {
      return instance.store.dispatch(logOut())
    }

    response.config.__isRetryRequest = true

    return startRefreshAuthTokenFlow(response)
  }

  const startRefreshAuthTokenFlow = response => {
    if (!isAuthTokenRefreshFlowStarted) {
      isAuthTokenRefreshFlowStarted = instance.store.dispatch(refreshToken(serverRes))
    }

    return isAuthTokenRefreshFlowStarted
      .then(() => {
        const authToken = getAuthToken(instance.store.getState())

        isAuthTokenRefreshFlowStarted = null
        response.config.headers.Authorization = `Bearer ${authToken}`
      })
      .catch(() => {
        isAuthTokenRefreshFlowStarted = null
        delete response.config.headers.Authorization
      })
  }

  instance.interceptors.request.use(config => {
    if (!disableAuthRefreshFlow) {
      const state = instance.store.getState()
      const authToken = getAuthToken(state)

      if (authToken) {
        config.headers.common.Authorization = `Bearer ${authToken}`
      }
    }

    config.metadata = { startTime: new Date() }

    return config
  })

  instance.interceptors.response.use(
    async response => {
      return getData(response.data, returnClearRes)
    },
    async error => {
      const { response } = error

      if (response && response.status === 401 && !disableAuthRefreshFlow) {
        await refreshAuthTokenAndRetry(response)

        const { data } = await axios(response.config)

        if (data.errors) {
          return Promise.reject(data.errors)
        }

        return getData(data, returnClearRes)
      }

      // eslint-disable-next-line
      return Promise.reject({ status: response && response.status, ...((response && response.data) || error) })
    }
  )

  return instance
}

export default apiClient
