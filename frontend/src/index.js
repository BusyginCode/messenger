import http from 'http'
import create from './server'

let server
let currentApp
;(async () => {
  const app = await create()
  currentApp = app
  server = http.createServer(app)
  server.listen(process.env.PORT || 3000, error => {
    if (error) {
      console.log(error)
    }

    console.log('🚀 started')
  })
})()

if (module.hot) {
  console.log('✅  Server-side HMR Enabled!')

  module.hot.accept('./server', async () => {
    if (server && currentApp) {
      console.log('🔁  HMR Reloading `./server`...')
      server.removeListener('request', currentApp)
      const newApp = await require('./server').default()
      server.on('request', newApp)
      currentApp = newApp
    }
  })
}
