import LoginRedirect from '@messenger/core/lib/redirects/login-redirect'
import composeRedirects from '@messenger/core/lib/redirects/compose-redirects'
import Login from './components/login'

export default () => [
  {
    path: '/login',
    exact: true,
    component: composeRedirects([LoginRedirect()]),
    routes: [{ component: Login }]
  }
]
