import types from './mutation-types'
export default {
  [types.INCREASE_COUNTER] (state) {
    state.counter++
  }
}
