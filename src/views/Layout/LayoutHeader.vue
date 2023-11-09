<script setup lang="ts">
import { Search, ShoppingCart } from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue'
import useCategoryStore from '@/stores/categoryStore'
import { onBeforeRouteUpdate } from 'vue-router';

const store = useCategoryStore()
const ret = ref<boolean>()
onMounted(() => {
  store.getCategory()
})

onBeforeRouteUpdate((to) => {
  ret.value = to.fullPath == '/index/home'
})
</script>

<template>
  <header class="header">
    <el-row>
      <el-col :span="5">
        <div class="logo">
          <a href="http://"></a>
        </div>
      </el-col>
      <el-col :span="14">
        <div class="nav">
          <el-menu mode="horizontal" :ellipsis="false" :router="true" default-active="/index/home">
            <el-menu-item index="/index/home">
              首页
            </el-menu-item>
            <el-menu-item v-for="item in store.categoryList" :key="item.id" :index="`/index/category/${item.id}`">
              {{ item.name }}
            </el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="4">
        <div>
          <div class="search">
            <el-icon>
              <Search />
            </el-icon>
            <input type="text" placeholder="搜一搜">
          </div>
        </div>
      </el-col>
      <el-col :span="1">
        <div class="cart">
          <el-icon>
            <a href="">
              <ShoppingCart />
            </a>
          </el-icon>
        </div>
      </el-col>
    </el-row>
  </header>
</template>


<style scoped lang='scss'>
.header {
  background-color: #FFF;

  .logo {
    padding-left: 50px;

    a {
      width: 200px;
      display: block;
      height: 132px;
      text-indent: -9999px;
      background: url('@/assets/images/logo.png') no-repeat center 18px /contain;
    }
  }

  .nav {
    padding-left: 25px;
    height: 132px;
    display: flex;
    align-items: center;

    .el-menu {
      border: 0;
    }
  }

  .search {
    font-size: 18px;
    height: 78px;
    border-bottom: 1px solid #e7e7e7;
    line-height: 132px;
  }

  .cart {
    line-height: 132px;
    font-size: 18px;
  }
}
</style>