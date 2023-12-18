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

export const delAddressApi = (id: string) => {
  return instance({
    url: `/member/address/${id}`,
    method: 'DELETE',
  })
}

export const getOrderApi = (data: any) => {
  return instance({
    url: '/member/order',
    method: 'POST',
    data
  })
}

/*
params: {
  orderState:0,
  page:1,
  pageSize:2
}
*/
export const getUserOrder = (params: any) => {
  return instance({
    url: '/member/order',
    method: 'GET',
    params
  })
}