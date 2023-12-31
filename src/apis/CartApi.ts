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

export const DelCartApi = (ids: string[]) => {
  return instance({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids
    }
  })
}

interface good {
  skuId: string,
  selected: string,
  count: number
}
export const CartApi = (data: good[]) => {
  return instance({
    url: '/member/cart/merge',
    method: 'POST',
    data
  })
}

export const selectedCartApi = (data: any) => {
  return instance({
    url: '/member/cart/selected',
    method: 'PUT',
    data
  })
}

export const numberChangeApi = (skuId: string, data: any) => {
  return instance({
    url: `/member/cart/${skuId}`,
    method: 'PUT',
    data
  })
}