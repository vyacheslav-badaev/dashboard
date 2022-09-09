import Vue from 'vue'
import Axios from 'axios'
import store from '@/store'
import Auth from '@/store/modules/auth'
import MockAdapter from 'axios-mock-adapter'
const axiosConfig = {
  baseURL: `${process.env.API_URL}`,
  headers: {'Accept': 'application/json'}
}
let axios = Axios.create(axiosConfig)
let mock = new MockAdapter(axios)
mock.onGet('/login', {params: {username: 'goodusername', password: 'goodpassword'}}).reply(200, {
  'username': '000000@hr.nl',
  'message': 'Successfully logged in!',
  'key': '3a53cb58-046a-4172-9982-20b84b1c2b7e',
  'type': 1,
  'authenticated': true
}).onGet('/login').reply(200, {
  'username': '000000@hr.nl',
  'message': 'An internal error occurred trying to login. Please try again later or contact the system administrator.',
  'key': null,
  'type': -1,
  'authenticated': false
})
Vue.$axios = mock.axiosInstance
class LocalStorageMock {
  constructor () {
    this.store = {}
  }
  clear () {
    this.store = {}
  }
  getItem (key) {
    return this.store[key] || null
  }
  setItem (key, value) {
    this.store[key] = value.toString()
  }
  removeItem (key) {
    delete this.store[key]
  }
}
global.localStorage = new LocalStorageMock()
describe('Auth store getters', () => {
  test('Typecheck student returns correct account type', () => {
    const state = {
      type: 1
    }
    expect(Auth.getters.getAccountType(state))
      .toBe('Student')
  })
  test('Typecheck teacher returns correct account type', () => {
    const state = {
      type: 2
    }
    expect(Auth.getters.getAccountType(state))
      .toBe('Teacher')
  })
  test('Typecheck service desk employee returns correct account type', () => {
    const state = {
      type: 3
    }
    expect(Auth.getters.getAccountType(state))
      .toBe('Servicedesk Employee')
  })
  test('Typecheck admin returns correct account type', () => {
    const state = {
      type: 4
    }
    expect(Auth.getters.getAccountType(state))
      .toBe('Admin')
  })
  test('Typecheck test returns correct account type', () => {
    const state = {
      type: 5
    }
    expect(Auth.getters.getAccountType(state))
      .toBe('Test')
  })
  test('Typecheck test returns correct account type', () => {
    const state = {
      type: 6
    }
    expect(Auth.getters.getAccountType(state))
      .toBe('Test')
  })
  test('Typecheck default returns correct account type', () => {
    const state = {
      type: null
    }
    expect(Auth.getters.getAccountType(state))
      .toBe('No account type')
  })
  test('Student can create room', () => {
    store.state.auth.type = 1
    expect(store.getters['auth/canCreate']('rooms'))
      .toBe(false)
  })
  test('Student can create notification', () => {
    store.state.auth.type = 1
    expect(store.getters['auth/canCreate']('notifications'))
      .toBe(true)
  })
  test('Student can create calendar', () => {
    store.state.auth.type = 1
    expect(store.getters['auth/canCreate']('calendar'))
      .toBe(true)
  })
  test('Teacher can create room', () => {
    store.state.auth.type = 2
    expect(store.getters['auth/canCreate']('rooms'))
      .toBe(true)
  })
  test('Teacher can create notification', () => {
    store.state.auth.type = 2
    expect(store.getters['auth/canCreate']('notifications'))
      .toBe(true)
  })
  test('Teacher can create calendar', () => {
    store.state.auth.type = 2
    expect(store.getters['auth/canCreate']('calendar'))
      .toBe(true)
  })
  test('Servicedesk employee can create room', () => {
    store.state.auth.type = 2
    expect(store.getters['auth/canCreate']('rooms'))
      .toBe(true)
  })
  test('Servicedesk employee can create notification', () => {
    store.state.auth.type = 2
    expect(store.getters['auth/canCreate']('notifications'))
      .toBe(true)
  })
  test('Servicedesk employee can create calendar', () => {
    store.state.auth.type = 4
    expect(store.getters['auth/canCreate']('calendar'))
      .toBe(true)
  })
  test('Admin can create room', () => {
    store.state.auth.type = 4
    expect(store.getters['auth/canCreate']('rooms'))
      .toBe(true)
  })
  test('Admin can create notification', () => {
    store.state.auth.type = 4
    expect(store.getters['auth/canCreate']('notifications'))
      .toBe(true)
  })
  test('Admin can create calendar', () => {
    store.state.auth.type = 4
    expect(store.getters['auth/canCreate']('calendar'))
      .toBe(true)
  })
  test('Student can edit room', () => {
    store.state.auth.type = 1
    expect(store.getters['auth/canEdit']('rooms'))
      .toBe(false)
  })
  test('Student can edit notification', () => {
    store.state.auth.type = 1
    expect(store.getters['auth/canEdit']('notifications'))
      .toBe(true)
  })
  test('Student can edit calendar', () => {
    store.state.auth.type = 1
    expect(store.getters['auth/canEdit']('calendar'))
      .toBe(true)
  })
  test('Teacher can edit room', () => {
    store.state.auth.type = 2
    expect(store.getters['auth/canEdit']('rooms'))
      .toBe(true)
  })
  test('Teacher can edit notification', () => {
    store.state.auth.type = 2
    expect(store.getters['auth/canEdit']('notifications'))
      .toBe(true)
  })
  test('Teacher can edit calendar', () => {
    store.state.auth.type = 2
    expect(store.getters['auth/canEdit']('calendar'))
      .toBe(true)
  })
  test('Servicedesk edit can create room', () => {
    store.state.auth.type = 2
    expect(store.getters['auth/canEdit']('rooms'))
      .toBe(true)
  })
  test('Servicedesk edit can create notification', () => {
    store.state.auth.type = 2
    expect(store.getters['auth/canEdit']('notifications'))
      .toBe(true)
  })
  test('Servicedesk edit can create calendar', () => {
    store.state.auth.type = 4
    expect(store.getters['auth/canEdit']('calendar'))
      .toBe(true)
  })
  test('Admin can edit room', () => {
    store.state.auth.type = 4
    expect(store.getters['auth/canEdit']('rooms'))
      .toBe(true)
  })
  test('Admin can edit notification', () => {
    store.state.auth.type = 4
    expect(store.getters['auth/canEdit']('notifications'))
      .toBe(true)
  })
  test('Admin can edit calendar', () => {
    store.state.auth.type = 4
    expect(store.getters['auth/canEdit']('calendar'))
      .toBe(true)
  })
})
describe('Auth store mutations', () => {
  test('Can successfully login', () => {
    store.commit('auth/LOGIN', {key: 'somekey', username: 'someusername', type: 1})
    expect(store.state.auth.authenticated).toEqual(true)
  })
  test('Can check valid credentials from local storage', () => {
    localStorage.setItem('key', 'somekey')
    localStorage.setItem('username', 'someusername')
    localStorage.setItem('type', '1')
    store.commit('auth/INITIALIZE')
    expect(store.state.auth.authenticated).toEqual(true)
  })
  test('Can retrieve valid credentials from local storage', () => {
    localStorage.setItem('key', 'somekey')
    localStorage.setItem('username', 'someusername')
    localStorage.setItem('type', '1')
    store.commit('auth/INITIALIZE')
    expect(store.state.auth.key).toEqual('somekey')
  })
  test('Can successfully logout', () => {
    store.commit('auth/LOGOUT')
    expect(store.state.auth.authenticated).toEqual(false)
  })
  test('Can check invalid credentials from local storage', () => {
    localStorage.removeItem('key')
    localStorage.removeItem('username')
    localStorage.removeItem('type')
    store.commit('auth/INITIALIZE')
    expect(store.state.auth.authenticated).toEqual(false)
  })
  test('Does\'t retrieve invalid credentials from local storage', () => {
    localStorage.removeItem('key')
    localStorage.removeItem('username')
    localStorage.removeItem('type')
    store.commit('auth/INITIALIZE')
    expect(store.state.auth.key).toEqual(null)
  })
})
describe('Auth store actions', () => {
  test('can successfully authenticate', () => {
    return store.dispatch('auth/login', {username: 'goodusername', password: 'goodpassword'})
      .then((response) => expect(response)
        .toEqual(undefined)
      )
  })
  test('can handle invalid authentication credentials', () => {
    return store.dispatch('auth/login', {username: 'badusername', password: 'badpassword'})
      .catch((error) => expect(error.message)
        .toEqual('Invalid username and/or password.')
      )
  })
})
