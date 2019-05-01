/* eslint-disable react/no-find-dom-node */
import React from 'react'
import PropTypes from 'prop-types'
import { createPortal, findDOMNode } from 'react-dom'

const Portal = React.memo(({ children, target }) => {
  let portalTarget = target
  switch (typeof target) {
    case 'function':
      portalTarget = target()
      break
    case 'string':
      portalTarget = document.getElementById(target)
      break
    case 'object':
      if (target.hasOwnProperty('current')) {
        portalTarget = findDOMNode(target.current)
      } else if (target instanceof HTMLElement) {
        portalTarget = target
      } else {
        console.error('Wrong object provided as target in Portal', target)
      }
      break
    default:
      portalTarget = document.body
  }
  return createPortal(children, portalTarget)
})

Portal.propTypes = {
  target: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
}

Portal.displayName = 'PortalItem'

export default Portal
