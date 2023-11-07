import instance from '@/utils/http'

export function getCategoryApi(id: string) {
  return instance({
    url: '/category',
    params: {
      id
    }
  })
}