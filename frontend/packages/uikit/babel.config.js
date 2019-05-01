module.exports = api => {
  api.cache(true)

  return {
    presets: ['@babel/react', '@babel/env'],
    plugins: [
      '@babel/plugin-transform-runtime',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-transform-modules-commonjs'
    ]
  }
}
