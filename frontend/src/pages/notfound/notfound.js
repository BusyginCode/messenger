import React, { PureComponent } from 'react'
import { injectIntl, defineMessages, intlShape } from 'react-intl'
import Box from 'components/uikit/box'
import Text from 'components/uikit/text'
import { Icon } from 'antd'

import styles from './notfound.scss'

const messages = defineMessages({
  TITLE: {
    id: 'NOT_FOUND.TITLE',
    defaultMessage: '404 Sorry'
  }
})

class NotFound extends PureComponent {
  static propTypes = {
    intl: intlShape
  }

  render() {
    const { intl } = this.props
    return (
      <Box className={styles.notFound} align="center" justify="center">
        <Box align="center">
          <Icon style={{ fontSize: '48px', color: '#08c' }} type="compass" />
          <Box left="m">
            <Text type="warning" size="xxxxl">
              {intl.formatMessage(messages.TITLE)}
            </Text>
          </Box>
        </Box>
      </Box>
    )
  }
}

export default injectIntl(NotFound)
