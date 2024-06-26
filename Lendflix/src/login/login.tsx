import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginScript from './LoginScript';
import '../index/index.css'

ReactDOM.createRoot(document.getElementById('login-root')!).render(
    <React.StrictMode>
      <LoginScript />
    </React.StrictMode>,
  )
  