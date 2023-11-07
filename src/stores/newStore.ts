import { getNewApi } from "@/apis/NewApi";
import { defineStore } from "pinia";
import { ref } from "vue";

const useNewStore = defineStore('New', () => {

  interface newgood {
    id: string,
    name: string,
    desc: string,
    price: string,
    picture: string,
    discount: null,
    orderNum: number
  }

  const newList = ref<newgood[]>([])

  const getNewList = async () => {
    let res = await getNewApi()
    newList.value = res.data.result
  }

  return {
    newList,
    getNewList
  }
})

export default useNewStore