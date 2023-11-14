import instance from "@/utils/http";

export function getDetailApi(id: string) {
  return instance({
    url: '/goods',
    params:{
      id
    }
  })
}