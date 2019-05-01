import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './loading.scss'

const Loading = ({ className }) => {
  return (
    <div className={classNames(className, styles.loading)}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}

Loading.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light'])
}

export default Loading
