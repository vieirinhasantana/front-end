// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCookies from 'vue-cookies'
import VueSweetAlert from 'vue-sweetalert'
import Vuetify from 'vuetify'

Vue.use(require('vue-moment'))
Vue.use(VueCookies)
Vue.use(VueSweetAlert)
Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
