import React, { PureComponent } from 'react'
import { defineMessages, intlShape, injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import Box from '@messenger/uikit/lib/box'
import Text from '@messenger/uikit/lib/text'
import Button from '@messenger/uikit/lib/button'
import Link from '@messenger/uikit/lib/link'

import styles from './notfound.scss'

const messages = defineMessages({
  ERROR_TITLE: {
    id: 'CORE.NOT_FOUND.ERROR_TITLE',
    defaultMessage: '404 error'
  },
  ERROR_DESCRIPTITON: {
    id: 'CORE.NOT_FOUND.ERROR_DESCRIPTION',
    defaultMessage: "We can't seem to find the page you're looking for"
  },
  GO_TO_HOME: {
    id: 'CORE.NOT_FOUND.GO_TO_HOME',
    defaultMessage: 'GO TO HOMEPAGE'
  }
})

class NotFound extends PureComponent {
  static propTypes = {
    staticContext: PropTypes.object,
    activeGame: PropTypes.string,
    intl: intlShape
  }

  constructor(props) {
    super(props)

    if (props.staticContext) {
      props.staticContext.is404 = true
    }
  }

  render() {
    const { intl } = this.props

    return (
      <Box className={styles.notFound} align="center" justify="center">
        <Box className={styles.notFoundImage} />
        <Box left="l" direction="column" justify="center">
          <Text>{intl.formatMessage(messages.ERROR_TITLE)}</Text>
          <Box className={styles.description} top="m" bottom="l" inject>
            <Text>{intl.formatMessage(messages.ERROR_DESCRIPTITON)}</Text>
          </Box>
          <Button size="l" to="/" component={Link}>
            {intl.formatMessage(messages.GO_TO_HOME)}
          </Button>
        </Box>
      </Box>
    )
  }
}

export default injectIntl(NotFound)
