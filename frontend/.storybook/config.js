import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { IntlProvider } from 'react-intl'
import { configure, addDecorator, setAddon } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'
import centered from '@storybook/addon-centered'
import { withKnobs } from '@storybook/addon-knobs'
import StoryRouter from 'storybook-router'
import JSXAddon from 'storybook-addon-jsx'

import '../packages/theme/src/main.scss'

setAddon(JSXAddon)
addDecorator(centered)
addDecorator(withKnobs)
addDecorator(StoryRouter())
addDecorator(story => (
  <IntlProvider locale="en">
    <Fragment>
      <Helmet>
        <body />
      </Helmet>
      {story()}
    </Fragment>
  </IntlProvider>
))

withOptions({ name: 'System', sortStoriesByKind: true })

const uikit = require.context('../packages/uikit/src', true, /\.stories\.js$/)
const core = require.context('../packages/core/src', true, /\.stories\.js$/)
const staticPages = require.context('../src', true, /\.stories\.js$/)

function loadStoriesFrom(object) {
  object.keys().forEach(filename => object(filename))
}

function loadStories() {
  loadStoriesFrom(core)
  loadStoriesFrom(uikit)
  loadStoriesFrom(staticPages)
}

configure(loadStories, module)
