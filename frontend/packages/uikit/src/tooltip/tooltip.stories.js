import React from 'react'
import { storiesOf } from '@storybook/react'
import Tooltip from './tooltip'

storiesOf('RFC/UIKit/Tooltip', module)
  .add('default', () => (
    <div>
      <h3>
        <Tooltip placement="left" overlay={<span>tooltip</span>}>
          <a href="#">Hover trigger</a>
        </Tooltip>
      </h3>
      <h3>
        <Tooltip placement="left" trigger={['click']} overlay={<span>tooltip</span>}>
          <a href="#">Click trigger</a>
        </Tooltip>
      </h3>
    </div>
  ))
  .add('placement', () => (
    <div>
      <h3>
        <Tooltip placement="left" overlay={<span>tooltip</span>}>
          <a href="#">Left</a>
        </Tooltip>
      </h3>
      <h3>
        <Tooltip placement="top" overlay={<span>tooltip</span>}>
          <a href="#">Top</a>
        </Tooltip>
      </h3>
      <h3>
        <Tooltip placement="right" overlay={<span>tooltip</span>}>
          <a href="#">Right</a>
        </Tooltip>
      </h3>
      <h3>
        <Tooltip placement="bottom" overlay={<span>tooltip</span>}>
          <a href="#">Bottom</a>
        </Tooltip>
      </h3>
    </div>
  ))
