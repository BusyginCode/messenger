import React from 'react'
import { storiesOf } from '@storybook/react'
import InputDateTime from './input-date-time'

storiesOf('RFC/UIKit/InputDateTime', module).add('default', () => (
  <div>
    <InputDateTime value={new Date()} onChange={e => console.log(e)} />
  </div>
))
