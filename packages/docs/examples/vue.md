# Vue 示例

这里展示了如何在 Vue 3 项目中使用 Name-UI 组件库。

## 快速开始

### 1. 创建 Vue 项目

使用 Vite 创建新的 Vue 项目：

```bash
npm create vue@latest my-name-ui-app
cd my-name-ui-app
npm install
```

### 2. 安装 Name-UI

```bash
npm install @name-ui/vue @name-ui/theme
```

### 3. 引入样式

在 `src/main.js` 中引入 Name-UI 样式：

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import '@name-ui/theme'

createApp(App).mount('#app')
```

## 基础示例

### 简单的登录表单

```vue
<template>
  <div class="login-form">
    <h2>用户登录</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="username">用户名</label>
        <n-input
          id="username"
          v-model="formData.username"
          placeholder="请输入用户名"
          size="large"
          :status="errors.username ? 'error' : undefined"
        />
        <span v-if="errors.username" class="error-text">{{
          errors.username
        }}</span>
      </div>

      <div class="form-group">
        <label for="password">密码</label>
        <n-input
          id="password"
          v-model="formData.password"
          type="password"
          placeholder="请输入密码"
          size="large"
          :status="errors.password ? 'error' : undefined"
        />
        <span v-if="errors.password" class="error-text">{{
          errors.password
        }}</span>
      </div>

      <div class="form-actions">
        <n-button
          type="primary"
          size="large"
          block
          :loading="loading"
          @click="handleLogin"
        >
          {{ loading ? '登录中...' : '登录' }}
        </n-button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Button as NButton, Input as NInput } from '@name-ui/vue'

const loading = ref(false)
const formData = reactive({
  username: '',
  password: '',
})

const errors = reactive({
  username: '',
  password: '',
})

const validateForm = () => {
  errors.username = ''
  errors.password = ''

  if (!formData.username) {
    errors.username = '请输入用户名'
    return false
  }

  if (!formData.password) {
    errors.password = '请输入密码'
    return false
  }

  if (formData.password.length < 6) {
    errors.password = '密码长度不能少于6位'
    return false
  }

  return true
}

const handleLogin = async () => {
  if (!validateForm()) return

  loading.value = true

  try {
    // 模拟登录请求
    await new Promise(resolve => setTimeout(resolve, 2000))
    alert('登录成功！')
  } catch (error) {
    alert('登录失败，请重试')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-form {
  max-width: 400px;
  margin: 50px auto;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: white;
}

.login-form h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #1f2937;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #374151;
}

.form-actions {
  margin-top: 30px;
}

.error-text {
  display: block;
  margin-top: 4px;
  font-size: 12px;
  color: #ef4444;
}
</style>
```

### 组件展示面板

```vue
<template>
  <div class="demo-panel">
    <div class="panel-header">
      <h2>Name-UI 组件展示</h2>
      <div class="theme-switcher">
        <label>主题：</label>
        <select v-model="currentTheme" @change="changeTheme">
          <option value="light">亮色</option>
          <option value="dark">暗色</option>
        </select>
      </div>
    </div>

    <div class="demo-section">
      <h3>按钮组件</h3>
      <div class="button-group">
        <n-button>默认按钮</n-button>
        <n-button type="primary">主要按钮</n-button>
        <n-button type="success">成功按钮</n-button>
        <n-button type="warning">警告按钮</n-button>
        <n-button type="error">危险按钮</n-button>
      </div>

      <div class="button-group">
        <n-button size="small">小按钮</n-button>
        <n-button size="medium">中按钮</n-button>
        <n-button size="large">大按钮</n-button>
      </div>

      <div class="button-group">
        <n-button :loading="buttonLoading" @click="toggleLoading">
          {{ buttonLoading ? '加载中...' : '点击加载' }}
        </n-button>
        <n-button disabled>禁用按钮</n-button>
      </div>
    </div>

    <div class="demo-section">
      <h3>输入框组件</h3>
      <div class="input-group">
        <n-input v-model="inputValue" placeholder="基础输入框" />
        <n-input v-model="inputValue" placeholder="大尺寸输入框" size="large" />
        <n-input v-model="inputValue" placeholder="成功状态" status="success" />
        <n-input v-model="inputValue" placeholder="错误状态" status="error" />
      </div>

      <div class="input-group">
        <n-input
          v-model="textareaValue"
          type="textarea"
          placeholder="多行文本输入"
          rows="4"
        />
      </div>
    </div>

    <div class="demo-section">
      <h3>表单示例</h3>
      <div class="form-demo">
        <div class="form-row">
          <div class="form-field">
            <label>姓名</label>
            <n-input v-model="form.name" placeholder="请输入姓名" />
          </div>
          <div class="form-field">
            <label>邮箱</label>
            <n-input
              v-model="form.email"
              type="email"
              placeholder="请输入邮箱"
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-field">
            <label>自我介绍</label>
            <n-input
              v-model="form.bio"
              type="textarea"
              placeholder="简单介绍一下自己..."
              autosize
              show-count
              maxlength="200"
            />
          </div>
        </div>

        <div class="form-actions">
          <n-button @click="resetForm">重置</n-button>
          <n-button type="primary" @click="submitForm">提交</n-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { Button as NButton, Input as NInput } from '@name-ui/vue'

const currentTheme = ref('light')
const buttonLoading = ref(false)
const inputValue = ref('')
const textareaValue = ref('')

const form = reactive({
  name: '',
  email: '',
  bio: '',
})

const changeTheme = () => {
  document.documentElement.setAttribute('data-theme', currentTheme.value)
  localStorage.setItem('theme', currentTheme.value)
}

const toggleLoading = () => {
  buttonLoading.value = true
  setTimeout(() => {
    buttonLoading.value = false
  }, 2000)
}

const resetForm = () => {
  Object.assign(form, {
    name: '',
    email: '',
    bio: '',
  })
}

const submitForm = () => {
  console.log('提交表单:', form)
  alert('表单提交成功！请查看控制台输出。')
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'light'
  currentTheme.value = savedTheme
  changeTheme()
})
</script>

<style scoped>
.demo-panel {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e5e7eb;
}

.panel-header h2 {
  margin: 0;
  color: #1f2937;
}

.theme-switcher {
  display: flex;
  align-items: center;
  gap: 8px;
}

.theme-switcher label {
  font-weight: 500;
}

.theme-switcher select {
  padding: 4px 8px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  background: white;
}

.demo-section {
  margin-bottom: 40px;
}

.demo-section h3 {
  margin-bottom: 20px;
  color: #374151;
  font-size: 18px;
}

.button-group {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
}

.form-demo {
  background: #f9fafb;
  padding: 24px;
  border-radius: 8px;
}

.form-row {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.form-field {
  flex: 1;
}

.form-field label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #374151;
}

.form-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 24px;
}

@media (max-width: 768px) {
  .panel-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .form-row {
    flex-direction: column;
  }

  .button-group {
    flex-direction: column;
  }
}

/* 暗色主题样式 */
[data-theme='dark'] .demo-panel {
  background: #111827;
  color: #f9fafb;
}

[data-theme='dark'] .panel-header {
  border-bottom-color: #374151;
}

[data-theme='dark'] .panel-header h2 {
  color: #f9fafb;
}

[data-theme='dark'] .demo-section h3 {
  color: #d1d5db;
}

[data-theme='dark'] .form-demo {
  background: #1f2937;
}

[data-theme='dark'] .form-field label {
  color: #d1d5db;
}

[data-theme='dark'] .theme-switcher select {
  background: #1f2937;
  border-color: #374151;
  color: #f9fafb;
}
</style>
```

## 高级示例

### 数据表格

```vue
<template>
  <div class="data-table">
    <div class="table-header">
      <h3>用户列表</h3>
      <div class="table-controls">
        <n-input
          v-model="searchTerm"
          placeholder="搜索用户..."
          size="small"
          style="width: 200px;"
        />
        <n-button type="primary" size="small" @click="addUser">
          添加用户
        </n-button>
      </div>
    </div>

    <div class="table-container">
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>姓名</th>
            <th>邮箱</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in filteredUsers" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <span :class="['status', user.status]">
                {{ user.status === 'active' ? '活跃' : '禁用' }}
              </span>
            </td>
            <td>
              <div class="action-buttons">
                <n-button size="small" @click="editUser(user)">编辑</n-button>
                <n-button
                  size="small"
                  type="error"
                  @click="deleteUser(user.id)"
                >
                  删除
                </n-button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="showEditForm" class="edit-form">
      <h4>{{ editingUser.id ? '编辑用户' : '添加用户' }}</h4>
      <div class="form-group">
        <n-input v-model="editingUser.name" placeholder="姓名" />
      </div>
      <div class="form-group">
        <n-input v-model="editingUser.email" placeholder="邮箱" />
      </div>
      <div class="form-actions">
        <n-button @click="cancelEdit">取消</n-button>
        <n-button type="primary" @click="saveUser">保存</n-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { Button as NButton, Input as NInput } from '@name-ui/vue'

const searchTerm = ref('')
const showEditForm = ref(false)

const users = ref([
  { id: 1, name: '张三', email: 'zhangsan@example.com', status: 'active' },
  { id: 2, name: '李四', email: 'lisi@example.com', status: 'active' },
  { id: 3, name: '王五', email: 'wangwu@example.com', status: 'inactive' },
  { id: 4, name: '赵六', email: 'zhaoliu@example.com', status: 'active' },
])

const editingUser = reactive({
  id: null,
  name: '',
  email: '',
  status: 'active',
})

const filteredUsers = computed(() => {
  if (!searchTerm.value) return users.value

  return users.value.filter(
    user =>
      user.name.includes(searchTerm.value) ||
      user.email.includes(searchTerm.value)
  )
})

const addUser = () => {
  Object.assign(editingUser, {
    id: null,
    name: '',
    email: '',
    status: 'active',
  })
  showEditForm.value = true
}

const editUser = user => {
  Object.assign(editingUser, user)
  showEditForm.value = true
}

const saveUser = () => {
  if (editingUser.id) {
    // 更新现有用户
    const index = users.value.findIndex(u => u.id === editingUser.id)
    if (index !== -1) {
      users.value[index] = { ...editingUser }
    }
  } else {
    // 添加新用户
    const newId = Math.max(...users.value.map(u => u.id)) + 1
    users.value.push({
      ...editingUser,
      id: newId,
    })
  }

  cancelEdit()
}

const deleteUser = id => {
  if (confirm('确定要删除这个用户吗？')) {
    users.value = users.value.filter(u => u.id !== id)
  }
}

const cancelEdit = () => {
  showEditForm.value = false
  Object.assign(editingUser, {
    id: null,
    name: '',
    email: '',
    status: 'active',
  })
}
</script>

<style scoped>
.data-table {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.table-controls {
  display: flex;
  gap: 12px;
  align-items: center;
}

.table-container {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #e5e7eb;
}

.table th {
  background: #f9fafb;
  font-weight: 600;
  color: #374151;
}

.status {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.status.active {
  background: #d1fae5;
  color: #047857;
}

.status.inactive {
  background: #fee2e2;
  color: #dc2626;
}

.action-buttons {
  display: flex;
  gap: 8px;
}

.edit-form {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  min-width: 300px;
}

.edit-form h4 {
  margin: 0 0 20px 0;
  color: #1f2937;
}

.form-group {
  margin-bottom: 16px;
}

.form-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 20px;
}

[data-theme='dark'] .table-container {
  background: #1f2937;
}

[data-theme='dark'] .table th {
  background: #374151;
  color: #d1d5db;
}

[data-theme='dark'] .table td {
  color: #f9fafb;
  border-bottom-color: #374151;
}

[data-theme='dark'] .edit-form {
  background: #1f2937;
  color: #f9fafb;
}

[data-theme='dark'] .edit-form h4 {
  color: #f9fafb;
}
</style>
```

## 项目结构

在实际的 Vue 项目中，建议按以下结构组织代码：

```
src/
├── components/          # 业务组件
│   ├── ui/             # UI 组件封装
│   │   ├── AppButton.vue
│   │   ├── AppInput.vue
│   │   └── index.js
│   ├── forms/          # 表单组件
│   │   ├── LoginForm.vue
│   │   └── ContactForm.vue
│   └── layout/         # 布局组件
│       ├── Header.vue
│       ├── Sidebar.vue
│       └── Footer.vue
├── views/              # 页面组件
│   ├── Home.vue
│   ├── About.vue
│   └── Contact.vue
├── composables/        # 组合式函数
│   ├── useTheme.js
│   ├── useForm.js
│   └── useApi.js
├── styles/            # 样式文件
│   ├── variables.css  # CSS 变量
│   ├── components.css # 组件样式覆盖
│   └── global.css     # 全局样式
└── main.js           # 入口文件
```

## 最佳实践

### 1. 组件封装

封装业务组件时，继承 Name-UI 的设计风格：

```vue
<!-- components/ui/AppButton.vue -->
<template>
  <n-button
    v-bind="$attrs"
    :class="['app-button', className]"
    @click="handleClick"
  >
    <slot />
  </n-button>
</template>

<script setup>
import { Button as NButton } from '@name-ui/vue'

defineProps({
  className: String,
})

const emit = defineEmits(['click'])

const handleClick = event => {
  // 添加业务逻辑
  emit('click', event)
}
</script>

<style scoped>
.app-button {
  /* 业务样式定制 */
}
</style>
```

### 2. 主题管理

使用 Composable 管理主题：

```javascript
// composables/useTheme.js
import { ref, watch } from 'vue'

const currentTheme = ref('light')

export function useTheme() {
  const setTheme = theme => {
    currentTheme.value = theme
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }

  const toggleTheme = () => {
    const newTheme = currentTheme.value === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
  }

  return {
    currentTheme,
    setTheme,
    toggleTheme,
    initTheme,
  }
}
```

### 3. 表单处理

使用 Composable 处理表单逻辑：

```javascript
// composables/useForm.js
import { reactive, computed } from 'vue'

export function useForm(initialData, rules = {}) {
  const formData = reactive({ ...initialData })
  const errors = reactive({})

  const isValid = computed(() => {
    return Object.keys(errors).length === 0
  })

  const validate = () => {
    // 清空之前的错误
    Object.keys(errors).forEach(key => {
      delete errors[key]
    })

    // 执行验证规则
    Object.keys(rules).forEach(field => {
      const rule = rules[field]
      const value = formData[field]

      if (rule.required && !value) {
        errors[field] = rule.message || `${field} 是必填项`
      }
    })

    return isValid.value
  }

  const reset = () => {
    Object.assign(formData, initialData)
    Object.keys(errors).forEach(key => {
      delete errors[key]
    })
  }

  return {
    formData,
    errors,
    isValid,
    validate,
    reset,
  }
}
```

通过这些示例，你可以快速上手在 Vue 项目中使用 Name-UI 组件库。
