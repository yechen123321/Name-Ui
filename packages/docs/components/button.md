# Button 按钮

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

在 Name-UI 中我们提供了多种按钮。

- 主按钮：用于主行动点，一个操作区域只能有一个主按钮。
- 默认按钮：用于没有主次之分的一组行动点。
- 虚线按钮：常用于添加操作。
- 文本按钮：用于最次级的行动点。
- 链接按钮：一般用于链接，即导航的作用。

## 基础用法

<Demo>
<template #demo>
<div class="demo-container">
  <div class="demo-row">
    <n-button>默认按钮</n-button>
    <n-button type="primary">主要按钮</n-button>
    <n-button type="success">成功按钮</n-button>
    <n-button type="warning">警告按钮</n-button>
    <n-button type="danger">危险按钮</n-button>
  </div>
</div>
</template>
<template #code>

```vue
<template>
  <div class="demo-row">
    <n-button>默认按钮</n-button>
    <n-button type="primary">主要按钮</n-button>
    <n-button type="success">成功按钮</n-button>
    <n-button type="warning">警告按钮</n-button>
    <n-button type="danger">危险按钮</n-button>
  </div>
</template>

<script setup>
import { Button as NButton } from '@name-ui/vue'
</script>
```

</template>
</Demo>

## 尺寸大小

按钮有大、中、小三种尺寸。

<Demo>
<template #demo>
<div class="demo-container">
  <div class="demo-row">
    <div class="demo-item">
      <span class="demo-label">大尺寸</span>
      <div class="demo-row">
        <n-button size="large">大尺寸</n-button>
        <n-button size="large" type="primary">大尺寸</n-button>
      </div>
    </div>
  </div>
  <div class="demo-row">
    <div class="demo-item">
      <span class="demo-label">中尺寸（默认）</span>
      <div class="demo-row">
        <n-button size="medium">中尺寸</n-button>
        <n-button size="medium" type="primary">中尺寸</n-button>
      </div>
    </div>
  </div>
  <div class="demo-row">
    <div class="demo-item">
      <span class="demo-label">小尺寸</span>
      <div class="demo-row">
        <n-button size="small">小尺寸</n-button>
        <n-button size="small" type="primary">小尺寸</n-button>
      </div>
    </div>
  </div>
</div>
</template>
<template #code>

```vue
<template>
  <div class="demo-column">
    <div class="demo-row">
      <n-button size="large">大尺寸</n-button>
      <n-button size="large" type="primary">大尺寸</n-button>
    </div>
    <div class="demo-row">
      <n-button size="medium">中尺寸</n-button>
      <n-button size="medium" type="primary">中尺寸</n-button>
    </div>
    <div class="demo-row">
      <n-button size="small">小尺寸</n-button>
      <n-button size="small" type="primary">小尺寸</n-button>
    </div>
  </div>
</template>

<script setup>
import { Button as NButton } from '@name-ui/vue'
</script>
```

</template>
</Demo>

## 禁用状态

通过 `disabled` 属性来禁用按钮。

::: code-group

```vue [Vue]
<template>
  <div class="demo-row">
    <n-button disabled>禁用按钮</n-button>
    <n-button type="primary" disabled>禁用按钮</n-button>
  </div>
</template>

<script setup>
import { Button as NButton } from '@name-ui/vue'
</script>
```

```tsx [React]
import React from 'react'
import { Button } from '@name-ui/react'

export default function DisabledButtons() {
  return (
    <div className='demo-row'>
      <Button disabled>禁用按钮</Button>
      <Button type='primary' disabled>
        禁用按钮
      </Button>
    </div>
  )
}
```

:::

## 加载状态

通过 `loading` 属性设置按钮载入状态。

<Demo>
<template #demo>
<div class="demo-container">
  <div class="demo-row">
    <n-button :loading="loading" @click="handleClick">
      {{ loading ? '加载中...' : '点击加载' }}
    </n-button>
    <n-button type="primary" loading>加载中</n-button>
    <n-button type="success" :loading="loading2" @click="handleClick2">
      模拟提交
    </n-button>
  </div>
</div>
</template>
<template #code>

```vue
<template>
  <div class="demo-row">
    <n-button :loading="loading" @click="handleClick">
      {{ loading ? '加载中...' : '点击加载' }}
    </n-button>
    <n-button type="primary" loading>加载中</n-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Button as NButton } from '@name-ui/vue'

const loading = ref(false)

const handleClick = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>
```

</template>
</Demo>

## 块级按钮

通过 `block` 属性可以将按钮宽度调整为其父宽度的选项。

<Demo>
<template #demo>
<div class="demo-container">
  <div class="demo-column" style="width: 300px;">
    <n-button type="primary" block>主要按钮</n-button>
    <n-button block>默认按钮</n-button>
    <n-button type="success" block>成功按钮</n-button>
  </div>
</div>
</template>
<template #code>

```vue
<template>
  <div class="demo-column">
    <n-button type="primary" block>主要按钮</n-button>
    <n-button block>默认按钮</n-button>
  </div>
</template>

<script setup>
import { Button as NButton } from '@name-ui/vue'
</script>
```

</template>
</Demo>

## API

### Props

| 参数     | 说明                           | 类型          | 默认值       |
| -------- | ------------------------------ | ------------- | ------------ | ------------ | ------------ | --------- | ----------- |
| type     | 设置按钮类型                   | `'default' \\ | 'primary' \\ | 'success' \\ | 'warning' \\ | 'danger'` | `'default'` |
| size     | 设置按钮大小                   | `'small' \\   | 'medium' \\  | 'large'`     | `'medium'`   |
| disabled | 按钮失效状态                   | `boolean`     | `false`      |
| loading  | 设置按钮载入状态               | `boolean`     | `false`      |
| block    | 将按钮宽度调整为其父宽度的选项 | `boolean`     | `false`      |

### Events

| 事件名 | 说明             | 回调参数                 |
| ------ | ---------------- | ------------------------ |
| click  | 点击按钮时的回调 | `(event: Event) => void` |

::: tip
在 Vue 中使用 `@click`，在 React 中使用 `onClick`
:::

### Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 按钮内容       |
| loading | 自定义加载图标 |

::: warning 注意
Slots 仅在 Vue 版本中可用。React 版本请使用 `children` 和相应的 props。
:::

## 主题定制

### CSS 变量

可以通过 CSS 变量来定制按钮的样式：

```css
:root {
  /* 按钮高度 */
  --n-button-height-small: 24px;
  --n-button-height-medium: 32px;
  --n-button-height-large: 40px;

  /* 按钮颜色 */
  --n-button-color-primary: #1890ff;
  --n-button-color-success: #52c41a;
  --n-button-color-warning: #faad14;
  --n-button-color-danger: #ff4d4f;

  /* 按钮圆角 */
  --n-button-border-radius: 6px;

  /* 按钮内边距 */
  --n-button-padding-horizontal: 16px;
}
```

### 暗色主题

引入暗色主题样式：

```js
import '@name-ui/theme/dark'
```

然后切换主题：

```js
// 切换到暗色主题
document.documentElement.setAttribute('data-theme', 'dark')

// 切换到亮色主题
document.documentElement.setAttribute('data-theme', 'light')
```

## 无障碍

Button 组件遵循 [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/button/) 标准：

- 支持键盘导航（Tab、Enter、Space）
- 提供适当的 ARIA 标签
- 禁用状态下不可交互
- 加载状态下提供视觉反馈
