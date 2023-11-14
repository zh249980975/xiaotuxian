import instance from "@/utils/http";

export function getDetailApi(id: string) {
  return instance({
    url: '/goods',
    params: {
      id
    }
  })
}

export function getHotGoodApi(id: string, type: string) {
  return instance({
    url: '/goods/hot',
    params: {
      id,
      type,
      limit: 4
    }
  })
}