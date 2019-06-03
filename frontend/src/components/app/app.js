import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import LoadingBar from 'react-redux-loading-bar'
import renderRoutes from 'react-router-config/renderRoutes'
import Notifications from '../notifications'
import ErrorMessage from './error-message'
import Socket from '../socket'

import styles from './app.scss'

class App extends PureComponent {
  static propTypes = {
    route: PropTypes.object,
    location: PropTypes.object,
    connectUserToSocket: PropTypes.func,
    history: PropTypes.object
  }

  state = {
    error: null,
    errorInfo: null
  }

  componentDidMount() {
    const { connectUserToSocket } = this.props
    connectUserToSocket()
  }

  componentDidCatch(error, errorInfo) {
    console.warn(error)
    this.setState({ error, errorInfo })
  }

  getErrorMessage() {
    const { error } = this.state
    return error ? <ErrorMessage error={error} /> : null
  }

  render() {
    const { route } = this.props

    return (
      <div>
        <div className={styles.loader}>
          <LoadingBar style={{ backgroundColor: '#0056ff' }} />
        </div>
        <Notifications />
        <main id="content" className={styles.content}>
          {this.getErrorMessage() || renderRoutes(route.routes)}
        </main>
        <Socket />
      </div>
    )
  }
}

export default App
