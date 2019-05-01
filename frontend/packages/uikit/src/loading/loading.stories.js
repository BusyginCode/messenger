import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Loading from './loading'

storiesOf('RFC/UIKit/Loading', module).add('default', () => <Loading onClick={action('clicked')} />)
