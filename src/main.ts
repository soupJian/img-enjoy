import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from './util/element'
const app = createApp(App)

app.use(store).use(router)

Element(app)

app.mount('#app')
