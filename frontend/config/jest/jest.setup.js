require('raf/polyfill')
require('jest-localstorage-mock')

global.matchMedia =
  global.matchMedia ||
  function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
    }
  }

process.env.BABEL_ENV = 'test'
process.env.NODE_ENV = 'test'

const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')
const MockDate = require('mockdate')
const IntlPolyfill = require('intl')

Enzyme.configure({ adapter: new Adapter() })

console.error = () => {}

global.Intl = IntlPolyfill

MockDate.set(new Date('2000-01-01T00:00:00+00:00'))

require('moment-timezone').tz.setDefault('Europe/London')
