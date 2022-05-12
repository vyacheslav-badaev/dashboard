import types from './mutation-types'
export default {
  increaseCounter ({ commit, getters }) {
    commit(types.INCREASE_COUNTER)
  }
}
