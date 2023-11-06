import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from '@/router'
import '@/styles/element/index.scss'
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App)
.use(ElementPlus)
.use(router)
.use(pinia)
.mount('#app')
