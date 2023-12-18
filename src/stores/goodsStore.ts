import { defineStore } from "pinia";
import { getGoodsApi, getLikeApi } from "@/apis/GoodsApi";
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

  interface likeGood {
    id: string,
    name: string,
    picture: string,
    desc: string,
    price: string,
    orderNum: number
  }

  const goodList = ref<goods[]>([])
  const likeGoodList = ref<likeGood[]>([])
  const getGoodList = async () => {
    let res = await getGoodsApi()
    goodList.value = res.data.result
  }

  const getLikeList = async () => {
    let res = await getLikeApi()
    likeGoodList.value = res.data.result
    console.log(likeGoodList.value);
  }

  return {
    goodList,
    likeGoodList,
    getGoodList,
    getLikeList
  }
})

export default useGoodsStore