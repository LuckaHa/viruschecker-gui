import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import { store } from './store'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://127.0.0.1:8080/'
Vue.use(VueAxios, axios)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
