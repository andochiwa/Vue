import Vue from 'vue'
import App from './App.vue'

// import VueRouter from "vue-router";
// 显式声明使用vue-router
// Vue.use(VueRouter);

import router from '@/router/index' // 导入路由，index可以不用写，会自动被搜索

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
