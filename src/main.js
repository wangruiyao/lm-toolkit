import Vue from 'vue'
import App from './App.vue'
import router from 'router'
import 'lib-flexible'
import 'src/assets'

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
