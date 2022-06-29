import types from './mutation-types'
export default {
  [types.SET_TOOLBAR_TITLE] (state, title) {
    state.toolbarTitle = title
  },
  [types.ADD_TOOLBAR_BUTTON] (state, button) {
    state.toolbarButtons.push(button)
  },
  [types.REMOVE_TOOLBAR_BUTTON] (state, button) {
    const index = state.toolbarButtons.findIndex(_button => _button.id === button.id)
    if (index > -1) state.toolbarButtons.splice(index, 1)
  }
}
