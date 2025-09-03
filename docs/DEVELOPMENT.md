# Name-UI 开发指南

## 项目架构

Name-UI 是一个支持 Vue 和 React 的通用组件库，采用了独特的三层架构设计：

### 1. 核心层 (Core)
- **位置**: `packages/core/`
- **职责**: 包含框架无关的组件逻辑
- **特点**: 纯 TypeScript 实现，不依赖任何前端框架

### 2. 适配层 (Adapters)
- **Vue 适配器**: `packages/vue/`
- **React 适配器**: `packages/react/`
- **职责**: 将核心逻辑适配为对应框架的组件

### 3. 主题层 (Theme)
- **位置**: `packages/theme/`
- **职责**: 提供统一的样式和主题系统

## 开发流程

### 添加新组件

1. **在 Core 层添加组件逻辑**
   ```typescript
   // packages/core/src/components/newComponent.ts
   export class NewComponentCore {
     // 框架无关的逻辑
   }
   ```

2. **在 Vue 适配器中实现**
   ```vue
   <!-- packages/vue/src/components/NewComponent.vue -->
   <template>
     <!-- Vue 模板 -->
   </template>
   
   <script setup lang="ts">
   import { NewComponentCore } from '@name-ui/core'
   // Vue 特定的实现
   </script>
   ```

3. **在 React 适配器中实现**
   ```tsx
   // packages/react/src/components/NewComponent.tsx
   import { NewComponentCore } from '@name-ui/core'
   
   export const NewComponent: React.FC = () => {
     // React 特定的实现
   }
   ```

### 开发命令

```bash
# 安装依赖
pnpm install

# 开发模式 - 监听所有包的变化
pnpm dev

# 单独开发某个包
pnpm dev:core
pnpm dev:vue
pnpm dev:react

# 构建所有包
pnpm build

# 运行示例
cd examples/vue-example && pnpm dev
cd examples/react-example && pnpm dev

# 类型检查
pnpm type-check

# 代码检查
pnpm lint
```

## 设计原则

### 1. 框架无关
- 核心逻辑与具体框架解耦
- 确保一致的用户体验

### 2. 类型安全
- 完整的 TypeScript 支持
- 严格的类型检查

### 3. 可扩展性
- 易于添加新组件
- 支持自定义主题

### 4. 性能优化
- 按需加载
- 树摇优化支持

## 最佳实践

### 组件设计
1. **属性一致性**: 确保 Vue 和 React 版本的组件具有相同的属性接口
2. **事件处理**: 统一的事件处理机制
3. **样式隔离**: 使用 CSS 变量和作用域样式

### 测试策略
1. **核心逻辑测试**: 测试框架无关的业务逻辑
2. **组件集成测试**: 测试组件在不同框架中的表现
3. **视觉回归测试**: 确保样式的一致性

### 文档规范
1. **API 文档**: 详细的组件属性和方法说明
2. **使用示例**: 提供完整的使用示例
3. **最佳实践**: 说明推荐的使用方式