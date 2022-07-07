import Vue from 'vue'
export default {
  getSchedule ({ commit, getters, rootState }, params) {
    return new Promise((resolve, reject) => {
      params = {
        element: params.room,
        startDate: params.startDate,
        endDate: params.endDate,
        json: true
      }
      Vue.$axios.get(process.env.HR_URL, {params})
        .then((response) => {
          if (response.data && response.data.lesson) {
            resolve(response.data.lesson)
          } else {
            reject(new Error('No schedule found for given room and/or range.'))
          }
        })
        .catch((error) => {
          reject(new Error('HR Webservice is currently not available. (' + error + ')'))
        })
    })
  }
}
