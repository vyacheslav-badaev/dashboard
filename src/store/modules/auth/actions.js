import types from './mutation-types'
export default {
  login ({ commit, getters, rootState }, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (payload.password === 'password') {
          commit(types.LOGIN, payload)
          commit(types.SETACCOUNT, payload)
          resolve()
        } else {
          reject(new Error('Invalid username and/or password'))
        }
      }, 1000)
    })
  },
  logout ({ commit, getters, rootState }) {
    commit(types.LOGOUT, null)
    commit(types.SETACCOUNT, null)
  }
}
