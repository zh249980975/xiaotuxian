<template>
  <li>
    <RouterLink :to="{ name: 'detail', params: { id: props.goods.id } }" class="goods-item">
      <img :src="props.goods.picture" />
      <p class="name ellipsis">{{ props.goods.name }}</p>
      <p class="desc ellipsis">{{ props.goods.desc }}</p>
      <p class="price">&yen;{{ props.goods.price }}</p>
    </RouterLink>
  </li>
</template>
<script lang="ts" setup>

const props = defineProps({
  goods: {
    type: Object,
    default: () => ({})
  }
})

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