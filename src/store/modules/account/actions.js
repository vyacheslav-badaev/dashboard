import types from './mutation-types'
export default {
  setUsername ({ commit, getters, rootState }, username) {
    commit(types.SET_USERNAME, username)
  },
  setUsergroup ({ commit, getters, rootState }, usergroup) {
    commit(types.SET_USERGROUP, usergroup)
  }
}
