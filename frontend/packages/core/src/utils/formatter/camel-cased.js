import keys from 'lodash/keys'
import pickCamelCased from './pick-camel-cased'

const camelCased = record => pickCamelCased(record, keys(record))

export default camelCased
