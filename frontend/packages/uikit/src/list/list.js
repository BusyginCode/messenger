import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ListItem from '../list-item'
import Box from '../box'

// import styles from './list.scss'

class List extends PureComponent {
  static propTypes = {
    icon: PropTypes.node,
    marginBottom: PropTypes.oneOf(['s', 'm', 'l']),
    iconMargin: PropTypes.oneOf(['s', 'm', 'l']),
    className: PropTypes.string,
    children: PropTypes.node,
    items: PropTypes.array
  }

  renderItems() {
    const { items, icon, marginBottom, iconMargin } = this.props

    return items.map(({ className, value, icon: customIcon }, index) => (
      <ListItem
        key={index}
        icon={icon || customIcon}
        marginBottom={marginBottom}
        iconMargin={iconMargin}
        className={className}
      >
        {value}
      </ListItem>
    ))
  }

  render() {
    const { children, className } = this.props

    return (
      <Box className={className} direction="column">
        {children || this.renderItems()}
      </Box>
    )
  }
}

export default List
