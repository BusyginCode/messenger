import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Box from 'components/uikit/box'
import Text from 'components/uikit/text'
import { Avatar, Divider } from 'antd'

import styles from './users-dropdown.scss'

const UsersPropdown = ({ users, openChat }) => {
  return (
    <Box className={styles.general} direction="column">
      {users.map((user, index) => (
        <Fragment key={user.id}>
          <Box onClick={openChat(user)} align="center" padding="s" className={styles.item}>
            <Avatar size="m" src={user.avatar} />
            <Box left="m">
              <Text size="m">{user.nickname}</Text>
            </Box>
          </Box>
          {index !== users.length - 1 && <Divider className={styles.divider} />}
        </Fragment>
      ))}
    </Box>
  )
}

UsersPropdown.propTypes = {
  users: PropTypes.array,
  openChat: PropTypes.func
}

export default UsersPropdown
