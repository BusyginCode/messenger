import React, { Component } from 'react'

import compose from 'recompose/compose'
import getDisplayName from 'recompose/getDisplayName'
import setDisplayName from 'recompose/setDisplayName'

const withContextHOC = ContextType => {
  return OriginalComponent =>
    class WithContext extends Component {
      render() {
        return <ContextType.Consumer>{ctx => <OriginalComponent {...this.props} context={ctx} />}</ContextType.Consumer>
      }
    }
}

export const withContext = ContextType =>
  compose(
    withContextHOC(ContextType),
    Component => setDisplayName(`${getDisplayName(Component)}WithContext`)(Component)
  )
