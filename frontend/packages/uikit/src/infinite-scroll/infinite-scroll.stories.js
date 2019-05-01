import React from 'react'
import { storiesOf } from '@storybook/react'
import InfiniteScroll from './infinite-scroll'

const onLoad = () => {
  console.log('onLoad')
  return new Promise((resolve, reject) => setTimeout(() => resolve(), 2000))
}

storiesOf('UIKit/InfiniteScroll', module).add('default', () => (
  <div>
    <InfiniteScroll style={{ maxHeight: 200 }} onLoad={onLoad}>
      <div style={{ width: 40, height: 40, background: 'red' }}>1</div>
      <div style={{ width: 40, height: 40, background: 'red' }}>2</div>
      <div style={{ width: 40, height: 40, background: 'red' }}>3</div>
      <div style={{ width: 40, height: 40, background: 'red' }}>4</div>
      <div style={{ width: 40, height: 40, background: 'red' }}>5</div>
      <div style={{ width: 40, height: 40, background: 'red' }}>6</div>
      <div style={{ width: 40, height: 40, background: 'red' }}>7</div>
      <div style={{ width: 40, height: 40, background: 'red' }}>8</div>
      <div style={{ width: 40, height: 40, background: 'red' }}>9</div>
      <div style={{ width: 40, height: 40, background: 'red' }}>10</div>
    </InfiniteScroll>
  </div>
))
