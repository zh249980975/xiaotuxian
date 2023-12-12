<template>
  <div>
    <el-table :data="cartStore.goodList" style="width: 100%" @select="selectAction" @select-all="selectAction"
      height="1000px">
      <el-table-column type="selection" width="55" />
      <el-table-column label="商品属性" align="center">
        <template #default="scope">
          <router-link :to="{ name: 'detail', params: { id: scope.row.id } }">
            <div class="item">
              <div>
                <el-image style="width: 100px; height: 100px" :src="scope.row.picture" fit="fill" />
              </div>
              <div>{{ scope.row.name }}</div>
            </div>
          </router-link>
        </template>
      </el-table-column>
      <el-table-column property="attrsText" label="商品规格" align="center" />
      <el-table-column property="price" label="单价" align="center" />
      <el-table-column label="数量" align="center">
        <template #default="scope">
          <el-input-number v-model="scope.row.count" :min="1" @change="numberChange(scope.row)" />
        </template>
      </el-table-column>
      <el-table-column label="小计" align="center">
        <template #default="scope">
          {{ scope.row.count * scope.row.price }}
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button type="success" text @click="delGood(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="toPlay">
      <div>
        <div>
          共{{ goodNumber }}件商品,已选择{{ selectedGoodNumber }}件商品,商品合计:<span style="color:lightcoral">￥{{
            selectedTotalPrice.toFixed(2)
          }}</span>
        </div>
      </div>
      <div>
        <el-button type="success" @click="toCheckOut">
          下单结算
        </el-button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import useCartStore from '@/stores/cartStore'
import { ElMessage } from 'element-plus';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
const cartStore = useCartStore()
const router = useRouter()

interface good {
  id: string;
  name: string;
  picture: string;
  price: number;
  count: number;
  skuId: string;
  attrsText: string;
  selected: string;
}
const selectGoodList = ref<good[]>([])

const delGood = (arg: any) => {
  const index = cartStore.goodList.indexOf(arg)
  cartStore.delGood(index)
}

const goodNumber = computed(() => {
  return cartStore.goodList.reduce((pre: number, good) => {
    return pre = pre + good.count
  }, 0)
})

const selectedGoodNumber = computed(() => {
  return selectGoodList.value.reduce((pre: number, good) => {
    return pre = pre + good.count
  }, 0)
})

const selectedTotalPrice = computed(() => {
  return selectGoodList.value.reduce((pre: number, good) => {
    return pre = pre + good.price * good.count
  }, 0)
})

const selectAction = (arg: any) => {
  selectGoodList.value = arg
  cartStore.changeSelect(selectGoodList.value)
}

const numberChange = (arg: good) => {
  cartStore.numberChange(arg)
}

const toCheckOut = () => {
  if(selectGoodList.value.length == 0){
    ElMessage('未选择商品进行结算')
    return
  }
  router.push('/index/checkout')
}
</script>
<style scoped lang="scss">
.item {
  display: flex;
  align-items: center;

  div {
    margin: 0 3px;
  }
}

.toPlay {
  background: white;
  height: 90px;
  margin-top: 20px;
  display: flex;
  text-align: center;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  div {
    margin: 0 10px;
  }
}
</style>
