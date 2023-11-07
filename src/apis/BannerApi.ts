import instance from '@/utils/http'

export function getPictureApi() {
  return instance({
    url:'/home/banner'
  })
}