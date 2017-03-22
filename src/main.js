import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Icon from 'vue-awesome/components/Icon.vue'
import { routes } from './routes.js'
import './main.scss'
import 'vue-awesome/icons'

Vue.use(VueRouter)
Vue.component('icon', Icon)

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app')
