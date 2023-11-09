import instance from "@/utils/http";

export function getSubCategoryApi(id: string) {
  return instance({
    url:'/category/sub/filter',
    params:{
      id
    }
  })
}