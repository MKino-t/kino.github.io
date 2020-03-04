import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
console.log(Router)
export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: () => import('@/components/home'),
    hidden: true
  }]
})
