import React from 'react'
import { storiesOf } from '@storybook/react'
import Dropdown from './dropdown'

const options = [{ id: 1, component: 'a', href: '#', children: 'link' }, { id: 2, children: 'text' }]

storiesOf('RFC/UIKit/Dropdown', module).add('default', () => (
  <div style={{ width: 500 }}>
    <Dropdown options={options}>
      <button style={{ width: 200 }}>Open</button>
    </Dropdown>
  </div>
))
