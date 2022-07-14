export default {
  getAccountType (state, getters) {
    switch (parseInt(state.type)) {
      case 1:
        return 'Student'
      case 2:
        return 'Teacher'
      case 3:
        return 'Servicedesk Employee'
      case 4:
        return 'Admin'
      case 5:
      case 6:
        return 'Test'
      default:
        return ''
    }
  }
}
