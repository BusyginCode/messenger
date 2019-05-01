import initClient from '@messenger/core/lib/client'
import apiClient from '@messenger/core/lib/store/api-client'
import configureStore from './store'
import routes from './routes'

import './styles/main.scss'

const { preloadedState = {} } = window._APP__ || {}

const client = apiClient()
const store = configureStore({
  preloadedState,
  apiClient: client
})

initClient({ routes, store })

if (module.hot) {
  module.hot.accept()
}
