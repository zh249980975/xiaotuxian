import { getDetailApi } from '@/apis/DetailApi'
import { defineStore } from 'pinia'
import { ref } from 'vue'

interface evaluationInfo {
  id: string,
  orderInfo: null,
  member: null,
  score: number,
  tags: null,
  content: string,
  pictures: null,
  officialReply: null,
  praiseCount: number,
  createTime: string,
  praisePercent: number
}

interface products {
  id: string,
  name: string,
  desc: string,
  price: string,
  picture: string,
  discount: null,
  orderNum: number,
}

interface detail {
  pictures: string,
  properties: [{
    name: string,
    value: string
  }]
}

interface category {
  id: string,
  name: string,
  layer: string,
  parent: [category[] | null]
}

interface brand {
  id: string,
  name: string,
  nameEn: string,
  logo: string,
  picture: string,
  type: null,
  desc: null,
  place: null
}

interface product {
  id: string,
  name: string,
  spuCode: string,
  desc: string,
  price: string,
  oldPrice: string,
  dicount: string,
  inventory: string,
  brand: brand,
  salesCount: string,
  commentCount: string,
  collectCount: string,
  mainVideo: string,
  videoScale: string,
  mainPictures: string,
  specs: [],
  skus: [],
  categories: category[],
  details: detail,
  isPreSale: boolean,
  isCollect: [boolean | null],
  recommends: null,
  userAddersses: [string | null],
  similarProducts: products[],
  hotByDay: products[],
  evaluationInfo: evaluationInfo[],
}

const useDetailStore = defineStore('detail', () => {

  const defaultDetial = ref<product>()
  const productDetail = ref<product>()

  const loadp = () => {
    productDetail.value = defaultDetial.value
  }

  const getProductDetail = async (id: string) => {
    let res = await getDetailApi(id)
    productDetail.value = res.data.result
    console.log(productDetail.value);
    
  }

  return {
    productDetail,
    getProductDetail,
    loadp
  }
})

export default useDetailStore