import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCategoryApi } from '@/apis/CategoryApi'

const useCategoryStore = defineStore('category', () => {

  interface good {
    id: string,
    name: string,
    desc: string,
    picture: string,
    price: string
  }

  interface category {
    id: string,
    name: string,
    picture: string,
    children: category[],
    goods: good[],
  }

  const categoryList = ref<category[]>([])

  const getCategory = async () => {
    let res = await getCategoryApi()
    categoryList.value = res.data.result
    console.log(categoryList.value);
    
  }

  return {
    categoryList,
    getCategory
  }
})

export default useCategoryStore