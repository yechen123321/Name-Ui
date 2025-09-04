# 组件总览

Name-UI 提供了一套完整的 UI 组件，支持 Vue 和 React。

## 基础组件

### Button 按钮

用于触发操作的按钮组件

- [查看文档](/components/button)

### Input 输入框

用于用户输入的表单控件

- [查看文档](/components/input)

## 组件特性

- **跨框架一致性** - Vue 和 React 版本具有相同的 API
- **完整类型支持** - 提供完整的 TypeScript 类型定义
- **主题定制** - 支持亮色/暗色主题以及自定义主题
- **无障碍支持** - 遵循 WCAG 2.1 无障碍访问标准
- **响应式设计** - 支持不同屏幕尺寸的响应式布局

## 使用方式

所有组件都提供 Vue 和 React 两个版本：

::: code-group

```vue [Vue]
<template>
  <Button type="primary"> Vue 按钮 </Button>
</template>

<script setup>
import { Button } from '@name-ui/vue'
</script>
```

```tsx [React]
import { Button } from '@name-ui/react'

export default function App() {
  return <Button type='primary'>React 按钮</Button>
}
```

:::

## 下一步

- 浏览 [Button 组件](/components/button)
- 浏览 [Input 组件](/components/input)
