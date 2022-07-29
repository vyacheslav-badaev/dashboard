import Vue from 'vue'
import types from '../mutation-types'
export default {
  findBy ({ commit, getters, rootState }, params) {
    return new Promise((resolve, reject) => {
      if (!params.type) {
        params.type = 'all'
      }
      Vue.$axios.get('/rooms', {params})
        .then((response) => {
          if (response.data && response.data.status === 200) {
            commit(types.FIND_BY, response.data.rooms)
            resolve()
          } else {
            reject(new Error('An error occurred while retrieving rooms.'))
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
      Vue.$axios.get('/rooms', {params})
        .then((response) => {
          if (response.data && response.data.status === 200) {
            let index = response.data.rooms.findIndex(_room => String(_room[this.state.rooms.primaryKey]) === params.id)
            if (index > -1) {
              commit(types.FIND, response.data.rooms[index])
            }
            resolve()
          } else {
            reject(new Error('An error occurred while retrieving room ' + params.id + ' .'))
          }
        })
        .catch((error) => {
          reject(new Error('Webservice is currently not available. (' + error + ')'))
        })
    })
  },
  create ({ commit, getters, rootState }, item) {
    if (item.macaddress) {
      item.address = item.macaddress
      delete item.macaddress
    }
    return new Promise((resolve, reject) => {
      Vue.$axios.post('/rooms', {}, {params: item})
        .then((response) => {
          if (response.data && response.data.status === 200) {
            commit(types.CREATE, response.data.room)
            resolve(response.data.room[this.state.rooms.primaryKey])
          } else {
            reject(new Error('An error occurred while creating a new room.'))
          }
        })
        .catch((error) => {
          reject(new Error('Webservice is currently not available. (' + error + ')'))
        })
    })
  },
  update ({ commit, getters, rootState }, item) {
    if (item.macaddress) {
      item.address = item.macaddress
      delete item.macaddress
    }
    return new Promise((resolve, reject) => {
      Vue.$axios.put('/rooms', {}, {params: item})
        .then((response) => {
          if (response.data && response.data.status === 200) {
            resolve()
          } else {
            reject(new Error('An error occurred while updating room ' + item[this.state.rooms.primaryKey] + ' .'))
          }
        })
        .catch((error) => {
          reject(new Error('Webservice is currently not available. (' + error + ')'))
        })
    })
  },
  delete ({ commit, getters, rootState }, address) {
    return new Promise((resolve, reject) => {
      Vue.$axios.delete('/rooms', {params: {address}})
        .then((response) => {
          if (response.data && response.data.status === 200) {
            resolve()
          } else {
            reject(new Error('An error occurred while deleting room ' + address + ' .'))
          }
        })
        .catch((error) => {
          reject(new Error('Webservice is currently not available. (' + error + ')'))
        })
    })
  }
}
