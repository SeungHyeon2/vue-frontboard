import store from '@/vuex/store'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const requireAuth = () => (from, to, next) => {
  const token = localStorage.getItem('user_token')
  if (token) {
    store.state.isLogin = true
    return next()
  } // isLogin === true면 페이지 이동
  next('/login') // isLogin === false면 다시 로그인 화면으로 이동
}
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "common" */ '../views/common/LoginView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/board/list',
    name: 'BoardList',
    component: () =>
      import(/* webpackChunkName: "board" */ '../views/board/BoardList.vue'),
    beforeEnter: requireAuth()
  },
  {
    path: '/board/detail',
    name: 'BoardDetail',
    component: () =>
      import(/* webpackChunkName: "board" */ '../views/board/BoardDetail.vue'),
    beforeEnter: requireAuth()
  },
  {
    path: '/board/write',
    name: 'BoardWrite',
    component: () =>
      import(/* webpackChunkName: "board" */ '../views/board/BoardWrite.vue'),
    beforeEnter: requireAuth()
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
