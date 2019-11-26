import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from'./router';
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import { CardPlugin } from 'bootstrap-vue'
import axios from 'axios'
Vue.config.productionTip = true;
Vue.use(CardPlugin)
Vue.use(VueSidebarMenu)

Vue.use(axios)
Vue.use(BootstrapVue)
new Vue({
  render: h => h(App),
  router: router,
  template: '<router-view></router-view>'
}).$mount('#app')


