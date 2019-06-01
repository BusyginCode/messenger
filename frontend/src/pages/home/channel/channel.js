import React, { PureComponent } from 'react'
import { injectIntl, intlShape } from 'react-intl'
import PropTypes from 'prop-types'
import Media from 'react-media'
import { Empty, Button, Avatar } from 'antd'
import Box from 'components/uikit/box'
import Text from 'components/uikit/text'
import Message from './message'

import styles from './channel.scss'

class Channel extends PureComponent {
  static propTypes = {
    intl: intlShape,
    currentChat: PropTypes.object,
    messages: PropTypes.array,
    onToggleSideDrawer: PropTypes.func
  }

  render() {
    const { onToggleSideDrawer, currentChat, messages = [] } = this.props
    console.log('chnnel ', currentChat, messages)
    return (
      <Box className={styles.content} direction="column">
        <Box align="center" className={styles.contentHeader}>
          <Media query="(max-width: 1136px)">
            {matches =>
              matches ? (
                <Button className={styles.triggerSide} type="primary" icon="right" onClick={onToggleSideDrawer} />
              ) : null
            }
          </Media>
          {currentChat && (
            <Box align="center" padding="0 l">
              <Avatar size={84} src={currentChat.avatar} />
              <Box left="m">
                <Text size="xl">{currentChat.nickname}</Text>
              </Box>
            </Box>
          )}
        </Box>
        {!currentChat && (
          <Box className={styles.empty} align="center" justify="center">
            <Empty
              image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
              description={'No channel selected'}
            />
          </Box>
        )}
        {currentChat && (
          <Box direction="column">
            <Box>
              {messages.map(m => (
                <Message key={m.id} message={m} />
              ))}
            </Box>
            <Box>input</Box>
          </Box>
        )}
      </Box>
    )
  }
}

export default injectIntl(Channel)
