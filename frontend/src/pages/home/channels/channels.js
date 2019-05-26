import React, { PureComponent } from 'react'
import { injectIntl, defineMessages, intlShape } from 'react-intl'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Box from 'components/uikit/box'
import { Input, Empty, Dropdown } from 'antd'
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
    sideDrawerOpen: PropTypes.string,
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

  render() {
    const { intl } = this.props
    const { users, search } = this.state
    return (
      <Box direction="column" flexGrow={1}>
        <Box className={styles.siderSearch} padding="m">
          <Dropdown visible={!!users.length} overlay={<UsersDropdown users={users} />}>
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
          <Box flexGrow={1} align="center" justify="center">
            <Empty description={intl.formatMessage(messages.EMPTY_CHANNELS)} />
          </Box>
        </Box>
      </Box>
    )
  }
}

export default injectIntl(Channels)
