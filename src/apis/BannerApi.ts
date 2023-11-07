import instance from '@/utils/http'

export function getPictureApi(distributionSite:string) {
  return instance({
    url:'/home/banner',
    params:{
      distributionSite
    }
  })
}