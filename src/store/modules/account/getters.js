export default {
  getUsername (state, getters) {
    return () => state.username
  },
  getUsergroup (state, getters) {
    return () => state.usergroup
  }
}
