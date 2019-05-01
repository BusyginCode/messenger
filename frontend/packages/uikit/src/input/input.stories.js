import React from 'react'
import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
import PlusIcon from '@messenger/icons/lib/icon/svgr/m/plus'
import Input from './input'
import readme from './README.md'

const defaultProps = {
  type: 'text',
  intent: 'default',
  placeholder: 'Placeholder'
}

const iconProps = {
  iconPosition: 'left',
  icon: PlusIcon
}

const baseClass = 'm-inpt'

storiesOf(`UIKit/${baseClass} (Input)`, module)
  .addWithJSX(
    'default',
    withReadme(readme, () => (
      <div>
        <p>
          {baseClass}/<b>L</b>
        </p>
        <Input {...defaultProps} size="l" />
        <br />
        <p>
          {baseClass}/<b>M</b>
        </p>
        <br />
        <Input {...defaultProps} size="m" />
        <br />
        <p>
          {baseClass}/<b>L</b>/icon_left/icon_right
        </p>
        <br />
        <Input {...defaultProps} {...iconProps} clearable />
        <br />
        <p>
          {baseClass}/<b>L</b>/premium
        </p>
        <br />
        <Input {...defaultProps} premium />
        <br />
        <p>
          {baseClass}/<b>L</b>: <i>Text Stay ( inpt_text_stay )</i>
        </p>
        <Input {...defaultProps} placeholder="Success" prependValue={'steam://'} intent="success" />
        <br />
        <p>
          {baseClass}/<b>L</b>: <i>Intents</i>
        </p>
        <br />
        <Input {...defaultProps} placeholder="Success" intent="success" />
        <Input {...defaultProps} placeholder="Warning" intent="warning" />
        <Input {...defaultProps} placeholder="Danger" intent="danger" />
      </div>
    ))
  )
  .addWithJSX(`Size L ${baseClass}/L`, () => (
    <div>
      <Input {...defaultProps} size="l" />
    </div>
  ))
  .addWithJSX(`Size M ${baseClass}/M`, () => (
    <div>
      <Input {...defaultProps} size="m" />
    </div>
  ))
  .addWithJSX(
    'with premium',
    withReadme(readme, () => (
      <div>
        <Input {...defaultProps} placeholder="Default" premium />
        <Input {...defaultProps} placeholder="Success" intent="success" premium />
        <Input {...defaultProps} placeholder="Warning" intent="warning" premium />
        <Input {...defaultProps} placeholder="Danger" intent="danger" premium />
      </div>
    ))
  )
  .addWithJSX(
    'with icon',
    withReadme(readme, () => (
      <div>
        <Input {...defaultProps} {...iconProps} iconPosition={'left'} />
        <Input {...defaultProps} {...iconProps} iconPosition={'right'} />
        <Input {...defaultProps} {...iconProps} placeholder="Clearable" clearable />
      </div>
    ))
  )
  .addWithJSX(
    'stay text (inpt_text_stay)',
    withReadme(readme, () => (
      <div>
        <Input {...defaultProps} {...iconProps} prependValue={'steam://'} iconPosition={'left'} />
        <Input {...defaultProps} {...iconProps} prependValue={'steam://'} iconPosition={'right'} />
        <Input {...defaultProps} {...iconProps} prependValue={'steam://'} placeholder="Clearable" clearable />
      </div>
    ))
  )
