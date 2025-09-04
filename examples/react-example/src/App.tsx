import React, { useState } from 'react'
import { Button, Input } from '@name-ui/react'
import './App.css'

function App() {
  const [buttonLoading, setButtonLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [isDark, setIsDark] = useState(false)

  // 切换加载状态
  const toggleLoading = () => {
    setButtonLoading(true)
    setTimeout(() => {
      setButtonLoading(false)
    }, 2000)
  }

  // 切换主题
  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    document.documentElement.setAttribute(
      'data-theme',
      newTheme ? 'dark' : 'light'
    )
  }

  return (
    <div className='app'>
      <header className='app-header'>
        <h1>Name-UI React 示例</h1>
        <p>这是一个展示 Name-UI 组件库在 React 中使用的示例项目</p>
      </header>

      <main className='app-main'>
        <section className='section'>
          <h2>按钮组件</h2>
          <div className='demo-grid'>
            <div className='demo-item'>
              <h3>基础按钮</h3>
              <div className='demo-content'>
                <Button>默认按钮</Button>
                <Button type='primary'>主要按钮</Button>
                <Button type='secondary'>次要按钮</Button>
                <Button type='success'>成功按钮</Button>
                <Button type='warning'>警告按钮</Button>
                <Button type='danger'>危险按钮</Button>
              </div>
            </div>

            <div className='demo-item'>
              <h3>按钮尺寸</h3>
              <div className='demo-content'>
                <Button size='small'>小尺寸</Button>
                <Button size='medium'>中等尺寸</Button>
                <Button size='large'>大尺寸</Button>
              </div>
            </div>

            <div className='demo-item'>
              <h3>按钮状态</h3>
              <div className='demo-content'>
                <Button disabled>禁用状态</Button>
                <Button loading={buttonLoading} onClick={toggleLoading}>
                  {buttonLoading ? '加载中...' : '点击加载'}
                </Button>
                <Button block type='primary'>
                  块级按钮
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className='section'>
          <h2>输入框组件</h2>
          <div className='demo-grid'>
            <div className='demo-item'>
              <h3>基础输入框</h3>
              <div className='demo-content'>
                <Input
                  value={inputValue}
                  onChange={value => setInputValue(value)}
                  placeholder='请输入内容'
                />
                <p>当前输入值：{inputValue}</p>
              </div>
            </div>

            <div className='demo-item'>
              <h3>输入框尺寸</h3>
              <div className='demo-content'>
                <Input size='small' placeholder='小尺寸' />
                <Input size='medium' placeholder='中等尺寸' />
                <Input size='large' placeholder='大尺寸' />
              </div>
            </div>

            <div className='demo-item'>
              <h3>输入框类型</h3>
              <div className='demo-content'>
                <Input type='text' placeholder='文本输入' />
                <Input type='password' placeholder='密码输入' />
                <Input type='email' placeholder='邮箱输入' />
                <Input type='number' placeholder='数字输入' />
              </div>
            </div>

            <div className='demo-item'>
              <h3>输入框状态</h3>
              <div className='demo-content'>
                <Input disabled placeholder='禁用状态' />
                <Input readonly value='只读状态' />
              </div>
            </div>
          </div>
        </section>

        <section className='section'>
          <h2>主题切换</h2>
          <div className='demo-item'>
            <div className='demo-content'>
              <Button onClick={toggleTheme}>
                切换到{isDark ? '亮色' : '暗色'}主题
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
