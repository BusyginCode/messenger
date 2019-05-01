import React from 'react'
import { storiesOf } from '@storybook/react'
import DropdownMenu from './dropdown-menu'

const Component = () => <div>privet1</div>
const Component2 = () => <div>privet2</div>

storiesOf('UIKit/DropdownMenu', module)
  .add('default', () => (
    <div>
      <DropdownMenu
        placement="topLeft"
        options={[{ id: 1, component: Component }, { id: 2, component: Component2 }]}
        trigger={['click']}
      />
      <br />
      <br />
      <br />
      <DropdownMenu placement="topCenter" options={[{ id: 1, component: Component }]} trigger={['click']} />
      <br />
      <br />
      <br />
      <DropdownMenu placement="topRight" options={[{ id: 1, component: Component }]} trigger={['click']} />
      <br />
      <br />
      <br />
      <DropdownMenu placement="bottomLeft" options={[{ id: 1, component: Component }]} trigger={['click']}>
        <button>...</button>
      </DropdownMenu>
      <br />
      <br />
      <br />
      <DropdownMenu placement="bottomCenter" options={[{ id: 1, component: Component }]} trigger={['click']}>
        <button>...</button>
      </DropdownMenu>
      <br />
      <br />
      <br />
      <DropdownMenu placement="bottomRight" options={[{ id: 1, component: Component }]} trigger={['click']}>
        <button>...</button>
      </DropdownMenu>
      <br />
      <br />
      <br />
    </div>
  ))
  .add('default trigger icon', () => (
    <div>
      <DropdownMenu
        placement="topLeft"
        options={[{ id: 1, component: Component }, { id: 2, component: Component2 }]}
        trigger={['click']}
      />
    </div>
  ))
  .add('custom trigger icon', () => (
    <div>
      <DropdownMenu placement="bottomRight" options={[{ id: 1, component: Component }]} trigger={['click']}>
        <button>...</button>
      </DropdownMenu>
    </div>
  ))
