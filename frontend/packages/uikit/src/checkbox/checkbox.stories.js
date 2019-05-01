import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import Checkbox from './checkbox'

storiesOf('UIKit/m-check', module)
  .add('default', () => (
    <div>
      <Checkbox disabled={false} value={true} onChange={action('change')} />
      <Checkbox disabled={false} value={false} onChange={action('change')} />
      <Checkbox disabled={true} value={false} onChange={action('change')} />
      <Checkbox disabled={true} value={true} onChange={action('change')} />
      <Checkbox disabled={false} value={true} size="l" onChange={action('change')} />
      <Checkbox disabled={false} value={false} size="l" onChange={action('change')} />
      <Checkbox disabled={true} value={true} size="l" onChange={action('change')} />
      <Checkbox disabled={true} value={false} size="l" onChange={action('change')} />

      <Checkbox premium disabled={false} value={true} onChange={action('change')} />
      <Checkbox premium disabled={false} value={false} onChange={action('change')} />
      <Checkbox premium disabled={true} value={false} onChange={action('change')} />
      <Checkbox premium disabled={true} value={true} onChange={action('change')} />

      <Checkbox rounded disabled={false} value={true} onChange={action('change')} />
      <Checkbox rounded disabled={false} value={false} onChange={action('change')} />
      <Checkbox rounded disabled={true} value={false} onChange={action('change')} />
      <Checkbox rounded disabled={true} value={true} onChange={action('change')} />

      <Checkbox rounded disabled={false} value={true} size="l" onChange={action('change')} />
      <Checkbox rounded disabled={false} value={false} size="l" onChange={action('change')} />
      <Checkbox rounded disabled={true} value={false} size="l" onChange={action('change')} />
      <Checkbox rounded disabled={true} value={true} size="l" onChange={action('change')} />
    </div>
  ))
  .add('premium', () => (
    <div>
      <Checkbox premium disabled={boolean('Disabled')} value={boolean('Checked')} onChange={action('change')} />
      <br />
      <Checkbox
        premium
        transparent
        disabled={boolean('Disabled')}
        value={boolean('Checked')}
        onChange={action('change')}
      />
    </div>
  ))
  .add('rounded', () => (
    <div>
      <Checkbox rounded disabled={boolean('Disabled')} onChange={action('change')} />
    </div>
  ))
  .add('radio', () => (
    <div>
      <Checkbox radio size="l" value={true} onChange={action('change')} />
      <Checkbox radio size="l" value={false} onChange={action('change')} />
      <Checkbox radio size="l" transparent value={true} onChange={action('change')} />
      <Checkbox radio size="l" transparent value={false} onChange={action('change')} />
      <Checkbox radio value={true} onChange={action('change')} />
      <Checkbox radio value={false} onChange={action('change')} />
    </div>
  ))
