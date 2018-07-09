import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import List from '../views/list'
import NotFoundComponent from '../views/404/'


Vue.use(VueRouter)

// 异步加载
// var How = import('./components/How')



export default new VueRouter({
  // mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/list', component: List },

    
    // { path: '*', redirect: '/' }
    { path: '*', component: NotFoundComponent }
  ]
})