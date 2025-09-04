/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<any, any, any>
  export default component
}

// Vue 3 编译器宏全局声明
import type {
  DefineComponent,
  ComponentPublicInstance,
  ComponentCustomProperties,
  ComponentOptionsBase
} from 'vue'

declare global {
  // Vue 3 编译器宏
  const defineProps: typeof import('vue')['defineProps']
  const defineEmits: typeof import('vue')['defineEmits']
  const defineExpose: typeof import('vue')['defineExpose']
  const withDefaults: typeof import('vue')['withDefaults']
  const defineSlots: typeof import('vue')['defineSlots']
  const defineModel: typeof import('vue')['defineModel']
}

export {}