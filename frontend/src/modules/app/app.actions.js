import cookies from 'utils/cookies'
import { loadUser } from 'modules/user'
import { setTokens } from 'modules/auth'

export const fetchInitialData = ({ req, res } = {}) => async ({ dispatch }) => {
  let { authToken = null } = req ? req.cookies : cookies.get()
  if (authToken) {
    if (res) {
      res.cookie('authToken', authToken, { maxAge: 604800000 })
    }
  }

  dispatch(setTokens({ authToken }))

  await dispatch(loadUser())
}
