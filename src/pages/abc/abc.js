import Vue from 'vue'
import App from './abc.vue'
import router from './router'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  render: h => h(App)
})
