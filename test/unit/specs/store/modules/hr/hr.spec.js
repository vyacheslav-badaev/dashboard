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
mock.onGet(process.env.HR_URL, {params: {element: 'WD.01.016', startDate: '2018-01-01', endDate: '2018-12-12', json: true}}).reply(200, {
  'ElementName': 'WD.01.016',
  'ElementType': '4',
  'schoolId': '10',
  'lesson': [
    {
      'LSID': '0',
      'Date': '2018-01-01T00:00:00+01:00',
      'DayNumber': '1',
      'PeriodStart': '1',
      'PeriodEnd': '15',
      'StartTime': '830',
      'EndTime': '2200',
      'Text': 'kerstvakantie',
      'room': {
        'code': 'WD.01.016',
        'building': 'Wijnhaven 103',
        'latitude': '51.917348',
        'longitude': '4.484373'
      }
    }
  ]
})
Vue.$axios = mock.axiosInstance
describe('hr store actions', () => {
  test('get schedule', () => {
    return store.dispatch('hr/getSchedule', {room: 'WD.01.016', startDate: '2018-01-01', endDate: '2018-12-12'})
      .then((response) => expect(response)
        .toEqual([
          {
            'LSID': '0',
            'Date': '2018-01-01T00:00:00+01:00',
            'DayNumber': '1',
            'PeriodStart': '1',
            'PeriodEnd': '15',
            'StartTime': '830',
            'EndTime': '2200',
            'Text': 'kerstvakantie',
            'room': {
              'code': 'WD.01.016',
              'building': 'Wijnhaven 103',
              'latitude': '51.917348',
              'longitude': '4.484373'
            }
          }
        ])
      )
  })
})
