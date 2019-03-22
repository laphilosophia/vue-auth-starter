import Vue from 'vue'

export default ({ title, description }, type, options) => {
  let templates = {
    info: `
      <div class="notification-icon info-icon"></div>
      <div class="notification-content">
        <h5>${title}</h5>
        <p>${description}</p>
      </div>
    `,
    warn: `
      <div class="notification-icon warn-icon"></div>
      <div class="notification-content">
        <h5>${title}</h5>
        <p>${description}</p>
      </div>
    `,
    error: `
      <div class="notification-icon error-icon"></div>
      <div class="notification-content">
        <h5>${title}</h5>
        <p>${description}</p>
      </div>
    `,
    success: `
      <div class="notification-icon success-icon"></div>
      <div class="notification-content">
        <h5>${title}</h5>
        <p>${description}</p>
      </div>
    `
  }

  let defaults = {
    id: '',
    className: '',
    horizontal: '',
    vertical: '',
    duration: '',
    mode: '',
    closeable: '',
    transition: ''
  }

  let settings = Object.assign({}, defaults, options)

  return new Promise((resolve, reject) => {
    try {
      if (!type) return

      Vue.toast(templates[type], {
        id: settings.id,
        className: settings.className,
        horizontalPosition: settings.horizontal,
        verticalPosition: settings.vertical,
        duration: settings.duration,
        mode: settings.mode,
        closeable: settings.closeable,
        transition: settings.transition
      })

      resolve('ok')
    } catch (error) {
      reject(error, 'notification content must be defined!')
    }
  })
}
