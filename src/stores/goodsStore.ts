import { defineStore } from "pinia";
import { getGoodsApi } from "@/apis/GoodsApi";
import { ref } from "vue";

const useGoodsStore = defineStore('goods', () => {


  interface good {
    id: string,
    name: string,
    desc: string,
    price: string,
    picture: string
  }

  interface category {
    id: string,
    name: string,
    layer: number,
    parent: null
  }

  interface goods {
    id: string,
    name: string,
    picture: string,
    saleInfo: string,
    children: category[],
    goods: good[]
  }

  const goodList = ref<goods[]>([])

  const getGoodList = async () => {
    let res = await getGoodsApi()
    goodList.value = res.data.result
    console.log(goodList.value);
    
  }

  return {
    goodList,
    getGoodList
  }
})

export default useGoodsStore