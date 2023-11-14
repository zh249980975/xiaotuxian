<template>
  <li>
    <RouterLink to="/" class="goods-item" @click="toDetail(props.goods.id)">
      <img :src="props.goods.picture" alt="" />
      <p class="name ellipsis">{{ props.goods.name }}</p>
      <p class="desc ellipsis">{{ props.goods.desc }}</p>
      <p class="price">&yen;{{ props.goods.price }}</p>
    </RouterLink>
  </li>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  goods: {
    type: Object,
    default: ''
  }
})

const toDetail = (id: string) => {
  router.push(`/index/detail/${id}`)
}
</script>
<style lang="scss" scoped>
.goods-item {
  display: block;
  width: 220px;
  padding: 20px 30px;
  text-align: center;
  transition: all .5s;

  &:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
  }

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
</style>