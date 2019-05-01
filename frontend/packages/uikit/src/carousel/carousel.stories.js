import React from 'react'
import { storiesOf } from '@storybook/react'
import Carousel from './carousel'

const settings = {
  initialSlide: 0
}

const items = ['pubg', 'fort', 'lol', 'csgo', 'dota', 'over'].map(name => (
  <div key={name} style={{ width: 300, height: 300 }} />
))

storiesOf('RFC/UIKit/Carousel', module).add('default', () => (
  <div>
    <Carousel items={items} settings={settings} />
  </div>
))
