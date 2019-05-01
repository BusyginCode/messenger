import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Radio from './radio'

storiesOf('UIKit/m-radio', module).addWithJSX('default', () => (
  <div>
    <Radio disabled={false} value={false} onChange={action('change')} />
    <br />
    <Radio disabled={true} value={false} onChange={action('change')} />
    <br />
    <Radio disabled={false} checked onChange={action('change')} />
    <br />
    <Radio disabled={true} checked onChange={action('change')} />
    <br />

    <Radio premium disabled={false} value={false} onChange={action('change')} />
    <br />
    <Radio premium disabled={true} value={false} onChange={action('change')} />
    <br />
    <Radio premium disabled={false} checked onChange={action('change')} />
    <br />
    <Radio premium disabled={true} checked onChange={action('change')} />
  </div>
))
