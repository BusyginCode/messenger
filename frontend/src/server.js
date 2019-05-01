import express from 'express'
import cookieParser from 'cookie-parser'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import IntlPolyfill from 'intl'
import Loadable from 'react-loadable'
import { parse as parseUrl } from 'url' // eslint-disable-line node/no-deprecated-api
import { loadOnServer } from 'redux-connect'

import configureStore from './store'
import routes from './routes'
import apiClient from './store/api-client'
import Html from './html'
import Root from './root'

let assets = { client: { js: 'http://localhost:3001/static/js/bundle.js' } }

try {
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST)
} catch (e) {}

global.Intl = IntlPolyfill

const createServer = () => async () => {
  await Loadable.preloadAll()

  const server = express()

  if (process.env.NODE_ENV === 'development') {
    server.use(express.static('public'))
  }

  server
    .disable('x-powered-by')
    .use(cookieParser())
    .use(express.static('build/public'))
    .use('/project', express.static('build/public'))

  server.get('*', async (req, res) => {
    const startDate = new Date().getTime()

    const preloadedState = {}

    try {
      if (process.env.RAZZLE_SSR_DISABLED) {
        res.send(`
              <!doctype html>
              ${renderToString(<Html preloadedState={preloadedState} assets={assets} />)}
            `)
      } else {
        const context = {}
        const store = configureStore({
          preloadedState,
          apiClient: apiClient(res)
        })
        const url = req.originalUrl || req.url
        let location = parseUrl(url)
        const helpers = {
          isServer: true,
          req,
          res
        }

        await loadOnServer({ store, location, routes, helpers })

        const app = renderToString(
          <Root
            context={context}
            helpers={helpers}
            location={location}
            router={StaticRouter}
            routes={routes}
            store={store}
          />
        )

        if (context.url) {
          return res.redirect(302, context.url)
        }

        const html = `
              <!doctype html>
              ${renderToString(<Html preloadedState={store.getState()} content={app} assets={assets} />)}
            `
        res.header('prerender-time', new Date().getTime() - startDate)

        if (context.is404) {
          res.status(404)
        }

        if (helpers.isHealthCheck) {
          res.status(200)
        }

        res.send(html)
      }
    } catch (error) {
      console.error(error)
      res.status(500).json(error)
    }
  })

  return server
}

export default createServer()
