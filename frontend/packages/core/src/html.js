import React from 'react'
import PropTypes from 'prop-types'
import serialize from 'serialize-javascript'
import { Helmet } from 'react-helmet'

const Html = props => {
  const { preloadedState = {}, assets, content } = props

  const helmet = Helmet.renderStatic()

  const htmlAttrs = helmet.htmlAttributes.toComponent()
  const bodyAttrs = helmet.bodyAttributes.toComponent()

  return (
    <html {...htmlAttrs}>
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="referrer" content="origin" />
        <link rel="icon" href={`${process.env.PUBLIC_PATH}favicon.ico`} type="image/x-icon" />
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        {helmet.link.toComponent()}
        {assets.client.css && <link rel="stylesheet" href={assets.client.css} />}
      </head>
      <body {...bodyAttrs}>
        {helmet.script.toComponent()}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `window._APP__ = {
              preloadedState: ${serialize(preloadedState)}
            };`
          }}
        />
        <div
          id="root"
          dangerouslySetInnerHTML={{
            __html: content
          }}
        />
        <script
          type="text/javascript"
          src={`${process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : ''}${
            process.env.PUBLIC_PATH
          }vendor/vendor.dll.js`}
        />
        <script type="text/javascript" src={assets.client.js} />
      </body>
    </html>
  )
}

Html.propTypes = {
  preloadedState: PropTypes.object,
  content: PropTypes.node,
  assets: PropTypes.object
}

export default Html
