import compose from 'recompose/compose'
import { asyncConnect } from 'redux-connect'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import promiseAllSuccess from 'utils/promise-all-success'
import { fetchInitialData, connectUserToSocket } from 'modules/app'
import App from './app'

const mapAsyncActions = [
  {
    async promise({ location, helpers, store: { dispatch, getState }, ...rest }) {
      const promises = [dispatch(fetchInitialData(helpers))]

      return promiseAllSuccess(promises)
    }
  }
]

const mapStateToProps = createStructuredSelector({})

const mapDispatchToProps = {
  connectUserToSocket
}

export default compose(
  asyncConnect(mapAsyncActions, mapStateToProps, mapDispatchToProps),
  withRouter
)(App)
