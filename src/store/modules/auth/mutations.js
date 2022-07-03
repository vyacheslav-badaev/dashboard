import types from './mutation-types'
export default {
  [types.CHECK] (state) {
    state.authenticated = !!localStorage.getItem('account')
    if (state.authenticated) {
      state.account = JSON.parse(localStorage.getItem('account'))
    }
  },
  [types.LOGIN] (state, payload) {
    state.authenticated = true
  },
  [types.LOGOUT] (state, payload) {
    state.authenticated = false
    localStorage.removeItem('account')
  },
  [types.SETACCOUNT] (state, account) {
    state.account = account
    localStorage.setItem('account', JSON.stringify(account))
  }
}
