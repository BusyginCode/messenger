import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { withState } from 'recompose'
import CheckboxGroup from './checkbox-group'

const ControlledCheckboxGroup = withState('value', 'onChange', [])(({ value, size, checkboxSize, onChange }) => (
  <CheckboxGroup
    name="gender"
    size={size}
    checkboxSize={checkboxSize}
    disabled={boolean('Disabled', false)}
    inline={boolean('Inline', true)}
    value={value}
    options={[
      { value: 'captain', label: 'Captain' },
      { value: 'strategist', label: 'Strategist' },
      { value: 'other', label: 'Other' }
    ]}
    onChange={e => {
      action('Change')(e)
      onChange(e.target.value)
    }}
  />
))

storiesOf('UIKit/m-check_group', module).add('default', () => (
  <div style={{ width: 300 }}>
    <h3>L Size Text Checkbox:</h3>
    <ControlledCheckboxGroup />
    <br />
    <h3>M Size Text Checkbox:</h3>
    <ControlledCheckboxGroup size="m" />
    <br />
    <h3>L Size Checkbox:</h3>
    <ControlledCheckboxGroup checkboxSize="l" />
  </div>
))
