import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select, text } from '@storybook/addon-knobs'
import PlusIcon from '@messenger/icons/lib/icon/svgr/m/plus'
import Text from '@messenger/uikit/lib/text'
import Button, { intents, sizes, actionTypes } from './button'

const styles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 500
}

const stories = storiesOf('RFC/UIKit/Button', module)
stories.addDecorator(withKnobs)

stories.addWithJSX(
  'default',
  () => {
    const icon = select('iconPosition', {
      None: null,
      iconLeft: 'left',
      iconTop: 'top',
      iconRight: 'right'
    })

    const options = {
      intent: select('intent', intents, intents[0]),
      size: select('size', sizes, sizes[0]),
      actionType: select('actionType', actionTypes, actionTypes[0])
    }

    if (icon) {
      options[icon] = <PlusIcon />
    }
    const label = text('label', 'button')

    return (
      <div style={styles}>
        <Button {...options}>{label}</Button>
      </div>
    )
  },
  { skip: 1 }
)

stories.addWithJSX(
  'premium',
  () => {
    return (
      <div style={styles}>
        <Button size="l" actionType="premium">
          <Text size="l" transform="uppercase">
            Get Premium
          </Text>
        </Button>
        <br />
        <br />
        <br />
        <Button disabled size="l" actionType="premium">
          <Text size="l" transform="uppercase">
            Get Premium
          </Text>
        </Button>
      </div>
    )
  },
  { skip: 1 }
)
