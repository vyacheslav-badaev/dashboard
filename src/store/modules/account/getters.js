export default {
  isAuthenticated (state, getters) {
    return () => state.username.length
  }
}
