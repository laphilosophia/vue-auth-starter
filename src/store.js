import Vue from 'vue'
import Vuex from 'vuex'

import authentication from '@/store/auth/index'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    auth: authentication
  }
})
