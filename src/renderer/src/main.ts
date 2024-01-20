// import { devtools } from '@vue/devtools'
import { createApp } from 'vue'
import 'virtual:uno.css'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')

// if (import.meta.env.MODE === 'development') {
// 	devtools.connect('10.0.0.7', 8098)
// }
