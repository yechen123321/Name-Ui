# Name-UI NPM 包发布指南

## 📦 包结构

Name-UI 采用 Monorepo 架构，包含以下 npm 包：

- `@name-ui/core` - 框架无关的核心逻辑
- `@name-ui/vue` - Vue 3 组件包
- `@name-ui/react` - React 组件包
- `@name-ui/theme` - 主题样式包

## 🚀 发布流程

### 1. 准备工作

#### 1.1 配置 npm 认证

**方式一：使用 npm login（推荐）**

```bash
npm login
```

**方式二：使用 npm token**

1. 复制 `.npmrc.example` 为 `.npmrc`：

   ```bash
   cp .npmrc.example .npmrc
   ```

2. 在 `.npmrc` 文件中添加你的 npm token：

   ```
   //registry.npmjs.org/:_authToken=your_npm_token_here
   ```

3. 检查登录状态：
   ```bash
   npm whoami
   ```

⚠️ **安全提示**：`.npmrc` 文件已被添加到 `.gitignore`，确保不要提交包含真实 token 的文件到版本库。

#### 1.2 检查包是否已构建

```bash
pnpm publish:check
```

### 2. 版本管理

#### 2.1 更新版本号

```bash
# 补丁版本 (1.0.0 -> 1.0.1)
pnpm version:patch

# 次要版本 (1.0.0 -> 1.1.0)
pnpm version:minor

# 主要版本 (1.0.0 -> 2.0.0)
pnpm version:major
```

#### 2.2 手动更新特定包版本

```bash
cd packages/core
npm version patch

cd ../vue
npm version patch
```

### 3. 发布包

#### 3.1 自动发布（推荐）

```bash
# 使用自动化脚本发布所有包
pnpm publish:packages
```

#### 3.2 手动发布

```bash
# 按依赖顺序发布
cd packages/core && npm publish
cd ../theme && npm publish
cd ../vue && npm publish
cd ../react && npm publish
```

#### 3.3 使用 pnpm 批量发布

```bash
# 发布所有包
pnpm -r publish
```

## 📋 发布检查清单

### 发布前检查

- [ ] 代码已提交并推送到远程仓库
- [ ] 所有测试通过
- [ ] 版本号已更新且符合语义化版本规范
- [ ] 已登录 npm 账户
- [ ] 构建产物已生成（dist 目录存在）
- [ ] package.json 配置正确
- [ ] README.md 文档已更新

### 发布后验证

- [ ] 包已成功发布到 npm
- [ ] 版本号正确
- [ ] 安装测试正常
- [ ] 文档链接有效

## 🛠️ 常用命令

```bash
# 检查发布状态
pnpm publish:check

# 构建所有包
pnpm build

# 清理构建产物
pnpm clean

# 检查包版本
npm view @name-ui/core version
npm view @name-ui/vue version
npm view @name-ui/react version
npm view @name-ui/theme version

# 测试安装
npm install @name-ui/vue@latest
npm install @name-ui/react@latest
```

## 🔧 包配置说明

### Core 包 (@name-ui/core)

- **作用**: 框架无关的核心逻辑和类型定义
- **依赖**: 无运行时依赖
- **构建**: Vite + TypeScript 声明文件

### Vue 包 (@name-ui/vue)

- **作用**: Vue 3 组件适配
- **依赖**: @name-ui/core, vue (peerDependency)
- **构建**: Vite + Vue 插件

### React 包 (@name-ui/react)

- **作用**: React 组件适配
- **依赖**: @name-ui/core, react + react-dom (peerDependencies)
- **构建**: Vite + React 插件

### Theme 包 (@name-ui/theme)

- **作用**: CSS 主题和样式
- **依赖**: 无依赖
- **构建**: Vite CSS 处理

## 🚨 注意事项

### 发布顺序

必须按照依赖关系发布：

1. @name-ui/core（被 vue/react 包依赖）
2. @name-ui/theme（独立包）
3. @name-ui/vue（依赖 core）
4. @name-ui/react（依赖 core）

### 版本同步

建议所有包保持相同版本号，便于用户理解和使用。

### workspace 依赖

发布时 workspace:\*会自动替换为实际版本号。

### 访问权限

所有包配置为 public 访问权限（@开头的包默认是私有的）。

## 🔄 回滚操作

如果发布有问题，可以撤回包：

```bash
# 撤回特定版本（发布24小时内）
npm unpublish @name-ui/core@1.0.1

# 或者废弃版本
npm deprecate @name-ui/core@1.0.1 "版本有问题，请使用1.0.2"
```

## 📖 使用示例

发布后，用户可以这样使用：

### Vue 项目

```bash
npm install @name-ui/vue @name-ui/theme
```

```javascript
import { createApp } from 'vue'
import NameUI from '@name-ui/vue'
import '@name-ui/theme'

const app = createApp(App)
app.use(NameUI)
```

### React 项目

```bash
npm install @name-ui/react @name-ui/theme
```

```javascript
import { Button } from '@name-ui/react'
import '@name-ui/theme'
```

### 💡 为什么不需要安装 @name-ui/core？

**答案：因为自动依赖传递**

1. **依赖关系**：

   - `@name-ui/vue` 和 `@name-ui/react` 都将 `@name-ui/core` 作为 `dependencies`
   - 当用户安装 `@name-ui/vue` 时，npm/pnpm 会自动安装 `@name-ui/core`

2. **用户体验**：

   - 用户只需要安装他们需要的框架包
   - 无需关心内部依赖的管理
   - 更简单、更直观的安装体验

3. **依赖树示例**：

   ```
   用户项目
   ├── @name-ui/vue@1.0.0
   │   └── @name-ui/core@1.0.0  ← 自动安装
   └── @name-ui/theme@1.0.0
   ```

4. **只有在特殊情况下才需要直接使用 core**：
   - 开发自定义框架适配器
   - 只使用核心逻辑，不需要 UI 组件
