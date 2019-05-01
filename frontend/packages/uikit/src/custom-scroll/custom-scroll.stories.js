import React from 'react'
import { storiesOf } from '@storybook/react'
import CustomScroll from './custom-scroll'

storiesOf('RFC/UIKit/CustomScroll', module).add('default', () => (
  <div style={{ width: 300, height: 200, display: 'flex', border: '1px solid black' }}>
    <CustomScroll style={{ flexGrow: 1 }}>
      {new Array(25).fill({}).map((_, index) => (
        <div key={index}>123</div>
      ))}
    </CustomScroll>
  </div>
))
