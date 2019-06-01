import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
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
      <Box className={styles.general}>
        <Box className={styles.generalDate}>{message.timestamp}</Box>
        <Box className={styles.text}>{message.text}</Box>
      </Box>
    )
  }
}

export default Message
