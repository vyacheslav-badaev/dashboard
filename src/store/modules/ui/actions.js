import types from './mutation-types'
export default {
  increaseCounter ({ commit, getters, rootState }) {
    commit(types.INCREASE_COUNTER)
  }
}
