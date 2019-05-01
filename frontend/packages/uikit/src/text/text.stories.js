import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, selectV2 } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import Link from '../link'
import Text from './text'
import readme from './README.md'

storiesOf('RFC/UIKit', module).add(
  'Text',
  withReadme(readme, () => (
    <div style={{ width: 500, backgroundColor: 'gray' }}>
      <Text
        intent={selectV2('intent', {}, 'info')}
        size={selectV2('size', {}, 'm')}
        align={selectV2('align', {}, 'center')}
        transform={selectV2('transform', {}, 'capitalize')}
      >
        {text('content', 'Text')}
      </Text>
      <Text
        intent={selectV2('intent', {}, 'info')}
        size={selectV2('size', {}, 'm')}
        align={selectV2('align', {}, 'center')}
        inject
      >
        <Link intent="primary">link</Link>
      </Text>
    </div>
  ))
)
