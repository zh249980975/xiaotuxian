<template>
  <el-breadcrumb separator="/" class="bread-container container">
    <el-breadcrumb-item :to="{ path: '/' }">
      首页
    </el-breadcrumb-item>
    <el-breadcrumb-item>{{ props.title }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup lang="ts">
const props = defineProps({
  title: String
})
</script>
<style scoped></style>