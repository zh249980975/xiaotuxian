import { defineStore } from "pinia";
import { ref } from "vue";
import useLoginStore from '@/stores/loginStore'
import { GetCartApi, InsertCartApi, DelCartApi, CartApi } from '@/apis/CartApi'

const useCartStore = defineStore('cart', () => {

  interface good {
    id: string,
    name: string,
    picture: string,
    price: number,
    count: number,
    skuId: string,
    attrsText: string,
    selected: string
  }

  const goodList = ref<good[]>([])

  const Cart = async () => {
    const list: { skuId: string; selected: string; count: number; }[] = []
    goodList.value.map(item => {
      let { skuId, selected, count } = item
      list.push({
        skuId,
        selected,
        count
      })
    })
    let res = await CartApi(list as any)
    res.data.code == '1' ? initCart() : ''
  }

  const initCart = async () => {
    const res = await GetCartApi()
    goodList.value = res.data.result
  }

  const loginStore = useLoginStore()
  const addGood = async (arg: good) => {
    const isLogin = loginStore.userInfo?.token
    const { skuId, count } = arg
    if (isLogin) {
      await InsertCartApi({ skuId, count })
      initCart()
    } else {
      const good = goodList.value?.find(item => item.skuId == arg.skuId)
      if (good) {
        good.count = good.count + arg.count
      } else {
        // 序列化后反序列化以完成深拷贝
        goodList.value.push(JSON.parse(JSON.stringify(arg)))
      }
    }
  }

  const delGood = async (index: number) => {
    const isLogin = loginStore.userInfo?.token
    if (isLogin) {
      let list = [goodList.value[index].skuId]
      let res = await DelCartApi(list)
      res.data.result ? initCart() : ''
    } else {
      goodList.value.splice(index, 1)
    }
  }

  const clearCart = () => {
    goodList.value = []
  }

  return {
    goodList,
    addGood,
    initCart,
    delGood,
    clearCart,
    Cart
  }
}, {
  persist: true
})

export default useCartStore