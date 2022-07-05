import Vue from 'vue'
import types from './mutation-types'
export default {
  initialize ({ commit, getters, rootState }) {
    commit(types.INITIALIZE)
  },
  login ({ commit, getters, rootState }, params) {
    return new Promise((resolve, reject) => {
      Vue.$axios.get('/login', {params})
        .then(function (response) {
          if (response.data && response.data.authenticated) {
            commit(types.LOGIN, response.data)
            resolve()
          } else {
            reject(new Error('Invalid username and/or password.'))
          }
        })
        .catch(function (error) {
          reject(new Error('Webservice is currently not available. (' + error + ')'))
        })
    })
  },
  logout ({ commit, getters, rootState }) {
    commit(types.LOGOUT)
  }
}
