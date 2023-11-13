import instance from "@/utils/http";

interface arg {
  categoryId: string,
  page: number,
  pageSize: string,
  sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
}

export const getGoodListApi = (data: arg) => {
  return instance({
    url: '/category/goods/temporary',
    method: 'POST',
    data
  })
}