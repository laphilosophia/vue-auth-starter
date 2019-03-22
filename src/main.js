import '@/styles/app.scss'

import Vue from 'vue'
import Axios from 'axios'

import router from './router'
import store from './store'
import i18n from '@/i18n/index'

import App from './App.vue'

Vue.prototype.$http = Axios

const token = localStorage.getItem('tt_token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
