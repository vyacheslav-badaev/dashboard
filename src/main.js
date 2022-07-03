import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'
if (process.env.NODE_ENV === 'production') {
  Raven
    .config('https:
    .addPlugin(RavenVue, Vue)
    .install()
}
Vue.use(Vuetify)
Vue.config.productionTip = false
store.dispatch('auth/check')
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
