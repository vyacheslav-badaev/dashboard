import types from './mutation-types'
export default {
  [types.SET_TOOLBAR_TITLE] (state, title) {
    state.toolbarTitle = title
  }
}
