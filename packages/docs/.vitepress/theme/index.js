import DefaultTheme from 'vitepress/theme'
import Demo from '../components/Demo.vue'
import './custom.css'

// 在Vue3组件中直接定义简单组件
const NButton = {
  name: 'NButton',
  props: {
    type: String,
    size: String,
    disabled: Boolean,
    loading: Boolean,
    block: Boolean,
  },
  template: `
    <button 
      class="n-button" 
      :class="[
        type && \`n-button--\${type}\`,
        size && \`n-button--\${size}\`,
        { 'n-button--disabled': disabled },
        { 'n-button--loading': loading },
        { 'n-button--block': block }
      ]"
      :disabled="disabled || loading"
    >
      <span v-if="loading" class="n-button__loading">⌛</span>
      <slot />
    </button>
  `,
}

const NInput = {
  name: 'NInput',
  props: {
    modelValue: String,
    placeholder: String,
    disabled: Boolean,
    size: String,
  },
  emits: ['update:modelValue'],
  template: `
    <input 
      class="n-input"
      :class="[
        size && \`n-input--\${size}\`,
        { 'n-input--disabled': disabled }
      ]"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  `,
}

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册演示组件
    app.component('Demo', Demo)

    // 注册Name-UI组件
    app.component('NButton', NButton)
    app.component('NInput', NInput)
  },
}
