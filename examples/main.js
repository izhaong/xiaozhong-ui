/*
 * @Description:
 * @Author: 仲灏<izhaong 164165005@qq.com>
 * @Date: 2020-09-15 17:35:11
 * @LastEditors: 仲灏<izhaong 164165005@qq.com>
 * @LastEditTime: 2020-09-15 18:12:21
 */
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// 导入组件库
import xiaozhongUI from '../packages/index'
Vue.use(xiaozhongUI)

// 开启debug模式
Vue.config.debug = true

// 注册组件库
Vue.config.productionTip = false

const router = new VueRouter({
  esModule: false,
  mode: 'history',
  routes: [{
    path: '/table',
    component: resolve => require(['./routers/table/index.vue'], resolve)
  }]
})
Vue.use(VueRouter)

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
