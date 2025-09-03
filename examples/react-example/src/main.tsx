import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// 引入 Name-UI 主题样式
import '@name-ui/theme'
import '@name-ui/theme/dark'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)