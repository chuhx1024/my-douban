import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import '../static/font/iconfont.css'
import './config/rem'
import filters from '@/common/filters'

Vue.config.productionTip = false

// 注册全局过滤器
Object.keys(filters).forEach(item => {
  Vue.filter(item, filters[item])
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
