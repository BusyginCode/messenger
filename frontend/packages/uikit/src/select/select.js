import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ReactSelect, { Option, OptGroup } from 'rc-select'
import ScrollTo from './scroll-to'

import styles from './select.scss'

class Select extends PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
    disabled: PropTypes.bool,
    premium: PropTypes.bool,
    size: PropTypes.oneOf(['m', 'l']),
    intent: PropTypes.oneOf(['success', 'danger']),
    required: PropTypes.bool,
    placeholder: PropTypes.any,
    value: PropTypes.any,
    scrollTo: PropTypes.any,
    notFoundContent: PropTypes.string,
    maxContentMessage: PropTypes.string,
    dropdownClassName: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    maxCount: PropTypes.number,
    multiple: PropTypes.bool,
    blurOnSelect: PropTypes.bool,
    removeOption: PropTypes.bool,
    onBlur: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.object),
    showSearch: PropTypes.bool
  }

  static defaultProps = {
    prefixCls: 'dt-select',
    size: 'l',
    className: '',
    showSearch: false,
    onChange() {},
    onBlur() {},
    onSelect() {}
  }

  static Option = Option
  static OptGroup = OptGroup

  state = {
    disabled: false,
    maxTimeout: false
  }

  selectEl = React.createRef()

  onChange = value => {
    const { onChange, multiple, maxCount, name, removeOption } = this.props
    const { maxTimeout } = this.state
    const nextValue = removeOption && value === null ? undefined : value

    if (maxTimeout) {
      this.setState({ maxTimeout: false })
    }

    onChange({
      target: {
        value: multiple && maxCount ? nextValue.slice(0, maxCount) : nextValue,
        name
      }
    })
  }

  onBlur = value => {
    const { multiple } = this.props
    if (multiple) {
      this.setState({ disabled: true })
      setTimeout(() => this.setState({ disabled: false }), 200)
    }
    this.props.onBlur({ target: { value, name: this.props.name } })
  }

  onSelect = value => {
    const { onSelect, blurOnSelect } = this.props
    if (blurOnSelect) {
      this.selectEl.current.blur()
      this.onBlur(value)
    }
    onSelect(value)
  }

  getOptions = () => {
    const { scrollTo, removeOption, options } = this.props
    const { maxTimeout } = this.state

    if (this.getMaxContentMessage() && !maxTimeout) {
      setTimeout(() => this.setState({ maxTimeout: true }), 100)
    } else if (maxTimeout) {
      return []
    }

    if (options && options.length) {
      return (removeOption ? [{ value: null, children: 'Any' }, ...options] : options).map((option, index) => {
        return option.value === scrollTo ? (
          <Option key={option.value} {...option}>
            <ScrollTo>{option.children}</ScrollTo>
          </Option>
        ) : (
          <Option key={option.value} {...option} />
        )
      })
    }

    return null
  }

  getMaxContentMessage() {
    const { value, maxContentMessage, maxCount, multiple } = this.props

    if (multiple && maxContentMessage && value && value.length === maxCount) {
      return maxContentMessage
    }
    return undefined
  }

  getNotFoundMessage = () => {
    const { notFoundContent } = this.props

    return notFoundContent || 'No elements found. Consider changing the search query.'
  }

  render() {
    const { className, intent, children, disabled, notFoundContent, size, dropdownClassName, ...props } = this.props

    const dropdownCypressClsName =
      `dt-dropdown-${this.props.name}` ||
      `dt-dropdown-${size}-${intent}-${props.options ? props.options.length : 'item'}`
    const selectCypressClsName =
      `dt-select-${this.props.name}` || `dt-select-${size}-${intent}-${props.options ? props.options.length : 'item'}`
    const shouldShowSearch =
      props.showSearch || (props.options && props.options.length > 10) || (children && children.length > 10)
    const classes = classNames(selectCypressClsName, {
      [className]: !!className,
      [styles[`size-${size}`]]: !!size,
      [`size-${size}`]: !!size,
      [styles[intent]]: !!intent,
      premium: !!props.premium,
      'dt-select-search': !!shouldShowSearch,
      'dt-select-multiple': props.multiple
    })

    return (
      <ReactSelect
        className={classes}
        dropdownClassName={classNames(dropdownClassName, dropdownCypressClsName, {
          [`size-${size}`]: !!size,
          premium: !!props.premium
        })}
        dropdownMenuStyle={{ maxHeight: 256 }}
        optionFilterProp="children"
        {...props}
        showSearch={!!shouldShowSearch}
        onChange={this.onChange}
        onBlur={this.onBlur}
        onSelect={this.onSelect}
        ref={this.selectEl}
        notFoundContent={this.getMaxContentMessage() || this.getNotFoundMessage()}
        disabled={this.state.disabled || disabled}
      >
        {this.getOptions() || children}
      </ReactSelect>
    )
  }
}

export default Select
