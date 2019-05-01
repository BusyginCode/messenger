export default (id, premium) => {
  if (premium !== undefined && !premium) {
    localStorage.removeItem(id)
    return true
  }

  const item = localStorage.getItem(id)

  if (!item) {
    localStorage.setItem(id, 'true')
    return true
  }

  return false
}
