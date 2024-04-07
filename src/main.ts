import { createApp } from 'vue'
import App from './App.vue'
import VueSaplingTree from './components/index'
const app = createApp(App)

app.use(VueSaplingTree)
app.mount('#app')
