import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getHotGoodApi } from '@/apis/DetailApi'

interface good{
  id:string,
  name:string,
  desc:string,
  orderNum:string,
  picture:string,
  price:string
}

const useHotGoodStore = defineStore('hotGood', () => {
  const hotGood = ref<good[]>()
  const getHotGood = async(id: string, type: string) => {
    let res = await getHotGoodApi(id, type)
    hotGood.value = res.data.result
  }
  return {
    hotGood,
    getHotGood
  }
})

export default useHotGoodStore