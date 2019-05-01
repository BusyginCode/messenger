export default (path, { isServer, res }, history, condition = true) => {
  if (condition) {
    if (isServer) {
      res.writeHead(302, { Location: path })
      res.end()
    } else {
      history.replace(path)
    }
    return new Promise(() => {})
  } else {
    return Promise.resolve()
  }
}
