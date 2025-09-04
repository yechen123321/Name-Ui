# 常见问题

这里收集了使用 Name-UI 过程中的常见问题和解决方案。

## 安装和设置

### Q: 安装后组件样式没有生效怎么办？

**A:** 请确保正确引入了 Name-UI 的样式文件：

```javascript
// 在项目入口文件中添加
import '@name-ui/theme'
```

如果使用按需引入，也需要引入完整的样式文件，不能只引入单个组件的样式。

### Q: 支持哪些 Vue/React 版本？

**A:** Name-UI 的版本支持：

- **Vue**: 3.0.0 及以上版本
- **React**: 18.0.0 及以上版本
- **Node.js**: 16.x 及以上版本

### Q: 可以在 Nuxt.js/Next.js 中使用吗？

**A:** 可以，但需要注意：

**Nuxt.js 配置:**

```javascript
// nuxt.config.js
export default {
  css: ['@name-ui/theme'],
  build: {
    transpile: ['@name-ui/vue'],
  },
}
```

**Next.js 配置:**

```javascript
// next.config.js
const nextConfig = {
  transpilePackages: ['@name-ui/react'],
}
module.exports = nextConfig
```

## 组件使用

### Q: 如何自定义组件样式？

**A:** Name-UI 提供多种自定义方式：

**1. CSS 变量覆盖**

```css
:root {
  --n-color-primary: #your-color;
  --n-border-radius-md: 8px;
}
```

**2. CSS 类名覆盖**

```css
.n-button {
  font-weight: bold;
}

.my-custom-button {
  --n-color-primary: #8b5cf6;
}
```

**3. 内联样式**

```vue
<n-button style="background: linear-gradient(45deg, #f093fb 0%, #f5576c 100%)">
  渐变按钮
</n-button>
```

### Q: 如何实现主题切换？

**A:** 使用 `data-theme` 属性：

```javascript
// 切换到暗色主题
document.documentElement.setAttribute('data-theme', 'dark')

// 切换到亮色主题
document.documentElement.setAttribute('data-theme', 'light')
```

**Vue 示例:**

```vue
<script setup>
import { ref } from 'vue'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.setAttribute(
    'data-theme',
    isDark.value ? 'dark' : 'light'
  )
}
</script>
```

**React 示例:**

```tsx
const [isDark, setIsDark] = useState(false)

const toggleTheme = () => {
  const newTheme = isDark ? 'light' : 'dark'
  setIsDark(!isDark)
  document.documentElement.setAttribute('data-theme', newTheme)
}
```

### Q: 组件在不同框架中的 API 是否完全一致？

**A:** 是的，Name-UI 的核心设计原则就是跨框架 API 一致性。唯一的区别是：

- **事件处理**: Vue 使用 `@click`，React 使用 `onClick`
- **双向绑定**: Vue 使用 `v-model`，React 使用 `value` + `onChange`
- **插槽内容**: Vue 使用 `<slot>`，React 使用 `children`

## 性能优化

### Q: 如何减少打包体积？

**A:** 建议的优化方案：

**1. 按需引入**

```javascript
// 推荐：按需引入
import { Button, Input } from '@name-ui/vue'

// 不推荐：全量引入
import NameUI from '@name-ui/vue'
```

**2. Tree Shaking 配置**
确保你的构建工具支持 Tree Shaking（Vite、Webpack 5 默认支持）。

**3. 样式按需加载**
如果你只使用少量组件，可以只引入对应的样式文件：

```javascript
import '@name-ui/theme/button.css'
import '@name-ui/theme/input.css'
```

### Q: 组件渲染性能如何优化？

**A:** 性能优化建议：

**1. 使用 key 属性（列表渲染）**

```vue
<n-button v-for="item in items" :key="item.id">
  {{ item.label }}
</n-button>
```

**2. 避免不必要的响应式数据**

```vue
<script setup>
// 好的做法
const staticConfig = { size: 'large', type: 'primary' }

// 避免
const config = ref({ size: 'large', type: 'primary' })
</script>
```

**3. 使用计算属性缓存**

```vue
<script setup>
const expensiveValue = computed(() => {
  // 复杂计算逻辑
  return heavyCalculation(props.data)
})
</script>
```

## 兼容性问题

### Q: 在 Internet Explorer 中无法使用？

**A:** Name-UI 不支持 Internet Explorer。最低浏览器要求：

- Chrome ≥ 87
- Firefox ≥ 78
- Safari ≥ 14
- Edge ≥ 88

如果需要支持旧版浏览器，建议使用其他 UI 库。

### Q: TypeScript 类型提示不正确？

**A:** 请检查以下配置：

**1. 确保安装了类型依赖**

```bash
npm install -D @types/node
```

**2. tsconfig.json 配置**

```json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true
  }
}
```

**3. Vue 项目额外配置**

```json
{
  "compilerOptions": {
    "types": ["@name-ui/vue/global"]
  }
}
```

### Q: 在 Webpack 4 中遇到构建问题？

**A:** Webpack 4 不完全支持 ESM 格式，建议：

**1. 升级到 Webpack 5**

```bash
npm install webpack@5 --save-dev
```

**2. 或使用 CommonJS 版本**

```javascript
const { Button } = require('@name-ui/vue/lib')
```

## 开发调试

### Q: 如何查看组件的详细属性？

**A:** 可以使用 Vue DevTools 或 React DevTools：

**Vue DevTools:**

- 安装 Vue DevTools 浏览器扩展
- 在组件树中选择 Name-UI 组件
- 查看 Props 和 State

**React DevTools:**

- 安装 React Developer Tools 扩展
- 选择组件查看 props 和 hooks

### Q: 如何调试样式问题？

**A:** 调试样式的方法：

**1. 检查 CSS 变量**
在浏览器控制台中：

```javascript
getComputedStyle(document.documentElement).getPropertyValue('--n-color-primary')
```

**2. 查看生效的 CSS 类**
使用浏览器开发者工具的 Elements 面板，检查元素上的 CSS 类名和样式。

**3. 临时修改样式**

```javascript
document.documentElement.style.setProperty('--n-color-primary', '#ff0000')
```

### Q: 组件内部报错如何调试？

**A:** 调试建议：

**1. 开启开发模式**

```javascript
// Vue
app.config.devtools = true

// React
// 使用开发版本的 React
```

**2. 查看浏览器控制台**
Name-UI 会在开发模式下输出详细的错误信息。

**3. 创建最小复现示例**
如果是 bug，请创建最小的复现示例并提交 issue。

## 迁移和升级

### Q: 如何从其他 UI 库迁移到 Name-UI？

**A:** 迁移建议：

**1. 逐步替换**
不要一次性替换所有组件，建议逐个页面或模块进行替换。

**2. 样式适配**
Name-UI 的 CSS 变量命名可能与其他库不同，需要调整样式配置。

**3. API 差异**
查看各组件的文档，了解 API 差异并相应调整代码。

### Q: 如何升级 Name-UI 版本？

**A:** 升级步骤：

**1. 查看更新日志**
在 [更新日志](/changelog) 中查看版本变更。

**2. 测试环境升级**

```bash
npm update @name-ui/vue @name-ui/theme
# 或
npm update @name-ui/react @name-ui/theme
```

**3. 运行测试**
确保所有功能正常工作后再部署到生产环境。

## 报告问题

### Q: 发现 bug 如何报告？

**A:** 请在 [GitHub Issues](https://github.com/yechen123321/Name-Ui/issues) 中报告，包含：

- 详细的问题描述
- 复现步骤
- 环境信息（浏览器、框架版本等）
- 最小化的复现示例

### Q: 有新功能需求怎么办？

**A:** 欢迎在 [GitHub Discussions](https://github.com/yechen123321/Name-Ui/discussions) 中讨论功能需求，或者直接提交 Feature Request。

## 社区支持

### Q: 在哪里可以获得帮助？

**A:** 获取帮助的渠道：

- [GitHub Issues](https://github.com/yechen123321/Name-Ui/issues) - Bug 报告和功能请求
- [GitHub Discussions](https://github.com/yechen123321/Name-Ui/discussions) - 使用讨论和交流
- [文档网站](/) - 完整的使用指南和 API 文档

### Q: 如何参与贡献？

**A:** 查看我们的 [贡献指南](/contributing) 了解如何：

- 报告问题
- 提交代码
- 改进文档
- 参与讨论

我们欢迎任何形式的贡献！

---

没有找到你的问题？欢迎在 [GitHub Discussions](https://github.com/yechen123321/Name-Ui/discussions) 中提问！
