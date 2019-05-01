import React from 'react'
import { storiesOf } from '@storybook/react'
import Slider from './slider'

storiesOf('RFC/UIKit/Slider', module).add('Range', () => (
  <div style={{ width: 400 }}>
    <Slider value={[3, 8]} range />
    <br />
    <Slider value={8} />
    <br />
    <Slider value={8} min={1} max={10} dream />
    <br />
    <div style={{ background: 'black' }}>
      <Slider value={8} min={1} max={10} dream theme="dark" />
      <br />
      <Slider value={[1, 8]} min={1} max={10} dream range theme="dark" />
    </div>
    <br />
    <br />
    <Slider value={8} min={1} max={10} activeRange={[3, 5]} />
  </div>
))
