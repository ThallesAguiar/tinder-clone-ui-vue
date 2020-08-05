import Vue from 'vue'
import App from './App.vue'
import VueTinder from 'vue-tinder'
import vuetify from './plugins/vuetify';

Vue.use(VueTinder)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
