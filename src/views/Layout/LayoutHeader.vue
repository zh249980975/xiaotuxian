<script setup lang="ts">
import { Search, ShoppingCart } from '@element-plus/icons-vue'
import { ref, onMounted } from 'vue'
import { getCategoryApi } from '@/apis/CategoryApi';

interface good {
  id: string,
  name: string,
  desc: string,
  picture: string,
  price: string
}

interface category {
  id: string,
  name: string,
  picture: string,
  children: category[],
  goods: good[],
}

const categoryList = ref<category[]>([])
const getCategory = async () => {
  let res = await getCategoryApi()
  categoryList.value = res.data.result
}
onMounted(() => {
  getCategory()
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
          <el-menu mode="horizontal" :ellipsis="false">
            <el-menu-item v-for="item in categoryList" :key="item.id">{{ item.name }}</el-menu-item>
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