import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from '@/router'
import '@/styles/element/index.scss'

createApp(App)
.use(ElementPlus)
.use(router)
.mount('#app')
