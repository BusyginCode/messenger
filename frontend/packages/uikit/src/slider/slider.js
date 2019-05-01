import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactSlider, { Range } from 'rc-slider'
import cn from 'classnames'
import SliderScale from './scale'
import DreamLevel from './dream-level'

import styles from './slider.scss'
import handleSearch from './img/slider-handle.svg'

const theme = {
  track: {
    position: 'absolute',
    backgroundColor: '#00ccff',
    height: 8,
    top: 8
  },
  handle: {
    position: 'absolute',
    cursor: 'pointer',
    background: `url(${handleSearch}) center center / cover no-repeat`,
    width: 24,
    height: 24,
    marginLeft: -20,
    border: 'none',
    borderRadius: '6px 18px 26px 10px',
    transition: 'left 0.05s ease'
  },
  rail: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#dbe5ee',
    height: 8,
    top: 8,
    borderRadius: 8
  }
}

class Slider extends Component {
  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
    name: PropTypes.string,
    range: PropTypes.bool,
    handle: PropTypes.func,
    onChange: PropTypes.func,
    onAfterChange: PropTypes.func,
    onScaleItemEnter: PropTypes.func,
    onScaleItemOut: PropTypes.func,
    fnClassName: PropTypes.string,
    dream: PropTypes.bool,
    dreamSize: PropTypes.string,
    theme: PropTypes.string,
    activeRange: PropTypes.array
  }

  static defaultProps = {
    min: 1,
    max: 10,
    range: false,
    dreamSize: 's',
    onChange: () => {},
    onAfterChange: () => {}
  }

  constructor(props) {
    super(props)

    this.state = {
      value: !props.value && props.range ? [props.min, props.max] : props.value
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value })
  }

  handleSliderChange = value => {
    const { min, max, onChange, name, range } = this.props

    let newValue = value
    if (range) {
      const [minVal, maxVal] = value
      newValue = [minVal, Math.min(max, Math.max(min, maxVal))]
    }

    this.setState(() => ({ value: newValue }), () => onChange({ target: { value: newValue, name } }))
  }

  handleItemMouseEnter = hoveredScaleItem => this.setState(() => ({ hoveredScaleItem }))

  handleScaleItemClick = itemNumber => {
    const { range, onChange, name } = this.props
    let newValue = itemNumber

    if (range) {
      const {
        value: [minVal, maxVal]
      } = this.state

      if (Math.abs(itemNumber - minVal) < Math.abs(itemNumber - maxVal)) {
        newValue = [itemNumber, maxVal]
      } else {
        newValue = [minVal, itemNumber]
      }
    }
    this.setState(() => ({ value: newValue }), () => onChange({ target: { value: newValue, name } }))
  }

  render() {
    const {
      min,
      max,
      range,
      handle,
      onScaleItemEnter,
      onScaleItemOut,
      fnClassName,
      dream,
      dreamSize,
      activeRange,
      theme: sliderTheme
    } = this.props
    const { value } = this.state

    const currentValue = range ? value || [min, max] : [min, value]

    const SliderComponent = range ? Range : ReactSlider

    const classes = cn(styles.sliderWrapper, {
      [`${styles.sliderWrapperRange}`]: range
    })

    return (
      <div className={classes}>
        {dream && <DreamLevel min={min} max={max} value={currentValue} range={range} size={dreamSize} />}
        <div className={styles.container}>
          <div
            className={cn(styles.prefix, {
              [styles.rangePrefix]: range
            })}
          />
          <SliderComponent
            className={cn(styles.slider, { [styles.single]: !range })}
            min={min}
            max={max}
            value={value}
            railStyle={{ ...theme.rail, width: dream ? '90%' : '100%' }}
            trackStyle={[theme.track]}
            handleStyle={range ? [theme.handle, theme.handle] : [theme.handle]}
            handle={handle}
            onChange={this.handleSliderChange}
            onAfterChange={this.props.onAfterChange}
          />
          <SliderScale
            fnClassName={fnClassName}
            theme={sliderTheme}
            min={min}
            max={max}
            range={currentValue}
            activeRange={activeRange}
            onItemClick={this.handleScaleItemClick}
            onItemMouseEnter={onScaleItemEnter}
            onItemMouseOut={onScaleItemOut}
          />
        </div>
      </div>
    )
  }
}

export default Slider
