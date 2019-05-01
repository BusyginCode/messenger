import promiseAllSuccess from './promise-all-success'

describe('promiseAllSuccess', () => {
  it('should correct', () => {
    return promiseAllSuccess([
      new Promise(resolve => setTimeout(() => resolve(1), 50)),
      new Promise((resolve, reject) => setTimeout(() => reject(1), 50)) // eslint-disable-line
    ])
  })
})
