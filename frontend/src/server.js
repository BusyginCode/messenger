import createServer from '@messenger/core/lib/server'
import configureStore from './store'
import routes from './routes'

export default createServer({ configureStore, routes })
