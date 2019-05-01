import React from 'react'
import { hydrate, render } from 'react-dom'
import { Router } from 'react-router-dom'
import Loadable from 'react-loadable'
import createHistory from 'history/createBrowserHistory'
import Root from './root'

const helpers = {}
const history = createHistory()

export default async ({ routes, store }) => {
  window.BUILD_TIME = process.env.RAZZLE_BUILD_TIME
  if (!process.env.PRODUCTION) {
    window.store = store
  }

  const ssrDisabled = !!process.env.RAZZLE_SSR_DISABLED

  const f = ssrDisabled ? render : hydrate

  await Loadable.preloadReady()

  if (ssrDisabled) {
    try {
      // await store.dispatch(fetchInitialData())
    } catch (e) {
      console.warn(e)
    }
  }

  f(
    <Root helpers={helpers} history={history} router={Router} routes={routes} store={store} />,
    document.getElementById('root')
  )
}
