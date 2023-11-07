import instance from "@/utils/http";

export function getHotApi() {
  return instance({
    url:'/home/hot',
    method:'get',
    params:{}
  })
}