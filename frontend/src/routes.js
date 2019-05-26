import App from 'components/app'
import Home from 'pages/home'
import Auth from 'pages/auth'
import NotFound from 'pages/notfound'

import AuthRedirect from 'redirects/auth-redirect'
import LoginRedirect from 'redirects/login-redirect'
import composeRedirects from 'redirects/compose-redirects'

export default [
  {
    component: App,
    routes: [
      {
        path: '/auth',
        component: composeRedirects([LoginRedirect()]),
        routes: [{ component: Auth }]
      },
      {
        path: '/',
        exact: true,
        component: composeRedirects([AuthRedirect()]),
        routes: [{ component: Home }]
      },
      {
        component: NotFound
      }
    ]
  }
]
