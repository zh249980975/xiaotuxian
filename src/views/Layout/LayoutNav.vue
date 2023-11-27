<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router';
import useLoginStore from '@/stores/loginStore';

const store = useLoginStore()
const router = useRouter()
const res = ref<boolean>(false)
const login = () => {
  router.push('/login')
}

const logout = () => {
  localStorage.removeItem('userInfo')
  store.logout
  res.value = false
}

onMounted(() => {
  
})
</script>

<template>
  <nav class="black">
    <ul>
      <template v-if="res">
        <a>我的订单</a>
        <li>
          <a>会员中心</a>
        </li>
        <li @click="logout">
          <a>退出登录</a>
        </li>
      </template>
      <template v-else>
        <a @click="login">请先登录</a>
        <li>
          <a>帮助中心</a>
        </li>
        <li>
          <a>关于我们</a>
        </li>
      </template>
    </ul>
  </nav>
</template>


<style scoped lang="scss">
.black {
  width: 100%;
  background-color: #333;

  ul {
    display: flex;
    height: 50px;
    justify-content: flex-end;
    align-items: center;

    li {
      float: right;
      text-align: center;

      a {
        display: inline-block;
        margin-right: 2px;
        border-left: 1px solid white;
      }
    }
  }
}

a {
  width: 90px;
  font-size: 14px;
  color: white;
  text-align: center;
}
</style>