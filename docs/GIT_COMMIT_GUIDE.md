# Git 提交规范

本项目采用严格的 Git 提交信息规范，基于 [Conventional Commits](https://www.conventionalcommits.org/) 标准。

## 提交信息格式

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### 基本格式示例

```bash
feat: 添加按钮组件的新样式
fix: 修复输入框在移动端的显示问题
docs: 更新 README 文档
style: 格式化代码，修复 ESLint 警告
refactor: 重构主题系统架构
perf: 优化组件渲染性能
test: 添加按钮组件的单元测试
chore: 更新构建脚本配置
update: 升级 Vue 到 3.4 版本
```

## 提交类型 (type)

| 类型 | 说明 | 示例 |
|------|------|------|
| `feat` | 新功能 | `feat: 添加 DatePicker 组件` |
| `fix` | 修复 bug | `fix: 修复按钮在 Safari 下的样式问题` |
| `docs` | 文档更新 | `docs: 完善组件 API 文档` |
| `style` | 代码格式（不影响功能） | `style: 统一代码缩进格式` |
| `refactor` | 重构（既不是新功能也不是修复） | `refactor: 重构工具函数模块` |
| `perf` | 性能优化 | `perf: 优化虚拟滚动性能` |
| `test` | 测试相关 | `test: 添加表单验证测试用例` |
| `build` | 构建系统或依赖变更 | `build: 配置 Vite 打包优化` |
| `ci` | CI 配置变更 | `ci: 添加自动化测试流程` |
| `chore` | 其他杂项 | `chore: 清理无用的依赖包` |
| `revert` | 回退提交 | `revert: 回退错误的组件更新` |
| `update` | 更新依赖或配置 | `update: 升级 TypeScript 到 5.0` |

## 作用域 (scope) - 可选

用于说明本次提交影响的范围，建议使用：

- `core` - 核心逻辑
- `vue` - Vue 适配器
- `react` - React 适配器  
- `theme` - 主题样式
- `button` - 按钮组件
- `input` - 输入框组件
- `config` - 配置文件
- `deps` - 依赖更新

示例：
```bash
feat(button): 添加 loading 状态支持
fix(vue): 修复组件 props 类型问题
docs(core): 更新核心 API 文档
```

## 描述 (description)

- 使用中文描述
- 简洁明了，建议不超过 50 个字符
- 使用动词开头，如"添加"、"修复"、"更新"等
- 结尾不加句号

### ✅ 好的描述
```bash
feat: 添加按钮组件的禁用状态
fix: 修复主题切换时的样式闪烁
docs: 更新组件使用示例
```

### ❌ 不好的描述
```bash
feat: button
fix: bug
docs: update
```

## 提交体 (body) - 可选

详细描述本次提交的内容，可以分多行。

```bash
feat: 添加表格组件的排序功能

- 支持单列排序和多列排序
- 提供自定义排序函数接口
- 添加排序状态的视觉反馈
- 支持服务端排序模式
```

## 页脚 (footer) - 可选

用于关联 issue 或说明破坏性变更。

```bash
fix: 修复表单验证逻辑

修复了验证规则在异步场景下的执行顺序问题

Closes #123
```

## 破坏性变更

当有破坏性变更时，在类型后加 `!` 或在 footer 中说明：

```bash
feat!: 重构主题系统 API

BREAKING CHANGE: 主题配置格式已更改，请参考迁移指南
```

## 使用工具

### 1. 交互式提交 (推荐)

```bash
npm run commit
# 或
git cz
```

这将启动交互式界面，引导你填写符合规范的提交信息。

### 2. 手动提交

```bash
git commit -m "feat: 添加新的按钮样式"
```

### 3. 验证提交信息

```bash
npm run lint:commit
```

## 提交前检查

项目配置了 Git hooks，在提交前会自动：

1. 运行 ESLint 检查代码质量
2. 运行 Prettier 格式化代码
3. 验证提交信息格式

如果检查失败，提交将被拒绝。

## 常见错误

### 1. 类型拼写错误
```bash
❌ feat: 添加组件  # 缺少冒号后的空格
✅ feat: 添加组件
```

### 2. 描述过短
```bash
❌ fix: bug
✅ fix: 修复按钮点击无响应的问题
```

### 3. 使用了不规范的类型
```bash
❌ add: 添加新功能
✅ feat: 添加新功能
```

## 提交历史示例

```bash
feat(button): 添加 loading 状态和 icon 支持
fix(vue): 修复组件在 SSR 环境下的渲染问题  
docs: 完善组件库使用文档和示例
style: 统一代码格式，修复 ESLint 警告
refactor(core): 重构事件系统，提升性能
test(input): 添加输入框组件的边界测试
chore: 配置 GitHub Actions 自动化流程
update: 升级 Vite 到最新版本
```

遵循这些规范，可以让项目的提交历史更加清晰、专业，便于代码审查和版本管理。