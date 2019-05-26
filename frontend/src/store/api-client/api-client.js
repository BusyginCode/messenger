import axios from 'axios'
import axiosRetry from 'axios-retry'
import get from 'lodash/get'
import { logOut, getAuthToken } from 'modules/auth'

const apiClient = (serverRes, { disableAuthRefreshFlow, returnClearRes } = {}) => {
  const instance = axios.create({
    baseURL: `http://${process.env.RAZZLE_API_HOST}`,
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

  instance.interceptors.request.use(config => {
    const state = instance.store.getState()
    const authToken = getAuthToken(state)

    if (authToken) {
      config.headers.common.Authorization = `Bearer ${authToken}`
    }

    config.metadata = { startTime: new Date() }

    return config
  })

  instance.interceptors.response.use(
    async response => {
      return response.data
    },
    async error => {
      const { response } = error

      if (response && response.status === 401) {
        await instance.store.dispatch(logOut())

        const { data } = await axios(response.config)

        if (data.errors) {
          return Promise.reject(data.errors)
        }

        return data
      }

      // eslint-disable-next-line
      return Promise.reject({ status: response && response.status, ...((response && response.data) || error) })
    }
  )

  return instance
}

export default apiClient
