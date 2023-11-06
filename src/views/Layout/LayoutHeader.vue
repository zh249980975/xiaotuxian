<script setup lang="ts">
import { Search, ShoppingCart } from '@element-plus/icons-vue'
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
          <el-menu mode="horizontal" :ellipsis="false">
            <el-menu-item>首页</el-menu-item>
            <el-menu-item>居家</el-menu-item>
            <el-menu-item>美食</el-menu-item>
            <el-menu-item>服饰</el-menu-item>
            <el-menu-item>母婴</el-menu-item>
            <el-menu-item>个护</el-menu-item>
            <el-menu-item>严选</el-menu-item>
            <el-menu-item>数码</el-menu-item>
            <el-menu-item>运动</el-menu-item>
            <el-menu-item>杂项</el-menu-item>
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