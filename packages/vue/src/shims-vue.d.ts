import type { DefineComponent } from 'vue'

declare module './components/Button.vue' {
  const Button: DefineComponent<any, any, any>
  export default Button
}

declare module './components/Input.vue' {
  const Input: DefineComponent<any, any, any>
  export default Input
}
