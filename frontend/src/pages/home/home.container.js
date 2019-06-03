import { injectIntl } from 'react-intl'
import { asyncConnect } from 'redux-connect'
import compose from 'recompose/compose'
import { withRouter } from 'react-router'
import promiseAllSuccess from 'utils/promise-all-success'
import { loadUserById } from 'modules/users'
import { getUserId } from 'modules/user'
import { openChat, loadMessages } from 'modules/chat'
import Home from './home.js'

const mapAsyncActions = [
  {
    async promise({ location, helpers, store: { dispatch, getState }, match, ...rest }) {
      const promises = []
      if (match.params.id) {
        const user = await dispatch(loadUserById(match.params.id))
        await dispatch(loadMessages(getUserId(getState()), match.params.id))
        dispatch(openChat(user))
      }

      return promiseAllSuccess(promises)
    }
  }
]

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

const enhance = compose(
  injectIntl,
  withRouter,
  asyncConnect(mapAsyncActions, mapStateToProps, mapDispatchToProps)
)

export default enhance(Home)
