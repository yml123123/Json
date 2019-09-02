import Vue from 'vue'
import App from './App.vue'
import router from './permission'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './css/index.less'
import axios from './utils/axios.config'
import Component from './components'
Vue.use(ElementUI)
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
Vue.prototype.$axios = axios
Vue.use(Component)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
