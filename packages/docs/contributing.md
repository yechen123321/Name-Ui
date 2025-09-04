# 贡献指南

感谢你对 Name-UI 项目的关注！我们欢迎任何形式的贡献，包括但不限于代码、文档、测试、反馈和建议。

## 参与方式

### 1. 报告问题

发现 Bug 或有功能建议？请：

- 在 [GitHub Issues](https://github.com/yechen123321/Name-Ui/issues) 创建新的 issue
- 使用清晰的标题和详细的描述
- 提供复现步骤和环境信息
- 如果可能，提供最小化的复现示例

#### Bug 报告模板

```markdown
**Bug 描述**
简明扼要地描述遇到的问题。

**复现步骤**

1. 进入 '...'
2. 点击 '...'
3. 向下滚动到 '...'
4. 看到错误

**期望行为**
描述期望发生的行为。

**实际行为**
描述实际发生的行为。

**环境信息**

- OS: [e.g. Windows 10, macOS 12]
- Browser: [e.g. Chrome 99, Firefox 98]
- Framework: [e.g. Vue 3.2.25, React 18.0.0]
- Name-UI Version: [e.g. 1.0.0]

**截图**
如果适用，添加截图来帮助解释问题。
```

### 2. 功能请求

想要新功能？请：

- 检查是否已有相关的 issue
- 详细描述功能需求和使用场景
- 说明为什么这个功能对项目有价值

### 3. 代码贡献

#### 开发环境设置

1. Fork 项目到你的 GitHub 账户
2. Clone 项目到本地：

```bash
git clone https://github.com/你的用户名/Name-Ui.git
cd Name-Ui
```

3. 安装依赖：

```bash
pnpm install
```

4. 创建开发分支：

```bash
git checkout -b feature/你的功能名
# 或
git checkout -b fix/bug修复描述
```

#### 项目结构

```
Name-Ui/
├── packages/
│   ├── core/               # 核心逻辑
│   │   ├── src/
│   │   │   ├── components/ # 组件核心实现
│   │   │   ├── types/      # 类型定义
│   │   │   └── utils/      # 工具函数
│   │   └── package.json
│   ├── vue/                # Vue 适配层
│   │   ├── src/
│   │   │   ├── components/ # Vue 组件
│   │   │   └── index.ts
│   │   └── package.json
│   ├── react/              # React 适配层
│   │   ├── src/
│   │   │   ├── components/ # React 组件
│   │   │   └── index.ts
│   │   └── package.json
│   ├── theme/              # 主题样式
│   │   ├── src/
│   │   │   ├── components/ # 组件样式
│   │   │   └── variables/  # CSS 变量
│   │   └── package.json
│   └── docs/               # 文档网站
├── examples/               # 示例项目
│   ├── vue-example/
│   └── react-example/
├── scripts/                # 构建脚本
└── tests/                  # 测试文件
```

#### 开发流程

1. **启动开发环境**

```bash
# 构建所有包
pnpm build

# 启动文档网站
pnpm dev:docs

# 启动 Vue 示例
pnpm dev:vue

# 启动 React 示例
pnpm dev:react
```

2. **添加新组件**

以添加 `Badge` 组件为例：

**Step 1: Core 层实现**

```typescript
// packages/core/src/components/badge.ts
export interface BadgeProps {
  count?: number
  dot?: boolean
  max?: number
  color?: string
  offset?: [number, number]
  size?: 'small' | 'default'
  showZero?: boolean
}

export class BadgeCore {
  constructor(private props: BadgeProps) {}

  getClassName(): string {
    return cn('n-badge', {
      'n-badge--dot': this.props.dot,
      [`n-badge--${this.props.size}`]: this.props.size,
    })
  }

  getCount(): string | number {
    const { count = 0, max = 99, showZero = false } = this.props

    if (!showZero && count === 0) {
      return ''
    }

    return count > max ? `${max}+` : count
  }

  getStyle(): Record<string, any> {
    const { color, offset } = this.props
    const style: Record<string, any> = {}

    if (color) {
      style.backgroundColor = color
    }

    if (offset) {
      style.transform = `translate(${offset[0]}px, ${offset[1]}px)`
    }

    return style
  }
}
```

**Step 2: Vue 适配层**

```vue
<!-- packages/vue/src/components/Badge.vue -->
<template>
  <div :class="badgeCore.getClassName()">
    <slot />
    <sup
      v-if="badgeCore.getCount() || dot"
      class="n-badge__content"
      :style="badgeCore.getStyle()"
    >
      {{ badgeCore.getCount() }}
    </sup>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { BadgeCore, type BadgeProps } from '@name-ui/core'

interface Props extends BadgeProps {}

const props = withDefaults(defineProps<Props>(), {
  size: 'default',
  max: 99,
  showZero: false,
  dot: false,
})

const badgeCore = computed(() => new BadgeCore(props))
</script>
```

**Step 3: React 适配层**

```tsx
// packages/react/src/components/Badge.tsx
import React from 'react'
import { BadgeCore, type BadgeProps } from '@name-ui/core'

interface Props extends BadgeProps {
  children?: React.ReactNode
}

export const Badge: React.FC<Props> = props => {
  const badgeCore = new BadgeCore(props)

  return (
    <div className={badgeCore.getClassName()}>
      {props.children}
      {(badgeCore.getCount() || props.dot) && (
        <sup className='n-badge__content' style={badgeCore.getStyle()}>
          {badgeCore.getCount()}
        </sup>
      )}
    </div>
  )
}
```

**Step 4: 样式实现**

```css
/* packages/theme/src/components/badge.css */
.n-badge {
  position: relative;
  display: inline-block;
}

.n-badge__content {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  transform: translate(50%, -50%);
  transform-origin: 100% 0%;

  min-width: 16px;
  height: 16px;
  padding: 0 4px;

  font-size: 10px;
  font-weight: normal;
  line-height: 16px;
  text-align: center;
  white-space: nowrap;

  color: #ffffff;
  background-color: var(--n-color-error);
  border-radius: 8px;
  border: 1px solid #ffffff;

  box-shadow: 0 0 0 1px #ffffff;
}

.n-badge--dot .n-badge__content {
  min-width: 6px;
  width: 6px;
  height: 6px;
  padding: 0;
  border-radius: 50%;
}

.n-badge--small .n-badge__content {
  min-width: 12px;
  height: 12px;
  font-size: 9px;
  line-height: 12px;
  border-radius: 6px;
}
```

3. **编写测试**

```typescript
// packages/core/tests/badge.test.ts
import { describe, it, expect } from 'vitest'
import { BadgeCore } from '../src/components/badge'

describe('BadgeCore', () => {
  it('should generate correct count', () => {
    const badge = new BadgeCore({ count: 5 })
    expect(badge.getCount()).toBe(5)
  })

  it('should respect max prop', () => {
    const badge = new BadgeCore({ count: 100, max: 99 })
    expect(badge.getCount()).toBe('99+')
  })

  it('should handle zero count', () => {
    const badge = new BadgeCore({ count: 0, showZero: false })
    expect(badge.getCount()).toBe('')

    const badgeWithZero = new BadgeCore({ count: 0, showZero: true })
    expect(badgeWithZero.getCount()).toBe(0)
  })
})
```

4. **更新导出文件**

```typescript
// packages/core/src/index.ts
export * from './components/badge'

// packages/vue/src/index.ts
export { default as Badge } from './components/Badge.vue'

// packages/react/src/index.ts
export { Badge } from './components/Badge'
```

5. **编写文档**

```markdown
<!-- packages/docs/components/badge.md -->

# Badge 徽标

用于展示数字或状态的小标签。

## 基础用法

<!-- 文档内容... -->
```

6. **运行测试**

```bash
# 单元测试
pnpm test

# 类型检查
pnpm type-check

# 代码规范检查
pnpm lint

# 构建检查
pnpm build
```

#### 提交代码

1. **提交规范**

使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```bash
# 功能添加
git commit -m "feat(badge): add badge component"

# Bug 修复
git commit -m "fix(button): resolve loading state issue"

# 文档更新
git commit -m "docs(installation): update installation guide"

# 样式调整
git commit -m "style(input): improve focus outline"

# 重构
git commit -m "refactor(core): optimize class name generation"

# 测试
git commit -m "test(badge): add unit tests"
```

提交类型：

- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建或工具配置

2. **推送并创建 PR**

```bash
git push origin feature/你的功能名
```

然后在 GitHub 上创建 Pull Request。

#### Pull Request 指南

**PR 标题**

- 使用清晰的标题描述更改
- 遵循 Conventional Commits 格式

**PR 描述**

- 详细描述更改内容
- 说明更改的动机和背景
- 列出任何破坏性更改
- 包含相关的 issue 链接

**PR 模板**

```markdown
## 更改类型

- [ ] Bug 修复
- [ ] 新功能
- [ ] 文档更新
- [ ] 代码重构
- [ ] 测试相关
- [ ] 其他

## 更改描述

简要描述这次更改的内容和目的。

## 相关 Issues

关闭 #issue 编号

## 测试

- [ ] 添加了单元测试
- [ ] 添加了集成测试
- [ ] 手动测试通过

## 截图（如适用）

如果有 UI 更改，请提供前后对比截图。

## 检查清单

- [ ] 代码遵循项目规范
- [ ] 自己测试了更改
- [ ] 更新了相关文档
- [ ] 没有破坏现有功能
```

## 代码规范

### TypeScript 规范

- 使用 TypeScript 编写所有代码
- 为所有公共 API 提供类型定义
- 避免使用 `any` 类型
- 使用有意义的变量和函数名

### CSS 规范

- 使用 BEM 命名约定：`.n-component__element--modifier`
- 所有样式变量以 `--n-` 开头
- 优先使用 CSS 变量而非硬编码值
- 支持暗色主题

### 组件规范

- 所有组件必须同时支持 Vue 和 React
- 核心逻辑放在 Core 层
- 保持 API 的一致性
- 提供完整的类型定义

### 文档规范

- 为每个组件编写完整的文档
- 包含使用示例和 API 文档
- 提供 Vue 和 React 两个版本的示例
- 使用中文编写文档

## 发布流程

项目使用自动化发布流程：

1. **版本管理**: 使用 [Semantic Versioning](https://semver.org/)
2. **变更日志**: 自动生成基于提交历史
3. **NPM 发布**: 通过 CI/CD 自动发布

版本号规则：

- `MAJOR`: 不兼容的 API 更改
- `MINOR`: 向后兼容的功能添加
- `PATCH`: 向后兼容的 Bug 修复

## 社区

### 讨论

- [GitHub Discussions](https://github.com/yechen123321/Name-Ui/discussions) - 功能讨论和使用交流
- [GitHub Issues](https://github.com/yechen123321/Name-Ui/issues) - Bug 报告和功能请求

### 行为准则

我们致力于为每个人提供友好、安全和包容的环境。请遵循以下原则：

- 尊重不同的观点和经历
- 提供建设性的反馈
- 专注于对社区最有利的事情
- 对他人表现出同理心

## 感谢

感谢所有为 Name-UI 做出贡献的开发者！你们的努力让这个项目变得更好。

## License

通过向此项目提交代码，你同意你的贡献将根据 [MIT License](https://github.com/yechen123321/Name-Ui/blob/main/LICENSE) 授权。
