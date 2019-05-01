import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import TwitterIcon from '@messenger/icons/lib/icon/svgr/ms/tw'
import Toast from './toast'

storiesOf('RFC/UIKit/Toast', module)
  .add('with content as a text', () => (
    <Toast id={'any'} icon={<TwitterIcon />} content="Simple text" onClose={action('close clicked')} intent="success" />
  ))
  .add('with content as a component', () => (
    <Toast id={'any'} icon={<TwitterIcon />} content="Simple text" onClose={action('close clicked')} intent="success" />
  ))
  .add('with warning intent', () => (
    <Toast id={'any'} icon={<TwitterIcon />} content="Simple text" onClose={action('close clicked')} intent="warning" />
  ))
