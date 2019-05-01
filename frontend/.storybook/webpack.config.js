const path = require('path')
const autoprefixer = require('autoprefixer')

const postCssLoader = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    plugins: () => [
      require('postcss-flexbugs-fixes'),
      autoprefixer({
        browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
        flexbox: 'no-2009'
      })
    ]
  }
}

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader', postCssLoader, 'sass-loader'],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: true,
              localIdentName: '[local]___[hash:base64:5]'
            }
          },
          postCssLoader,
          'sass-loader'
        ],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.(svg|png|jpe?g|webp|gif|otf|ttf|woff2?)$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    alias: {
      '@dt/core/lib': path.resolve(__dirname, '../packages/core/src'),
      '@dt/game/lib': path.resolve(__dirname, '../packages/game/src'),
      '@dt/game-csgo/lib': path.resolve(__dirname, '../packages/game-csgo/src'),
      '@dt/game-lol/lib': path.resolve(__dirname, '../packages/game-lol/src'),
      '@dt/uikit/lib': path.resolve(__dirname, '../packages/uikit/src'),
      '@dt/premium/lib': path.resolve(__dirname, '../packages/premium/src'),
      '@dt/icons/lib': path.resolve(__dirname, '../packages/icons/lib'),
      '@dt/testing': path.resolve(__dirname, '../packages/testing/src'),
      '@dt/theme': path.resolve(__dirname, '../packages/theme/src')
    }
  }
}
