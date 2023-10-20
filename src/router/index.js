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
      component: () => import('../views/VtextAndVmodel.vue')
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
    {
      path:'/Vbind',
      name:'Vbind',
      component: () => import('../views/Vbind.vue')
    },
    {
      path:'/practice4',
      name:'practice4',
      component: () => import('../views/practice4.vue')
    },
    {
      path:'/VifAndVshow',
      name:'VifAndVshow',
      component: () => import('../views/VifAndVshow.vue')
    },

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
      path:'/props',
      name:'props',
      component: () => import('../views/props.vue'),
    },
    {
      path:'/propsSign',
      name:'propsSign',
      component: () =>import('../views/propsSign.vue'),
    },
    {
      path:'/Emit',
      name:'Emit',
      component: () =>import('../views/Emit.vue'),
    },
    {
      path:'/accountLogin',
      name:'accountLogin',
      component: () =>import('../views/accountLogin.vue'),
    },
    {
      path:'/dataflow',
      name:'dataflow',
      component: () =>import('../views/dataflow.vue'),
    },
  ]
})

export default router
