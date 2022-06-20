import types from './mutation-types'
export default {
  [types.SET_USERNAME] (state, username) {
    state.username = username
  },
  [types.SET_USERGROUP] (state, usergroup) {
    state.usergroup = usergroup
  }
}
