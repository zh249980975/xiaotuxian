import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@/styles/element/index.scss'
import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import router from '@/router'

createApp(App)
.use(ElementPlus)
.use(router)
.mount('#app')
