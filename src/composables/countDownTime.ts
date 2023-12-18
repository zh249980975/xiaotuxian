import { ref, computed } from "vue"
const useCountDownTime = () => {

  const time = ref<number>(0)
  const formatTime = computed(() => {
    return Math.floor(time.value / 60) + '分' + time.value % 60 + '秒'
  })
  const start = (arg: number) => {
    time.value = arg
    const countDown = setInterval(() => {
      time.value > 0 ? time.value-- : clearInterval(countDown)
    }, 1000)
  }
  return {
    formatTime,
    start
  }
}

export default useCountDownTime