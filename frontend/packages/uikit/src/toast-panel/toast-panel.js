import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import Toast from '../toast'
import styles from './toast-panel.scss'

const ToastPanel = props => {
  const { className, toasts: toastModels, onToastClose } = props
  const toastPanelClasses = classNames(className, styles.toastPanel)

  if (typeof window === 'undefined') return null

  const toasts = toastModels.map(m => (
    <Toast
      className={styles.toast}
      key={m.id}
      id={m.id}
      icon={m.icon}
      content={m.content}
      intent={m.intent}
      onClose={onToastClose}
    />
  ))

  return (
    <div className={toastPanelClasses}>
      <CSSTransitionGroup
        transitionName={styles}
        transitionAppearTimeout={240}
        transitionAppear={true}
        transitionEnterTimeout={240}
        transitionLeaveTimeout={200}
      >
        {toasts}
      </CSSTransitionGroup>
    </div>
  )
}

ToastPanel.propTypes = {
  toasts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToastClose: PropTypes.func.isRequired
}

export default ToastPanel
