import Vue from 'vue'
import types from '../mutation-types'
import Moment from 'moment'
export default {
  findBy ({ commit, getters, rootState }, params) {
    return new Promise((resolve, reject) => {
      if (!params.startDate) {
        params.startDate = new Moment().format('YYYY-MM-DD')
      }
      if (!params.endDate) {
        params.endDate = new Moment().add(2, 'weeks').format('YYYY-MM-DD')
      }
      Vue.$axios.get('/calendar', {params})
        .then((response) => {
          if (response.data && response.data.status === String(200)) {
            let calendar = response.data.calendar.map((item) => { item.readOnly = true; return item })
            commit(types.FIND_BY, [...calendar, ...response.data.appointments])
            resolve()
          } else {
            reject(new Error('An error occurred while retrieving calendars.'))
          }
        })
        .catch((error) => {
          reject(new Error('Webservice is currently not available. (' + error + ')'))
        })
    })
  },
  find ({ commit, dispatch, getters, rootState }, params) {
    return new Promise((resolve, reject) => {
      if (!params.type) {
        params.type = 'all'
      }
      Vue.$axios.get('/calendar/hint', {params})
        .then((response) => {
          if (response.data && response.data.status === String(200)) {
            if (response.data.hintCalendar.id < 1000) {
              response.data.hintCalendar.readOnly = true
            }
            commit(types.FIND, response.data.hintCalendar)
            resolve()
          } else {
            reject(new Error('An error occurred while retrieving calendar ' + params.id + ' .'))
          }
        })
        .catch((error) => {
          reject(new Error('Webservice is currently not available. (' + error + ')'))
        })
    })
  },
  create ({ commit, getters, rootState }, item) {
    return new Promise((resolve, reject) => {
      Vue.$axios.post('/calendar', {}, {params: item})
        .then((response) => {
          if (response.data && response.data.status === String(200)) {
            commit(types.CREATE, response.data.appointment)
            resolve(response.data.appointment[this.state.calendar.primaryKey])
          } else {
            reject(new Error('An error occurred while creating a new calendar.'))
          }
        })
        .catch((error) => {
          reject(new Error('Webservice is currently not available. (' + error + ')'))
        })
    })
  },
  update ({ commit, getters, rootState }, item) {
    return new Promise((resolve, reject) => {
      Vue.$axios.put('/calendar', {}, {params: item})
        .then((response) => {
          if (response.data && response.data.status === String(200)) {
            resolve()
          } else {
            reject(new Error('An error occurred while updating calendar ' + item[this.state.calendar.primaryKey] + ' .'))
          }
        })
        .catch((error) => {
          reject(new Error('Webservice is currently not available. (' + error + ')'))
        })
    })
  },
  delete ({ commit, getters, rootState }, id) {
    return new Promise((resolve, reject) => {
      Vue.$axios.delete('/calendar', {params: {id}})
        .then((response) => {
          if (response.data && response.data.status === String(200)) {
            resolve()
          } else {
            reject(new Error('An error occurred while deleting calendar ' + id + ' .'))
          }
        })
        .catch((error) => {
          reject(new Error('Webservice is currently not available. (' + error + ')'))
        })
    })
  }
}
