import types from '../mutation-types'
import Client from '../../../../api/client'
const studentClient = new Client('teachers')
export default {
  findBy ({ commit, getters, rootState }, params) {
    return studentClient.findBy(params)
      .then((response) => (
        commit(types.FIND_BY, response)
      ))
  },
  find ({ commit, getters, rootState }, id) {
    return studentClient.find(id)
      .then((response) => (
        commit(types.FIND, response)
      ))
  },
  create ({ commit, getters, rootState }, payload) {
    return studentClient.create(payload.id, payload)
      .then((response) => (
        commit(types.CREATE, response)
      ))
  },
  update ({ commit, getters, rootState }, payload) {
    return studentClient.Update(payload.id, payload)
      .then((response) => (
        commit(types.DELETE, response)
      ))
  },
  delete ({ commit, getters, rootState }, id) {
    return studentClient.delete(id)
      .then((response) => (
        commit(types.DELETE, response)
      ))
  },
  clear ({ commit, getters, rootState }) {
    commit(types.CLEAR)
  }
}
