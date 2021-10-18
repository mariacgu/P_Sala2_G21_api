import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/reserva',
    name: 'Reserva',
    component: () => import(/* webpackChunkName: "about" */ '../views/Reserva.vue')
  },
  {
    path: '/costa',
    name: 'Costa',
    component: () => import(/* webpackChunkName: "about" */ '../views/Costa.vue')
  },
  {
    path: '/boyaca',
    name: 'Boyaca',
    component: () => import(/* webpackChunkName: "about" */ '../views/Boyaca.vue')
  },
  {
    path: '/caldas',
    name: 'Caldas',
    component: () => import(/* webpackChunkName: "about" */ '../views/Caldas.vue')
  },
  {
    path: '/cundinamarca',
    name: 'Cundinamarca',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cundinamarca.vue')
  },
  {
    path: '/santander',
    name: 'Santander',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cundinamarca.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
