# Name-UI 组件文档

## 安装

### Vue 项目

```bash
npm install @name-ui/vue @name-ui/theme
```

### React 项目

```bash
npm install @name-ui/react @name-ui/theme
```

## 快速开始

### Vue 使用方式

#### 全局注册

```typescript
// main.ts
import { createApp } from 'vue'
import NameUI from '@name-ui/vue'
import '@name-ui/theme'

const app = createApp(App)
app.use(NameUI)
```

#### 按需引入

```vue
<template>
  <n-button type="primary" @click="handleClick"> 点击我 </n-button>
  <n-input v-model:value="inputValue" placeholder="请输入" />
</template>

<script setup>
import { NButton, NInput } from '@name-ui/vue'
import { ref } from 'vue'

const inputValue = ref('')
const handleClick = () => {
  console.log('按钮被点击')
}
</script>
```

### React 使用方式

```tsx
import React, { useState } from 'react'
import { Button, Input } from '@name-ui/react'
import '@name-ui/theme'

function App() {
  const [inputValue, setInputValue] = useState('')

  const handleClick = () => {
    console.log('按钮被点击')
  }

  return (
    <div>
      <Button type='primary' onClick={handleClick}>
        点击我
      </Button>
      <Input value={inputValue} onChange={setInputValue} placeholder='请输入' />
    </div>
  )
}
```

## 组件

### Button 按钮

#### 属性

| 属性     | 类型                                                                          | 默认值      | 说明         |
| -------- | ----------------------------------------------------------------------------- | ----------- | ------------ |
| type     | `'default' \| 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'default'` | 按钮类型     |
| size     | `'small' \| 'medium' \| 'large'`                                              | `'medium'`  | 按钮尺寸     |
| disabled | `boolean`                                                                     | `false`     | 是否禁用     |
| loading  | `boolean`                                                                     | `false`     | 是否加载中   |
| block    | `boolean`                                                                     | `false`     | 是否块级元素 |

#### 事件

| 事件名 | 说明     | 回调参数                 |
| ------ | -------- | ------------------------ |
| click  | 点击事件 | `(event: Event) => void` |

#### 示例

```vue
<!-- Vue -->
<n-button type="primary" size="large" @click="handleClick">
  主要按钮
</n-button>
```

```tsx
/* React */
<Button type='primary' size='large' onClick={handleClick}>
  主要按钮
</Button>
```

### Input 输入框

#### 属性

| 属性         | 类型                                                            | 默认值     | 说明             |
| ------------ | --------------------------------------------------------------- | ---------- | ---------------- |
| type         | `'text' \| 'password' \| 'email' \| 'number' \| 'tel' \| 'url'` | `'text'`   | 输入框类型       |
| size         | `'small' \| 'medium' \| 'large'`                                | `'medium'` | 输入框尺寸       |
| placeholder  | `string`                                                        | -          | 占位文本         |
| disabled     | `boolean`                                                       | `false`    | 是否禁用         |
| readonly     | `boolean`                                                       | `false`    | 是否只读         |
| value        | `string`                                                        | -          | 输入框值（受控） |
| defaultValue | `string`                                                        | -          | 默认值（非受控） |

#### 事件

| 事件名 | 说明         | 回调参数                                |
| ------ | ------------ | --------------------------------------- |
| change | 值变化事件   | `(value: string, event: Event) => void` |
| focus  | 获得焦点事件 | `(event: Event) => void`                |
| blur   | 失去焦点事件 | `(event: Event) => void`                |

#### 示例

```vue
<!-- Vue -->
<n-input
  v-model:value="inputValue"
  type="email"
  placeholder="请输入邮箱"
  @change="handleChange"
/>
```

```tsx
/* React */
<Input
  value={inputValue}
  onChange={setInputValue}
  type='email'
  placeholder='请输入邮箱'
/>
```

## 主题定制

### CSS 变量

Name-UI 使用 CSS 变量来实现主题定制：

```css
:root {
  --n-color-primary: #1890ff;
  --n-color-success: #52c41a;
  --n-color-warning: #faad14;
  --n-color-danger: #ff4d4f;
  /* 更多变量... */
}
```

### 暗色主题

```css
/* 引入暗色主题 */
@import '@name-ui/theme/dark';
```

```javascript
// 切换主题
document.documentElement.setAttribute('data-theme', 'dark')
```

## TypeScript 支持

Name-UI 提供完整的 TypeScript 类型定义：

```typescript
import type { ButtonProps, InputProps } from '@name-ui/vue'
// 或
import type { ButtonProps, InputProps } from '@name-ui/react'
```
