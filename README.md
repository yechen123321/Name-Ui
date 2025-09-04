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
  <n-button type="primary" @click="handleClick"> 点击我 </n-button>
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
    <Button type='primary' onClick={handleClick}>
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

## Git 提交规范

本项目采用严格的 Git 提交信息规范，基于 [Conventional Commits](https://www.conventionalcommits.org/) 标准。

### 快速使用

```bash
# 推荐：使用交互式提交
npm run commit

# 或手动提交（需遵循格式）
git commit -m "feat: 添加新功能"
```

### 提交格式

```
<type>: <description>
```

**提交类型：**

- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式
- `refactor`: 重构
- `perf`: 性能优化
- `test`: 测试
- `chore`: 杂项
- `update`: 更新依赖

**示例：**

```bash
feat: 添加按钮组件的loading状态
fix: 修复输入框在移动端的显示问题
docs: 更新组件API文档
style: 格式化代码，修复ESLint警告
```

📖 详细规范请查看：[Git 提交规范指南](./docs/GIT_COMMIT_GUIDE.md) | [快速参考](./GIT_COMMIT_QUICK_GUIDE.md)

## 📚 开发文档

### 配置指南

- [开发环境配置](./docs/DEVELOPMENT_SETUP.md) - 完整的开发环境配置指南
- [Prettier 配置修复](./docs/PRETTIER_CONFIG_FIX.md) - 代码格式化工具配置问题解决
- [Vue TypeScript 配置](./docs/VUE_TYPESCRIPT_CONFIG.md) - Vue 包的 TypeScript 配置
- [Vite 插件类型修复](./docs/VITE_PLUGIN_TYPE_FIX.md) - Vite 插件类型冲突问题

### 开发指南

- [Git 提交快速参考](./GIT_COMMIT_QUICK_GUIDE.md) - 提交规范快速查询
- [VitePress 文档](http://localhost:5173/) - 组件文档和 API 参考（开发环境）

### 常见问题

如果在开发过程中遇到配置问题，请优先查看对应的文档：

- 代码格式化问题 → `docs/PRETTIER_CONFIG_FIX.md`
- TypeScript 类型问题 → `docs/VUE_TYPESCRIPT_CONFIG.md`
- Vite 构建问题 → `docs/VITE_PLUGIN_TYPE_FIX.md`
- Git 提交问题 → `GIT_COMMIT_QUICK_GUIDE.md`

## 许可证

MIT
