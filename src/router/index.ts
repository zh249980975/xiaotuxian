import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Index from '@/views/Index.vue'
import Category from '@/views/Category.vue'


const routes = [
  {
    path: '/',
    redirect: '/index'
  }, {
    path: '/index',
    component: Index,
    children: [{
      path: '/index/home',
      component: Home
    }, {
      path: '/index/category',
      component: Category
    }]
  }, {
    path: '/login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router