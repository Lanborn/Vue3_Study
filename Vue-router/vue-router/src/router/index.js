import { createRouter, createWebHistory, createWebHash } from 'vue-router'
// import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect : "/home",
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpoackChunkName: "home-chunk" */ '../views/Home.vue'),
    meta : {
      name : 'lan',
      age : 18,
      height : 1.88
    },
    children : [
      {
        path: 'message',
        component : () => import('../views/HomeMessage.vue'),
      },
      {
        path: 'shop',
        component : () => import('../views/HomeShop.vue'),
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // magic comment
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user/:username/id/:id',
    name : 'User',
    component : () => import('../views/User.vue')
  },
  {
    path : '/:pathMatch(.*)',
    // path : '/:pothMatch(.*)* -> 会将路径分割成数组以 / 开始分割
    component : () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
