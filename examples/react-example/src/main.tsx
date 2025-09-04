import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// 引入 Name-UI 主题样式
import '@name-ui/theme'
import '@name-ui/theme/dark'

// 引入 React 组件样式
import '@name-ui/react/styles'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
