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
    path : '/login',
    component : () => import('../views/Login.vue')
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

// 动态添加路由
const categoryRoute = {
  path : '/category',
  component : () => import('../views/Category.vue')

}

// 添加顶级路由对象
router.addRoute(categoryRoute);

// 添加二级路由对象
router.addRoute("Home", {
  path : '/moment',
  component : () => import('../views/HomeMoment.vue')
})


// to : Route对象。即将跳转到 的Route对象
// from : Route对象， 从哪一个路由对象导航过来的。
/**
 * 返回值问题 : 
 *  1.  false, 不进行导航
 *  2. undefined或者不写返回值， 进行默认导航
 *  3. 字符串： 路径，跳转到对应的路径中。
 *  4. 对象 ： 类似于 router.push( {path : '/login', query : ...} )
 * 
 */

router.beforeEach((to, from) => {
  // if ( to.path === '/home') {
  // if ( to.path.indexOf('/home') !== -1) {
  //   return '/login';
  // }
  if ( to.path !== '/login') {
    const token = window.localStorage.getItem('token');
    if ( !token ){
      return '/login';
    }
  }
})

export default router
