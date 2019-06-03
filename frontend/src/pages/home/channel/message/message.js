import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Box from 'components/uikit/box'
// import Text from 'components/uikit/text'

import styles from './message.scss'

class Message extends PureComponent {
  static propTypes = {
    message: PropTypes.object
  }

  render() {
    const { message } = this.props
    return (
      <Box className={styles.general} justify={message.isMyMessage ? 'start' : 'end'} top="s">
        <Box direction="column" className={styles.container}>
          <Box className={styles.text}>{message.text}</Box>
          <Box className={styles.generalDate}>{moment(message.timestamp).format('LLLL')}</Box>
        </Box>
      </Box>
    )
  }
}

export default Message
