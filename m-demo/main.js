// import 'babel-polyfill'
// import 'core-js/fn/object/assign'
// https://blog.csdn.net/a324539017/article/details/52824189

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})