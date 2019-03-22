import axios from 'axios'

/* eslint-disable no-undef */
const authentication = {
  state: {
    AUTH_STATUS: '',
    AUTH_TOKEN: localStorage.getItem('tt_token') || '',
    AUTH_USER: {}
  },
  mutations: {
    AUTH_REQUEST (state) {
      state.AUTH_STATUS = 'loading'
    },
    AUTH_SUCCESS (state, payload) {
      state.AUTH_STATUS = 'success'
      state.AUTH_TOKEN = payload.token
      state.AUTH_USER = payload.user
    },
    AUTH_ERROR (state) {
      state.AUTH_STATUS = 'error'
    },
    AUTH_LOGOUT (state) {
      state.AUTH_STATUS = ''
      state.AUTH_TOKEN = ''
      state.AUTH_USER = {}
    }
  },
  actions: {
    login ({ commit }, { email, password }) {
      return new Promise((resolve, reject) => {
        commit('AUTH_REQUEST')

        axios.post(`${process.env.VUE_APP_API}signin?email=${email}&password=${password}`)
          .then(resp => {
            const token = resp.data.token

            if (token && typeof token !== 'undefined') {
              const user = {}

              localStorage.setItem('tt_token', token)
              axios.defaults.headers.common['Authorization'] = token

              commit('AUTH_SUCCESS', { token, user })
              resolve(resp)
            } else {
              commit('AUTH_ERROR')
              localStorage.removeItem('tt_token')
              reject(resp)
            }
          })
          .catch(err => {
            commit('AUTH_ERROR')
            localStorage.removeItem('tt_token')
            reject(err)
          })
      })
    },
    register ({ commit }, { email, password }) {
      return new Promise((resolve, reject) => {
        commit('AUTH_REQUEST')

        axios.post(`${process.env.VUE_APP_API}signup?email=${email}&password=${password}`)
          .then(resp => {
            const token = resp.data.token

            if (token && typeof token !== 'undefined') {
              const user = {}

              localStorage.setItem('tt_token', token)
              axios.defaults.headers.common['Authorization'] = token

              commit('AUTH_SUCCESS', { token, user })
              resolve(resp)
            } else {
              commit('AUTH_ERROR')
              localStorage.removeItem('tt_token')
              reject(resp)
            }
          })
          .catch(err => {
            commit('AUTH_ERROR')
            localStorage.removeItem('tt_token')
            reject(err)
          })
      })
    },
    logout ({ commit }) {
      return new Promise((resolve, reject) => {
        commit('AUTH_LOGOUT')
        commit('SET_SOCIALS', '')
        commit('SET_STATUS', '')
        localStorage.removeItem('tt_token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    }
  },
  getters: {
    isLoggedIn: state => !!state.AUTH_TOKEN,
    authStatus: state => state.AUTH_STATUS
  }
}

export default authentication
