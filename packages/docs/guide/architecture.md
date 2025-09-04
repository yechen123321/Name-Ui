# 架构设计

Name-UI 采用了创新的**核心层 + 适配层**架构，实现了真正的跨框架组件复用。

## 整体架构

```mermaid
graph TB
    A[应用层] --> B[Vue 适配层]
    A --> C[React 适配层]
    B --> D[Core 核心层]
    C --> D
    D --> E[主题层]

    subgraph "Name-UI 架构"
        B[Vue 适配层<br/>@name-ui/vue]
        C[React 适配层<br/>@name-ui/react]
        D[核心层<br/>@name-ui/core]
        E[主题层<br/>@name-ui/theme]
    end
```

## 核心设计理念

### 1. 框架无关的核心逻辑

**Core 层**包含所有的业务逻辑和状态管理，完全独立于任何前端框架：

```typescript
// @name-ui/core
export class ButtonCore {
  constructor(private props: ButtonProps) {}

  getClassName(): string {
    return cn('n-button', {
      [`n-button--${this.props.type}`]: this.props.type,
      [`n-button--${this.props.size}`]: this.props.size,
      'n-button--disabled': this.props.disabled,
      'n-button--loading': this.props.loading,
      'n-button--block': this.props.block,
    })
  }

  getStyle(): Record<string, any> {
    // 样式计算逻辑
  }

  handleClick(event: Event): void {
    if (this.props.disabled || this.props.loading) {
      event.preventDefault()
      return
    }
    this.props.onClick?.(event)
  }

  isInteractive(): boolean {
    return !this.props.disabled && !this.props.loading
  }
}
```

### 2. 框架适配层

每个框架都有自己的适配层，负责将核心逻辑包装成框架特定的组件：

::: code-group

```vue [Vue 适配层]
<template>
  <button
    :class="buttonCore.getClassName()"
    :style="buttonCore.getStyle()"
    v-bind="buttonCore.getAttributes()"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ButtonCore, type ButtonProps } from '@name-ui/core'

interface Props extends Omit<ButtonProps, 'children' | 'onClick'> {}

const props = withDefaults(defineProps<Props>(), {
  type: 'default',
  size: 'medium',
})

const emit = defineEmits<{
  click: [event: Event]
}>()

const buttonCore = computed(
  () =>
    new ButtonCore({
      ...props,
      onClick: event => emit('click', event),
    })
)

const handleClick = (event: Event) => {
  buttonCore.value.handleClick(event)
}
</script>
```

```tsx [React 适配层]
import React from 'react'
import { ButtonCore, type ButtonProps } from '@name-ui/core'

interface Props extends Omit<ButtonProps, 'children'> {}

export const Button: React.FC<Props> = props => {
  const buttonCore = new ButtonCore(props)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    buttonCore.handleClick(event.nativeEvent)
    if (buttonCore.isInteractive()) {
      props.onClick?.(event.nativeEvent)
    }
  }

  return (
    <button
      className={buttonCore.getClassName()}
      style={buttonCore.getStyle()}
      {...buttonCore.getAttributes()}
      onClick={handleClick}
    >
      {props.children}
    </button>
  )
}
```

:::

### 3. 统一的主题系统

主题层提供统一的样式变量和组件样式：

```css
/* @name-ui/theme/index.css */
:root {
  /* 主色调 */
  --n-color-primary: #1890ff;
  --n-color-success: #52c41a;
  --n-color-warning: #faad14;
  --n-color-error: #ff4d4f;

  /* 尺寸系统 */
  --n-size-small: 24px;
  --n-size-medium: 32px;
  --n-size-large: 40px;

  /* 间距系统 */
  --n-spacing-xs: 4px;
  --n-spacing-sm: 8px;
  --n-spacing-md: 16px;
  --n-spacing-lg: 24px;
}

/* 组件样式 */
.n-button {
  /* 使用 CSS 变量 */
  height: var(--n-size-medium);
  padding: 0 var(--n-spacing-md);
  border-radius: 6px;
  /* ... */
}
```

## 设计模式

### 1. 工厂模式

Core 层使用工厂模式创建不同类型的组件实例：

```typescript
export class ComponentFactory {
  static createButton(props: ButtonProps): ButtonCore {
    return new ButtonCore(props)
  }

  static createInput(props: InputProps): InputCore {
    return new InputCore(props)
  }
}
```

### 2. 策略模式

不同组件类型使用策略模式处理样式和行为：

```typescript
interface ThemeStrategy {
  getStyles(props: any): Record<string, any>
}

class DefaultThemeStrategy implements ThemeStrategy {
  getStyles(props: ButtonProps) {
    // 默认主题样式
  }
}

class DarkThemeStrategy implements ThemeStrategy {
  getStyles(props: ButtonProps) {
    // 暗色主题样式
  }
}
```

### 3. 观察者模式

主题切换使用观察者模式通知所有组件：

```typescript
class ThemeManager {
  private observers: ThemeObserver[] = []

  subscribe(observer: ThemeObserver) {
    this.observers.push(observer)
  }

  notify(theme: Theme) {
    this.observers.forEach(observer => observer.update(theme))
  }
}
```

## 优势

### 1. 真正的跨框架复用

- 业务逻辑只需要编写一次
- 所有框架共享相同的功能和 API
- 减少维护成本和 bug 修复工作量

### 2. 类型安全

- 完整的 TypeScript 支持
- 统一的类型定义
- 编译时错误检查

### 3. 按需加载

- 支持 Tree-shaking
- 可以按需引入组件
- 减少打包体积

### 4. 主题一致性

- 统一的设计系统
- 支持主题定制
- 跨框架的视觉一致性

### 5. 渐进式采用

- 可以逐个组件引入
- 不需要重写现有代码
- 平滑的迁移路径

## 目录结构

```
packages/
├── core/                 # 框架无关的核心逻辑
│   ├── src/
│   │   ├── components/   # 组件核心实现
│   │   │   ├── button.ts
│   │   │   └── input.ts
│   │   ├── types/        # 类型定义
│   │   │   ├── components.ts
│   │   │   └── theme.ts
│   │   └── utils/        # 工具函数
│   │       ├── className.ts
│   │       └── theme.ts
│   └── package.json
├── vue/                  # Vue 适配层
│   ├── src/
│   │   ├── components/   # Vue 组件封装
│   │   │   ├── Button.vue
│   │   │   └── Input.vue
│   │   └── index.ts      # 导出文件
│   └── package.json
├── react/                # React 适配层
│   ├── src/
│   │   ├── components/   # React 组件封装
│   │   │   ├── Button.tsx
│   │   │   └── Input.tsx
│   │   └── index.ts      # 导出文件
│   └── package.json
└── theme/                # 主题样式
    ├── src/
    │   ├── components/   # 组件样式
    │   ├── base.css      # 基础样式
    │   ├── variables.css # CSS 变量
    │   └── dark.css      # 暗色主题
    └── package.json
```

这种架构确保了 Name-UI 能够在不同的框架中提供一致的开发体验，同时保持高度的可维护性和扩展性。
