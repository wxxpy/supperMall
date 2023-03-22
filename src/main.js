import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router/index.js'
const Vue=createApp(App)
Vue.use(router)
Vue.mount('#app')
