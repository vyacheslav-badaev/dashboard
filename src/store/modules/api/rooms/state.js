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
      readOnly: true,
      value: 'humidity'
    },
    {
      text: 'Temperature',
      sortable: true,
      readOnly: true,
      value: 'temperature'
    },
    {
      text: 'MAC Address',
      sortable: true,
      readOnly: true,
      value: 'macaddress'
    }
  ]
})
