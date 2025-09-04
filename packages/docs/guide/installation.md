# 安装

## 环境要求

在开始使用 Name-UI 之前，请确保你的开发环境满足以下要求：

### 必需环境

- **Node.js**: 16.x 或更高版本
- **包管理器**: npm 7+、yarn 1.22+ 或 pnpm 6+
- **框架版本**: Vue 3.0+ 或 React 18.0+

### 浏览器支持

- Chrome ≥ 87
- Firefox ≥ 78
- Safari ≥ 14
- Edge ≥ 88

## 安装方法

### 使用包管理器安装

::: code-group

```bash [pnpm]
# Vue 项目
pnpm add @name-ui/vue @name-ui/theme

# React 项目
pnpm add @name-ui/react @name-ui/theme
```

```bash [npm]
# Vue 项目
npm install @name-ui/vue @name-ui/theme

# React 项目
npm install @name-ui/react @name-ui/theme
```

```bash [yarn]
# Vue 项目
yarn add @name-ui/vue @name-ui/theme

# React 项目
yarn add @name-ui/react @name-ui/theme
```

:::

### CDN 引入

如果你不想使用构建工具，可以通过 CDN 的方式引入：

```
<!-- Vue 版本 -->
<script src="https://unpkg.com/@name-ui/vue/dist/index.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@name-ui/theme/index.css">

<!-- React 版本 -->
<script src="https://unpkg.com/@name-ui/react/dist/index.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@name-ui/theme/index.css">
```

## 使用方式

### Vue 项目

#### 全局注册

```
// main.js
import { createApp } from 'vue'
import NameUI from '@name-ui/vue'
import '@name-ui/theme'
import App from './App.vue'

const app = createApp(App)
app.use(NameUI)
app.mount('#app')
```

#### 按需引入（推荐）

``vue
<template>

  <div>
    <n-button type="primary">Primary Button</n-button>
    <n-input v-model="inputValue" placeholder="请输入内容" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Button as NButton, Input as NInput } from '@name-ui/vue'
import '@name-ui/theme'

const inputValue = ref('')
</script>

```

### React 项目

#### 全局样式引入

``jsx
// App.jsx 或 main.jsx
import '@name-ui/theme'
```

#### 组件使用

``jsx
import React, { useState } from 'react'
import { Button, Input } from '@name-ui/react'

function App() {
const [inputValue, setInputValue] = useState('')

return (

<div>
<Button type="primary">Primary Button</Button>
<Input 
        value={inputValue}
        onChange={setInputValue}
        placeholder="请输入内容"
      />
</div>
)
}

export default App

````

## 验证安装

创建一个简单的测试页面来验证 Name-UI 是否正确安装：

::: code-group

```vue [Vue]
<template>
  <div style="padding: 20px;">
    <h1>Name-UI 安装验证</h1>
    <n-button @click="handleClick">点击测试</n-button>
    <n-input v-model="text" placeholder="输入测试" style="margin-top: 10px;" />
    <p v-if="text">输入内容：{{ text }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Button as NButton, Input as NInput } from '@name-ui/vue'

const text = ref('')

const handleClick = () => {
  alert('Name-UI 安装成功！')
}
</script>
````

```jsx [React]
import React, { useState } from 'react'
import { Button, Input } from '@name-ui/react'

export default function VerifyInstallation() {
  const [text, setText] = useState('')

  const handleClick = () => {
    alert('Name-UI 安装成功！')
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Name-UI 安装验证</h1>
      <Button onClick={handleClick}>点击测试</Button>
      <Input
        value={text}
        onChange={setText}
        placeholder='输入测试'
        style={{ marginTop: '10px' }}
      />
      {text && <p>输入内容：{text}</p>}
    </div>
  )
}
```

:::

## 下一步

- 查看 [架构设计](/guide/architecture) 了解 Name-UI 的设计理念
- 浏览 [组件文档](/components/) 学习如何使用各个组件
- 学习 [主题定制](/guide/theming) 来自定义样式
