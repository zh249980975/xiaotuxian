<template>
  <div class="top-category">
    <PageHead :title="cStore.categories?.name"></PageHead>
    <div class="home-banner">
      <el-carousel height="500px">
        <el-carousel-item v-for="item in bStore.pictureList" :key="item.id">
          <img :src="item.imgUrl" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="sub-list">
      <h3>全部分类</h3>
      <ul>
        <li v-for="i in cStore.categories?.children" :key="i.id">
          <RouterLink :to="`/index/category/${cStore.categories?.id}/sub/${i.id}`">
            <img :src="i.picture" />
            <p>{{ i.name }}</p>
          </RouterLink>
        </li>
      </ul>
    </div>
    <div class="ref-goods" v-for="item in cStore.categories?.children" :key="item.id">
      <div class="head">
        <h3>- {{ item.name }}-</h3>
      </div>
      <div class="body">
        <GoodsItem v-for="good in item.goods" :goods="good" :key="good.id" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import PageHead from '@/components/category/PageHead.vue'
import { onMounted } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import useCategoryStore from '@/stores/categoryStores';
import useBannerStore from '@/stores/bannerStore';
import GoodsItem from '@/components/category/GoodsItem.vue';
const cStore = useCategoryStore()
const bStore = useBannerStore()
const route = useRoute()

onMounted(() => {
  cStore.getCategories(route.fullPath.split('/')[3])
  bStore.getPictureList('2')
})

onBeforeRouteUpdate((to) => {
  cStore.getCategories(to.fullPath.split('/')[3])
})

</script>

<style scoped lang="scss">
// 部分代码省略
.home-banner {
  width: 1240px;
  height: 500px;
  margin: 0 auto;

  img {
    width: 100%;
    height: 500px;
  }
}

.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        flex: 1;
        width: 168px;
        height: 160px;


        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }

  .bread-container {
    padding: 25px 0;
  }
}
</style>