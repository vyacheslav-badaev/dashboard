export default () => ({
  items: [],
  primaryKey: 'macaddress',
  columns: [
    {
      text: 'Name',
      sortable: true,
      readOnly: false,
      value: 'name'
    },
    {
      text: 'Humidity',
      sortable: true,
      readOnly: false,
      value: 'humidity'
    },
    {
      text: 'Temperature',
      sortable: true,
      readOnly: false,
      value: 'temperature'
    },
    {
      text: 'MAC Address',
      sortable: true,
      readOnly: false,
      value: 'macaddress'
    }
  ]
})
