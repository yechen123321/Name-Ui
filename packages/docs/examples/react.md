# React 示例

展示如何在 React 18+ 项目中使用 Name-UI 组件库。

## 快速开始

### 1. 创建项目

```bash
npm create vite@latest my-app --template react-ts
cd my-app
npm install @name-ui/react @name-ui/theme
```

### 2. 引入样式

```typescript
// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@name-ui/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

## 基础示例

### 登录表单

```tsx
import React, { useState } from 'react'
import { Button, Input } from '@name-ui/react'

interface FormData {
  username: string
  password: string
}

export default function LoginForm() {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
  })

  const updateField = (field: keyof FormData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleLogin = async () => {
    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      alert('登录成功！')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '30px' }}>
      <h2>用户登录</h2>

      <div style={{ marginBottom: '20px' }}>
        <label>用户名</label>
        <Input
          value={formData.username}
          onChange={updateField('username')}
          placeholder='请输入用户名'
          size='large'
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label>密码</label>
        <Input
          value={formData.password}
          onChange={updateField('password')}
          type='password'
          placeholder='请输入密码'
          size='large'
        />
      </div>

      <Button
        type='primary'
        size='large'
        block
        loading={loading}
        onClick={handleLogin}
      >
        {loading ? '登录中...' : '登录'}
      </Button>
    </div>
  )
}
```

### 组件展示

```tsx
import React, { useState, useEffect } from 'react'
import { Button, Input } from '@name-ui/react'

export default function ComponentDemo() {
  const [theme, setTheme] = useState('light')
  const [loading, setLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const toggleLoading = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '40px',
        }}
      >
        <h2>Name-UI 组件展示</h2>
        <Button onClick={toggleTheme}>
          切换到{theme === 'light' ? '暗色' : '亮色'}主题
        </Button>
      </div>

      <section style={{ marginBottom: '40px' }}>
        <h3>按钮组件</h3>
        <div
          style={{
            display: 'flex',
            gap: '12px',
            marginBottom: '16px',
            flexWrap: 'wrap',
          }}
        >
          <Button>默认</Button>
          <Button type='primary'>主要</Button>
          <Button type='success'>成功</Button>
          <Button type='warning'>警告</Button>
          <Button type='error'>危险</Button>
        </div>

        <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
          <Button size='small'>小按钮</Button>
          <Button size='medium'>中按钮</Button>
          <Button size='large'>大按钮</Button>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <Button loading={loading} onClick={toggleLoading}>
            {loading ? '加载中...' : '点击加载'}
          </Button>
          <Button disabled>禁用</Button>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h3>输入框组件</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input
            value={inputValue}
            onChange={setInputValue}
            placeholder='基础输入框'
          />
          <Input
            value={inputValue}
            onChange={setInputValue}
            placeholder='大尺寸输入框'
            size='large'
          />
          <Input
            value={inputValue}
            onChange={setInputValue}
            placeholder='成功状态'
            status='success'
          />
          <Input
            value={inputValue}
            onChange={setInputValue}
            type='textarea'
            placeholder='多行文本'
            rows={3}
          />
        </div>
      </section>
    </div>
  )
}
```

## 数据表格示例

```tsx
import React, { useState } from 'react'
import { Button, Input } from '@name-ui/react'

interface User {
  id: number
  name: string
  email: string
  status: 'active' | 'inactive'
}

export default function DataTable() {
  const [searchTerm, setSearchTerm] = useState('')
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: '张三', email: 'zhangsan@example.com', status: 'active' },
    { id: 2, name: '李四', email: 'lisi@example.com', status: 'active' },
    { id: 3, name: '王五', email: 'wangwu@example.com', status: 'inactive' },
  ])

  const filteredUsers = users.filter(
    user => user.name.includes(searchTerm) || user.email.includes(searchTerm)
  )

  const deleteUser = (id: number) => {
    if (confirm('确定删除吗？')) {
      setUsers(prev => prev.filter(u => u.id !== id))
    }
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}
      >
        <h3>用户列表</h3>
        <Input
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder='搜索用户...'
          style={{ width: '200px' }}
        />
      </div>

      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          background: 'white',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}
      >
        <thead>
          <tr style={{ background: '#f9fafb' }}>
            <th style={{ padding: '12px', textAlign: 'left' }}>ID</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>姓名</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>邮箱</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>状态</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>操作</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td
                style={{ padding: '12px', borderBottom: '1px solid #e5e7eb' }}
              >
                {user.id}
              </td>
              <td
                style={{ padding: '12px', borderBottom: '1px solid #e5e7eb' }}
              >
                {user.name}
              </td>
              <td
                style={{ padding: '12px', borderBottom: '1px solid #e5e7eb' }}
              >
                {user.email}
              </td>
              <td
                style={{ padding: '12px', borderBottom: '1px solid #e5e7eb' }}
              >
                <span
                  style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    background:
                      user.status === 'active' ? '#d1fae5' : '#fee2e2',
                    color: user.status === 'active' ? '#047857' : '#dc2626',
                  }}
                >
                  {user.status === 'active' ? '活跃' : '禁用'}
                </span>
              </td>
              <td
                style={{ padding: '12px', borderBottom: '1px solid #e5e7eb' }}
              >
                <div style={{ display: 'flex', gap: '8px' }}>
                  <Button size='small'>编辑</Button>
                  <Button
                    size='small'
                    type='error'
                    onClick={() => deleteUser(user.id)}
                  >
                    删除
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
```

## 自定义 Hooks

### 主题切换

```typescript
// hooks/useTheme.ts
import { useState, useEffect } from 'react'

export type Theme = 'light' | 'dark'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return { theme, toggleTheme }
}
```

### 表单处理

```typescript
// hooks/useForm.ts
import { useState, useCallback } from 'react'

export function useForm<T extends Record<string, any>>(initialData: T) {
  const [formData, setFormData] = useState<T>(initialData)
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({})

  const updateField = useCallback(
    (field: keyof T) => (value: any) => {
      setFormData(prev => ({ ...prev, [field]: value }))
      if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: undefined }))
      }
    },
    [errors]
  )

  const reset = useCallback(() => {
    setFormData(initialData)
    setErrors({})
  }, [initialData])

  return { formData, errors, updateField, reset }
}
```

## 项目结构

```
src/
├── components/
│   ├── ui/             # UI 组件封装
│   ├── forms/          # 表单组件
│   └── layout/         # 布局组件
├── pages/              # 页面组件
├── hooks/              # 自定义 Hooks
├── types/              # 类型定义
├── utils/              # 工具函数
└── styles/             # 样式文件
```

## 最佳实践

1. **组件封装** - 基于 Name-UI 组件创建业务组件
2. **类型安全** - 充分利用 TypeScript 类型检查
3. **主题一致** - 使用统一的主题管理
4. **按需引入** - 避免引入不必要的组件
5. **性能优化** - 合理使用 React.memo 和 useMemo
