<template>
  <div class="app">
    <header class="app-header">
      <h1>Name-UI Vue 示例</h1>
      <p>这是一个展示 Name-UI 组件库在 Vue 中使用的示例项目</p>
    </header>

    <main class="app-main">
      <section class="section">
        <h2>按钮组件</h2>
        <div class="demo-grid">
          <div class="demo-item">
            <h3>基础按钮</h3>
            <div class="demo-content">
              <n-button>默认按钮</n-button>
              <n-button type="primary">主要按钮</n-button>
              <n-button type="secondary">次要按钮</n-button>
              <n-button type="success">成功按钮</n-button>
              <n-button type="warning">警告按钮</n-button>
              <n-button type="danger">危险按钮</n-button>
            </div>
          </div>

          <div class="demo-item">
            <h3>按钮尺寸</h3>
            <div class="demo-content">
              <n-button size="small">小尺寸</n-button>
              <n-button size="medium">中等尺寸</n-button>
              <n-button size="large">大尺寸</n-button>
            </div>
          </div>

          <div class="demo-item">
            <h3>按钮状态</h3>
            <div class="demo-content">
              <n-button disabled>禁用状态</n-button>
              <n-button :loading="buttonLoading" @click="toggleLoading">
                {{ buttonLoading ? '加载中...' : '点击加载' }}
              </n-button>
              <n-button block type="primary">块级按钮</n-button>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <h2>输入框组件</h2>
        <div class="demo-grid">
          <div class="demo-item">
            <h3>基础输入框</h3>
            <div class="demo-content">
              <n-input v-model="inputValue" placeholder="请输入内容" />
              <p>当前输入值：{{ inputValue }}</p>
            </div>
          </div>

          <div class="demo-item">
            <h3>输入框尺寸</h3>
            <div class="demo-content">
              <n-input size="small" placeholder="小尺寸" />
              <n-input size="medium" placeholder="中等尺寸" />
              <n-input size="large" placeholder="大尺寸" />
            </div>
          </div>

          <div class="demo-item">
            <h3>输入框类型</h3>
            <div class="demo-content">
              <n-input type="text" placeholder="文本输入" />
              <n-input type="password" placeholder="密码输入" />
              <n-input type="email" placeholder="邮箱输入" />
              <n-input type="number" placeholder="数字输入" />
            </div>
          </div>

          <div class="demo-item">
            <h3>输入框状态</h3>
            <div class="demo-content">
              <n-input disabled placeholder="禁用状态" />
              <n-input readonly value="只读状态" />
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <h2>主题切换</h2>
        <div class="demo-item">
          <div class="demo-content">
            <n-button @click="toggleTheme">
              切换到{{ isDark ? '亮色' : '暗色' }}主题
            </n-button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NButton from '../../../packages/vue/src/components/Button.vue'
import NInput from '../../../packages/vue/src/components/Input.vue'

// 响应式数据
const buttonLoading = ref(false)
const inputValue = ref('')
const isDark = ref(false)

// 切换加载状态
const toggleLoading = () => {
  buttonLoading.value = true
  setTimeout(() => {
    buttonLoading.value = false
  }, 2000)
}

// 切换主题
const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
}
</script>

<style scoped>
.app {
  min-height: 100vh;
  background-color: var(--n-bg-color);
  color: var(--n-text-color);
  transition: all var(--n-transition-duration) var(--n-transition-timing);
}

.app-header {
  text-align: center;
  padding: var(--n-spacing-xl);
  border-bottom: 1px solid var(--n-border-color);
}

.app-header h1 {
  margin: 0 0 var(--n-spacing-md) 0;
  font-size: 2.5em;
  font-weight: var(--n-font-weight-bold);
}

.app-header p {
  margin: 0;
  color: var(--n-text-color-secondary);
  font-size: var(--n-font-size-large);
}

.app-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--n-spacing-xl);
}

.section {
  margin-bottom: var(--n-spacing-xl);
}

.section h2 {
  font-size: 1.8em;
  margin-bottom: var(--n-spacing-lg);
  color: var(--n-color-primary);
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--n-spacing-lg);
}

.demo-item {
  border: 1px solid var(--n-border-color);
  border-radius: var(--n-border-radius-medium);
  padding: var(--n-spacing-lg);
  background-color: var(--n-bg-color-secondary);
}

.demo-item h3 {
  margin: 0 0 var(--n-spacing-md) 0;
  font-size: 1.2em;
  font-weight: var(--n-font-weight-medium);
}

.demo-content {
  display: flex;
  flex-direction: column;
  gap: var(--n-spacing-md);
}

.demo-content > * {
  width: 100%;
}

.demo-content p {
  margin: 0;
  padding: var(--n-spacing-sm);
  background-color: var(--n-bg-color);
  border-radius: var(--n-border-radius-small);
  font-size: var(--n-font-size-small);
  color: var(--n-text-color-secondary);
}
</style>