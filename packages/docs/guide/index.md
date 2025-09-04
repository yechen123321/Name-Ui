# 开始使用

Name-UI 是一个跨框架的 UI 组件库，支持 Vue 和 React。

## 设计理念

Name-UI 采用了**核心层 + 适配层**的架构设计：

- **Core 层**：包含框架无关的核心逻辑和类型定义
- **适配层**：为不同框架（Vue/React）提供专门的组件封装
- **主题层**：统一的样式系统和主题定制

## 安装指南

### 环境要求

- Node.js 16+
- Vue 3+ 或 React 18+
- 现代浏览器支持

### 包管理器安装

推荐使用 pnpm：

```bash
# Vue 项目
pnpm add @name-ui/vue @name-ui/theme

# React 项目
pnpm add @name-ui/react @name-ui/theme
```

### CDN 引入

```html
<!-- Vue -->
<script src="https://unpkg.com/@name-ui/vue"></script>
<link rel="stylesheet" href="https://unpkg.com/@name-ui/theme/index.css" />

<!-- React -->
<script src="https://unpkg.com/@name-ui/react"></script>
<link rel="stylesheet" href="https://unpkg.com/@name-ui/theme/index.css" />
```

## 完整引入

### Vue

```js
import { createApp } from 'vue'
import NameUI from '@name-ui/vue'
import '@name-ui/theme'

const app = createApp(App)
app.use(NameUI)
```

### React

```jsx
import '@name-ui/theme'
// 按需引入组件
import { Button, Input } from '@name-ui/react'
```

## 按需引入

### Vue

```vue
<script setup>
import { Button, Input } from '@name-ui/vue'
import '@name-ui/theme'
</script>
```

### React

```jsx
import { Button, Input } from '@name-ui/react'
import '@name-ui/theme'
```

## 主题定制

### 基础主题

```js
// 引入基础主题
import '@name-ui/theme'

// 引入暗色主题
import '@name-ui/theme/dark'
```

### 主题切换

```js
// 切换到暗色主题
document.documentElement.setAttribute('data-theme', 'dark')

// 切换到亮色主题
document.documentElement.setAttribute('data-theme', 'light')
```

## 下一步

- 查看 [组件文档](/components/) 了解所有可用组件
- 学习 [架构设计](/guide/architecture) 深入理解设计思路
