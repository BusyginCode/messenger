import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl-redux'
import { ReduxAsyncConnect } from 'redux-connect'

const Root = props => {
  const { context, helpers, history, location, router: Router, routes, store } = props

  return (
    <Provider store={store}>
      <IntlProvider>
        <Router location={location} context={context} history={history}>
          <ReduxAsyncConnect routes={routes} helpers={helpers} />
        </Router>
      </IntlProvider>
    </Provider>
  )
}

Root.propTypes = {
  context: PropTypes.object,
  history: PropTypes.object,
  helpers: PropTypes.object,
  location: PropTypes.object,
  router: PropTypes.func,
  routes: PropTypes.array,
  store: PropTypes.object
}

export default Root
