export default {
  getCounter (state, getters) {
    return () => state.counter
  }
}
