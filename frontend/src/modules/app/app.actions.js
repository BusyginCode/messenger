import cookies from 'utils/cookies'
import { loadUser, getUserId } from 'modules/user'
import { setTokens, getAuthToken } from 'modules/auth'

export const fetchInitialData = ({ req, res } = {}) => async ({ dispatch, socket }) => {
  let { authToken = null } = req ? req.cookies : cookies.get()
  if (authToken) {
    if (res) {
      res.cookie('authToken', authToken, { maxAge: 604800000 })
    }
  }

  dispatch(setTokens({ authToken }))

  if (authToken) {
    const { id } = await dispatch(loadUser())
    socket.emit('user login', id)
  }
}

export const connectUserToSocket = () => async ({ dispatch, getState, socket }) => {
  if (getAuthToken(getState())) {
    socket.emit('user login', getUserId(getState()))
  }
}
