import get from 'lodash/get'
import redirect from '../redirect'

export default (path = '/auth') => ({
  promise: ({ helpers, history, store: { getState } }) => {
    const searchQuery = get(helpers, 'req._parsedUrl.search')
    const redirectPath = searchQuery ? `${path}${searchQuery}` : path
    return redirect(redirectPath, helpers, history, false)
  }
})
