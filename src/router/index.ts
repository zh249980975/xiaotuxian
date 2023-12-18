import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Layout/Home/Index.vue'
import Login from '@/views/Login/Index.vue'
import Index from '@/views/Layout/Index.vue'
import Category from '@/views/Layout/Category/Index.vue'
import SubCategory from '@/views/Layout/Category/SubCategory.vue'
import Detail from '@/views/Layout/Detail/Index.vue'
import ShoppingCart from '@/views/Layout/ShoppingCart/index.vue'
import CheckOut from '@/views/Layout/CheckOut/index.vue'
import Payload from '@/views/Layout/Payload/index.vue'
import Payback from '@/views/Layout/Payload/PayBack.vue'
import Center from '@/views/Layout/VipCenter/index.vue'
import UserInfo from '@/views/Layout/VipCenter/MemberInfo.vue'
import UserOrder from '@/views/Layout/VipCenter/MemberOrder.vue'

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
      name: 'detail',
      path: '/index/detail/:id',
      component: Detail
    }, {
      path: '/index/shoppingcart',
      component: ShoppingCart
    }, {
      path: '/index/checkout',
      component: CheckOut
    }, {
      path: '/index/payload',
      component: Payload
    }, {
      path: '/index/payback',
      component: Payback
    }, {
      path: '/index/member',
      component: Center,
      children: [{
        path: '/index/member/user',
        component: UserInfo
      }, {
        path: '/index/member/order',
        component: UserOrder
      }, {
        path: '/index/member',
        redirect: '/index/member/user'
      }]
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