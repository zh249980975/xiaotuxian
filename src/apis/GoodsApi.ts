import instance from "@/utils/http";

export function getGoodsApi(){
  return instance({
    url:'/home/goods'
  })
}

export function getLikeApi() {
  return instance({
    url: '/goods/relevant',
    params: {
      limit: 4
    }
  })
}