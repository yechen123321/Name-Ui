# 组件总览

Name-UI 提供了一套完整的 UI 组件，支持 Vue 和 React 两个框架。所有组件都采用统一的设计语言和 API 规范，确保在不同框架中有一致的使用体验。

## 设计原则

### 🎯 跨框架一致性

所有组件在 Vue 和 React 中具有相同的 API 设计和视觉效果，降低学习成本。

### 🎨 主题定制

基于 CSS 变量的主题系统，支持亮色/暗色主题及完全自定义主题。

### ♿ 无障碍访问

遵循 WCAG 2.1 标准，支持键盘导航和屏幕阅读器。

### 📱 响应式设计

所有组件都经过移动端优化，支持不同屏幕尺寸。

### ⚡ 高性能

基于现代构建工具优化，支持 Tree-shaking，按需加载。

## 组件分类

### 🔘 基础组件

#### Button 按钮

**用于触发操作的按钮组件**

- 🎨 多种类型：default、primary、success、warning、error
- 📎 多种尺寸：small、medium、large
- ⚙️ 多种状态：加载中、禁用、块级按钮
- 🎯 [查看文档](/components/button)

::: details 快速预览

```vue
<!-- Vue -->
<n-button type="primary">Primary Button</n-button>
<n-button type="success" size="large">Success Button</n-button>
<n-button loading>加载中...</n-button>
```

```tsx
// React
<Button type="primary">Primary Button</Button>
<Button type="success" size="large">Success Button</Button>
<Button loading>加载中...</Button>
```

:::

#### Input 输入框

**用于用户输入的表单控件**

- 📝 多种输入类型：text、password、email、textarea
- 🎨 状态提示：success、warning、error
- 📊 字符计数和限制
- 🔍 前缀后缀内容支持
- 🎯 [查看文档](/components/input)

::: details 快速预览

```vue
<!-- Vue -->
<n-input v-model="value" placeholder="请输入内容" />
<n-input type="password" placeholder="密码" />
<n-input type="textarea" placeholder="多行文本" />
```

```tsx
// React
<Input value={value} onChange={setValue} placeholder="请输入内容" />
<Input type="password" placeholder="密码" />
<Input type="textarea" placeholder="多行文本" />
```

:::

### 📊 数据展示（计划中）

#### Table 表格

**用于展示结构化数据的表格组件**

- 📊 数据排序和筛选
- 📦 分页支持
- 🎨 自定义列渲染
- 📋 表格导出
- ⏳ 即将发布

#### Pagination 分页

**用于大量数据分页展示**

- 🔢 多种分页样式
- ⏭️ 快速跳转
- 📊 显示总数
- ⏳ 即将发布

### 📝 表单组件（计划中）

#### Form 表单

**用于集成表单数据和验证**

- ✅ 表单验证
- 🎨 表单布局
- ⚡ 性能优化
- ⏳ 即将发布

#### Select 选择器

**用于从选项中选择值**

- 🔍 搜索过滤
- 🏷️ 多选支持
- 🌳 树形选择
- ⏳ 即将发布

#### Checkbox 复选框

**用于多选场景**

- 📚 组合复选
- ➖ 半选状态
- 📊 全选/反选
- ⏳ 即将发布

#### Radio 单选框

**用于单选场景**

- 📚 组合单选
- 🎨 按钮样式
- ⏳ 即将发布

### 💬 反馈组件（计划中）

#### Modal 对话框

**用于重要信息展示和确认**

- 📄 多种类型
- 🎨 自定义尺寸
- ⚙️ 拖拽支持
- ⏳ 即将发布

#### Message 消息提示

**用于显示操作反馈信息**

- 🎨 多种类型
- ⏱️ 自动消失
- 📌 位置可配
- ⏳ 即将发布

#### Notification 通知

**用于重要通知信息**

- 📄 丰富内容
- ⏱️ 持续显示
- 🎨 自定义样式
- ⏳ 即将发布

### 📊 其他组件（计划中）

#### Badge 徽标

**用于展示数字或状态的小标签**

- 🔢 数字显示
- 🔴 小红点模式
- 🎨 自定义样式
- ⏳ 即将发布

#### Avatar 头像

**用于显示用户头像**

- 🖼️ 图片支持
- 🔤 文字头像
- 📚 组合头像
- ⏳ 即将发布

#### Progress 进度条

**用于显示任务进度**

- 📊 多种样式
- 🎨 自定义颜色
- ⏱️ 动画效果
- ⏳ 即将发布

## 使用方式

所有组件都提供 Vue 和 React 两个版本，具有相同的 API 设计：

::: code-group

```vue [Vue]
<template>
  <div class="demo-container">
    <!-- 按钮组件 -->
    <n-button type="primary" size="large" @click="handleClick">
      Vue 按钮
    </n-button>

    <!-- 输入框组件 -->
    <n-input
      v-model="inputValue"
      placeholder="请输入内容"
      show-count
      maxlength="100"
    />

    <!-- 表单示例 -->
    <div class="form-example">
      <n-input
        v-model="form.username"
        placeholder="用户名"
        :status="errors.username ? 'error' : undefined"
      />
      <n-input v-model="form.password" type="password" placeholder="密码" />
      <n-button type="primary" :loading="loading" @click="submitForm">
        {{ loading ? '登录中...' : '登录' }}
      </n-button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Button as NButton, Input as NInput } from '@name-ui/vue'

const inputValue = ref('')
const loading = ref(false)
const form = reactive({
  username: '',
  password: '',
})
const errors = reactive({})

const handleClick = () => {
  console.log('按钮被点击')
}

const submitForm = async () => {
  loading.value = true
  try {
    // 模拟提交请求
    await new Promise(resolve => setTimeout(resolve, 2000))
    alert('提交成功！')
  } finally {
    loading.value = false
  }
}
</script>
```

```tsx [React]
import React, { useState } from 'react'
import { Button, Input } from '@name-ui/react'

export default function ComponentDemo() {
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    username: '',
    password: '',
  })
  const [errors, setErrors] = useState({})

  const handleClick = () => {
    console.log('按钮被点击')
  }

  const updateForm = field => value => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const submitForm = async () => {
    setLoading(true)
    try {
      // 模拟提交请求
      await new Promise(resolve => setTimeout(resolve, 2000))
      alert('提交成功！')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='demo-container'>
      {/* 按钮组件 */}
      <Button type='primary' size='large' onClick={handleClick}>
        React 按钮
      </Button>

      {/* 输入框组件 */}
      <Input
        value={inputValue}
        onChange={setInputValue}
        placeholder='请输入内容'
        showCount
        maxLength={100}
      />

      {/* 表单示例 */}
      <div className='form-example'>
        <Input
          value={form.username}
          onChange={updateForm('username')}
          placeholder='用户名'
          status={errors.username ? 'error' : undefined}
        />
        <Input
          value={form.password}
          onChange={updateForm('password')}
          type='password'
          placeholder='密码'
        />
        <Button type='primary' loading={loading} onClick={submitForm}>
          {loading ? '登录中...' : '登录'}
        </Button>
      </div>
    </div>
  )
}
```

:::

## 最佳实践

### 📚 组件选择

- **Button**: 用于所有可点击操作，选择适合的类型和尺寸
- **Input**: 优先选择，适用于大部分表单场景
- **类型选择**: 根据业务语义选择恰当的类型（primary/success/warning/error）

### 🎨 样式统一

- **颜色使用**: 优先使用预设的语义化颜色
- **尺寸规范**: 在同一界面中保持组件尺寸一致
- **间距统一**: 使用 CSS 变量定义的间距值

### ⚡ 性能优化

- **按需引入**: 只引入需要的组件，减少打包体积
- **懒加载**: 对于非关键组件使用懒加载
- **缓存策略**: 合理使用 memo 和计算属性

### 🔒 类型安全

- **TypeScript**: 充分利用类型定义获得更好的开发体验
- **参数验证**: 在生产环境中验证组件参数
- **错误处理**: 为组件添加适当的错误处理

## 开发路线图

### 🔜 当前版本 (v1.0.0)

- ✅ Button 按钮组件
- ✅ Input 输入框组件
- ✅ 主题系统基础支持
- ✅ Vue/React 跨框架支持
- ✅ TypeScript 类型定义

### 🔜 下个版本 (v1.1.0) - 2024 年 2 月

- 🔄 Form 表单组件
- 🔄 Select 选择器组件
- 🔄 Checkbox 复选框组件
- 🔄 Radio 单选框组件
- 🔄 国际化支持

### 🔜 未来版本 (v1.2.0+)

- 🔄 Table 表格组件
- 🔄 Modal 对话框组件
- 🔄 DatePicker 日期选择器
- 🔄 Upload 上传组件
- 🔄 移动端优化

## 相关资源

### 📚 学习资源

- 🚀 [快速开始](/guide/) - 了解如何开始使用 Name-UI
- 🛠️ [安装指南](/guide/installation) - 详细的安装说明
- 🏷️ [架构设计](/guide/architecture) - 了解 Name-UI 的设计理念
- 🎨 [主题定制](/guide/theming) - 学习如何自定义主题

### 🖼️ 示例项目

- 💚 [Vue 示例](/examples/vue) - 完整的 Vue 项目示例
- ⚙️ [React 示例](/examples/react) - 完整的 React 项目示例
- 📊 [在线演示](https://github.com/yechen123321/Name-Ui/tree/main/examples) - 查看实际效果

### 👥 社区支持

- 💬 [GitHub Discussions](https://github.com/yechen123321/Name-Ui/discussions) - 功能讨论和使用交流
- 🐛 [GitHub Issues](https://github.com/yechen123321/Name-Ui/issues) - Bug 报告和功能请求
- 📝 [贡献指南](/contributing) - 如何参与项目开发
- ❓ [FAQ](/faq) - 常见问题解答

## 下一步

🎉 **准备好开始了吗？**

1. 📚 **阅读文档** - 浏览 [Button 组件](/components/button) 和 [Input 组件](/components/input) 的详细文档
2. 🚀 **实践体验** - 查看 [Vue 示例](/examples/vue) 或 [React 示例](/examples/react)
3. 🎨 **主题定制** - 学习 [主题定制指南](/guide/theming) 创建自己的主题
4. 👥 **参与社区** - 加入我们的 [GitHub 社区](https://github.com/yechen123321/Name-Ui)

---

💬 **有问题或建议？** 欢迎在 [GitHub Issues](https://github.com/yechen123321/Name-Ui/issues) 中提出！
