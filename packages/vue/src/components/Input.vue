<template>
  <input
    :class="inputCore.getClassName()"
    :style="inputCore.getStyle()"
    v-bind="inputCore.getAttributes()"
    :value="inputCore.getValue()"
    @input="handleInput"
    @change="handleChange"
    @focus="handleFocus"
    @blur="handleBlur"
  />
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { InputCore, type InputProps } from '@name-ui/core'

// 定义组件属性
interface Props extends Omit<InputProps, 'onChange' | 'onFocus' | 'onBlur'> {
  modelValue?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  size: 'medium',
  disabled: false,
  readonly: false
})

// 定义事件
const emit = defineEmits<{
  'update:modelValue': [value: string]
  change: [value: string, event: Event]
  input: [value: string, event: Event]
  focus: [event: Event]
  blur: [event: Event]
}>()

// 内部值状态
const internalValue = ref(props.modelValue || props.value || props.defaultValue || '')

// 创建输入框核心逻辑实例
const inputCore = computed(() => {
  const coreProps = {
    ...props,
    value: props.modelValue !== undefined ? props.modelValue : (props.value !== undefined ? props.value : internalValue.value),
    onChange: (value: string, event: Event) => {
      if (props.modelValue === undefined && props.value === undefined) {
        internalValue.value = value
      }
      emit('update:modelValue', value)
      emit('change', value, event)
    },
    onFocus: (event: Event) => emit('focus', event),
    onBlur: (event: Event) => emit('blur', event)
  }
  return new InputCore(coreProps)
})

// 监听外部值变化
watch(() => props.modelValue, (newValue) => {
  if (newValue !== undefined) {
    internalValue.value = newValue
  }
})

watch(() => props.value, (newValue) => {
  if (newValue !== undefined) {
    internalValue.value = newValue
  }
})

// 处理输入事件
const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = target.value
  
  if (props.modelValue === undefined && props.value === undefined) {
    internalValue.value = value
  }
  
  emit('update:modelValue', value)
  emit('input', value, event)
}

// 处理变化事件
const handleChange = (event: Event) => {
  inputCore.value.handleChange(event)
}

// 处理焦点事件
const handleFocus = (event: Event) => {
  inputCore.value.handleFocus(event)
}

// 处理失焦事件
const handleBlur = (event: Event) => {
  inputCore.value.handleBlur(event)
}
</script>

<style scoped>
.n-input {
  position: relative;
  display: inline-block;
  width: 100%;
  border: 1px solid #d9d9d9;
  background-color: #ffffff;
  color: rgba(0, 0, 0, 0.88);
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  outline: none;
}

.n-input:focus {
  border-color: #4096ff;
  box-shadow: 0 0 0 2px rgba(64, 150, 255, 0.2);
}

.n-input:hover:not(.n-input--disabled):not(.n-input--readonly) {
  border-color: #4096ff;
}

.n-input--disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
  opacity: 0.6;
}

.n-input--readonly {
  background-color: #f5f5f5;
  cursor: default;
}

/* 输入框尺寸样式 */
.n-input--size-small {
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 2px;
  height: 24px;
}

.n-input--size-medium {
  font-size: 14px;
  padding: 8px 12px;
  border-radius: 4px;
  height: 32px;
}

.n-input--size-large {
  font-size: 16px;
  padding: 12px 16px;
  border-radius: 6px;
  height: 40px;
}
</style>