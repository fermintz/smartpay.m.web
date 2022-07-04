import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/detail/detail.vue')
  },
  {
    path: '/finish',
    name: 'finish',
    component: () => import('../views/finish/finish.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/error/404.vue')
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
