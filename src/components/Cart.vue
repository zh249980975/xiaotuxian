<template>
  <div>
    <el-popover placement="bottom" :width="330" trigger="click" popper-style="{padding:0}">
      <template #reference>
        <el-icon>
          <el-badge :value="store.goodList.length" :hidden="store.goodList.length == 0">
            <ShoppingCart />
          </el-badge>
        </el-icon>
      </template>
      <div class="itemList">
        <ul>
          <li v-for="(item, index) in store.goodList" :key="index" @mouseenter="changeRet(index)"
            @mouseleave="changeRet(-1)">
            <el-row>
              <el-col :span="5">
                <div>
                  <el-image style="width: 60px; height: 60px" :src="item.picture" fit="fill" />
                </div>
              </el-col>
              <el-col :span="12">
                <div>
                  <div style="color: black;">{{ item.name }}</div>
                  <div class="attr">{{ item.attrsText }}</div>
                </div>
              </el-col>
              <el-col :span="6" style="">
                <div>
                  <div style="color: lightcoral;">￥{{ item.price }}</div>
                  <div>x{{ item.count }}</div>
                </div>
              </el-col>
              <el-col :span="1" style="">
                <div v-show="ret == index" @click="delItem(index)">
                  <span>X</span>
                </div>
              </el-col>
            </el-row>
          </li>
        </ul>
        <div class="toPlay">
          <div>
            <div>
              共{{ total }}件商品
            </div>
            <div style="font-size: 18px; color: lightcoral;">￥{{ totalPrice.toFixed(2) }}</div>
          </div>
          <el-button type="success">
            <router-link to="/index/shoppingCart">
              去结算
            </router-link>
          </el-button>
        </div>
      </div>
    </el-popover>
  </div>
</template>
<script setup lang="ts">
import { ShoppingCart } from '@element-plus/icons-vue'
import useCartStore from '@/stores/cartStore'
import { computed, ref } from 'vue';

const store = useCartStore()
const ret = ref<number>()
const changeRet = (index: number) => {
  ret.value = index
}

const delItem = (index: number) => {
  store.goodList.splice(index, 1)
}

const total = computed(() => {
  return store.goodList.reduce((pre: number, cur) => {
    return pre + cur.count
  }, 0)
})

const totalPrice = computed(() => {
  return store.goodList.reduce((pre: number, cur) => {
    return pre + cur.count * cur.price
  }, 0)
})
</script>
<style lang="scss" scoped>
.itemList {
  position: relative;
  padding-bottom: 50px;

  ul {
    li {
      height: 100px;
      text-align: center;
      display: flex;

      div {
        align-items: center;
      }
    }
  }
}

.attr {
  width: 150px;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.toPlay {
  z-index: 100;
  display: flex;
  position: absolute;
  text-align: center;
  bottom: 0;
  height: 50px;
  width: 100%;
  align-items: center;
  background-color: white;
  justify-content: space-between;
}
</style>