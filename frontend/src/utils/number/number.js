export const getFixedNumber = (number, length = 1) => {
  const roundSize = Math.pow(10, length)
  return Math.round(number * roundSize) / roundSize
}

export const getRoundedNumber = (number, roundTo = 10) => {
  return Math.round(number / roundTo) * roundTo
}
