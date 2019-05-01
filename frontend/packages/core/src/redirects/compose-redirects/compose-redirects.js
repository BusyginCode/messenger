import renderRoutes from 'react-router-config/renderRoutes'
import { asyncConnect } from 'redux-connect'

const render = props => renderRoutes(props.route.routes)

export default (redirects = []) => asyncConnect(redirects)(render)
