# 主题定制

Name-UI 提供了强大而灵活的主题定制系统，支持亮色/暗色主题切换以及完全自定义的主题方案。

## 基础主题

### 引入主题

Name-UI 提供了开箱即用的主题文件：

```javascript
// 引入基础主题（亮色主题）
import '@name-ui/theme'

// 或者引入特定主题文件
import '@name-ui/theme/index.css'
import '@name-ui/theme/dark.css' // 暗色主题
```

### 主题切换

通过设置 `data-theme` 属性来切换主题：

```javascript
// 切换到暗色主题
document.documentElement.setAttribute('data-theme', 'dark')

// 切换到亮色主题
document.documentElement.setAttribute('data-theme', 'light')

// 或者移除属性使用默认主题
document.documentElement.removeAttribute('data-theme')
```

### 自动主题切换

响应系统主题偏好：

```javascript
// 检测系统主题偏好
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')

// 设置初始主题
document.documentElement.setAttribute(
  'data-theme',
  prefersDark.matches ? 'dark' : 'light'
)

// 监听系统主题变化
prefersDark.addEventListener('change', e => {
  document.documentElement.setAttribute(
    'data-theme',
    e.matches ? 'dark' : 'light'
  )
})
```

## CSS 变量系统

Name-UI 基于 CSS 变量构建主题系统，所有颜色、尺寸、间距都可以自定义。

### 颜色系统

```css
:root {
  /* 主色调 */
  --n-color-primary: #3b82f6;
  --n-color-primary-hover: #2563eb;
  --n-color-primary-active: #1d4ed8;
  --n-color-primary-light: #dbeafe;

  /* 功能色 */
  --n-color-success: #10b981;
  --n-color-warning: #f59e0b;
  --n-color-error: #ef4444;
  --n-color-info: #3b82f6;

  /* 中性色 */
  --n-color-text: #1f2937;
  --n-color-text-secondary: #6b7280;
  --n-color-text-disabled: #9ca3af;
  --n-color-border: #d1d5db;
  --n-color-background: #ffffff;
  --n-color-background-secondary: #f9fafb;

  /* 阴影 */
  --n-shadow-small: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --n-shadow-medium: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --n-shadow-large: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
```

### 暗色主题变量

```css
[data-theme='dark'] {
  /* 主色调保持不变 */
  --n-color-primary: #60a5fa;
  --n-color-primary-hover: #3b82f6;
  --n-color-primary-active: #2563eb;

  /* 中性色反转 */
  --n-color-text: #f9fafb;
  --n-color-text-secondary: #d1d5db;
  --n-color-text-disabled: #6b7280;
  --n-color-border: #374151;
  --n-color-background: #111827;
  --n-color-background-secondary: #1f2937;

  /* 调整阴影 */
  --n-shadow-small: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  --n-shadow-medium: 0 4px 6px -1px rgba(0, 0, 0, 0.4);
  --n-shadow-large: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
}
```

### 尺寸系统

```css
:root {
  /* 字体大小 */
  --n-font-size-xs: 12px;
  --n-font-size-sm: 14px;
  --n-font-size-base: 16px;
  --n-font-size-lg: 18px;
  --n-font-size-xl: 20px;

  /* 组件尺寸 */
  --n-size-small: 24px;
  --n-size-medium: 32px;
  --n-size-large: 40px;
  --n-size-xlarge: 48px;

  /* 间距 */
  --n-spacing-xs: 4px;
  --n-spacing-sm: 8px;
  --n-spacing-md: 16px;
  --n-spacing-lg: 24px;
  --n-spacing-xl: 32px;
  --n-spacing-2xl: 48px;

  /* 圆角 */
  --n-border-radius-sm: 4px;
  --n-border-radius-md: 6px;
  --n-border-radius-lg: 8px;
  --n-border-radius-xl: 12px;
  --n-border-radius-full: 9999px;
}
```

## 自定义主题

### 创建自定义主题

创建自己的主题文件：

```css
/* my-theme.css */
:root {
  /* 自定义品牌色 */
  --n-color-primary: #8b5cf6;
  --n-color-primary-hover: #7c3aed;
  --n-color-primary-active: #6d28d9;

  /* 自定义成功色 */
  --n-color-success: #059669;

  /* 自定义圆角 */
  --n-border-radius-md: 12px;

  /* 自定义字体 */
  --n-font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

/* 自定义组件样式 */
.n-button {
  font-weight: 600;
  letter-spacing: 0.025em;
}

.n-input {
  border-width: 2px;
}
```

### 主题预设

创建多套主题预设：

```css
/* themes.css */

/* 蓝色主题 */
[data-theme='blue'] {
  --n-color-primary: #3b82f6;
  --n-color-primary-hover: #2563eb;
  --n-color-primary-active: #1d4ed8;
}

/* 绿色主题 */
[data-theme='green'] {
  --n-color-primary: #10b981;
  --n-color-primary-hover: #059669;
  --n-color-primary-active: #047857;
}

/* 紫色主题 */
[data-theme='purple'] {
  --n-color-primary: #8b5cf6;
  --n-color-primary-hover: #7c3aed;
  --n-color-primary-active: #6d28d9;
}

/* 橙色主题 */
[data-theme='orange'] {
  --n-color-primary: #f59e0b;
  --n-color-primary-hover: #d97706;
  --n-color-primary-active: #b45309;
}
```

### 动态主题切换器

创建一个主题切换组件：

::: code-group

```vue [Vue]
<template>
  <div class="theme-switcher">
    <select v-model="currentTheme" @change="changeTheme">
      <option value="light">亮色主题</option>
      <option value="dark">暗色主题</option>
      <option value="blue">蓝色主题</option>
      <option value="green">绿色主题</option>
      <option value="purple">紫色主题</option>
      <option value="orange">橙色主题</option>
    </select>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentTheme = ref('light')

const changeTheme = () => {
  document.documentElement.setAttribute('data-theme', currentTheme.value)
  localStorage.setItem('theme', currentTheme.value)
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'light'
  currentTheme.value = savedTheme
  changeTheme()
})
</script>
```

```tsx [React]
import React, { useState, useEffect } from 'react'

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState('light')

  const changeTheme = (theme: string) => {
    setCurrentTheme(theme)
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    changeTheme(savedTheme)
  }, [])

  return (
    <div className='theme-switcher'>
      <select value={currentTheme} onChange={e => changeTheme(e.target.value)}>
        <option value='light'>亮色主题</option>
        <option value='dark'>暗色主题</option>
        <option value='blue'>蓝色主题</option>
        <option value='green'>绿色主题</option>
        <option value='purple'>紫色主题</option>
        <option value='orange'>橙色主题</option>
      </select>
    </div>
  )
}
```

:::

## 组件级定制

### 单独定制组件

可以为特定组件创建自定义样式：

```css
/* 自定义按钮样式 */
.my-custom-button {
  --n-color-primary: #ec4899;
  --n-border-radius-md: 20px;

  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* 自定义输入框样式 */
.my-custom-input {
  --n-border-radius-md: 0;

  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid var(--n-color-primary);
  background: transparent;
}
```

### 使用自定义样式

::: code-group

```vue [Vue]
<template>
  <div>
    <n-button class="my-custom-button">自定义按钮</n-button>
    <n-input class="my-custom-input" placeholder="自定义输入框" />
  </div>
</template>
```

```tsx [React]
export default function CustomComponents() {
  return (
    <div>
      <Button className='my-custom-button'>自定义按钮</Button>
      <Input className='my-custom-input' placeholder='自定义输入框' />
    </div>
  )
}
```

:::

## 设计系统

### 颜色语义化

Name-UI 的颜色系统遵循语义化设计：

```css
:root {
  /* 主要颜色 - 用于主要操作 */
  --n-color-primary: #3b82f6;

  /* 成功颜色 - 用于成功状态 */
  --n-color-success: #10b981;

  /* 警告颜色 - 用于警告状态 */
  --n-color-warning: #f59e0b;

  /* 错误颜色 - 用于错误状态 */
  --n-color-error: #ef4444;

  /* 信息颜色 - 用于信息提示 */
  --n-color-info: #3b82f6;
}
```

### 渐变色支持

支持渐变色主题：

```css
:root {
  /* 渐变主色 */
  --n-gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --n-gradient-success: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  --n-gradient-warning: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  --n-gradient-error: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
}

/* 使用渐变色的按钮 */
.n-button--gradient {
  background: var(--n-gradient-primary);
  border: none;
  color: white;
}
```

### 响应式主题

支持响应式的主题变量：

```css
:root {
  --n-spacing-md: 16px;
  --n-font-size-base: 16px;
}

/* 移动端调整 */
@media (max-width: 768px) {
  :root {
    --n-spacing-md: 12px;
    --n-font-size-base: 14px;
  }
}

/* 大屏幕调整 */
@media (min-width: 1200px) {
  :root {
    --n-spacing-md: 20px;
    --n-font-size-base: 18px;
  }
}
```

## 主题工具

### 主题生成器

可以使用在线工具或脚本生成自定义主题：

```javascript
// theme-generator.js
function generateTheme(primaryColor) {
  const lighten = (color, amount) => {
    // 颜色变亮逻辑
  }

  const darken = (color, amount) => {
    // 颜色变暗逻辑
  }

  return {
    '--n-color-primary': primaryColor,
    '--n-color-primary-hover': darken(primaryColor, 10),
    '--n-color-primary-active': darken(primaryColor, 20),
    '--n-color-primary-light': lighten(primaryColor, 90),
  }
}

// 使用示例
const blueTheme = generateTheme('#3b82f6')
const greenTheme = generateTheme('#10b981')
```

### 主题验证

确保主题的可访问性：

```javascript
// theme-validator.js
function validateThemeContrast(backgroundColor, textColor) {
  const contrast = calculateContrast(backgroundColor, textColor)
  return contrast >= 4.5 // WCAG AA 标准
}

// 检查主题是否符合可访问性标准
const isValidTheme = validateThemeContrast('#ffffff', '#1f2937')
```

## 最佳实践

### 1. 保持一致性

- 使用语义化的颜色名称
- 保持组件间的视觉一致性
- 遵循设计系统规范

### 2. 性能优化

- 避免频繁切换主题
- 使用 CSS 变量而非 JavaScript 动态修改样式
- 合理使用 CSS 选择器

### 3. 可访问性

- 确保足够的颜色对比度
- 支持高对比度模式
- 测试主题在不同设备上的表现

### 4. 向后兼容

- 为新的 CSS 变量提供默认值
- 渐进式增强主题功能
- 保持 API 的稳定性

通过这套完整的主题定制系统，你可以轻松地为 Name-UI 创建符合品牌风格的自定义主题。
