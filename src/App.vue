<script setup lang="ts">
import { getCategory } from '@/apis/Testapi';
getCategory().then(res => {
  console.log(res.data);
})
</script>

<template>
  <div>
    <router-view></router-view>
    <el-button type="primary">Primary</el-button>
    <div class="test">text</div>
  </div>
</template>

<style lang="scss">

.test {
  color: $priceColor;
}
</style>
