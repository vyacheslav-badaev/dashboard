import types from './mutation-types'
export default {
  [types.FIND_BY] (state, items) {
    state.items = items
  },
  [types.FIND] (state, item) {
    const index = state.items.findIndex(_item => _item[state.primaryKey] === item[state.primaryKey])
    if (index > -1) {
      state.items[index] = item
    } else {
      state.items.push(item)
    }
  },
  [types.CREATE] (state, item) {
    const index = state.items.findIndex(_item => _item[state.primaryKey] === item[state.primaryKey])
    if (index > -1) {
      state.items[index] = item
    } else {
      state.items.push(item)
    }
  },
  [types.CLEAR] (state) {
    state.items = []
  }
}
