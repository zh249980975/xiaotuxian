import instance from '@/utils/http'

export function loginApi(account: string, password: string) {
  return instance({
    url: '/login',
    method: 'post',
    data: {
      account,
      password
    }
  })
}