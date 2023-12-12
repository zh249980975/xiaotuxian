import { defineStore } from "pinia";
import { loginApi } from '@/apis/LoginApi'
import { ref } from "vue";
import useCartStore from "./cartStore";

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

    const userInfo = ref<user | null>()
    const cartStore = useCartStore()
    
    const getUserInfo = async (account: string, password: string) => {
      let res = await loginApi(account, password)
      userInfo.value = res.data.result
      cartStore.initCart()
    }

    const logout = () => {
      userInfo.value = null
      cartStore.clearCart()
    }

    return {
      userInfo,
      getUserInfo,
      logout
    }
  },
  persist: {
    key: 'token',
    paths: ['userInfo']
  }
})

export default useLoginStore