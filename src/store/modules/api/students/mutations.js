import types from './mutation-types'
export default {
  [types.FIND_BY] (state, items) {
    state.items = items
  },
  [types.FIND] (state, item) {
    const index = state.items.findIndex(_item => _item.username === item.username)
    if (index > -1) {
      state.items[index] = item
    } else {
      state.items.push(item)
    }
  },
  [types.CREATE] (state, item) {
    const index = state.items.findIndex(_item => _item.username === item.username)
    if (index > -1) {
      state.items[index] = item
    } else {
      state.items.push(item)
    }
  },
  [types.UPDATE] (state, item) {
    const index = state.items.findIndex(_item => _item.username === item.username)
    if (index > -1) {
      state.items[index] = item
    } else {
      state.items.push(item)
    }
  },
  [types.DELETE] (state, item) {
    const index = state.items.findIndex(_item => _item.username === item.username)
    if (index > -1) state.items.splice(index, 1)
  },
  [types.CLEAR] (state) {
    state.items = []
  }
}
