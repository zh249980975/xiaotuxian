import { defineStore } from "pinia";
import { ref } from "vue";
import { getPayApi } from "@/apis/PayloadApi";
import useCountDownTime from '@/composables/countDownTime';

export const usePayloadStore = defineStore('pay', () => {

  interface orderInfo {
    id: string,
    createTime: string,
    payType: number,
    orderState: number,
    payLatestTime: string,
    countdown: number,
    postFee: string,
    totalMoney: string
  }

  const pay = ref<orderInfo>()
  const { formatTime, start } = useCountDownTime()
  const getPay = async (id: string) => {
    let res = await getPayApi(id)
    pay.value = res.data.result
    start(pay.value?.countdown!)
  }
  return {
    pay,
    getPay,
    formatTime
  }
})