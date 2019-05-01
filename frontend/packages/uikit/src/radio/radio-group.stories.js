import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { withState } from 'recompose'
import RadioGroup from './radio-group'

const ControlledRadioGroup = withState('value', 'onChange', 'female')(({ value, onChange }) => (
  <RadioGroup
    disabled={boolean('Disabled', false)}
    inline={boolean('Inline', true)}
    name="gender"
    value={value}
    options={[{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }]}
    onChange={e => {
      action('change')(e)
      onChange(e.target.value)
    }}
  />
))

storiesOf('UIKit/m-radio_group', module).add('default', () => (
  <div style={{ width: 300 }}>
    <h3>L Size Checkbox</h3>
    <ControlledRadioGroup />
    <h3>M Size Checkbox</h3>
    <ControlledRadioGroup size="m" />
  </div>
))
