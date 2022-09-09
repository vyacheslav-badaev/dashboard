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
mock.onGet('/notification', {params: {type: 'all'}}).reply(200, {
  'notifications': [
    {
      'location': 'loc1',
      'username': '0882447@hr.nl',
      'timestamp': '2018-06-16 16:56:02.0',
      'image': '',
      'category': 'cat1',
      'id': 1,
      'description': 'des2',
      'name': 'not1'
    },
    {
      'location': 'wd02004',
      'username': '0882447@hr.nl',
      'timestamp': '2018-06-16 16:56:56.0',
      'image': '',
      'category': 'deze',
      'id': 2,
      'description': 'hoi',
      'name': 'Testl'
    },
    {
      'location': 'hier',
      'username': '0882447@hr.nl',
      'timestamp': '2018-06-16 16:55:45.0',
      'image': '',
      'category': 'test',
      'id': 4,
      'description': '',
      'name': 'Hallo'
    }
  ],
  'status': 200
})
Vue.$axios = mock.axiosInstance
describe('Api notifications store mutations', () => {
  test('Can successfully add all items', () => {
    store.commit('notifications/FIND_BY', [
      {
        'location': 'loc1',
        'username': '0882447@hr.nl',
        'timestamp': '2018-06-16 16:56:02.0',
        'image': '',
        'category': 'cat1',
        'id': 1,
        'description': 'des2',
        'name': 'not1'
      },
      {
        'location': 'wd02004',
        'username': '0882447@hr.nl',
        'timestamp': '2018-06-16 16:56:56.0',
        'image': '',
        'category': 'deze',
        'id': 2,
        'description': 'hoi',
        'name': 'Testl'
      }
    ])
    expect(store.state.notifications.items).toHaveLength(2)
  })
  test('Can successfully add a single item', () => {
    store.commit('notifications/CREATE', [
      {
        'location': 'hier',
        'username': '0882447@hr.nl',
        'timestamp': '2018-06-16 16:55:45.0',
        'image': '',
        'category': 'test',
        'id': 4,
        'description': '',
        'name': 'Hallo'
      }
    ])
    expect(store.state.notifications.items).toHaveLength(3)
  })
  test('Can successfully replace a single item', () => {
    store.commit('notifications/CREATE', [
      {
        'location': 'hier',
        'username': '0882447@hr.nl',
        'timestamp': '2018-06-16 16:55:45.0',
        'image': '',
        'category': 'test',
        'id': 4,
        'description': '',
        'name': 'Hallo'
      }
    ])
    expect(store.state.notifications.items).toHaveLength(3)
  })
})
describe('Api notifications store actions', () => {
  test('can successfully retrieve notifications', () => {
    return store.dispatch('notifications/findBy', {})
      .then((response) => expect(response)
        .toEqual(undefined)
      )
  })
  test('can handle failed webservice', () => {
    return store.dispatch('notifications/delete', {})
      .catch((error) => expect(error.message)
        .toEqual('Webservice is currently not available. (Error: Request failed with status code 404)')
      )
  })
})
