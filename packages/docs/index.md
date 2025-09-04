---
layout: home

hero:
  name: 'Name-UI'
  text: '跨框架 UI 组件库'
  tagline: '一套代码，支持 Vue 和 React，让组件开发更高效'
  image:
    src: /logo.svg
    alt: Name-UI
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/
    - theme: alt
      text: 查看组件
      link: /components/
    - theme: alt
      text: GitHub
      link: https://github.com/yechen123321/Name-Ui

features:
  - icon: 🚀
    title: 跨框架支持
    details: 同时支持 Vue 3+ 和 React 18+，一套组件库解决多框架需求，让你的技术栈选择更自由。
  - icon: 🎨
    title: 主题定制
    details: 基于 CSS 变量的强大主题系统，支持亮色/暗色主题切换，轻松实现品牌定制。
  - icon: 📦
    title: 开箱即用
    details: 完整的 TypeScript 类型支持，智能代码提示，让开发更高效、更安全。
  - icon: ⚡
    title: 性能优化
    details: 基于 Vite 构建，支持 Tree-shaking，按需加载，让你的应用更轻量。
  - icon: 🔧
    title: 高度可定制
    details: 灵活的组件配置选项，丰富的 API 设计，满足各种业务场景需求。
  - icon: 🛡️
    title: 类型安全
    details: 完整的 TypeScript 支持，严格的类型检查，减少运行时错误。
  - icon: 🎯
    title: 一致性体验
    details: Vue 和 React 版本 API 完全一致，降低学习成本，提升开发效率。
  - icon: 📱
    title: 响应式设计
    details: 所有组件都经过移动端优化，适配不同屏幕尺寸，提供完美的用户体验。
  - icon: ♿
    title: 无障碍访问
    details: 遵循 WCAG 2.1 标准，支持键盘导航和屏幕阅读器，让每个人都能使用。
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #3b82f6 30%, #8b5cf6);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #3b82f6 50%, #8b5cf6 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>

<!-- ## 快速体验

<div class="demo-container">
  <div class="demo-section">
    <h3>🎯 简单易用</h3>
    <p>只需几行代码，即可开始使用 Name-UI 组件</p>

    <div class="code-example">
      <div class="tabs">
        <button class="tab-btn active" data-tab="vue">Vue</button>
        <button class="tab-btn" data-tab="react">React</button>
      </div>

      <div class="tab-content active" id="vue">

```vue
<template>
  <div class="demo">
    <n-button type="primary" size="large">
      Vue 按钮
    </n-button>
    <n-input v-model="text" placeholder="输入点什么..." />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Button as NButton, Input as NInput } from '@name-ui/vue'
import '@name-ui/theme'

const text = ref('')
</script>
```

      </div>

      <div class="tab-content" id="react">

```tsx
import React, { useState } from 'react'
import { Button, Input } from '@name-ui/react'
import '@name-ui/theme'

export default function Demo() {
  const [text, setText] = useState('')

  return (
    <div className="demo">
      <Button type="primary" size="large">
        React 按钮
      </Button>
      <Input
        value={text}
        onChange={setText}
        placeholder="输入点什么..."
      />
    </div>
  )
}
```

      </div>
    </div>
  </div>
</div> -->

## 🌟 为什么选择 Name-UI？

<div class="why-choose">
  <div class="reason-card">
    <div class="reason-icon">🎯</div>
    <h3>真正的跨框架</h3>
    <p>不是简单的代码复制，而是基于核心层 + 适配层的架构设计，确保 Vue 和 React 版本的完全一致性。</p>
  </div>
  
  <div class="reason-card">
    <div class="reason-icon">⚡</div>
    <h3>现代化构建</h3>
    <p>基于 Vite 的现代化构建系统，支持 ESM、Tree-shaking，让你的应用启动更快、体积更小。</p>
  </div>
  
  <div class="reason-card">
    <div class="reason-icon">🛡️</div>
    <h3>类型安全</h3>
    <p>完整的 TypeScript 支持，不仅有类型定义，更有智能的代码补全和错误检查。</p>
  </div>
</div>

## 📈 发展路线

<div class="roadmap">
  <div class="roadmap-item completed">
    <div class="roadmap-icon">✅</div>
    <div class="roadmap-content">
      <h4>v1.0.0 - 基础组件</h4>
      <p>Button、Input 组件，主题系统，Vue/React 支持</p>
    </div>
  </div>
  
  <div class="roadmap-item">
    <div class="roadmap-icon">🔄</div>
    <div class="roadmap-content">
      <h4>v1.1.0 - 表单组件</h4>
      <p>Select、Checkbox、Radio、Form 组件，国际化支持</p>
    </div>
  </div>
  
  <div class="roadmap-item">
    <div class="roadmap-icon">📋</div>
    <div class="roadmap-content">
      <h4>v1.2.0 - 数据展示</h4>
      <p>Table、Pagination、Modal 组件，移动端优化</p>
    </div>
  </div>
  
  <div class="roadmap-item">
    <div class="roadmap-icon">🎨</div>
    <div class="roadmap-content">
      <h4>v1.3.0 - 高级功能</h4>
      <p>DatePicker、Upload、Tree 组件，可视化主题编辑器</p>
    </div>
  </div>
</div>

## 🤝 社区与支持

<div class="community">
  <div class="community-card">
    <h3>📚 丰富的文档</h3>
    <p>详细的使用指南、完整的 API 文档、丰富的示例代码</p>
    <a href="/guide/">查看指南 →</a>
  </div>
  
  <div class="community-card">
    <h3>💬 活跃的社区</h3>
    <p>GitHub Discussions 技术讨论，Issues 问题反馈，快速响应</p>
    <a href="https://github.com/yechen123321/Name-Ui/discussions">加入讨论 →</a>
  </div>
  
  <div class="community-card">
    <h3>🔧 贡献指南</h3>
    <p>欢迎贡献代码、文档、测试用例，一起让 Name-UI 更好</p>
    <a href="/contributing">参与贡献 →</a>
  </div>
</div>

## 🚀 立即开始

::: code-group

```bash [pnpm]
pnpm add @name-ui/vue @name-ui/theme
# 或者
pnpm add @name-ui/react @name-ui/theme
```

```bash [npm]
npm install @name-ui/vue @name-ui/theme
# 或者
npm install @name-ui/react @name-ui/theme
```

```bash [yarn]
yarn add @name-ui/vue @name-ui/theme
# 或者
yarn add @name-ui/react @name-ui/theme
```

:::

<div class="get-started">
  <a href="/guide/" class="get-started-btn">📖 阅读指南</a>
  <a href="/components/" class="get-started-btn secondary">🧩 浏览组件</a>
  <a href="/examples/vue" class="get-started-btn secondary">💡 查看示例</a>
</div>

---

<div class="footer-info">
  <p>📄 <a href="https://github.com/yechen123321/Name-Ui/blob/main/LICENSE">MIT License</a> | 🌟 <a href="https://github.com/yechen123321/Name-Ui">GitHub Star</a> | 📝 <a href="/changelog">更新日志</a></p>
  <p>让跨框架组件开发变得简单 ❤️</p>
</div>

<style scoped>
.demo-container {
  margin: 2rem 0;
  padding: 2rem;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 1px solid var(--vp-c-border);
}

.demo-section h3 {
  margin: 0 0 1rem 0;
  color: var(--vp-c-brand-1);
}

.code-example {
  margin-top: 1rem;
}

.tabs {
  display: flex;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--vp-c-border);
}

.tab-btn {
  padding: 0.5rem 1rem;
  border: none;
  background: none;
  cursor: pointer;
  color: var(--vp-c-text-2);
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
}

.tab-btn.active {
  color: var(--vp-c-brand-1);
  border-bottom-color: var(--vp-c-brand-1);
}

.tab-content {
  display: none;
}

.tab-content.active {
  display: block;
}

.why-choose {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.reason-card {
  padding: 2rem;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
}

.reason-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.reason-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.reason-card h3 {
  margin: 0 0 1rem 0;
  color: var(--vp-c-text-1);
}

.reason-card p {
  margin: 0;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.roadmap {
  margin: 3rem 0;
}

.roadmap-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
}

.roadmap-item.completed {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}

.roadmap-icon {
  font-size: 1.5rem;
  margin-right: 1rem;
  flex-shrink: 0;
}

.roadmap-content h4 {
  margin: 0 0 0.5rem 0;
  color: var(--vp-c-text-1);
}

.roadmap-content p {
  margin: 0;
  color: var(--vp-c-text-2);
}

.community {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.community-card {
  padding: 2rem;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  transition: transform 0.2s;
}

.community-card:hover {
  transform: translateY(-2px);
}

.community-card h3 {
  margin: 0 0 1rem 0;
  color: var(--vp-c-text-1);
}

.community-card p {
  margin: 0 0 1rem 0;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.community-card a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
}

.community-card a:hover {
  text-decoration: underline;
}

.get-started {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 3rem 0;
  flex-wrap: wrap;
}

.get-started-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s;
  background: var(--vp-c-brand-1);
  color: white;
}

.get-started-btn:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-1px);
}

.get-started-btn.secondary {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-border);
}

.get-started-btn.secondary:hover {
  background: var(--vp-c-bg-mute);
  border-color: var(--vp-c-brand-1);
}

.footer-info {
  text-align: center;
  padding: 2rem 0;
  margin-top: 4rem;
  border-top: 1px solid var(--vp-c-border);
  color: var(--vp-c-text-2);
}

.footer-info p {
  margin: 0.5rem 0;
}

.footer-info a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.footer-info a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .why-choose {
    grid-template-columns: 1fr;
  }
  
  .community {
    grid-template-columns: 1fr;
  }
  
  .get-started {
    flex-direction: column;
    align-items: center;
  }
  
  .get-started-btn {
    width: 200px;
    justify-content: center;
  }
}
</style>
