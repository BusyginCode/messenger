import React from 'react'
import { storiesOf } from '@storybook/react'
import Modal from './modal'
import Button from '../button'

storiesOf('RFC/UIKit/Modal', module)
  .add('custom', () => (
    <Modal isOpened>
      <div style={{ backgroundColor: 'red', width: 300, height: 300 }}>Red box</div>
    </Modal>
  ))
  .add('with header controls', () => (
    <Modal
      isOpened
      leftHeaderControl={<Button>Whatever</Button>}
      rightHeaderControl={<Button>Whatever</Button>}
      header={'Something'}
    >
      <div style={{ width: 400, height: 500 }}>Something</div>
    </Modal>
  ))
