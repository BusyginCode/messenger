import React, { PureComponent } from 'react'
import { injectIntl, defineMessages, intlShape } from 'react-intl'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Box from 'components/uikit/box'
import { Input, Empty } from 'antd'

import styles from './channels.scss'

const Search = Input.Search

const messages = defineMessages({
  SEARCH_PLACEHOLDER: {
    id: 'MESSENGER.HOME.SEARCH_PLACEHOLDER',
    defaultMessage: 'Enter your friends name'
  },
  EMPTY_CHANNELS: {
    id: 'MESSENGER.HOME.EMPTY_CHANNELS',
    defaultMessage: 'No channels found'
  }
})

class Channels extends PureComponent {
  static propTypes = {
    intl: intlShape,
    tabPosition: PropTypes.string,
    changeTabPosition: PropTypes.func
  }

  onSearch = value => {}

  render() {
    const { intl } = this.props
    return (
      <Box direction="column" flexGrow={1}>
        <Box className={styles.siderSearch} padding="m">
          <Search placeholder={intl.formatMessage(messages.SEARCH_PLACEHOLDER)} onSearch={this.onSearch} enterButton />
        </Box>
        <Box className={cn(styles.siderChannelsList, styles.slide)} flexGrow={1} paddimg="0 m">
          <Box flexGrow={1} align="center" justify="center">
            <Empty description={intl.formatMessage(messages.EMPTY_CHANNELS)} />
          </Box>
        </Box>
      </Box>
    )
  }
}

export default injectIntl(Channels)
