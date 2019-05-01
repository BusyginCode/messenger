export const getFixedNumber = (number, length = 1) => {
  const roundSize = Math.pow(10, length)
  return Math.round(number * roundSize) / roundSize
}

export const getRoundedNumber = (number, roundTo = 10) => {
  return Math.round(number / roundTo) * roundTo
}

export const getFormattedCurrency = (amount, options = {}) => {
  const { locale = 'en-US', ...formatterOptions } = options
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    ...formatterOptions
  })

  return formatter.format(Math.max(amount, 0))
}

export const getMaxCountString = (number, max = 9) => {
  if (number > max) {
    return `9+`
  }

  return number
}
