import { defineStore } from "pinia";
import { getGoodListApi } from "@/apis/GoodListApi";
import { ref } from "vue";

interface arg {
  categoryId: string,
  page: number,
  pageSize: string,
  sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
}

interface good {
  id: string,
  name: string,
  desc: string,
  price: string,
  picture: string
}

const useGoodListStore = defineStore('goodList', () => {
  const goodlist = ref<good[]>([])
  const getGoodList = async (data: arg) => {
    let res = await getGoodListApi(data)
    goodlist.value = [ ...goodlist.value, ...res.data.result.items ]
  }

  return {
    goodlist,
    getGoodList
  }
})

export default useGoodListStore