module.exports = wallaby => {
  return {
    files: [
      'packages/uikit/src/**',
      'packages/core/src/**',
      'packages/auth/src/**',
      'packages/testing/src/**',
      'packages/icons/src/**',
      './babel.config.js', // DONT TOUCH THIS
      '!packages/**/*.test.js'
    ],

    tests: ['packages/uikit/src/**/*.test.js', 'packages/core/src/**/*.test.js', 'packages/auth/src/**/*.test.js'],

    filesWithNoCoverageCalculated: [],

    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },
    testFramework: 'jest',
    setup(w) {
      w.testFramework.configure({
        setupFiles: [`${wallaby.localProjectDir}/config/jest/jest.setup.js`],
        moduleNameMapper: {
          '\\.(svg|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `${
            wallaby.localProjectDir
          }/config/jest/__mocks__/fileMock.js`,
          '\\.(s?css)$': 'identity-obj-proxy'
        },
        snapshotSerializers: ['enzyme-to-json/serializer'],
        globals: {
          localStorage: true
        }
      })
    },
    // debug: true,
    env: {
      type: 'node',
      params: {
        runner: ''
      }
    },
    delays: {
      run: 502
    },
    hints: {
      ignoreCoverage: /ignore coverage/
    }
  }
}
