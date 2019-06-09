import React, { PureComponent } from 'react'
import { injectIntl, intlShape } from 'react-intl'
import PropTypes from 'prop-types'
import Media from 'react-media'
import { Empty, Button, Avatar, Input } from 'antd'
import Box from 'components/uikit/box'
import Text from 'components/uikit/text'
import Message from './message'

import styles from './channel.scss'

const { TextArea } = Input

class Channel extends PureComponent {
  static propTypes = {
    intl: intlShape,
    currentChat: PropTypes.object,
    messages: PropTypes.array,
    haveContact: PropTypes.bool,
    sendMessage: PropTypes.func,
    readMessages: PropTypes.func,
    isUnread: PropTypes.bool,
    addContact: PropTypes.func,
    location: PropTypes.object,
    onToggleSideDrawer: PropTypes.func
  }

  messengerRef = React.createRef()

  state = {
    newMessage: ''
  }

  componentDidMount() {
    if (this.messengerRef && this.messengerRef.current) {
      this.messengerRef.current.scrollTop = this.messengerRef.current.scrollHeight
    }
  }

  componentDidUpdate(prevProps) {
    const { readMessages, currentChat } = this.props
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.messengerRef.current.scrollTop = this.messengerRef.current.scrollHeight
      readMessages(currentChat.id)
    }
    if (prevProps.messages.length < this.props.messages.length) {
      readMessages(currentChat.id)
    }
  }

  onChangeMessage = e => {
    this.setState({ newMessage: e.target.value })
  }

  onSubmitMessage = () => {
    const { sendMessage, currentChat, haveContact, addContact } = this.props
    sendMessage(this.state.newMessage, currentChat.id)
    if (!haveContact) {
      addContact(currentChat.id)
    }
    this.setState({ newMessage: '' })
  }

  render() {
    const { onToggleSideDrawer, currentChat, messages = [] } = this.props
    const { newMessage } = this.state

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
            <Box align="center" className={styles.contentHeaderInfo}>
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
          <Box direction="column" flexGrow={1}>
            <div ref={this.messengerRef} className={styles.messagesContainer}>
              <Box direction="column" flexGrow={1} padding="0 m">
                {messages.map(m => (
                  <Message key={m.id} message={m} />
                ))}
              </Box>
            </div>
            <Box align="start">
              <TextArea
                value={newMessage}
                onChange={this.onChangeMessage}
                placeholder="Write a Message"
                autosize={{ minRows: 2, maxRows: 6 }}
              />
              <Box left="s" right="m">
                <Button type="primary" icon="download" size="large" onClick={this.onSubmitMessage}>
                  Send
                </Button>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    )
  }
}

export default injectIntl(Channel)
