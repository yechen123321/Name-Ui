# Name-UI

一个支持 Vue 和 React 的通用组件库。

## 特性

- 🚀 **框架无关**: 核心逻辑与框架解耦
- 🎯 **多框架支持**: 同时支持 Vue 3+ 和 React 18+
- 📦 **Monorepo**: 使用 pnpm workspace 管理
- 🛠️ **TypeScript**: 完整的类型支持
- ⚡ **Vite**: 快速的开发和构建
- 🎨 **可定制**: 灵活的主题和样式系统

## 架构

```
packages/
├── core/          # 框架无关的核心逻辑
├── vue/           # Vue 适配器
├── react/         # React 适配器
└── theme/         # 主题样式

examples/
├── vue-example/   # Vue 使用示例
└── react-example/ # React 使用示例
```

## 快速开始

### 安装

```bash
# Vue 项目
npm install @name-ui/vue

# React 项目  
npm install @name-ui/react
```

### 使用

#### Vue 项目

```vue
<template>
  <n-button type="primary" @click="handleClick">
    点击我
  </n-button>
</template>

<script setup>
import { NButton } from '@name-ui/vue'

const handleClick = () => {
  console.log('按钮被点击')
}
</script>
```

#### React 项目

```tsx
import { Button } from '@name-ui/react'

function App() {
  const handleClick = () => {
    console.log('按钮被点击')
  }

  return (
    <Button type="primary" onClick={handleClick}>
      点击我
    </Button>
  )
}
```

## 开发

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建所有包
pnpm build

# 运行测试
pnpm test
```

## 许可证

MIT