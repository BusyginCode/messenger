import App from '@messenger/core/lib/components/app'
import Auth from '@messenger/auth/lib/core/routes'
import NotFound from '@messenger/core/lib/components/notfound'

export default [
  {
    component: App,
    routes: [
      ...Auth(),
      {
        component: NotFound
      }
    ]
  }
]
