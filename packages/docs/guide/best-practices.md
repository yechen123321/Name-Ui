# 最佳实践

本文档收集了使用 Name-UI 的最佳实践和推荐模式，帮助你更好地构建用户界面。

## 组件使用原则

### 1. 语义化选择

根据业务语义选择合适的组件类型和样式：

```vue
<!-- ✅ 推荐：语义化使用 -->
<n-button type="primary">提交</n-button>
<n-button type="success">保存</n-button>
<n-button type="warning">重置</n-button>
<n-button type="error">删除</n-button>

<!-- ❌ 不推荐：随意使用颜色 -->
<n-button type="primary">删除</n-button>
<n-button type="error">保存</n-button>
```

### 2. 尺寸一致性

在同一界面或模块中保持组件尺寸的一致性：

```vue
<!-- ✅ 推荐：尺寸统一 -->
<template>
  <div class="form-container">
    <n-input v-model="form.name" size="large" placeholder="姓名" />
    <n-input v-model="form.email" size="large" placeholder="邮箱" />
    <n-button type="primary" size="large">提交</n-button>
  </div>
</template>

<!-- ❌ 不推荐：尺寸混乱 -->
<template>
  <div class="form-container">
    <n-input v-model="form.name" size="small" placeholder="姓名" />
    <n-input v-model="form.email" size="large" placeholder="邮箱" />
    <n-button type="primary" size="medium">提交</n-button>
  </div>
</template>
```

### 3. 状态管理

合理使用组件的状态属性：

```vue
<template>
  <div class="form-example">
    <!-- 加载状态 -->
    <n-button :loading="isSubmitting" @click="handleSubmit">
      {{ isSubmitting ? '提交中...' : '提交' }}
    </n-button>

    <!-- 禁用状态 -->
    <n-button :disabled="!isFormValid">提交</n-button>

    <!-- 错误状态 -->
    <n-input
      v-model="form.email"
      :status="errors.email ? 'error' : undefined"
      placeholder="邮箱"
    />
    <span v-if="errors.email" class="error-message">
      {{ errors.email }}
    </span>
  </div>
</template>
```

## 性能优化

### 1. 按需引入

只引入使用到的组件：

```javascript
// ✅ 推荐：按需引入
import { Button, Input } from '@name-ui/vue'

// ❌ 不推荐：全量引入
import NameUI from '@name-ui/vue'
```

### 2. 避免不必要的重渲染

**Vue 示例：**

```vue
<script setup>
import { computed, ref } from 'vue'

const items = ref([...])
const selectedId = ref(null)

// ✅ 推荐：使用计算属性
const selectedItem = computed(() =>
  items.value.find(item => item.id === selectedId.value)
)

// ❌ 不推荐：每次都重新计算
const getSelectedItem = () =>
  items.value.find(item => item.id === selectedId.value)
</script>
```

**React 示例：**

```tsx
// ✅ 推荐：使用 useMemo
const selectedItem = useMemo(
  () => items.find(item => item.id === selectedId),
  [items, selectedId]
)

// ✅ 推荐：使用 useCallback
const handleClick = useCallback(id => {
  setSelectedId(id)
}, [])
```

### 3. 虚拟化长列表

对于大量数据的列表，使用虚拟化技术：

```vue
<template>
  <div class="virtual-list">
    <!-- 只渲染可见区域的组件 -->
    <div v-for="item in visibleItems" :key="item.id" class="list-item">
      <n-button @click="handleItemClick(item)">
        {{ item.name }}
      </n-button>
    </div>
  </div>
</template>
```

## 主题定制最佳实践

### 1. 使用 CSS 变量

```css
/* ✅ 推荐：使用 CSS 变量 */
:root {
  --n-color-primary: #1890ff;
  --n-border-radius-md: 8px;
}

.custom-component {
  background: var(--n-color-primary);
  border-radius: var(--n-border-radius-md);
}

/* ❌ 不推荐：硬编码值 */
.custom-component {
  background: #1890ff;
  border-radius: 8px;
}
```

### 2. 主题切换

实现平滑的主题切换：

```javascript
// ✅ 推荐：带过渡效果的主题切换
const switchTheme = theme => {
  // 添加过渡效果
  document.documentElement.style.transition = 'all 0.3s ease'

  // 切换主题
  document.documentElement.setAttribute('data-theme', theme)

  // 移除过渡效果（避免影响其他动画）
  setTimeout(() => {
    document.documentElement.style.transition = ''
  }, 300)
}
```

### 3. 响应式主题

根据屏幕尺寸调整主题变量：

```css
:root {
  --n-spacing-md: 16px;
  --n-font-size-base: 16px;
}

@media (max-width: 768px) {
  :root {
    --n-spacing-md: 12px;
    --n-font-size-base: 14px;
  }
}
```

## 表单处理

### 1. 表单验证

建立统一的表单验证模式：

```vue
<script setup>
import { reactive, computed } from 'vue'

const form = reactive({
  username: '',
  email: '',
  password: '',
})

const rules = {
  username: { required: true, minLength: 3 },
  email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  password: { required: true, minLength: 6 },
}

const errors = reactive({})

const validateField = (field, value) => {
  const rule = rules[field]

  if (rule.required && !value) {
    errors[field] = `${field} 是必填项`
    return false
  }

  if (rule.minLength && value.length < rule.minLength) {
    errors[field] = `${field} 最少需要 ${rule.minLength} 个字符`
    return false
  }

  if (rule.pattern && !rule.pattern.test(value)) {
    errors[field] = `${field} 格式不正确`
    return false
  }

  delete errors[field]
  return true
}

const isFormValid = computed(
  () =>
    Object.keys(errors).length === 0 &&
    Object.values(form).every(value => value)
)
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-field">
      <n-input
        v-model="form.username"
        placeholder="用户名"
        :status="errors.username ? 'error' : undefined"
        @blur="validateField('username', form.username)"
      />
      <span v-if="errors.username" class="error-text">
        {{ errors.username }}
      </span>
    </div>

    <n-button type="primary" :disabled="!isFormValid" @click="handleSubmit">
      提交
    </n-button>
  </form>
</template>
```

### 2. 异步验证

处理需要服务器验证的字段：

```vue
<script setup>
import { ref, watch, debounce } from 'vue'

const username = ref('')
const usernameStatus = ref('')
const isCheckingUsername = ref(false)

const checkUsername = debounce(async value => {
  if (!value) return

  isCheckingUsername.value = true
  usernameStatus.value = ''

  try {
    const response = await fetch(`/api/check-username?username=${value}`)
    const result = await response.json()

    if (result.exists) {
      usernameStatus.value = 'error'
    } else {
      usernameStatus.value = 'success'
    }
  } catch (error) {
    usernameStatus.value = 'error'
  } finally {
    isCheckingUsername.value = false
  }
}, 500)

watch(username, checkUsername)
</script>

<template>
  <n-input
    v-model="username"
    placeholder="用户名"
    :status="usernameStatus"
    :loading="isCheckingUsername"
  />
</template>
```

## 可访问性

### 1. 键盘导航

确保所有组件都支持键盘导航：

```vue
<template>
  <div class="button-group" role="group" aria-label="操作按钮">
    <n-button
      @click="handleSave"
      @keydown.enter="handleSave"
      aria-label="保存当前内容"
    >
      保存
    </n-button>

    <n-button
      @click="handleCancel"
      @keydown.enter="handleCancel"
      aria-label="取消当前操作"
    >
      取消
    </n-button>
  </div>
</template>
```

### 2. 屏幕阅读器支持

为组件添加适当的 ARIA 属性：

```vue
<template>
  <div class="form-field">
    <label for="email-input">邮箱地址</label>
    <n-input
      id="email-input"
      v-model="email"
      type="email"
      :aria-invalid="!!emailError"
      :aria-describedby="emailError ? 'email-error' : undefined"
      placeholder="请输入邮箱地址"
    />
    <div v-if="emailError" id="email-error" role="alert" class="error-message">
      {{ emailError }}
    </div>
  </div>
</template>
```

### 3. 色彩对比度

确保主题中的颜色符合可访问性标准：

```css
/* 确保文字和背景的对比度至少为 4.5:1 */
:root {
  --n-color-text: #1f2937; /* 深色文字 */
  --n-color-background: #ffffff; /* 白色背景 */

  --n-color-text-secondary: #6b7280; /* 次要文字也要有足够对比度 */
}

[data-theme='dark'] {
  --n-color-text: #f9fafb; /* 浅色文字 */
  --n-color-background: #111827; /* 深色背景 */
}
```

## 错误处理

### 1. 组件错误边界

**React 示例：**

```tsx
class ComponentErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Component error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='error-fallback'>
          <p>组件加载失败，请刷新页面重试</p>
          <Button onClick={() => window.location.reload()}>刷新页面</Button>
        </div>
      )
    }

    return this.props.children
  }
}
```

### 2. 网络错误处理

```vue
<script setup>
const handleAsyncAction = async () => {
  loading.value = true
  error.value = null

  try {
    await performAction()
    success.value = true
  } catch (err) {
    error.value = err.message || '操作失败，请重试'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div>
    <n-button :loading="loading" :disabled="loading" @click="handleAsyncAction">
      执行操作
    </n-button>

    <div v-if="error" class="error-message" role="alert">
      {{ error }}
      <n-button size="small" @click="handleAsyncAction"> 重试 </n-button>
    </div>

    <div v-if="success" class="success-message">操作成功完成！</div>
  </div>
</template>
```

## 测试建议

### 1. 组件测试

```javascript
// 测试组件的基本功能
describe('Button Component', () => {
  it('should handle click events', () => {
    const handleClick = vi.fn()
    const wrapper = mount(Button, {
      props: { onClick: handleClick },
    })

    wrapper.trigger('click')
    expect(handleClick).toHaveBeenCalled()
  })

  it('should show loading state', () => {
    const wrapper = mount(Button, {
      props: { loading: true },
    })

    expect(wrapper.classes()).toContain('n-button--loading')
    expect(wrapper.find('.loading-icon')).toBeTruthy()
  })
})
```

### 2. 可访问性测试

```javascript
// 测试可访问性
import { axe } from '@axe-core/vue'

describe('Accessibility', () => {
  it('should have no accessibility violations', async () => {
    const wrapper = mount(YourComponent)
    const results = await axe(wrapper.element)

    expect(results.violations).toHaveLength(0)
  })
})
```

## 代码组织

### 1. 组件结构

```
components/
├── ui/              # 基础 UI 组件
│   ├── Button/
│   │   ├── Button.vue
│   │   ├── Button.test.js
│   │   └── index.js
│   └── Input/
├── business/        # 业务组件
│   ├── UserCard/
│   └── ProductList/
└── layout/          # 布局组件
    ├── Header/
    └── Sidebar/
```

### 2. 样式组织

```css
/* styles/variables.css - 变量定义 */
:root {
  --primary-color: #1890ff;
  --success-color: #52c41a;
}

/* styles/components.css - 组件样式覆盖 */
.n-button {
  font-weight: 500;
}

/* styles/utilities.css - 工具类 */
.text-center {
  text-align: center;
}
.mt-4 {
  margin-top: 1rem;
}
```

通过遵循这些最佳实践，你可以更好地使用 Name-UI 构建高质量的用户界面。
