import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'
import Axios from 'axios'
if (process.env.NODE_ENV === 'production') {
  Raven
    .config('https:
    .addPlugin(RavenVue, Vue)
    .install()
}
const axiosConfig = {
  baseURL: `${process.env.API_URL}`,
  headers: {'Accept': 'application/json'}
}
Vue.$axios = Axios.create(axiosConfig)
Vue.use(Vuetify)
Vue.config.productionTip = false
store.dispatch('auth/initialize')
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
