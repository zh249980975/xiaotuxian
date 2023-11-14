<script setup lang="ts">
import useSubCategoryStore from '@/stores/subCategoryStore';
import useGoodListStore from '@/stores/goodListStore';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'
import GoodsItem from '@/components/category/GoodsItem.vue';

const store = useSubCategoryStore()
const route = useRoute()
const gstore = useGoodListStore()
interface arg {
  categoryId: string,
  page: number,
  pageSize: string,
  sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
}
const data = ref<arg>({
  categoryId: '1005000',
  page: 1,
  pageSize: '20',
  sortField: 'publishTime'
})

const tabChange = () => {
  gstore.goodlist = []
  data.value.page = 1
  gstore.getGoodList(data.value)
}

const load = () => {
  data.value.page++
  gstore.getGoodList(data.value)
}

onMounted(() => {
  store.getSubCategoryList(route.fullPath.split('/')[5])
  gstore.getGoodList(data.value)
})
</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/index/category/${store.subCategoryList?.parentId}` }">
          {{ store.subCategoryList?.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ store.subCategoryList?.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="data.sortField" @tab-change="tabChange()">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-immediate="false" infinite-scroll-distance="10px">
        <GoodsItem v-for="good in gstore.goodlist" :goods="good" :key="good.id" />
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>