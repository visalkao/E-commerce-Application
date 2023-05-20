import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/Homepage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../components/Signup.vue')
    }
  ]
})

export default router
