const storageAvailable = type => {
  return new Promise((resolve, reject) => {
    try {
      let storage = window[type]
      let x = '__storage_test__'

      storage.setItem(x, x)
      storage.removeItem(x)

      resolve(storage)

      return true
    } catch (e) {
      reject(e)

      return e instanceof DOMException && (
        e.code === 22 ||
        e.code === 1014 ||
        e.name === 'QuotaExceededError' ||
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        storage.length !== 0
    }
  })
}

const storage = {
  get (key) {
    storageAvailable('localStorage')
      .then(() => localStorage.getItem(key))
      .catch(err => console.log(err))
  },
  set (key, value) {
    storageAvailable('localStorage')
      .then(() => localStorage.setItem(key, value))
      .catch(err => console.log(err))
  },
  delete (key) {
    storageAvailable('localStorage')
      .then(() => localStorage.removeItem(key))
      .catch(err => console.log(err))
  },
  clear () {
    storageAvailable('localStorage')
      .then(() => localStorage.clear())
      .catch(err => console.log(err))
  }
}

export default storage
