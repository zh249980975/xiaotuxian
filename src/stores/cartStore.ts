import { defineStore } from "pinia";
import { ref } from "vue";

const useCartStore = defineStore('cart', () => {

  interface good {
    id: string,
    name: string,
    picture: string,
    count: string,
    skuId: string,
    attrsText: string,
    selected: boolean
  }

  const goodList = ref<good[]>([])

  const addGood = (arg: good) => {
    const good = goodList.value?.find(item => item.skuId == arg.skuId)
    if (good) {
      good.count = good.count + 1
    } else {
      goodList.value.push(arg)
    }
  }

  return {
    goodList,
    addGood
  }
})

export default useCartStore