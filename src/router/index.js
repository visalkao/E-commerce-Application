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
      path: '/oldlanding',
      name: 'landing',
      component: () => import('../views/LandingPage.vue')
    },
    {
      path: '/home',
      name: 'Homepage',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/landing',
      component: () => import('../views/LandingPageNew.vue')
    },
    {
      path: '/signin',
      component: () => import('../views/SignIn.vue')
    },
    {
      path: '/products/:id',
      name: 'productdetail',
      component: () => import('../views/ProductDetail.vue')
    },
    {
      path: '/cart/checkout/payment',
      name: 'payment',
      component: () => import('../views/Payment.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/Cart.vue')
    },
    {
      path: '/cart/checkout',
      name: 'checkout',
      component: () => import('../views/CheckoutForm.vue')
    },    
    {
      path: '/cart/checkout/shipping',
      name: 'shipping',
      component: () => import('../views/ShippingMethod.vue')
    }
  ]
})

export default router
