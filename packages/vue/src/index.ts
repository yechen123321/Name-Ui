import type { App } from 'vue'
import { NButton, NInput } from './components'

// 所有组件
const components = [
  NButton,
  NInput
]

// 安装函数
const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name || component.__name, component)
  })
}

// Vue 插件
export default {
  install
}

// 导出组件
export {
  NButton,
  NInput
}

// 导出 Core 的类型和工具
export * from '@name-ui/core'