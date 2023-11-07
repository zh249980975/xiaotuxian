import { defineStore } from "pinia";
import { getCategoryApi } from "@/apis/CategoryApis";
import { ref } from "vue";

interface good {
  id: string,
  name: string,
  desc: string,
  price: string,
  picture: string,
  discount: null,
  oederNum: number
}

interface category {
  id: string,
  name: string,
  picture: string,
  parentId: null,
  parentName: null,
  goods: good[],
  categories: null,
  brands: null,
  saleProperties: null
}

interface categorys {
  id: string,
  name: string,
  picture: string,
  children: category[]
}

const useCategoryStore = defineStore('categorys', () => {
  const categories = ref<categorys>()

  const getCategories = async (id: string) => {
    let res = await getCategoryApi(id)
    categories.value = res.data.result
  }

  return {
    categories,
    getCategories
  }
})
export default useCategoryStore