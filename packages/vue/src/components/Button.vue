<template>
  <button
    :class="buttonCore.getClassName()"
    :style="buttonCore.getStyle()"
    v-bind="buttonCore.getAttributes()"
    @click="handleClick"
  >
    <template v-if="loading">
      <span class="n-button__loading">
        <slot name="loading">
          <svg class="n-button__spinner" viewBox="0 0 50 50">
            <circle
              class="n-button__spinner-path"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-dasharray="31.416"
              stroke-dashoffset="31.416"
            />
          </svg>
        </slot>
      </span>
    </template>
    <span v-if="!loading || $slots.default" class="n-button__content">
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ButtonCore, type ButtonProps } from '@name-ui/core'

// 定义组件属性
interface Props extends Omit<ButtonProps, 'children' | 'onClick'> {}

const props = withDefaults(defineProps<Props>(), {
  type: 'default',
  size: 'medium',
  disabled: false,
  loading: false,
  block: false
})

// 定义事件
const emit = defineEmits<{
  click: [event: Event]
}>()

// 创建按钮核心逻辑实例
const buttonCore = computed(() => new ButtonCore(props))

// 处理点击事件
const handleClick = (event: Event) => {
  buttonCore.value.handleClick(event)
  if (buttonCore.value.isInteractive()) {
    emit('click', event)
  }
}
</script>

<style scoped>
.n-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  font-weight: 400;
  text-align: center;
  background-image: none;
  outline: none;
}

.n-button:focus {
  outline: 2px solid var(--n-color-primary, #1890ff);
  outline-offset: 2px;
}

.n-button--disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

/* 按钮类型样式 */
.n-button--type-default {
  background-color: #ffffff;
  border-color: #d9d9d9;
  color: rgba(0, 0, 0, 0.88);
}

.n-button--type-default:hover:not(.n-button--disabled) {
  background-color: #f5f5f5;
  border-color: #4096ff;
  color: #4096ff;
}

.n-button--type-primary {
  background-color: #1890ff;
  border-color: #1890ff;
  color: #ffffff;
}

.n-button--type-primary:hover:not(.n-button--disabled) {
  background-color: #4096ff;
  border-color: #4096ff;
}

.n-button--type-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
  color: #ffffff;
}

.n-button--type-success {
  background-color: #52c41a;
  border-color: #52c41a;
  color: #ffffff;
}

.n-button--type-warning {
  background-color: #faad14;
  border-color: #faad14;
  color: #ffffff;
}

.n-button--type-danger {
  background-color: #ff4d4f;
  border-color: #ff4d4f;
  color: #ffffff;
}

/* 按钮尺寸样式 */
.n-button--size-small {
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 2px;
  height: 24px;
}

.n-button--size-medium {
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 4px;
  height: 32px;
}

.n-button--size-large {
  font-size: 16px;
  padding: 12px 24px;
  border-radius: 6px;
  height: 40px;
}

/* 块级按钮 */
.n-button--block {
  width: 100%;
}

/* 加载状态 */
.n-button__loading {
  margin-right: 8px;
}

.n-button__spinner {
  width: 1em;
  height: 1em;
  animation: n-button-spin 1s linear infinite;
}

.n-button__spinner-path {
  animation: n-button-dash 1.5s ease-in-out infinite;
}

@keyframes n-button-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes n-button-dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
</style>