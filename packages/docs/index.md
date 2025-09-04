# Name-UI

通用 UI 组件库，支持 Vue 和 React

## 特性

- 🚀 **跨框架支持** - 支持 Vue 3+ 和 React 18+
- 🎨 **主题定制** - 支持亮色/暗色主题切换
- 📦 **开箱即用** - 完整的 TypeScript 类型支持
- ⚡ **性能优化** - 基于 Vite 的快速构建
- 🔧 **高度可定制** - 灵活的组件配置选项

## 快速开始

### 安装

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

### Vue 使用示例

```vue
<template>
  <div>
    <Button type="primary" @click="handleClick"> 点击我 </Button>
  </div>
</template>

<script setup>
import { Button } from '@name-ui/vue'
import '@name-ui/theme'

const handleClick = () => {
  console.log('Button clicked!')
}
</script>
```

### React 使用示例

```tsx
import React from 'react'
import { Button } from '@name-ui/react'
import '@name-ui/theme'

export default function App() {
  const handleClick = () => {
    console.log('Button clicked!')
  }

  return (
    <div>
      <Button type='primary' onClick={handleClick}>
        点击我
      </Button>
    </div>
  )
}
```

## 文档导航

- [指南](./guide/) - 学习如何使用 Name-UI
- [组件](./components/) - 浏览所有可用组件
- [示例](./examples/vue) - 查看完整示例

## 开源协议

[MIT License](https://github.com/yechen123321/Name-Ui/blob/main/LICENSE)
