import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getSubCategoryApi } from '@/apis/SubCategory'

const useSubCategoryStore = defineStore('subCategory', () => {

  interface good {
    id: string,
    name: string,
    desc: string,
    price: string,
    picture: string,
    orderNum: string
  }

  interface property{
    id:string,
    name:string
  }

  interface saleProperty{
    id:string,
    name:string,
    properties:property[]
  }

  interface brand{
    id:string,
    name:string,
    nameEn:string,
    logo:string,
    desc:string,
    picture:string,
    place:string,
    type:null
  }

  interface category{
    id:string,
    name:string,
    layer:string,
    parent:null
  }

  interface subCategory {
    id: string,
    name: string,
    picture: string,
    parentId: string,
    parentName: string,
    goods: good[],
    categories: category[],
    brands: brand[],
    saleProperties: saleProperty[]
  }

  const subCategoryList = ref<subCategory>()

  const getSubCategoryList = async (id: string) => {
    let res = await getSubCategoryApi(id)
    subCategoryList.value = res.data.result
    console.log(res.data.result);
  }

  return {
    subCategoryList,
    getSubCategoryList,
  }
})

export default useSubCategoryStore