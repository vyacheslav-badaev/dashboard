import types from './mutation-types'
export default {
  login ({ commit, getters, rootState }, payload) {
    commit(types.LOGIN, payload)
  },
  logout ({ commit, getters, rootState }, payload) {
    commit(types.LOGOUT, payload)
  }
}
