import cookies from 'js-cookie'

export default {
  get(name, options) {
    return cookies.get(name, options)
  },
  set(name, value, options) {
    return cookies.set(name, value, { expires: 7, ...options })
  },
  remove(name, options) {
    return cookies.remove(name, options)
  }
}
