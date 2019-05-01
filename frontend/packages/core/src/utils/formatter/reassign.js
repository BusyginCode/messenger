import reduce from 'lodash/reduce'
import isFunction from 'lodash/isFunction'

const reassign = (record, keys) => {
  return reduce(
    keys,
    (memo, key, name) => {
      memo[name] = isFunction(key) ? key(record) : record[key]
      return memo
    },
    {}
  )
}

export default reassign
