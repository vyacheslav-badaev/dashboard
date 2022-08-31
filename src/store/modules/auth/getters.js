export const ACCOUNT_TYPE_STUDENT = 'Student'
export const ACCOUNT_TYPE_TEACHER = 'Teacher'
export const ACCOUNT_TYPE_SERVICE_DESK_EMPLOYEE = 'Servicedesk Employee'
export const ACCOUNT_TYPE_ADMIN = 'Admin'
export const ACCOUNT_TYPE_TEST = 'Test'
export const ACCOUNT_TYPE_NO_ACCOUNT_TYPE = 'No account type'
export default {
  getAccountType (state) {
    switch (parseInt(state.type)) {
      case 1:
        return ACCOUNT_TYPE_STUDENT
      case 2:
        return ACCOUNT_TYPE_TEACHER
      case 3:
        return ACCOUNT_TYPE_SERVICE_DESK_EMPLOYEE
      case 4:
        return ACCOUNT_TYPE_ADMIN
      case 5:
      case 6:
        return ACCOUNT_TYPE_TEST
      default:
        return ACCOUNT_TYPE_NO_ACCOUNT_TYPE
    }
  },
  canCreate: (state, getters) => (params) => {
    let user = getters.getAccountType
    switch (params) {
      case 'rooms':
        switch (user) {
          case ACCOUNT_TYPE_TEACHER:
          case ACCOUNT_TYPE_SERVICE_DESK_EMPLOYEE:
          case ACCOUNT_TYPE_ADMIN:
          case ACCOUNT_TYPE_TEST:
            return true
          case ACCOUNT_TYPE_STUDENT:
          case ACCOUNT_TYPE_NO_ACCOUNT_TYPE:
          default:
            return false
        }
      default:
        return true
    }
  },
  canEdit: (state, getters) => (params) => {
    let user = getters.getAccountType
    switch (params) {
      case 'rooms':
        switch (user) {
          case ACCOUNT_TYPE_TEACHER:
          case ACCOUNT_TYPE_SERVICE_DESK_EMPLOYEE:
          case ACCOUNT_TYPE_ADMIN:
          case ACCOUNT_TYPE_TEST:
            return true
          case ACCOUNT_TYPE_STUDENT:
          case ACCOUNT_TYPE_NO_ACCOUNT_TYPE:
          default:
            return false
        }
      default:
        return true
    }
  }
}
