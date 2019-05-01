import React, { PureComponent } from 'react'
import wrapDisplayName from 'recompose/wrapDisplayName'

export default ({ ErrorComponent, onError } = {}) => BaseComponent => {
  return class extends PureComponent {
    static displayName = wrapDisplayName(BaseComponent, 'didCatch')

    state = {
      error: null,
      errorInfo: null
    }

    componentDidCatch(error, errorInfo) {
      this.setState({ error, errorInfo })
      console.warn(error, errorInfo)

      if (onError) {
        onError(error)
      }
    }

    render() {
      if (this.state.error) {
        if (ErrorComponent) {
          return <ErrorComponent error={this.state.error.toString()} />
        }

        return null
      }

      return <BaseComponent {...this.props} />
    }
  }
}
