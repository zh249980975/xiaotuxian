import { defineStore } from "pinia";
import { ref } from "vue";
import { getPayApi } from "@/apis/PayloadApi";

export const usePayloadStore = defineStore('pay', () => {
  interface orderInfo {
    id: string,
    createTime: string,
    payType: number,
    orderState: number,
    payLatestTime: string,
    countdown: number,
    postFee: string,
    totalMoney:string
  }
  const pay = ref<orderInfo>()
  const getPay = async (id: string) => {
    let res = await getPayApi(id)
    pay.value = res.data.result
  }
  return {
    pay,
    getPay
  }
})