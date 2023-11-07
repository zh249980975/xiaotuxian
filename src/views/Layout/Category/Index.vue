<template>
  <div>
    <PageHead :title="store.categories?.name"></PageHead>
  </div>
</template>
<script lang="ts" setup>
import PageHead from '@/components/category/PageHead.vue'
import { onMounted } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import useCategoryStore from '@/stores/categoryStores';

const store = useCategoryStore()
const route = useRoute()

onMounted(() => {
  store.getCategories(route.fullPath.split('/')[3])
})

onBeforeRouteUpdate((to) => {
  store.getCategories(to.fullPath.split('/')[3])
})

</script>
<style scoped></style>