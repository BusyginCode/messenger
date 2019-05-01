import isEqual from 'lodash/isEqual'

export default function difference(firstObj, secondObj) {
  return Object.keys(firstObj).reduce((left, key) => {
    if (!isEqual(firstObj[key], secondObj[key])) {
      left[key] = firstObj[key] || secondObj[key]
    }
    return left
  }, {})
}
