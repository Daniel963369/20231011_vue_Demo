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

      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    {
      path:'/practice5',
      name:'practice5',
      component: () => import('../views/practice5.vue'),
      children: [
      {
        path:"branch1",
        component: () => import('../components/branch1.vue')
      },
      {
        path:"branch2",
        component: () => import('../components/branch2.vue')
      },
      {
        path:"branch3",
        component: () => import('../components/branch3.vue')
      },
      {
        path:"branch4",
        component: () => import('../components/branch4.vue')
      },
      {
        path:"branch5",
        component: () => import('../components/branch5.vue')
      },
      {
        path:"branch6",
        component: () => import('../components/branch6.vue')
      },
    ]
    },
    {
      path:'/propsSign',
      name:'propsSign',
      component: () =>import('../views/propsSign.vue'),
    },
    {
      path:'/accountLogin',
      name:'accountLogin',
      component: () =>import('../views/accountLogin.vue'),
    },
    {
      path:'/ledger',
      name:'ledger',
      component: () =>import('../components/ledger.vue'),
    },
    {
      path:'/dataflow',
      name:'dataflow',
      component: () =>import('../views/dataflow.vue'),
    },
    {
      path:'/HTMLANDCSS',
      name:'HTMLANDCSS',
      component: () =>import('../views/HTMLANDCSS.vue'),
    },
    {
      path:'/vueNote',
      name:'vueNote',
      component: () =>import('../views/vueNote.vue'),
    },
  ]
})

export default router
