import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: () => import('../views/Shopping.vue')
    },    
    {
      path: '/landing',
      name: 'landing',
      component: () => import('../views/LandingPage.vue')
    },
    {
      path: '/home',
      name: 'Homepage',
      component: () => import('../views/HomePage.vue')
    }
  ]
})

export default router
