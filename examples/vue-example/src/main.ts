import { createApp } from 'vue'
import App from './App.vue'

// 引入 Name-UI 主题样式
import '../../../packages/theme/dist/index.css'
import '../../../packages/theme/dist/dark.css'

const app = createApp(App)

app.mount('#app')
