export const localStorageKeys = []

export const filterLocalStorage = (keysToRemove = []) => {
  Object.keys(localStorage)
    .filter(key => keysToRemove.includes(key))
    .forEach(key => localStorage.removeItem(key))
}

export const clearLocalStorageForUser = () => {
  filterLocalStorage(localStorageKeys)
}
