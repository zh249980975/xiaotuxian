import { defineStore } from "pinia";
import { ref } from "vue";
import useLoginStore from '@/stores/loginStore'
import { GetCartApi, InsertCartApi } from '@/apis/CartApi'

const useCartStore = defineStore('cart', () => {

  interface good {
    id: string,
    name: string,
    picture: string,
    price: number,
    count: number,
    skuId: string,
    attrsText: string,
    selected: boolean
  }

  const goodList = ref<good[]>([])

  const initCart = (token: any) => {
    if (token) {
      goodList.value = []
    }
  }

  const addGood = async (arg: good) => {
    const loginStore = useLoginStore()
    const isLogin = loginStore.userInfo?.token
    const { skuId, count } = arg
    if (isLogin) {
      await InsertCartApi({ skuId, count })
      const res = await GetCartApi()
      goodList.value = res.data.result
      console.log(res.data.result);
    } else {
      const good = goodList.value?.find(item => item.skuId == arg.skuId)
      if (good) {
        good.count = good.count + arg.count
      } else {
        // 序列化后反序列化以完成深拷贝
        goodList.value.push(JSON.parse(JSON.stringify(arg)))
      }
      console.log(goodList.value);
      
    }
  }

  return {
    goodList,
    addGood,
    initCart
  }
}, {
  persist: true
})

export default useCartStore