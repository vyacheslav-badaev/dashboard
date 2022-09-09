import store from '@/store'
describe('Ui store mutations', () => {
  test('Can successfully set toolbar message', () => {
    store.commit('ui/SET_TOOLBAR_TITLE', 'someTitle')
    expect(store.state.ui.toolbarTitle).toEqual('someTitle')
  })
  test('Can successfully add toolbar button', () => {
    store.commit('ui/ADD_TOOLBAR_BUTTON', {
      id: 'testButton',
      title: 'Test Button',
      color: 'green',
      flat: true,
      action: () => {}
    })
    expect(store.state.ui.toolbarButtons).toHaveLength(1)
  })
  test('Can successfully remove toolbar button', () => {
    store.commit('ui/REMOVE_TOOLBAR_BUTTON', {
      id: 'testButton',
      title: 'Test Button',
      color: 'green',
      flat: true,
      action: () => {}
    })
    expect(store.state.ui.toolbarButtons).toHaveLength(0)
  })
})
