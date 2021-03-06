import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/User/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/User/Register.vue')
  },
  {
    path: '/self_upload',
    name: 'self_upload',
    component: () => import('../views/User/SelfUpload.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to,from,next) => {
  if (to.path === '/self_upload'){
    const user = localStorage.getItem('user')
    if(!user) return next('/')
  }
  next()
})

export default router
