import compose from 'recompose/compose'
import { asyncConnect } from 'redux-connect'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import promiseAllSuccess from '../../utils/promise-all-success'
import App from './app'

const mapAsyncActions = [
  {
    async promise({ location, helpers, store: { dispatch, getState }, ...rest }) {
      const promises = []

      return promiseAllSuccess(promises)
    }
  }
]

const mapStateToProps = createStructuredSelector({})

const mapDispatchToProps = {}

export default compose(
  asyncConnect(mapAsyncActions, mapStateToProps, mapDispatchToProps),
  withRouter
)(App)
