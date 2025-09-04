# Git 提交规范 - 快速参考

## 🚀 快速开始

使用交互式提交（推荐）：

```bash
npm run commit
```

## 📝 提交格式

```
<type>: <description>
```

## 🏷️ 提交类型

| 类型       | 用途     | 示例                     |
| ---------- | -------- | ------------------------ |
| `feat`     | 新功能   | `feat: 添加按钮组件`     |
| `fix`      | 修复 bug | `fix: 修复样式问题`      |
| `docs`     | 文档     | `docs: 更新README`       |
| `style`    | 格式     | `style: 代码格式化`      |
| `refactor` | 重构     | `refactor: 优化代码结构` |
| `perf`     | 性能     | `perf: 提升渲染性能`     |
| `test`     | 测试     | `test: 添加单元测试`     |
| `chore`    | 杂项     | `chore: 更新配置`        |
| `update`   | 更新     | `update: 升级依赖`       |

## ✅ 正确示例

```bash
feat: 添加 DatePicker 组件
fix: 修复按钮在移动端的显示问题
docs: 更新组件API文档
style: 修复ESLint警告
refactor: 重构主题系统
perf: 优化虚拟滚动性能
test: 添加表单验证测试
chore: 配置自动化部署
update: 升级Vue到3.4版本
```

## ❌ 错误示例

```bash
❌ add button        # 类型错误，应该用 feat
❌ fix:bug          # 缺少空格
❌ feat:            # 缺少描述
❌ 添加新功能        # 缺少类型
❌ feat: fix        # 描述不清晰
```

## 🔧 工具命令

```bash
# 交互式提交
npm run commit

# 格式化代码
pnpm format

# 检查代码
pnpm lint

# 验证提交信息
pnpm lint:commit

# 启动开发环境
pnpm dev

# 构建项目
pnpm build
```

## 🚨 常见问题解决

### Prettier 格式化错误

如果遇到 Prettier 无法格式化的错误：

```bash
# 检查是否有缓存文件被格式化
# 解决方案：查看 docs/PRETTIER_CONFIG_FIX.md
```

### Git 提交钩子失败

如果提交时钩子失败：

```bash
# 手动格式化代码
pnpm format

# 重新提交
git add .
git commit -m "fix: 描述问题"
```

### 模块加载错误

如果遇到 commitlint 模块错误：

- 确保使用 `commitlint.config.cjs` 而不是 `.js`
- 检查配置文件格式是否正确

## 📚 相关文档

- `docs/PRETTIER_CONFIG_FIX.md` - Prettier 配置问题解决方案
- `docs/VUE_TYPESCRIPT_CONFIG.md` - Vue TypeScript 配置
- `docs/VITE_PLUGIN_TYPE_FIX.md` - Vite 插件类型问题

## 📋 提交检查清单

- [ ] 使用正确的提交类型
- [ ] 描述清晰简洁（5-50 字符）
- [ ] 冒号后有空格
- [ ] 使用中文描述
- [ ] 不以句号结尾
