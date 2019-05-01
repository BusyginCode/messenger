import queryString from 'query-string'
import forEach from 'lodash/forEach'

export const extract = queryString.extract
export const parseUrl = queryString.parseUrl

export const parse = (query, schema) => {
  const params = queryString.parse(query, { arrayFormat: 'bracket' })

  if (!schema) {
    return params
  }

  forEach(schema, (value, key) => {
    if (value === 'number[]' && params[key] instanceof Array) {
      params[key] = params[key].map(i => parseInt(i, 10))
    }
    if (value === 'string[]' && params[key]) {
      params[key] = params[key] instanceof Array ? params[key] : [params[key]]
    }
    if (value === 'csv' && params[key]) {
      params[key] = params[key].split(',')
    }
    if (value === 'number' && params[key]) {
      params[key] = parseInt(params[key], 10)
    }
  })

  return params
}

export const stringify = (params, search) => {
  const makeString = p => `?${queryString.stringify(p, { arrayFormat: 'bracket' })}`

  if (search) {
    return makeString({ ...queryString.parse(search, { arrayFormat: 'bracket' }), ...params })
  }

  return makeString(params)
}

export const csvify = (params, search) => {
  const makeString = p => {
    return `?${Object.keys(p)
      .filter(k => p[k] && p[k].toString())
      .map(k => `${k}=${p[k].toString()}`)
      .join('&')}`
  }

  if (search) {
    return makeString({ ...queryString.parse(search), ...params })
  }

  return makeString(params)
}

export const handleBackUrl = (location, history, alternative) => {
  const { back_url = localStorage.getItem('backUrl') } = parse(location.search)

  localStorage.setItem('backUrl', '')

  back_url ? window.location.assign(back_url) : history.push(alternative)
}

export const addBackUrl = (url, backUrl) => {
  if (backUrl) {
    if (url.includes('?')) {
      return `${url}&back_url=${encodeURIComponent(backUrl)}`
    }
    return `${url}?back_url=${encodeURIComponent(backUrl)}`
  }

  return url
}
