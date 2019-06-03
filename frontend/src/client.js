import React from 'react'
import { hydrate, render } from 'react-dom'
import { Router } from 'react-router-dom'
import Loadable from 'react-loadable'
import 'antd/dist/antd.css'
import { fetchInitialData } from 'modules/app'
import Root from './root'
import apiClient from './store/api-client'
import socket from './store/socket'
import configureStore from './store'
import routes from './routes'

import './styles/main.scss'

const createHistory = require('history').createBrowserHistory

const { preloadedState = {} } = window._APP__ || {}

const client = apiClient()
const store = configureStore({
  preloadedState,
  apiClient: client,
  addedClients: {
    socket
  }
})

const helpers = {}
const history = createHistory()

const initClient = async () => {
  window.BUILD_TIME = process.env.RAZZLE_BUILD_TIME
  if (!process.env.PRODUCTION) {
    window.store = store
  }

  const ssrDisabled = !!process.env.RAZZLE_SSR_DISABLED

  const f = ssrDisabled ? render : hydrate

  await Loadable.preloadReady()

  if (ssrDisabled) {
    try {
      await store.dispatch(fetchInitialData())
    } catch (e) {
      console.warn(e)
    }
  }

  f(
    <Root helpers={helpers} history={history} router={Router} routes={routes} store={store} />,
    document.getElementById('root')
  )
}

initClient({ routes, store })

if (module.hot) {
  module.hot.accept()
}
