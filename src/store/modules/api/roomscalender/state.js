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
      text: 'subjectName',
      sortable: true,
      readOnly: false,
      value: 'subjectName'
    },
    {
      text: 'className',
      sortable: true,
      readOnly: false,
      value: 'className'
    },
    {
      text: 'date',
      sortable: true,
      readOnly: true,
      value: 'date'
    },
    {
      text: 'startTime',
      sortable: true,
      readOnly: false,
      value: 'startTime'
    },
    {
      text: 'endTime',
      sortable: true,
      readOnly: false,
      value: 'endTime'
    },
    {
      text: 'creator',
      sortable: true,
      readOnly: true,
      value: 'creator'
    }
  ]
})
