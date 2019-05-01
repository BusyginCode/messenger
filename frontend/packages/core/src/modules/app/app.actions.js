import cookies from '../../utils/cookies'
import { load as userLoad } from '../user'
import { setTokens } from '../auth'

export const fetchInitialData = ({ req, res } = {}) => async ({ dispatch }) => {
  let { authToken = null, refreshToken = null } = req ? req.cookies : cookies.get()

  if (req && req.query && req.query.token) {
    authToken = req.query.token

    if (res) {
      res.cookie('authToken', authToken, { maxAge: 604800000 })
    }
  }

  if (req && req.query && req.query.refresh_token) {
    refreshToken = req.query.refresh_token

    if (res) {
      res.cookie('refreshToken', refreshToken, { maxAge: 604800000 })
    }
  }

  dispatch(setTokens({ authToken, refreshToken }))

  await dispatch(userLoad())
}
