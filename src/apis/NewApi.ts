import instance from "@/utils/http";

export function getNewApi() {
  return instance({
    url:'/home/new'
  })
}