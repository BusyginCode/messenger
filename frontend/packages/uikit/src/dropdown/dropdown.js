import PropTypes from 'prop-types'
import RcDropdown from 'rc-dropdown'
import 'rc-dropdown/assets/index.css'
import React from 'react'
import Overlay from './overlay'

const Dropdown = props => {
  const { overlay, overlayClassName, options, overlayRef, ...rest } = props

  return (
    <RcDropdown
      {...rest}
      overlayClassName={!overlay ? undefined : overlayClassName}
      overlay={overlay || <Overlay overlayRef={overlayRef} overlayClassName={overlayClassName} options={options} />}
    />
  )
}

Dropdown.propTypes = {
  overlayRef: PropTypes.any,
  trigger: PropTypes.arrayOf(PropTypes.string),
  overlay: PropTypes.node,
  overlayClassName: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
}

Dropdown.defaultProps = {
  options: [],
  trigger: ['click']
}

export default Dropdown
