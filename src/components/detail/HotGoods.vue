<script setup lang="ts">
import useHotGood from '@/stores/hotGoodStore'
import { onMounted } from 'vue';
import useDetailStore from '@/stores/detailStore';

const dStore = useDetailStore()
const store = useHotGood()
const props = defineProps({
  title: String,
  types: {
    type: String,
    require: true,
    default: '1',
  },
  goodId: {
    type: String,
    require: true,
    default: ''
  }
})
onMounted(() => {
  store.getHotGood(props.goodId, props.types)
})

const changeDetail = (id: string) => {
  dStore.getProductDetail(id)
}
</script>


<template>
  <div class="goods-hot">
    <h3>{{ props.title }}</h3>
    <!-- 商品区块 -->
    <RouterLink :to="`/index/detail/${item.id}`" @click="changeDetail(item.id)" class="goods-item"
      v-for="item in store.hotGood" :key="item.id">
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.desc }}</p>
      <p class="price">&yen;{{ item.price }}</p>
    </RouterLink>
  </div>
</template>


<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

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
}
</style>