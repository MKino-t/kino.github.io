import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// console.log(Router)
export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: () => import('@/views/index.vue'),
    redirect:'/home',
    hidden: true,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home.vue'),
      },
      {
        path: '/self',
        name: 'self',
        component: () => import('@/views/self.vue'),
      },
      {
        path: '/profession',
        name: 'profession',
        component: () => import('@/views/profession.vue'),
      },
      {
        path: '/project',
        name: 'project',
        component: () => import('@/views/project.vue'),
      },
      {
        path: '/carrer',
        name: 'carrer',
        component: () => import('@/views/carrer.vue'),
      }
    ]
  }]
})
