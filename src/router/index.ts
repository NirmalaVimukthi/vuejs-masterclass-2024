import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../pages/HomeView.vue'
import {h} from 'vue'

// import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),


  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
   },
    {
      path: '/about',
      name: 'about',
      //component :AboutView
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/AboutView.vue'),
    },
    {
      path:'/page/:id',
      name:'single-page',
      component:() => import('../pages/SinglePageView.vue'),
    },
    {
      path: '/:cattchAll(.*)*',
      name:'NotFound',
      component: h('p',{style:'color: red'} ,'404 Not Found'),

    },

  ],
})

export default router
