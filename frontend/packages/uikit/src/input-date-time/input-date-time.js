import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import DateTime from 'react-datetime'
import cn from 'classnames'
import moment from 'moment'
import 'react-datetime/css/react-datetime.css'
import CaledarIcon from '@messenger/icons/lib/icon/svgr/m/calendar'
import Box from '../box'
import Input from '../input'
import styles from './input-date-time.scss'

class InputDateTime extends PureComponent {
  static propTypes = {
    value: PropTypes.any,
    name: PropTypes.string,
    intent: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    format: PropTypes.string,
    isValidDate: PropTypes.func,
    fnClassName: PropTypes.string,
    viewMode: PropTypes.string
  }

  static defaultProps = {
    format: 'MMMM Do YYYY',
    onBlur() {}
  }

  input = React.createRef()

  onChangeInput = () => {}

  renderInput = props => {
    const { value = '', placeholder, format, fnClassName, intent } = this.props

    const classes = cn(styles.input, fnClassName, {
      [styles[intent]]: !!intent
    })

    return (
      <Input
        {...props}
        ref={this.input}
        value={value && moment(value).format(format)}
        onChange={this.onChangeInput}
        placeholder={placeholder}
        className={classes}
      />
    )
  }

  onChange = value => {
    const { name, onChange } = this.props

    onChange({
      target: {
        name,
        value: moment(value)
          .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
          .toISOString()
      }
    })
  }

  onBlur = () => {
    const { onBlur, name, value } = this.props

    setTimeout(() => onBlur({ target: { name, value } }), 1)
  }

  onOpen = () => {
    this.input.current.input.current.focus()
  }

  render() {
    const { value, isValidDate, className, viewMode } = this.props

    return (
      <Box className={className}>
        <DateTime
          value={value && moment(value)}
          onChange={this.onChange}
          renderInput={this.renderInput}
          timeFormat={false}
          isValidDate={isValidDate}
          closeOnSelect
          viewMode={viewMode}
          className={styles.datepicker}
          onBlur={this.onBlur}
        />
        <CaledarIcon className={styles.icon} onClick={this.onOpen} />
      </Box>
    )
  }
}

export default InputDateTime
