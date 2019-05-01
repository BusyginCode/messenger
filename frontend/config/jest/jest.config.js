module.exports = {
  rootDir: '../../',
  setupFiles: ['<rootDir>/config/jest/jest.setup.js'],
  testMatch: ['**/src/**/?(*.)+(spec|test).js?(x)'],
  testPathIgnorePatterns: [
    '<rootDir>/.storybook/',
    '<rootDir>/node_modules/',
    '<rootDir>/packages/*/node_modules',
    '<rootDir>/packages/*/dist',
    '<rootDir>/packages/*/build'
  ],
  cacheDirectory: '<rootDir>/.jestcache',
  moduleNameMapper: {
    '\\.(svg|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest/__mocks__/fileMock.js',
    '\\.(s?css)$': 'identity-obj-proxy'
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  transformIgnorePatterns: ['/node_modules/.+\\.js$'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverage: false,
  coverageReporters: ['text-summary', 'html'],
  collectCoverageFrom: [],
  coverageThreshold: {
    global: {
      statements: 40,
      branches: 40,
      functions: 40,
      lines: 40
    }
  },
  globals: {
    localStorage: true
  }
}
