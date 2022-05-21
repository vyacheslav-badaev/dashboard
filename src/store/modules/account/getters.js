export default {
  isLoggedIn (state, getters) {
    return () => !!state.username
  }
}
