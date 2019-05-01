const autoprefixer = require('autoprefixer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const nodeExternals = require('webpack-node-externals')
const AutoDllPlugin = require('autodll-webpack-plugin')
const { IgnorePlugin } = require('webpack')

const postCssOptions = {
  ident: 'postcss',
  plugins: () => [
    require('postcss-flexbugs-fixes'),
    autoprefixer({
      browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
      flexbox: 'no-2009'
    })
  ]
}

process.env.RAZZLE_BUILD_TIME = new Date().toString()

module.exports = {
  modify(config, { target, dev }) {
    const appConfig = Object.assign({}, config)

    const IS_NODE = target === 'node'
    const IS_DEV = dev

    const fileLoader = appConfig.module.rules.find(rule => rule.loader && rule.loader.includes('file-loader'))

    if (fileLoader && !IS_DEV) {
      fileLoader.options.publicPath = process.env.PUBLIC_PATH
    }

    const urlLoader = appConfig.module.rules.find(rule => rule.loader && rule.loader.includes('url-loader'))

    if (urlLoader && !IS_DEV) {
      urlLoader.options.publicPath = process.env.PUBLIC_PATH
    }

    if (IS_NODE) {
      appConfig.externals = [
        nodeExternals({
          whitelist: [
            IS_DEV ? 'webpack/hot/poll?300' : null,
            /\.(eot|woff|woff2|ttf|otf)$/,
            /\.(svg|png|jpg|jpeg|gif|ico)$/,
            /\.(mp4|mp3|ogg|swf|webp)$/,
            /\.(css|scss|sass|sss|less)$/,
            /@messenger/
          ].filter(x => x)
        })
      ]
    }

    appConfig.module.rules.push({
      test: /\.scss$/,
      use: IS_NODE
        ? [
            {
              loader: require.resolve('css-loader/locals'),
              options: {
                modules: true,
                importLoaders: 1,
                sourceMap: false,
                localIdentName: '[local]___[hash:base64:5]'
              }
            },
            require.resolve('sass-loader')
          ]
        : IS_DEV
        ? [
            require.resolve('style-loader'),
            {
              loader: require.resolve('css-loader'),
              options: {
                modules: true,
                importLoaders: 1,
                sourceMap: false,
                localIdentName: '[local]___[hash:base64:5]'
              }
            },
            {
              loader: require.resolve('postcss-loader'),
              options: postCssOptions
            },
            require.resolve('sass-loader')
          ]
        : [
            MiniCssExtractPlugin.loader,
            {
              loader: require.resolve('css-loader'),
              options: {
                modules: true,
                importLoaders: 1,
                minimize: true,
                sourceMap: false,
                localIdentName: '[local]___[hash:base64:5]'
              }
            },
            {
              loader: require.resolve('postcss-loader'),
              options: postCssOptions
            },
            require.resolve('sass-loader')
          ]
    })

    appConfig.plugins.push(new IgnorePlugin(/^\.\/locale$/, /moment$/))

    if (process.env.ANALYZE) {
      appConfig.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: 8888,
          openAnalyzer: true
        })
      )
    }

    if (target === 'web') {
      appConfig.plugins.push(
        new AutoDllPlugin({
          context: __dirname,
          filename: '[name].dll.js',
          path: './vendor',
          debug: true,
          inherit: true,
          devtool: false,
          entry: {
            vendor: ['react', 'react-dom', 'classnames', 'formik', 'react-intl']
          }
        })
      )
    }

    appConfig.devtool = !IS_NODE ? 'source-map' : false

    return appConfig
  }
}
