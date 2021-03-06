import Vue from 'vue'
import types from './mutation-types'
export default {
  [types.INITIALIZE] (state) {
    state.authenticated = !!localStorage.getItem('key') &&
                          !!localStorage.getItem('username') &&
                          !!localStorage.getItem('username')
    if (state.authenticated) {
      state.key = localStorage.getItem('key')
      state.username = localStorage.getItem('username')
      state.type = localStorage.getItem('type')
      Vue.$axios.defaults.params = {}
      Vue.$axios.defaults.params[ 'authKey' ] = state.key
    }
  },
  [types.LOGIN] (state, payload) {
    state.authenticated = true
    state.key = payload.key
    state.username = payload.username
    state.type = payload.type
    Vue.$axios.defaults.params = {}
    Vue.$axios.defaults.params[ 'authKey' ] = state.key
    console.log(Vue.$axios.defaults)
    localStorage.setItem('key', state.key)
    localStorage.setItem('username', state.username)
    localStorage.setItem('type', state.type)
  },
  [types.LOGOUT] (state, payload) {
    state.authenticated = false
    state.key = null
    state.username = null
    Vue.$axios.defaults.params = {}
    localStorage.removeItem('key')
    localStorage.removeItem('username')
    localStorage.removeItem('type')
  }
}
