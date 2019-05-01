import React, { PureComponent } from 'react'
import { injectIntl, defineMessages, intlShape } from 'react-intl'
import PropTypes from 'prop-types'
import Media from 'react-media'
import { Empty, Button } from 'antd'
import Box from 'components/uikit/box'

import styles from './channel.scss'

const messages = defineMessages({
  EMPTY: {
    id: 'MESSENGER.HOME.EMPTY',
    defaultMessage: 'No channel selected'
  }
})

class Channel extends PureComponent {
  static propTypes = {
    intl: intlShape,
    onToggleSideDrawer: PropTypes.func
  }

  render() {
    const { intl, onToggleSideDrawer } = this.props
    return (
      <Box className={styles.content} direction="column">
        <Box className={styles.contentHeader}>
          <Media query="(max-width: 1136px)">
            {matches =>
              matches ? (
                <Button className={styles.triggerSide} type="primary" icon="right" onClick={onToggleSideDrawer} />
              ) : null
            }
          </Media>
        </Box>
        <Box className={styles.empty} align="center" justify="center">
          <Empty
            image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
            description={intl.formatMessage(messages.EMPTY)}
          />
        </Box>
      </Box>
    )
  }
}

export default injectIntl(Channel)
