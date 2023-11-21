<template>
  <div>
    <ul>
      <li v-for="(item, index) in props.speclist" :key="index">
        <div class="contain">
          <div class="title">{{ item.name }}</div>
          <SkuItem :spec="item" @skuSelect="getSku" />
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import SkuItem from './SkuItem.vue';
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

interface skuSpec {
  name: string,
  valueName: string
}

interface sku {
  id: string,
  skuCode: string,
  price: string,
  oldPrice: string,
  inventory: string,
  picture: string,
  specs: skuSpec[]
}

const emits = defineEmits()
const props = defineProps({
  speclist: {
    type: Array<spec>,
    required: true,
    default: []
  },
  skulist: {
    type: Array<sku>,
    required: true,
    default: []
  }
})

const typeSelect = ref<skuSpec[]>()

const getSku = (arg0: string, arg1: desc) => {
  if (typeSelect.value == null || typeSelect.value.length == 0) {
    typeSelect.value = []
    console.log(typeSelect.value?.length);
    for (let i of props.skulist[0].specs) {
      typeSelect.value = [...typeSelect.value, { name: i.name, valueName: "" }]
    }
  }
  typeSelect.value = typeSelect.value.map(item => {
    if (item.name == arg0) {
      item.valueName = arg1.name
    }
    return item
  })
  if (typeSelect.value.filter(item => item.valueName == "").length == 0) {
    emits("data", typeSelect.value)
  } else {
    console.log({});
  }
}
onBeforeRouteUpdate(() => {
  typeSelect.value = []
})
</script>
<style scoped lang="scss">
.contain {
  width: 630px;
  display: flex;
  flex-wrap: wrap;

  .title {
    width: 70px;
    height: 70px;
    text-align: center;
    line-height: 70px;
  }
}
</style>