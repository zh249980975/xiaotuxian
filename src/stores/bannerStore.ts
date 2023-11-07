import { defineStore } from "pinia";
import { ref } from "vue";
import { getPictureApi } from '@/apis/BannerApi'

const useBannerStore = defineStore('banner', () => {

  interface picture {
    id: string,
    imgUrl: string,
    hrefUrl: string,
    type: string
  }

  const pictureList = ref<picture[]>([])

  const getPictureList = async (distributionSite:string) => {
    let res = await getPictureApi(distributionSite)
    pictureList.value = res.data.result
  }

  return {
    pictureList,
    getPictureList
  }

})

export default useBannerStore