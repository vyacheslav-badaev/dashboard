import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import ui from './modules/ui'
import auth from './modules/auth'
import hr from './modules/hr'
import notifications from './modules/api/notifications'
import rooms from './modules/api/rooms'
import roomscalender from './modules/api/roomscalender'
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
    notifications,
    rooms,
    roomscalender
  }
})
