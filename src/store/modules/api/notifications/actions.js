import Vue from 'vue'
import types from '../mutation-types'
export default {
  findBy ({ commit, getters, rootState }, params) {
    return new Promise((resolve, reject) => {
      if (!params.type) {
        params.type = 'all'
      }
      Vue.$axios.get('/notification', {params})
        .then((response) => {
          if (response.data && response.data.status === 200) {
            commit(types.FIND_BY, response.data.notifications)
            resolve()
          } else {
            reject(new Error('An error occurred while retrieving notifications.'))
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
      Vue.$axios.get('/notification', {params})
        .then((response) => {
          if (response.data && response.data.status === 200) {
            let index = response.data.notifications.findIndex(_notification => String(_notification[this.state.notifications.primaryKey]) === params.id)
            if (index > -1) {
              commit(types.FIND, response.data.notifications[index])
            }
            resolve()
          } else {
            reject(new Error('An error occurred while retrieving notification' + params.id + ' .'))
          }
        })
        .catch((error) => {
          reject(new Error('Webservice is currently not available. (' + error + ')'))
        })
    })
  },
  create ({ commit, getters, rootState }, item) {
    return new Promise((resolve, reject) => {
      Vue.$axios.post('/notification', {}, {params: item})
        .then((response) => {
          if (response.data && response.data.status === 200) {
            commit(types.CREATE, response.data.notification)
            resolve(response.data.notification[this.state.notifications.primaryKey])
          } else {
            reject(new Error('An error occurred while creating a new notification.'))
          }
        })
        .catch((error) => {
          reject(new Error('Webservice is currently not available. (' + error + ')'))
        })
    })
  },
  update ({ commit, getters, rootState }, item) {
    return new Promise((resolve, reject) => {
      Vue.$axios.put('/notification', {}, {params: item})
        .then((response) => {
          if (response.data && response.data.status === 200) {
            resolve()
          } else {
            reject(new Error('An error occurred while updating notification' + item.id + ' .'))
          }
        })
        .catch((error) => {
          reject(new Error('Webservice is currently not available. (' + error + ')'))
        })
    })
  },
  delete ({ commit, getters, rootState }, id) {
    return new Promise((resolve, reject) => {
      Vue.$axios.delete('/notification', {params: {id}})
        .then((response) => {
          if (response.data && response.data.status === 200) {
            resolve()
          } else {
            reject(new Error('An error occurred while deleting notification' + id + ' .'))
          }
        })
        .catch((error) => {
          reject(new Error('Webservice is currently not available. (' + error + ')'))
        })
    })
  }
}
