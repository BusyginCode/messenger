import PropTypes from 'prop-types'
import mapValues from 'lodash/mapValues'
import { IntlProvider, intlShape } from 'react-intl'
import createRouterContext from 'react-router-test-context'
import configureStore from '@messenger/core/lib/store/configure-store'

export const createContext = (options = {}) => {
  return {
    context: {
      ...createI18nContext(options.i18n),
      ...createStoreContext(options.store),
      ...createRouterContext(options.router)
    },
    childContextTypes: {
      store: PropTypes.object,
      intl: intlShape,
      router: PropTypes.object
    }
  }
}

export const createStoreContext = (options = {}) => {
  return {
    store: configureStore(
      options.reducers || mapValues(options.initialState, () => (state = null) => state),
      options.middlewares
    )({
      preloadedState: options.initialState,
      apiClient: {}
    })
  }
}

export const createI18nContext = (options = { locale: 'en' }) => {
  const intlProvider = new IntlProvider(options, {})
  return intlProvider.getChildContext()
}
