import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getHotApi } from '@/apis/HotApi'

const useHotStore = defineStore('Hot', () => {

  interface hotgood {
    id: string,
    picture: string,
    title: string,
    alt: string
  }

  const hotGoodList = ref<hotgood[]>([])

  const getHotGoodList = async () => {
    let res = await getHotApi()
    hotGoodList.value = res.data.result
  }

  return {
    hotGoodList,
    getHotGoodList
  }
})

export default useHotStore