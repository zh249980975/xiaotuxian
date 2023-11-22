<template>
  <div>
    <template v-for="(item, index) in props.spec.values">
      <el-image class="item" v-if="item.picture != null" :class="{ 'select': index == num }" @click="numClick(index)"
        :src="item.picture" fit="fill" />
      <div class="item" style="padding: 0 5px;" v-else :key="index" :class="{ 'select': index == num }"
        @click="numClick(index)">{{
          item.name }}</div>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { PropType, ref } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';

interface desc {
  name: string,
  picture: string,
  desc: string,
}

interface spec {
  id: string,
  name: string,
  values: desc[]
}

const num = ref()
const emits = defineEmits()

const props = defineProps({
  spec: {
    type: Object as PropType<spec>,
    required: true
  }
})

const numClick = (index: number) => {
  num.value = index
  emits("skuSelect", props.spec.name, props.spec.values[index])
}

onBeforeRouteUpdate(() => {
  num.value = -1
})
</script>

<style scoped>
.item {
  float: left;
  height: 50px;
  margin: 10px;
  text-align: center;
  line-height: 50px;
  border: 1px solid #ccc;
}

.select {
  outline: green solid 1px;
}
</style>