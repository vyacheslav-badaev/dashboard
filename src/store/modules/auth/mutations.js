import Vue from 'vue'
import types from './mutation-types'
export default {
  [types.INITIALIZE] (state) {
    state.authenticated = !!localStorage.getItem('key') && !!localStorage.getItem('username')
    if (state.authenticated) {
      state.key = localStorage.getItem('key')
      state.username = localStorage.getItem('username')
      Vue.$axios.defaults.headers.common['Authorization'] = state.key
    }
  },
  [types.LOGIN] (state, payload) {
    state.authenticated = true
    state.key = payload.key
    state.username = payload.username
    Vue.$axios.defaults.headers.common['Authorization'] = state.key
    localStorage.setItem('key', state.key)
    localStorage.setItem('username', state.username)
  },
  [types.LOGOUT] (state, payload) {
    state.authenticated = false
    state.key = null
    state.username = null
    delete Vue.$axios.defaults.headers.common['Authorization']
    localStorage.removeItem('key')
    localStorage.removeItem('username')
  }
}
