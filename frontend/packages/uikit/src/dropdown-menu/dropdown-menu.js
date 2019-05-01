import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import MoreIcon from '@messenger/icons/lib/icon/svgr/m/more'
import Dropdown from '../dropdown'
import styles from './dropdown-menu.scss'

class DropdownMenu extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    overlayClassName: PropTypes.string,
    placement: PropTypes.string,
    options: PropTypes.array
  }

  static defaultProps = {
    overlayClassName: '',
    placement: 'bottomRight',
    children: (
      <div className={styles.moreIcon}>
        <MoreIcon />
      </div>
    )
  }

  state = {
    visible: false
  }

  handleVisibleChange = visible => {
    this.setState({ visible })
  }

  optionClick = onClick => () => {
    if (onClick) {
      onClick()
    }
    this.setState({ visible: false })
  }

  getOptions() {
    const { options } = this.props
    return options.map(({ component: Component, onClick, ...option }, index) => ({
      ...option,
      component: () => (
        <div onClick={this.optionClick(onClick)} className={cn(styles.option)}>
          <Component {...option} />
        </div>
      )
    }))
  }

  render() {
    const { overlayClassName, children, placement, ...props } = this.props
    const { visible } = this.state

    return (
      <Dropdown
        overlayClassName={cn(styles.overlay, overlayClassName, { [styles[placement]]: !!placement })}
        placement={placement}
        {...props}
        options={this.getOptions()}
        onVisibleChange={this.handleVisibleChange}
        visible={visible}
      >
        {children}
      </Dropdown>
    )
  }
}

export default DropdownMenu
