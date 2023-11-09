import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Layout/Home/Index.vue'
import Login from '@/views/Login/Index.vue'
import Index from '@/views/Layout/Index.vue'
import Category from '@/views/Layout/Category/Index.vue'
import SubCategory from '@/views/Layout/Category/SubCategory.vue'


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
      path: '/index/category/:id',
      component: Category
    }, {
      path: '/index/category/:id/sub/:id',
      component: SubCategory
    }, {
      path: '/index',
      redirect: '/index/home'
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