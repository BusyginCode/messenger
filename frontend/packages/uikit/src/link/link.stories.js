import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Link from './link'

storiesOf('RFC/UIKit/Link', module)
  .add('intent', () => (
    <div>
      <Link intent="primary" href="#" onClick={action('clicked')}>
        Primary
      </Link>
      {' | '}
      <Link intent="secondary" href="#" onClick={action('clicked')}>
        Secondary
      </Link>
    </div>
  ))
  .add('other', () => (
    <div>
      <Link underlined href="#" onClick={action('clicked')}>
        Underlined
      </Link>
    </div>
  ))
