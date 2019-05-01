import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'
import cn from 'classnames'
import snakeCase from 'lodash/snakeCase'
import CloseIcon from '@messenger/icons/lib/icon/svgr/m/close'
import Box from '../box'
import Text from '../text'
import styles from './modal.scss'

class Modal extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    name: PropTypes.string,
    className: PropTypes.string,
    classNameOverlay: PropTypes.string,
    classNameContent: PropTypes.string,
    isOpened: PropTypes.bool,
    close: PropTypes.func,
    overflowContent: PropTypes.node,
    isCustom: PropTypes.bool,
    isCustomHeader: PropTypes.bool,
    isCanClose: PropTypes.bool,
    shouldCloseOnOverlayClick: PropTypes.bool,
    shouldCloseOnEsc: PropTypes.bool
  }

  static defaultProps = {
    isCanClose: true,
    shouldCloseOnOverlayClick: true,
    shouldCloseOnEsc: true
  }

  state = {
    overlayRef: null
  }

  overlayRef = ref => this.setState({ overlayRef: ref })

  getOverlayRef = () => this.state.overlayRef

  renderHeader = (header, isCustom) => {
    if (isCustom) {
      return header
    }

    return (
      <Box justify="around" align="center" inject className={styles.header}>
        <Text size="xl" transform="capitalize" semibold>
          {header}
        </Text>
      </Box>
    )
  }

  render() {
    const {
      children,
      header,
      name,
      overflowContent,
      isOpened,
      close,
      isCustom,
      isCustomHeader,
      isCanClose,
      className,
      classNameOverlay,
      classNameContent,

      shouldCloseOnOverlayClick,
      shouldCloseOnEsc
    } = this.props

    if (isOpened) {
      if (isCustom) {
        return (
          <ReactModal
            className={cn('custom', className)}
            isOpen
            overlayClassName={classNameOverlay}
            onRequestClose={close}
            ariaHideApp={false}
            contentLabel=""
          >
            {children}
          </ReactModal>
        )
      }

      return (
        <ReactModal
          className={cn(styles.general, className)}
          isOpen
          overlayClassName={cn(classNameOverlay, styles.overlay)}
          onRequestClose={close}
          ariaHideApp={false}
          overlayRef={this.overlayRef}
          contentLabel=""
          shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
          shouldCloseOnEsc={shouldCloseOnEsc}
        >
          <div data-role={`modal-${snakeCase(name)}`} className={styles.modal}>
            {header &&
              (isCustomHeader ? (
                header
              ) : (
                <Box justify="around" align="center" inject className={styles.header}>
                  <Text data-role={`modal-${snakeCase(name)}-header`} size="xl" transform="capitalize" semibold>
                    {header}
                  </Text>
                </Box>
              ))}
            <div data-role={`modal-content-${snakeCase(name)}`} className={cn(styles.content, classNameContent)}>
              {React.cloneElement(children, {
                renderHeader: this.renderHeader,
                getOverlayRef: this.getOverlayRef
              })}
            </div>
          </div>
          {isCanClose && <CloseIcon data-role="modal-close-icon" className={styles.close} onClick={close} />}
          {overflowContent}
        </ReactModal>
      )
    }

    return null
  }
}

export default Modal
