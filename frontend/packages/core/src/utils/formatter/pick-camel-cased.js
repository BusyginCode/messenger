import reduce from 'lodash/reduce'
import camelCase from 'lodash/camelCase'

const pickCamelCased = (record, keys) => {
  return reduce(
    keys,
    (memo, key) => {
      return {
        ...memo,
        [camelCase(key)]: record[key]
      }
    },
    {}
  )
}

export default pickCamelCased
