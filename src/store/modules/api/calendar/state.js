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
      text: 'Subject',
      sortable: true,
      readOnly: false,
      value: 'subjectName'
    },
    {
      text: 'Class',
      sortable: true,
      readOnly: false,
      value: 'className'
    },
    {
      text: 'Date',
      sortable: true,
      readOnly: false,
      value: 'date',
      type: 'date'
    },
    {
      text: 'Start time',
      sortable: true,
      readOnly: false,
      value: 'startTime',
      type: 'time'
    },
    {
      text: 'End time',
      sortable: true,
      readOnly: false,
      value: 'endTime',
      type: 'time'
    },
    {
      text: 'Creator',
      sortable: true,
      readOnly: true,
      value: 'creator'
    }
  ]
})
