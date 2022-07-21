import types from './mutation-types'
export default {
  setToolbarTitle ({ commit, getters, rootState }, title) {
    commit(types.SET_TOOLBAR_TITLE, title)
  },
  addToolbarButton ({ commit, getters, rootState }, button) {
    commit(types.ADD_TOOLBAR_BUTTON, button)
  },
  removeToolbarButton ({ commit, getters, rootState }, button) {
    commit(types.REMOVE_TOOLBAR_BUTTON, button)
  },
  setSnackbarMessage ({ commit, getters, rootState }, message) {
    commit(types.SET_SNACKBAR_MESSAGE, message)
  },
}
