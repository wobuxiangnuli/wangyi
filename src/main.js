import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入初始化样式

import '@/assets/styles/base.css'
import MyElement from '@/components/library' 

createApp(App).use(store).use(router).use(ElementPlus).use(MyElement).mount('#app')
