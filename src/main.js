import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router.js'

// css
import '@/styles/base.css'

const myApp = createApp(App)
myApp.use(router)
myApp.mount('#app')
