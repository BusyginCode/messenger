import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import compose from 'recompose/compose'
import { withRouter } from 'react-router'
import { getUserAvatar, getUserNickname } from 'modules/user'
import { logOut } from 'modules/auth'
import Profile from './profile'

const mapStateToProps = state => ({
  userAvatar: getUserAvatar(state),
  userNickname: getUserNickname(state)
})

const mapDispatchToProps = {
  logOut
}

const enhance = compose(
  injectIntl,
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export default enhance(Profile)
