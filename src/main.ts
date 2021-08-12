import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from './util/element'
import '@/assets/reset.css'
import 'element-plus/packages/theme-chalk/src/base.scss'
const app = createApp(App)

app.use(store).use(router)

Element(app)

app.mount('#app')
