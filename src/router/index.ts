import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Layout/Home/Index.vue'
import Login from '@/views/Login/Index.vue'
import Index from '@/views/Layout/Index.vue'
import Category from '@/views/Layout/Category/Index.vue'
import SubCategory from '@/views/Layout/Category/SubCategory.vue'
import Detail from '@/views/Layout/Detail/Index.vue'


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
      path: '/index/category/:cid/sub/:sid',
      component: SubCategory
    }, {
      path: '/index',
      redirect: '/index/home'
    }, {
      path: '/index/detail/:id',
      component: Detail
    }]
  }, {
    path: '/login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router