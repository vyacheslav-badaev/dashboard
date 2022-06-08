import types from './mutation-types'
export default {
  [types.LOGIN] (state, payload) {
    state.authenticated = true
  },
  [types.LOGOUT] (state, payload) {
    state.authenticated = false
    localStorage.removeItem('account')
  },
  [types.SETACCOUNT] (state, account) {
    state.account = account
    localStorage.setItem('account', account)
  }
}
