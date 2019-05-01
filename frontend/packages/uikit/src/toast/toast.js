import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ButtonClose from '@messenger/icons/lib/icon/svgr/m/close'

import styles from './toast.scss'

class Toast extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    icon: PropTypes.element,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
      .isRequired,
    intent: PropTypes.oneOf(['success', 'warning', 'danger', 'hot']).isRequired,
    onClose: PropTypes.func.isRequired
  }

  // getContent(content) {
  //   if (typeof content !== 'string') {
  //     return content
  //   }
  //
  //   return <div className={styles.textContent}>{content}</div>
  // }

  onClose = () => {
    const { id, onClose } = this.props
    onClose(id)
  }

  render() {
    const { className, content, icon, intent } = this.props
    const toastClasses = classNames(className, styles.toast, styles[intent])

    return (
      <div className={toastClasses} data-role={`toast-${intent}`}>
        {icon && <div className={classNames('fn-iconContainer', styles.iconContainer)}>{icon}</div>}
        <div className={styles.content}>{content}</div>
        <ButtonClose className={styles.close} onClick={this.onClose} />
      </div>
    )
  }
}

export default Toast
