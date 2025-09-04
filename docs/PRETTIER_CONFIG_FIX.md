# Prettier格式化工具配置修复指南

## 问题描述

在配置项目代码格式化工具时遇到的问题和解决方案记录。

## 遇到的问题

### 1. Prettier格式化错误

**问题现象：**

```bash
✖ prettier --write:
[error] Unable to write file "packages/docs/.vitepress/cache/deps/chunk-X6WVNI75.js":
[error] ENOENT: no such file or directory
[error] Explicitly specified file was ignored due to negative glob patterns
```

**问题原因：**

- VitePress生成的缓存文件被Prettier尝试格式化
- 缺少`.prettierignore`文件排除不需要格式化的文件
- `format`脚本配置不当

### 2. Git提交钩子配置问题

**问题现象：**

```bash
⚠ Some of your tasks use `git add` command. Please remove it from the config since all modifications made by tasks will be automatically added to the git commit index.
```

**问题原因：**

- `lint-staged`配置中包含过时的`git add`命令
- 新版本的lint-staged会自动添加修改的文件到Git暂存区

### 3. Commitlint模块加载错误

**问题现象：**

```bash
Error [ERR_INTERNAL_ASSERTION]: Unexpected module status 5. Cannot require() ES Module D:\CoderFile\Name-Ui\commitlint.config.js
```

**问题原因：**

- Node.js模块系统与commitlint配置文件的模块格式冲突
- 需要使用`.cjs`扩展名来明确指定CommonJS格式

## 解决方案

### 1. 创建Prettier忽略文件

创建`.prettierignore`文件：

```gitignore
# Dependencies
node_modules/
**/node_modules/

# Build outputs
dist/
**/dist/
build/
**/build/

# VitePress cache and build files
**/.vitepress/cache/
**/.vitepress/dist/
.vitepress/cache/
.vitepress/dist/

# Generated files
*.d.ts
!src/**/*.d.ts
!packages/*/src/**/*.d.ts

# Cache directories
.cache/
**/.cache/

# IDE files
.vscode/
.idea/

# OS files
.DS_Store
Thumbs.db

# Lock files
package-lock.json
yarn.lock
pnpm-lock.yaml

# Environment files
.env
.env.local
.env.*.local

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Temporary files
*.tmp
*.temp
.tmp/
.temp/
```

### 2. 创建Prettier配置文件

创建`.prettierrc.json`文件：

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false,
  "printWidth": 100,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "lf",
  "overrides": [
    {
      "files": "*.md",
      "options": {
        "printWidth": 80,
        "proseWrap": "preserve"
      }
    },
    {
      "files": "*.json",
      "options": {
        "printWidth": 120
      }
    }
  ]
}
```

### 3. 更新package.json脚本

修改`package.json`中的格式化脚本：

```json
{
  "scripts": {
    "format": "prettier --write \"packages/**/*.{js,jsx,ts,tsx,vue,md,json}\" \"*.{js,jsx,ts,tsx,vue,md,json}\" --ignore-path .prettierignore"
  }
}
```

### 4. 修复lint-staged配置

更新`.lintstagedrc.json`文件，移除`git add`命令：

```json
{
  "*.{js,jsx,ts,tsx,vue,md,json}": [
    "prettier --write --ignore-path .prettierignore"
  ]
}
```

### 5. 修复commitlint配置

将`commitlint.config.js`重命名为`commitlint.config.cjs`：

```javascript
/** @type {import('@commitlint/types').UserConfig} */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // 修复 bug
        'docs', // 文档更新
        'style', // 代码格式
        'refactor', // 重构
        'perf', // 性能优化
        'test', // 增加测试
        'chore', // 构建过程或辅助工具的变动
        'revert', // 回退
        'build', // 构建系统或外部依赖项的更改
        'ci', // CI 配置文件和脚本的更改
        'update', // 更新依赖或配置
      ],
    ],
    'type-empty': [2, 'never'],
    'type-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-max-length': [2, 'always', 100],
    'subject-min-length': [2, 'always', 5],
    'header-max-length': [2, 'always', 100],
    'body-max-line-length': [2, 'always', 100],
    'footer-max-line-length': [2, 'always', 100],
  },
}
```

### 6. 创建.gitignore文件

创建`.gitignore`文件排除不需要提交的文件：

```gitignore
# Dependencies
node_modules/
**/node_modules/

# Build outputs
dist/
**/dist/
build/
**/build/

# VitePress cache and build files
**/.vitepress/cache/
**/.vitepress/dist/

# Cache directories
.cache/
**/.cache/

# IDE files
.vscode/
.idea/

# OS files
.DS_Store
Thumbs.db

# Environment files
.env
.env.local
.env.*.local

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Temporary files
*.tmp
*.temp
.tmp/
.temp/
```

## 验证方案

### 1. 测试Prettier格式化

```bash
# 手动运行格式化
pnpm format

# 应该看到类似输出：
# packages/core/src/index.ts 2ms (unchanged)
# packages/vue/src/index.ts 3ms (unchanged)
```

### 2. 测试Git提交流程

```bash
# 添加文件并提交
git add .
git commit -m "fix: 测试提交"

# 应该看到：
# [STARTED] Running tasks for staged files...
# [COMPLETED] prettier --write --ignore-path .prettierignore
```

## 最佳实践

### 1. 文件忽略规则

- 始终排除`node_modules`、`dist`、缓存文件
- 使用通配符模式`**/.vitepress/cache/`确保所有层级的缓存文件被忽略
- 保留必要的类型声明文件，如`src/**/*.d.ts`

### 2. Prettier配置

- 使用一致的代码风格配置
- 为不同文件类型设置专门的格式化规则
- Markdown文件使用较小的行宽以提高可读性

### 3. Git钩子配置

- 避免在lint-staged中使用`git add`命令
- 优先使用Prettier进行代码格式化
- 暂时禁用ESLint直到安装必要的插件

### 4. 模块系统兼容性

- 对于配置文件，优先使用`.cjs`扩展名以确保CommonJS兼容性
- 在项目中保持一致的模块系统使用

## 相关文件

- `.prettierignore` - Prettier忽略文件列表
- `.prettierrc.json` - Prettier格式化配置
- `.lintstagedrc.json` - Git提交前的任务配置
- `commitlint.config.cjs` - 提交信息验证配置
- `.gitignore` - Git忽略文件列表
- `package.json` - 项目依赖和脚本配置

## 注意事项

1. **ESLint配置**：当前ESLint被暂时禁用，需要安装`eslint-plugin-vue`和`vue-eslint-parser`后再启用
2. **VitePress缓存**：确保VitePress缓存文件不被Git跟踪和Prettier格式化
3. **行结束符**：Windows环境下可能出现CRLF警告，这是正常现象
4. **模块兼容性**：使用`.cjs`扩展名可以避免模块系统冲突问题

## 故障排除

### 问题：Prettier无法写入文件

**解决方案**：检查`.prettierignore`文件是否正确排除了缓存文件

### 问题：Git提交钩子失败

**解决方案**：检查`.lintstagedrc.json`配置，确保没有过时的命令

### 问题：Commitlint模块加载错误

**解决方案**：将配置文件重命名为`.cjs`扩展名

---

_最后更新：2024年_
_相关问题：Prettier配置、Git钩子、代码格式化_
