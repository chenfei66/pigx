import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/md.scss'
import axios from 'axios';
import demoBlock from './components/demo-block.vue'
import highlight from './components/highlight/'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//赋值全局对象
window.axios = axios;
Vue.use(Element);
Vue.use(window.AVUE);
Vue.component('demo-block', demoBlock);
Vue.component('highlight', highlight);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
