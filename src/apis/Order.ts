import instance from '@/utils/http'

export const initOrderApi = () => {
  return instance({
    url: '/member/order/pre'
  })
}

export const addAddressApi = (data: any) => {
  return instance({
    headers: {
      'Content-Type': 'application/json'
    },
    url: '/member/address',
    method: 'POST',
    data
  })
}

export const delAddressApi = (id:string) => {
  return instance({
    url: `/member/address/${id}`,
    method: 'DELETE',
  })
}