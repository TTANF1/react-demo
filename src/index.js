import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import 'antd-mobile/dist/antd-mobile.css'
import './assets/fonts/iconfont.css'
// 让我们自己设置的全局样式覆盖antd组件库的样式
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
