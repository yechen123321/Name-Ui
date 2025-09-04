# 开发环境配置指南

## 📋 概述

本文档记录了 Name-UI 项目的开发环境配置、已知问题及解决方案。

## 🏗️ 项目架构

```
Name-UI/
├── packages/
│   ├── core/           # 核心逻辑包
│   ├── vue/            # Vue 适配包
│   ├── react/          # React 适配包
│   ├── theme/          # 主题样式包
│   └── docs/           # VitePress 文档
├── examples/
│   ├── vue-example/    # Vue 示例
│   └── react-example/  # React 示例
├── docs/               # 开发文档
└── 配置文件...
```

## ⚙️ 核心配置文件

### 代码质量和格式化

- `.prettierrc.json` - Prettier 格式化配置
- `.prettierignore` - Prettier 忽略文件
- `.eslintrc.cjs` - ESLint 代码检查配置
- `.lintstagedrc.json` - Git 预提交任务配置

### Git 和版本控制

- `.gitignore` - Git 忽略文件
- `commitlint.config.cjs` - 提交信息验证配置
- `.husky/` - Git 钩子配置

### 项目构建

- `package.json` - 项目依赖和脚本
- `tsconfig.json` - TypeScript 全局配置
- `vite.config.ts` - 各包的 Vite 构建配置
- `pnpm-workspace.yaml` - Monorepo 工作区配置

### 文档系统

- `packages/docs/.vitepress/config.ts` - VitePress 配置
- `packages/docs/` - 文档内容

## 🔧 开发工具链

### 构建工具

- **Vite**: 快速构建和开发服务器
- **TypeScript**: 类型检查和编译
- **pnpm**: 包管理器（Monorepo 支持）

### 代码质量

- **Prettier**: 代码格式化
- **ESLint**: 代码规范检查（部分配置）
- **lint-staged**: Git 预提交检查
- **Husky**: Git 钩子管理

### 文档和测试

- **VitePress**: 文档生成和预览
- **Vitest**: 单元测试框架
- **commitlint**: 提交信息规范验证

## 🚀 快速开始

### 环境要求

- Node.js 18+
- pnpm 8.15.1+
- Git

### 安装依赖

```bash
# 安装所有依赖
pnpm install
```

### 开发命令

```bash
# 启动所有开发服务
pnpm dev

# 启动特定包的开发
pnpm dev:core    # 核心包
pnpm dev:vue     # Vue 包
pnpm dev:react   # React 包
pnpm dev:docs    # 文档服务器

# 构建所有包
pnpm build

# 代码格式化
pnpm format

# 类型检查
pnpm type-check
```

### 文档系统

```bash
# 启动文档开发服务器
pnpm dev:docs

# 访问地址
http://localhost:5173/

# 构建文档
pnpm build:docs

# 预览构建的文档
pnpm docs:preview
```

## ⚠️ 已知问题及解决方案

### 1. TypeScript 配置问题

**问题**: Vue 包的 TypeScript 类型检查问题
**解决方案**: 查看 `docs/VUE_TYPESCRIPT_CONFIG.md`

**相关文件**:

- `packages/vue/tsconfig.json`
- `packages/vue/src/vue-env.d.ts`

### 2. Vite 插件类型冲突

**问题**: Vue 包 Vite 配置中的插件类型冲突
**解决方案**: 查看 `docs/VITE_PLUGIN_TYPE_FIX.md`

**相关文件**:

- `packages/vue/vite.config.ts`

### 3. Prettier 配置问题

**问题**: Prettier 格式化 VitePress 缓存文件导致错误
**解决方案**: 查看 `docs/PRETTIER_CONFIG_FIX.md`

**相关文件**:

- `.prettierignore`
- `.prettierrc.json`
- `.lintstagedrc.json`
- `commitlint.config.cjs`

## 📝 开发规范

### Git 提交规范

- 使用 Conventional Commits 标准
- 提交类型: feat, fix, docs, style, refactor, perf, test, chore, update, build, ci, revert
- 描述使用中文，长度 5-50 字符
- 推荐使用 `pnpm commit` 进行交互式提交

### 代码规范

- 使用 Prettier 进行代码格式化
- 遵循 TypeScript 最佳实践
- 组件开发遵循 core → 适配层的架构

### 文档规范

- 每个组件需要提供 Vue 和 React 示例
- API 文档包含属性、事件、插槽说明
- 使用 VitePress 的 Markdown 扩展功能

## 🔍 故障排除

### Prettier 相关问题

```bash
# 检查 Prettier 配置
pnpm format

# 如果出现缓存文件格式化错误
# 确保 .prettierignore 文件正确配置
```

### Git 提交失败

```bash
# 检查提交信息格式
# 格式: <type>: <description>

# 如果 lint-staged 失败，手动格式化
pnpm format
git add .
git commit -m "fix: 修复格式问题"
```

### VitePress 相关问题

```bash
# 清除 VitePress 缓存
rm -rf packages/docs/.vitepress/cache

# 重新启动文档服务器
pnpm dev:docs
```

### 模块解析问题

```bash
# 重新安装依赖
rm -rf node_modules packages/*/node_modules
pnpm install

# 检查 TypeScript 配置
pnpm type-check
```

## 📚 相关文档

### 配置问题解决方案

- `docs/PRETTIER_CONFIG_FIX.md` - Prettier 配置修复
- `docs/VUE_TYPESCRIPT_CONFIG.md` - Vue TypeScript 配置
- `docs/VITE_PLUGIN_TYPE_FIX.md` - Vite 插件类型问题

### 开发指南

- `GIT_COMMIT_QUICK_GUIDE.md` - Git 提交规范快速参考
- `README.md` - 项目总体介绍
- VitePress 文档 - 完整的组件和 API 文档

## 🎯 最佳实践

### 开发流程

1. 在 core 包中实现业务逻辑
2. 在对应的适配包中实现框架封装
3. 添加类型定义和文档
4. 编写测试用例
5. 更新文档和示例

### 代码提交

1. 使用 `pnpm format` 格式化代码
2. 使用 `pnpm commit` 交互式提交
3. 确保提交信息符合规范
4. 验证构建和测试通过

### 问题解决

1. 查阅相关文档
2. 检查配置文件
3. 查看错误日志
4. 重现问题并记录解决方案

---

_最后更新: 2024年_  
_维护者: Name-UI 开发团队_
