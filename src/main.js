import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/iview.js'
Vue.config.productionTip = false
console.log(router);
new Vue({
  render: h => h(App),
  router
}).$mount('#app')