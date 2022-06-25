import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

import VueFlags from "@growthbunker/vueflags";

Vue.use(VueFlags, {
  // Specify the path of the folder where the flags are stored.
  iconPath: '/flags/',
});
