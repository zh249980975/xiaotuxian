<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />
</template>
<script lang="ts" setup>
import HomeCategory from '@/components/home/HomeCategory.vue'
import HomeBanner from '@/components/home/HomeBanner.vue'
import HomeNew from '@/components/home/HomeNew.vue'
import HomeHot from '@/components/home/HomeHot.vue'
import HomeProduct from '@/components/home/HomeProduct.vue'
</script>
<style lang="">
  
</style>