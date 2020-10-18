import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'AddPostIt',
    component: () => import(/* webpackChunkName: "add" */ '../views/PostItAddEdit.vue')
  },
  {
    path: '/edit/:id',
    name: 'EditPostIt',
    component: () => import(/* webpackChunkName: "edit" */ '../views/PostItAddEdit.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
