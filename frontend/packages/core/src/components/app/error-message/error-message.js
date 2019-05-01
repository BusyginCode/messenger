import React from 'react'
import PropTypes from 'prop-types'

const ErrorMessage = props => {
  const { error } = props
  return (
    <div>
      <h1>Something bad happened :(</h1>
      <div>{error.toString()}</div>
    </div>
  )
}

ErrorMessage.propTypes = {
  error: PropTypes.object
}

export default ErrorMessage
