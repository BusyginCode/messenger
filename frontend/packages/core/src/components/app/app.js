import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// import { matchPath } from 'react-router'
import LoadingBar from 'react-redux-loading-bar'
import renderRoutes from 'react-router-config/renderRoutes'
// import flatMap from 'lodash/flatMap'
// import Header from '../header'
// import Footer from '../footer'
// import Notifications from '../notifications'
// import Modals from '../modals'
// import URLModals from '../urlmodals'
import ErrorMessage from './error-message'

import styles from './app.scss'

class App extends PureComponent {
  static propTypes = {
    route: PropTypes.object,
    location: PropTypes.object,
    history: PropTypes.object
  }

  state = {
    error: null,
    errorInfo: null
  }

  componentDidCatch(error, errorInfo) {
    console.warn(error)
    this.setState({ error, errorInfo })
  }

  pushToHistory = path => {
    const { history } = this.props
    history.push(path)
  }

  getErrorMessage() {
    const { error } = this.state
    return error ? <ErrorMessage error={error} /> : null
  }

  render() {
    const { route } = this.props
    // const activeRoute =
    //   flatMap(route.routes, r => (r.subRouters ? r.routes : r)).find(r => r.exact && matchPath(location.pathname, r)) ||
    //   {}

    // const { header = true, notifications = true, footer = true } = activeRoute

    return (
      <div>
        <div className={styles.loader}>
          <LoadingBar style={{ backgroundColor: '#0056ff' }} />
        </div>
        {/* {header && <Header activeRoute={activeRoute} />}
        {notifications && <Notifications />}
        <Modals />
        <URLModals /> */}
        <main id="content" className={styles.content}>
          {this.getErrorMessage() || renderRoutes(route.routes)}
        </main>
        {/* {footer && <Footer />} */}
      </div>
    )
  }
}

export default App
