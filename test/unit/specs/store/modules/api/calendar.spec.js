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
mock.onGet('/calendar', {params: {startDate: '2018-06-19', endDate: '2018-07-03'}}).reply(200, {
  'calendar': [
    {
      'id': 15876,
      'subjectName': 'Studieloopbaancoaching jaar 3',
      'subjectCode': 'INFSLC01-3',
      'room': 'H.2.308',
      'className': 'INF3A',
      'date': '2018-06-19',
      'startTime': '09:20',
      'endTime': '11:20',
      'teacher': 'TONIR',
      'periodStart': '2',
      'periodEnd': '3'
    },
    {
      'id': 17122,
      'subjectName': 'Data Science 2- groep A',
      'subjectCode': 'INFDTA02-2',
      'room': 'H.5.314',
      'className': 'INF3D, INF3C, INF3B, INF3A',
      'date': '2018-06-19',
      'startTime': '11:20',
      'endTime': '13:50',
      'teacher': 'BUSAL',
      'periodStart': '4',
      'periodEnd': '6'
    }
  ],
  'appointments': [
    {
      'id': 10,
      'subjectName': 'new one2',
      'subjectCode': '',
      'room': '',
      'className': 'class one',
      'date': '2018-06-19',
      'startTime': '07:55',
      'endTime': '00:15',
      'creator': '0882447@hr.nl'
    }
  ],
  'status': '200'
})
Vue.$axios = mock.axiosInstance
describe('Api calendar store mutations', () => {
  test('Can successfully add all items', () => {
    store.commit('calendar/FIND_BY', [
      {
        'id': 15876,
        'subjectName': 'Studieloopbaancoaching jaar 3',
        'subjectCode': 'INFSLC01-3',
        'room': 'H.2.308',
        'className': 'INF3A',
        'date': '2018-06-19',
        'startTime': '09:20',
        'endTime': '11:20',
        'teacher': 'TONIR',
        'periodStart': '2',
        'periodEnd': '3',
        'readOnly': true
      },
      {
        'id': 17122,
        'subjectName': 'Data Science 2- groep A',
        'subjectCode': 'INFDTA02-2',
        'room': 'H.5.314',
        'className': 'INF3D, INF3C, INF3B, INF3A',
        'date': '2018-06-19',
        'startTime': '11:20',
        'endTime': '13:50',
        'teacher': 'BUSAL',
        'periodStart': '4',
        'periodEnd': '6',
        'readOnly': true
      }
    ])
    expect(store.state.calendar.items).toHaveLength(2)
  })
  test('Can successfully add a single item', () => {
    store.commit('calendar/CREATE', [
      {
        'id': 10,
        'subjectName': 'new one2',
        'subjectCode': '',
        'room': '',
        'className': 'class one',
        'date': '2018-06-19',
        'startTime': '07:55',
        'endTime': '00:15',
        'creator': '0882447@hr.nl'
      }
    ])
    expect(store.state.calendar.items).toHaveLength(3)
  })
  test('Can successfully replace a single item', () => {
    store.commit('calendar/CREATE', [
      {
        'id': 10,
        'subjectName': 'new one2',
        'subjectCode': '',
        'room': '',
        'className': 'class one',
        'date': '2018-06-19',
        'startTime': '07:55',
        'endTime': '00:15',
        'creator': '0882447@hr.nl'
      }
    ])
    expect(store.state.calendar.items).toHaveLength(3)
  })
})
describe('Api notifications store actions', () => {
  test('can successfully retrieve notifications', () => {
    return store.dispatch('calendar/findBy', {startDate: '2018-06-19', endDate: '2018-07-03'})
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
