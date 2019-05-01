/**
 * ingore catch in promises, return them from promise;
 * @param {Promise[]} promises
 * @return {Promise}
 */
const promiseAllSuccess = promises => Promise.all(promises.filter(p => !!p).map(promise => promise.catch(e => e)))

export default promiseAllSuccess
