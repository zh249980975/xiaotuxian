<template>
  <div>
    <el-table ref="multipleTableRef" :data="cartStore.goodList" style="width: 100%">
      <el-table-column type="selection" width="55" />
      <el-table-column label="商品属性" align="center">
        <template #default="scope">
          <div class="item">
            <div>
              <el-image style="width: 100px; height: 100px" :src="scope.row.picture" fit="fill" />
            </div>
            <div>{{ scope.row.name }}</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="price" label="单价" align="center" />
      <el-table-column label="数量" align="center">
        <template #default="scope">
          <el-input-number v-model="scope.row.count" :min="1" />
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
  </div>
</template>
<script setup lang="ts">
import useCartStore from '@/stores/cartStore'
const cartStore = useCartStore()

const delGood = (arg: any) => {
  const index = cartStore.goodList.indexOf(arg)
  cartStore.goodList.splice(index, 1)
}
</script>
<style scoped>
.item {
  display: flex;
  align-items: center;
}
</style>
