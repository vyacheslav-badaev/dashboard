import Vue from 'vue'
import types from '../mutation-types'
export default {
  findBy ({ commit, getters, rootState }, params) {
    return new Promise((resolve, reject) => {
      if (!params.type) {
        params.type = 'all'
      }
      Vue.$axios.get('/roomsCalendar', {params})
        .then((response) => {
          if (response.data && response.data.status === String(200)) {
            commit(types.FIND_BY, response.data.roomCalendar)
            resolve()
          } else {
            reject(new Error('An error occurred while retrieving roomCalendar.'))
          }
        })
        .catch((error) => {
          reject(new Error('Webservice is currently not available. (' + error + ')'))
        })
    })
  },
  find ({ commit, getters, rootState }, params) {
    return new Promise((resolve, reject) => {
      if (!params.type) {
        params.type = 'all'
      }
      Vue.$axios.get('/roomsCalendar', {params})
        .then((response) => {
          if (response.data && response.data.status === String(200)) {
            let index = response.data.roomCalendar.findIndex(_notification => String(_notification[this.state.notifications.primaryKey]) === params.id)
            if (index > -1) {
              commit(types.FIND, response.data.roomCalendar[index])
            }
            resolve()
          } else {
            reject(new Error('An error occurred while retrieving roomCalendar' + params.id + ' .'))
          }
        })
        .catch((error) => {
          reject(new Error('Webservice is currently not available. (' + error + ')'))
        })
    })
  },
  create ({ commit, getters, rootState }, item) {
    return new Promise((resolve, reject) => {
      Vue.$axios.post('/roomsCalendar', {}, {params: item})
        .then((response) => {
          if (response.data && response.data.status === String(200)) {
            commit(types.CREATE, response.data.roomCalendar)
            resolve(response.data.roomCalendar[this.state.notifications.primaryKey])
          } else {
            reject(new Error('An error occurred while creating a new roomCalendar.'))
          }
        })
        .catch((error) => {
          reject(new Error('Webservice is currently not available. (' + error + ')'))
        })
    })
  },
  update ({ commit, getters, rootState }, item) {
    return new Promise((resolve, reject) => {
      Vue.$axios.put('/roomsCalendar', {}, {params: item})
        .then((response) => {
          if (response.data && response.data.status === String(200)) {
            resolve()
          } else {
            reject(new Error('An error occurred while updating roomCalendar' + item[this.state.roomCalendar.primaryKey] + ' .'))
          }
        })
        .catch((error) => {
          reject(new Error('Webservice is currently not available. (' + error + ')'))
        })
    })
  },
  delete ({ commit, getters, rootState }, id) {
    return new Promise((resolve, reject) => {
      Vue.$axios.delete('/roomsCalendar', {params: {id}})
        .then((response) => {
          if (response.data && response.data.status === String(200)) {
            resolve()
          } else {
            reject(new Error('An error occurred while deleting roomCalendar' + id + ' .'))
          }
        })
        .catch((error) => {
          reject(new Error('Webservice is currently not available. (' + error + ')'))
        })
    })
  }
}
