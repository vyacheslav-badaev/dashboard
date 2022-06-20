export default {
  getLoginTitle (state, getters) {
    return () => state.loginTitle
  },
  getLoginInfoBlocks (state, getters) {
    return () => state.loginInfoBlocks
  },
  getNavigationTitle (state, getters) {
    return () => state.navigationTitle
  },
  getNavigationItems (state, getters) {
    return () => state.navigationItems
  }
}
