import React from 'react'
import { storiesOf } from '@storybook/react'
import Notification from './notification'

storiesOf('RFC/UIKit/Notification', module).add('default', () => (
  <div style={{ width: 500 }}>
    <Notification title="Hello" canClose onClose={() => {}} />
  </div>
))
