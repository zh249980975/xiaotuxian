import instance from '@/utils/http'

export const getPayApi = (id: string) => {
  return instance({
    url: `/member/order/${id}`
  })
}