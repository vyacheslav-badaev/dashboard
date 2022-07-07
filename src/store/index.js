import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import ui from './modules/ui'
import auth from './modules/auth'
import hr from './modules/hr'
import calender from './modules/api/calender'
import students from './modules/api/students'
import teachers from './modules/api/teachers'
import servicedesk from './modules/api/servicedesk'
import admins from './modules/api/admins'
Vue.use(Vuex)
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    ui,
    auth,
    hr,
    calender,
    students,
    teachers,
    servicedesk,
    admins
  }
})
