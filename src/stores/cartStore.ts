import { defineStore } from "pinia";
import { ref } from "vue";

const useCartStore = defineStore('cart', () => {

  interface good {
    id: string,
    name: string,
    picture: string,
    price:number,
    count: number,
    skuId: string,
    attrsText: string,
    selected: boolean
  }

  const goodList = ref<good[]>([])

  const addGood = (arg: good) => {
    const good = goodList.value?.find(item => item.skuId == arg.skuId)
    if (good) {
      good.count = good.count + arg.count
    } else {
      // 序列化后反序列化以完成深拷贝
      goodList.value.push(JSON.parse(JSON.stringify(arg)))
    }
  }

  return {
    goodList,
    addGood
  }
}, {
  persist: true
})

export default useCartStore