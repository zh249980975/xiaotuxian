import instance from "@/utils/http";

export function getGoodsApi(){
  return instance({
    url:'/home/goods'
  })
}