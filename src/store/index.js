import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import ui from './modules/ui'
import account from './modules/account'
Vue.use(Vuex)
export default () => new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    ui,
    account
  }
})
