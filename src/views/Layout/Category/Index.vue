<template>
  <div>
    <PageHead :title="cStore.categories?.name"></PageHead>
    <div class="home-banner">
      <el-carousel height="500px">
        <el-carousel-item v-for="item in bStore.pictureList" :key="item.id">
          <img :src="item.imgUrl" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script lang="ts" setup>
import PageHead from '@/components/category/PageHead.vue'
import { onMounted } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import useCategoryStore from '@/stores/categoryStores';
import useBannerStore from '@/stores/bannerStore';

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
</style>