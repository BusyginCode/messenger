import React, { PureComponent } from 'react'
import { injectIntl, defineMessages, intlShape } from 'react-intl'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Box from 'components/uikit/box'
import Text from 'components/uikit/text'
import { Link } from 'react-router-dom'
import { Input, Empty, Dropdown, Avatar, Divider, Button } from 'antd'
import UsersDropdown from './users-dropdown'

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
    searchUsers: PropTypes.func,
    contacts: PropTypes.array,
    openChat: PropTypes.func,
    removeContact: PropTypes.func,
    closeChat: PropTypes.func,
    match: PropTypes.object,
    unreaded: PropTypes.object,
    onToggleSideDrawer: PropTypes.func,
    sideDrawerOpen: PropTypes.string,
    history: PropTypes.object,
    tabPosition: PropTypes.string
  }

  state = {
    users: [],
    search: ''
  }

  componentWillReceiveProps(prevProps) {
    if (prevProps.tabPosition !== this.props.tabPosition || prevProps.sideDrawerOpen !== this.props.sideDrawerOpen) {
      this.setState({ users: [], search: '' })
    }
  }

  onSearch = async value => {
    const { searchUsers } = this.props
    if (value) {
      const res = await searchUsers(value)
      if (res && res.users) {
        this.setState({ users: res.users })
      }
    }
  }

  onChange = e => {
    if (e.target.value === '') {
      this.setState({ users: [] })
    }
    this.setState({ search: e.target.value })
  }

  onOpenChat = user => () => {
    const { openChat, onToggleSideDrawer, history } = this.props
    openChat(user)
    this.setState({ users: [] })
    onToggleSideDrawer()
    history.push(`/${user.id}`)
  }

  onRemoveChat = id => async e => {
    const { removeContact, history, closeChat } = this.props
    e.stopPropagation()
    e.preventDefault()
    await removeContact(id)
    await closeChat()
    history.push('/')
  }

  render() {
    const { intl, contacts, match, unreaded } = this.props
    const { users, search } = this.state
    const currentChatId = match.params && match.params.id

    return (
      <Box direction="column" flexGrow={1}>
        <Box className={styles.siderSearch} padding="m">
          <Dropdown visible={!!users.length} overlay={<UsersDropdown openChat={this.onOpenChat} users={users} />}>
            <Search
              placeholder={intl.formatMessage(messages.SEARCH_PLACEHOLDER)}
              onSearch={this.onSearch}
              onChange={this.onChange}
              allowClear
              value={search}
              enterButton
            />
          </Dropdown>
        </Box>
        <Box className={cn(styles.siderChannelsList, styles.slide)} flexGrow={1} paddimg="0 m">
          {!!contacts.length && (
            <Box flexGrow={1} direction="column" justify="start">
              {contacts.map((c, index) => {
                return (
                  <Link key={c.nickname} to={`/${c.id}`}>
                    <Box direction="column">
                      <Box
                        padding="m"
                        align="center"
                        className={cn(styles.contact, { [styles.active]: currentChatId === c.id })}
                      >
                        <Avatar size="m" src={c.avatar} />
                        <Box flexGrow={1} left="m">
                          <Text size="m" overflow="ellipsis">
                            {c.nickname}
                          </Text>
                        </Box>
                        <Box left="m" right="m" className={cn({ [styles.unread]: unreaded[c.id] })} />
                        <Button
                          onClick={this.onRemoveChat(c.id)}
                          shape="circle"
                          icon="delete"
                          type="danger"
                          className={styles.removeChat}
                        />
                      </Box>
                      {index !== contacts.length - 1 && <Divider className={styles.divider} />}
                    </Box>
                  </Link>
                )
              })}
            </Box>
          )}
          {!contacts.length && (
            <Box flexGrow={1} align="center" justify="center">
              <Empty description={intl.formatMessage(messages.EMPTY_CHANNELS)} />
            </Box>
          )}
        </Box>
      </Box>
    )
  }
}

export default injectIntl(Channels)
