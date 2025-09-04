# Input 输入框

用于用户输入的基础表单控件。

## 基础用法

最基本的输入框使用方式：

::: code-group

```vue [Vue]
<template>
  <div class="demo-container">
    <n-input v-model="value" placeholder="请输入内容" />
    <p>输入的值：{{ value }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Input as NInput } from '@name-ui/vue'

const value = ref('')
</script>
```

```tsx [React]
import React, { useState } from 'react'
import { Input } from '@name-ui/react'

export default function BasicInput() {
  const [value, setValue] = useState('')

  return (
    <div className='demo-container'>
      <Input value={value} onChange={setValue} placeholder='请输入内容' />
      <p>输入的值：{value}</p>
    </div>
  )
}
```

:::

## 禁用状态

通过 `disabled` 属性禁用输入框：

::: code-group

```vue [Vue]
<template>
  <div class="demo-container">
    <n-input v-model="value" disabled placeholder="禁用状态" />
    <n-input v-model="value2" disabled value="已有内容的禁用状态" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Input as NInput } from '@name-ui/vue'

const value = ref('')
const value2 = ref('已有内容的禁用状态')
</script>
```

```tsx [React]
import React from 'react'
import { Input } from '@name-ui/react'

export default function DisabledInput() {
  return (
    <div className='demo-container'>
      <Input disabled placeholder='禁用状态' />
      <Input disabled value='已有内容的禁用状态' />
    </div>
  )
}
```

:::

## 不同尺寸

提供三种不同的尺寸：小、中、大。

::: code-group

```vue [Vue]
<template>
  <div class="demo-container">
    <n-input v-model="value" size="small" placeholder="小尺寸" />
    <n-input v-model="value" size="medium" placeholder="中尺寸（默认）" />
    <n-input v-model="value" size="large" placeholder="大尺寸" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Input as NInput } from '@name-ui/vue'

const value = ref('')
</script>
```

```tsx [React]
import React, { useState } from 'react'
import { Input } from '@name-ui/react'

export default function SizedInput() {
  const [value, setValue] = useState('')

  return (
    <div className='demo-container'>
      <Input
        value={value}
        onChange={setValue}
        size='small'
        placeholder='小尺寸'
      />
      <Input
        value={value}
        onChange={setValue}
        size='medium'
        placeholder='中尺寸（默认）'
      />
      <Input
        value={value}
        onChange={setValue}
        size='large'
        placeholder='大尺寸'
      />
    </div>
  )
}
```

:::

## 前缀和后缀

可以在输入框内添加前缀和后缀：

::: code-group

```vue [Vue]
<template>
  <div class="demo-container">
    <n-input v-model="value" placeholder="用户名">
      <template #prefix>
        <UserIcon />
      </template>
    </n-input>

    <n-input v-model="password" type="password" placeholder="密码">
      <template #suffix>
        <EyeIcon @click="togglePassword" />
      </template>
    </n-input>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Input as NInput } from '@name-ui/vue'

const value = ref('')
const password = ref('')

const togglePassword = () => {
  // 切换密码显示/隐藏
}
</script>
```

```tsx [React]
import React, { useState } from 'react'
import { Input } from '@name-ui/react'

export default function PrefixSuffixInput() {
  const [value, setValue] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='demo-container'>
      <Input
        value={value}
        onChange={setValue}
        placeholder='用户名'
        prefix={<UserIcon />}
      />

      <Input
        value={password}
        onChange={setPassword}
        type='password'
        placeholder='密码'
        suffix={<EyeIcon onClick={() => {}} />}
      />
    </div>
  )
}
```

:::

## 状态提示

显示不同的输入状态：

::: code-group

```vue [Vue]
<template>
  <div class="demo-container">
    <n-input v-model="value" status="success" placeholder="成功状态" />
    <n-input v-model="value" status="warning" placeholder="警告状态" />
    <n-input v-model="value" status="error" placeholder="错误状态" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Input as NInput } from '@name-ui/vue'

const value = ref('')
</script>
```

```tsx [React]
import React, { useState } from 'react'
import { Input } from '@name-ui/react'

export default function StatusInput() {
  const [value, setValue] = useState('')

  return (
    <div className='demo-container'>
      <Input
        value={value}
        onChange={setValue}
        status='success'
        placeholder='成功状态'
      />
      <Input
        value={value}
        onChange={setValue}
        status='warning'
        placeholder='警告状态'
      />
      <Input
        value={value}
        onChange={setValue}
        status='error'
        placeholder='错误状态'
      />
    </div>
  )
}
```

:::

## 计数器

显示输入字符计数：

::: code-group

```vue [Vue]
<template>
  <div class="demo-container">
    <n-input
      v-model="value"
      placeholder="最多输入50个字符"
      maxlength="50"
      show-count
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Input as NInput } from '@name-ui/vue'

const value = ref('')
</script>
```

```tsx [React]
import React, { useState } from 'react'
import { Input } from '@name-ui/react'

export default function CountInput() {
  const [value, setValue] = useState('')

  return (
    <div className='demo-container'>
      <Input
        value={value}
        onChange={setValue}
        placeholder='最多输入50个字符'
        maxLength={50}
        showCount
      />
    </div>
  )
}
```

:::

## 文本域

多行文本输入：

::: code-group

```vue [Vue]
<template>
  <div class="demo-container">
    <n-input
      v-model="value"
      type="textarea"
      placeholder="请输入多行文本"
      rows="4"
    />

    <n-input
      v-model="value2"
      type="textarea"
      placeholder="自动调整高度"
      autosize
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Input as NInput } from '@name-ui/vue'

const value = ref('')
const value2 = ref('')
</script>
```

```tsx [React]
import React, { useState } from 'react'
import { Input } from '@name-ui/react'

export default function TextareaInput() {
  const [value, setValue] = useState('')
  const [value2, setValue2] = useState('')

  return (
    <div className='demo-container'>
      <Input
        value={value}
        onChange={setValue}
        type='textarea'
        placeholder='请输入多行文本'
        rows={4}
      />

      <Input
        value={value2}
        onChange={setValue2}
        type='textarea'
        placeholder='自动调整高度'
        autosize
      />
    </div>
  )
}
```

:::

## API

### Props

| 属性            | 说明               | 类型                                                     | 默认值     |
| --------------- | ------------------ | -------------------------------------------------------- | ---------- |
| value / v-model | 绑定值             | `string \| number`                                       | -          |
| type            | 输入框类型         | `'text' \| 'password' \| 'email' \| 'url' \| 'textarea'` | `'text'`   |
| placeholder     | 占位符             | `string`                                                 | -          |
| disabled        | 是否禁用           | `boolean`                                                | `false`    |
| readonly        | 是否只读           | `boolean`                                                | `false`    |
| size            | 输入框尺寸         | `'small' \| 'medium' \| 'large'`                         | `'medium'` |
| status          | 输入状态           | `'success' \| 'warning' \| 'error'`                      | -          |
| maxlength       | 最大输入长度       | `number`                                                 | -          |
| minlength       | 最小输入长度       | `number`                                                 | -          |
| show-count      | 是否显示字符计数   | `boolean`                                                | `false`    |
| clearable       | 是否显示清除按钮   | `boolean`                                                | `false`    |
| prefix          | 前缀内容           | `string \| VNode \| ReactNode`                           | -          |
| suffix          | 后缀内容           | `string \| VNode \| ReactNode`                           | -          |
| rows            | 文本域行数         | `number`                                                 | `3`        |
| autosize        | 自动调整文本域高度 | `boolean \| object`                                      | `false`    |

### Events

| 事件名 | 说明               | 参数                                |
| ------ | ------------------ | ----------------------------------- |
| change | 值改变时触发       | `(value: string \| number) => void` |
| input  | 输入时触发         | `(value: string \| number) => void` |
| focus  | 获得焦点时触发     | `(event: FocusEvent) => void`       |
| blur   | 失去焦点时触发     | `(event: FocusEvent) => void`       |
| clear  | 点击清除按钮时触发 | `() => void`                        |

### Slots / Props (React)

| 名称   | 说明     |
| ------ | -------- |
| prefix | 前缀内容 |
| suffix | 后缀内容 |

## 主题定制

### CSS 变量

可以通过以下 CSS 变量自定义输入框样式：

```css
.n-input {
  /* 尺寸 */
  --n-input-height-small: 24px;
  --n-input-height-medium: 32px;
  --n-input-height-large: 40px;

  /* 颜色 */
  --n-input-color: #1f2937;
  --n-input-color-placeholder: #9ca3af;
  --n-input-background: #ffffff;
  --n-input-border-color: #d1d5db;
  --n-input-border-color-hover: #3b82f6;
  --n-input-border-color-focus: #2563eb;
  --n-input-border-color-error: #ef4444;

  /* 状态颜色 */
  --n-input-border-color-success: #10b981;
  --n-input-border-color-warning: #f59e0b;

  /* 间距 */
  --n-input-padding-horizontal: 12px;
  --n-input-padding-vertical: 8px;

  /* 字体 */
  --n-input-font-size: 14px;
  --n-input-line-height: 1.5;

  /* 圆角 */
  --n-input-border-radius: 6px;

  /* 阴影 */
  --n-input-box-shadow-focus: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
```

### 暗色主题

``css
[data-theme="dark"] .n-input {
--n-input-color: #f9fafb;
--n-input-color-placeholder: #6b7280;
--n-input-background: #1f2937;
--n-input-border-color: #374151;
--n-input-border-color-hover: #60a5fa;
--n-input-border-color-focus: #3b82f6;
}

```

### 自定义样式示例

```

/_ 圆形输入框 _/
.n-input--round {
--n-input-border-radius: 999px;
}

/_ 无边框样式 _/
.n-input--borderless {
--n-input-border-color: transparent;
--n-input-background: #f3f4f6;
}

/_ 彩色边框 _/
.n-input--colorful {
--n-input-border-color: linear-gradient(45deg, #3b82f6, #8b5cf6);
}

```

## 无障碍访问

Input 组件遵循 WAI-ARIA 标准：

- 支持键盘导航
- 提供适当的 ARIA 属性
- 支持屏幕阅读器
- 明确的焦点指示

``vue
<template>
  <div>
    <label for="username">用户名</label>
    <n-input
      id="username"
      v-model="username"
      aria-label="请输入用户名"
      aria-required="true"
    />
  </div>
</template>
```

## 相关组件

- [Button 按钮](/components/button) - 常与输入框配合使用
- Form 表单 - 表单容器组件
- FormItem 表单项 - 表单项容器组件
