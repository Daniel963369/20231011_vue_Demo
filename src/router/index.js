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
      path: '/VtextAndVmodel',
      name: 'VtextAndVmodel',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/VtextAndVmodel.vue')
    },
    {
      path:'/Vfor',
      name:'Vfor',
      component: () => import('../views/Vfor.vue')
    },
    {
      path:'/practice1',
      name:'practice1',
      component: () => import('../views/practice1.vue')
    },
    {
      path:'/practice2',
      name:'practice2',
      component: () => import('../views/practice2.vue')
    },
    {
      path:'/Von',
      name:'Von',
      component: () =>import('../views/Von.vue')
    },
    {
      path:'/practice3',
      name:'practice3',
      component: () => import('../views/practice3.vue')
    },
  ]
})

export default router
