import { message as AntMessage } from 'antd'
import PropTypes from 'prop-types'

const Notifications = ({ notifications = [] }) => {
  notifications.forEach(({ type, message, duration }) => AntMessage[type](message, duration))
  return null
}

Notifications.propTypes = {
  notifications: PropTypes.array
}

export default Notifications
