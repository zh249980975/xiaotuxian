<template>
  <div>
    <LayoutNav/>
    <LayoutHeader/>
    <router-view/>
    <LayoutFooter/>
  </div>
</template>
<script lang="ts" setup>
import LayoutNav from './LayoutNav.vue';
import LayoutHeader from './LayoutHeader.vue';
import LayoutFooter from './LayoutFooter.vue';
</script>
<style lang="">
  
</style>