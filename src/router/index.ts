import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'

/* import HomeView from '../views/HomeView.vue'
 import {h} from 'vue'
    // after the unplugin-vue-router install comment area removed.
 */ 

// import AboutView from '@/views/AboutView.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes

  // routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: HomeView,
  //   },
  //   {
  //     path: '/about',
  //     name: 'about',
  //     //component :AboutView
  //     // route level code-splitting
  //     // this generates a separate chunk (About.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import('../views/AboutView.vue'),
  //   },
  //   {
  //     path:'/page/:id',
  //     name:'single-page',
  //     component:() => import('../views/SinglePageView.vue'),
  //   },
  //   {
  //     path: '/:cattchAll(.*)*',
  //     name:'NotFound',
  //     component: h('p',{style:'color: red'} ,'404 Not Found'),

  //   },

  // ],
})

export default router
