import { defineStore } from "pinia";
import { ref } from "vue";
import { addAddressApi, delAddressApi, getOrderApi, initOrderApi, getUserOrder } from '@/apis/Order'
import useLoginStore from "./loginStore";
import useCartStore from "./cartStore";
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

  interface good {
    skuId: string,
    count: number
  }

  interface property {
    propertyMainName: string,
    propertyValueName: string
  }

  interface sku {
    attrsText: string,
    curPrice: number,
    id: string,
    image: string,
    name: string,
    properties: property[],
    quantity: number,
    realPay: number,
    spuId: string,
    totalMoney: null
  }

  interface orders {
    countdown: number,
    createTime: string,
    id: string,
    orderState: number,
    payChannel: number,
    payLatestTime: string,
    payMoney: number,
    payType: number,
    postFee: number,
    skus: sku[],
    totalMoney: number,
    totalNum: number
  }

  interface res {
    counts: number,
    items: orders[],
    page: number,
    pageSize: number,
    pages: number
  }

  const orderList = ref<res>()
  const info = ref<userInfo>()
  const orderId = ref<string>()
  const loginStore = useLoginStore()
  const cartStore = useCartStore()

  const getInfo = async () => {
    const token = loginStore.userInfo?.token
    if (token) {
      let res = await initOrderApi()
      info.value = res.data.result
    } else {
      ElMessage('请先登录账号')
      router.push('/login')
    }
  }

  const getOrder = async () => {
    let order = {
      "deliveryTimeType": 1,
      "payType": 1,
      "payChannel": 1,
      "buyerMessage": '',
      "goods": <good[]>[],
      "addressId": info.value?.userAddresses.find(item => item.isDefault == 0)?.id
    }
    info.value?.goods.map(item => {
      let good = {
        "skuId": item.skuId,
        "count": item.count
      }
      order.goods.push(good)
    })
    let res = await getOrderApi(order)
    cartStore.initCart()
    orderId.value = res.data.result.id
    router.push({ path: '/index/payload', query: { id: orderId.value } })
  }

  const getOrderList = async (params: any) => {
    let res = await getUserOrder(params)
    orderList.value = res.data.result
  }

  const addAddress = (data: any) => {
    addAddressApi(JSON.stringify(data))
  }

  const delAddress = (id: string) => {
    delAddressApi(id)
  }

  return {
    info,
    orderId,
    orderList,
    getInfo,
    addAddress,
    delAddress,
    getOrder,
    getOrderList
  }
})