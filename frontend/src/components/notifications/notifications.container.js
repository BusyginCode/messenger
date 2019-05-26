import { connect } from 'react-redux'
import compose from 'recompose/compose'
import { getNotifications } from 'modules/notification'
import Notifications from './notifications'

const mapStateToProps = state => ({
  notifications: getNotifications(state)
})

const enhance = compose(connect(mapStateToProps))

export default enhance(Notifications)
