export default () => ({
  items: [],
  primaryKey: 'id',
  columns: [
    {
      text: 'ID',
      sortable: true,
      readOnly: true,
      value: 'id'
    },
    {
      text: 'Timestamp',
      sortable: true,
      readOnly: true,
      value: 'timestamp'
    },
    {
      text: 'Username',
      sortable: true,
      readOnly: true,
      value: 'username'
    },
    {
      text: 'Name',
      sortable: true,
      readOnly: false,
      value: 'name'
    },
    {
      text: 'Description',
      sortable: true,
      readOnly: false,
      value: 'description'
    },
    {
      text: 'Category',
      sortable: true,
      readOnly: false,
      value: 'category'
    },
    {
      text: 'Location',
      sortable: true,
      readOnly: false,
      value: 'location'
    }
  ]
})
