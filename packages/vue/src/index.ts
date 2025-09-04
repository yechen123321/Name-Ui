import type { App } from 'vue'
import { NButton, NInput } from './components'

// 安装函数
const install = (app: App): void => {
  // 手动指定组件名称，确保类型安全
  app.component('NButton', NButton)
  app.component('NInput', NInput)
}

// Vue 插件
export default {
  install,
}

// 导出组件
export { NButton, NInput }

// 导出 Core 的类型和工具
export * from '@name-ui/core'
