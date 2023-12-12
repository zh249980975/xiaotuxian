import { defineStore } from "pinia";
import { ref } from "vue";
import { addAddressApi, delAddressApi, initOrderApi } from '@/apis/Order'
import useLoginStore from "./loginStore";
import { ElMessage } from "element-plus";
import router from "@/router";

export const useOrderStore = defineStore('order', () => {

  interface address {
    id: string,
    receiver: string,
    contact: string,
    provinceCode: string,
    cityCode: string,
    countyCode: string,
    address: string,
    isDefault: number,
    fullLocation: string,
    postalCode: string | null,
    addressTags: string | null,
  }


  interface goodList {
    id: string,
    name: string,
    picture: string,
    count: number,
    skuId: string,
    attrsText: string,
    price: string,
    payPrice: string,
    totalPrice: string,
    totalPayPrice: string
  }

  interface order {
    goodsCount: number,
    totalPrice: number,
    totalPayPrice: number,
    postFee: number,
    discountPrice: number
  }

  interface userInfo {
    userAddresses: address[],
    goods: goodList[],
    summary: order
  }

  const info = ref<userInfo>()
  const loginStore = useLoginStore()
  const getInfo = async () => {
    const token = loginStore.userInfo?.token
    if (token) {
      let res = await initOrderApi()
      info.value = res.data.result
      console.log(info.value);
    } else {
      ElMessage('请先登录账号')
      router.push('/login')
    }
  }

  const addAddress = async (data: any) => {
    let res = await addAddressApi(JSON.stringify(data))
    console.log(res.data);
  }

  const delAddress = (id:string) => {
    delAddressApi(id)
  }
  return {
    info,
    getInfo,
    addAddress,
    delAddress
  }
})