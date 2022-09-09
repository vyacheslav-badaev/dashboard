import Vue from 'vue'
import Axios from 'axios'
import store from '@/store'
import MockAdapter from 'axios-mock-adapter'
const axiosConfig = {
  baseURL: `${process.env.API_URL}`,
  headers: {'Accept': 'application/json'}
}
let axios = Axios.create(axiosConfig)
let mock = new MockAdapter(axios)
mock.onGet('/rooms').reply(200, {
  'rooms': [
    {
      'name': 'H.0.405',
      'humidity': 29,
      'temperature': 21,
      'macaddress': 'H.0.405'
    },
    {
      'name': 'H.1.110',
      'humidity': 29,
      'temperature': 21,
      'macaddress': 'H.1.110'
    },
    {
      'name': 'H.1.112',
      'humidity': 29,
      'temperature': 21,
      'macaddress': 'H.1.112'
    }
  ],
  'status': 200
})
Vue.$axios = mock.axiosInstance
describe('Api rooms store mutations', () => {
  test('Can successfully add all items', () => {
    store.commit('rooms/FIND_BY', [
      {
        'name': 'H.0.405',
        'humidity': 29,
        'temperature': 21,
        'macaddress': 'H.0.405'
      },
      {
        'name': 'H.1.110',
        'humidity': 29,
        'temperature': 21,
        'macaddress': 'H.1.110'
      }
    ])
    expect(store.state.rooms.items).toHaveLength(2)
  })
  test('Can successfully add a single item', () => {
    store.commit('rooms/CREATE', [
      {
        'name': 'H.1.112',
        'humidity': 29,
        'temperature': 21,
        'macaddress': 'H.1.112'
      }
    ])
    expect(store.state.rooms.items).toHaveLength(3)
  })
  test('Can successfully replace a single item', () => {
    store.commit('rooms/CREATE', [
      {
        'name': 'H.1.112',
        'humidity': 29,
        'temperature': 21,
        'macaddress': 'H.1.112'
      }
    ])
    expect(store.state.rooms.items).toHaveLength(3)
  })
})
describe('Api rooms store actions', () => {
  test('can successfully retrieve rooms', () => {
    return store.dispatch('rooms/findBy', {})
      .then((response) => expect(response)
        .toEqual(undefined)
      )
  })
  test('can handle failed webservice', () => {
    return store.dispatch('rooms/delete', {})
      .catch((error) => expect(error.message)
        .toEqual('Webservice is currently not available. (Error: Request failed with status code 404)')
      )
  })
})
