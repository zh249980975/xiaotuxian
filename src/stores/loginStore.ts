import { defineStore } from "pinia";
import { loginApi } from '@/apis/LoginApi'
import { ref } from "vue";

const useLoginStore = defineStore('login', {
  state: () => {
    interface user {
      id: string,
      account: string,
      mobile: string,
      token: string,
      avatar: string,
      nickname: string,
      gender: string,
      birthday: string,
      cityCode: string,
      provinceCode: string,
      profession: string
    }

    const userInfo = ref<user>()

    const getUserInfo = async (account: string, password: string) => {
      let res = await loginApi(account, password)
      userInfo.value = res.data.result
    }

    const logout = () => {

    }

    return {
      userInfo,
      getUserInfo,
      logout
    }
  },
  persist: {
    key: 'userInfo',
    paths: ['userInfo']
  }
})

export default useLoginStore