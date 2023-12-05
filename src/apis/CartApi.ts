import instance from '@/utils/http'

export const InsertCartApi = ({ skuId, count }: { skuId: string, count: number }) => {
  return instance({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}

export const GetCartApi = () => {
  return instance({
    url: '/member/cart'
  })
}