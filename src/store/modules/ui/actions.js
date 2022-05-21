import types from './mutation-types'
export default {
  setToolbarTitle ({ commit, getters, rootState }, title) {
    commit(types.SET_TOOLBAR_TITLE, title)
  }
}
