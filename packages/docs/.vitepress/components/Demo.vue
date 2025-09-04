<template>
  <div class="demo-block">
    <div class="demo-content">
      <slot name="demo"></slot>
    </div>

    <div class="demo-actions">
      <button
        class="demo-action-btn"
        @click="toggleCode"
        :title="showCode ? '隐藏代码' : '显示代码'"
      >
        <svg class="icon" viewBox="0 0 24 24" width="16" height="16">
          <path
            fill="currentColor"
            d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
          />
        </svg>
        {{ showCode ? '隐藏代码' : '显示代码' }}
      </button>

      <button
        class="demo-action-btn"
        @click="copyCode"
        :title="copySuccess ? '复制成功!' : '复制代码'"
      >
        <svg
          v-if="!copySuccess"
          class="icon"
          viewBox="0 0 24 24"
          width="16"
          height="16"
        >
          <path
            fill="currentColor"
            d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
          />
        </svg>
        <svg v-else class="icon" viewBox="0 0 24 24" width="16" height="16">
          <path
            fill="currentColor"
            d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
          />
        </svg>
        {{ copySuccess ? '复制成功!' : '复制代码' }}
      </button>
    </div>

    <div v-show="showCode" class="demo-code">
      <slot name="code"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showCode = ref(false)
const copySuccess = ref(false)
let codeContent = ''

const toggleCode = () => {
  showCode.value = !showCode.value
}

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(codeContent)
    copySuccess.value = true
    setTimeout(() => {
      copySuccess.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy code:', err)
  }
}

onMounted(() => {
  // 获取代码内容用于复制
  const codeElement = document.querySelector('.demo-code pre code')
  if (codeElement) {
    codeContent = codeElement.textContent || ''
  }
})
</script>

<style scoped>
.demo-block {
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  margin: 20px 0;
  overflow: hidden;
  transition: box-shadow 0.2s;
}

.demo-block:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.demo-content {
  padding: 24px;
  background: var(--vp-c-bg);
  border-bottom: 1px solid var(--vp-c-border);
}

.demo-actions {
  display: flex;
  gap: 8px;
  padding: 12px 16px;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-border);
}

.demo-action-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border: 1px solid var(--vp-c-border);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.demo-action-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.demo-action-btn:active {
  transform: translateY(1px);
}

.icon {
  flex-shrink: 0;
}

.demo-code {
  background: var(--vp-code-block-bg);
}

.demo-code :deep(pre) {
  margin: 0;
  padding: 20px;
  background: transparent;
}

.demo-code :deep(code) {
  background: transparent;
}

/* 暗色主题适配 */
[data-theme='dark'] .demo-block {
  border-color: var(--vp-c-border);
}

[data-theme='dark'] .demo-content {
  background: var(--vp-c-bg-alt);
}

[data-theme='dark'] .demo-actions {
  background: var(--vp-c-bg-soft);
}

[data-theme='dark'] .demo-action-btn {
  background: var(--vp-c-bg-alt);
  border-color: var(--vp-c-border);
}
</style>
