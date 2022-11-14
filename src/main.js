import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import VueSplide from "@splidejs/vue-splide";

Vue.config.productionTip = false

Vue.use( VueSplide );
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app')
