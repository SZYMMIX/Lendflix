import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginScript from './LoginScript';
import '../index/index.css'
import { initializeIcons } from '@fluentui/react/lib/Icons';
initializeIcons();

ReactDOM.createRoot(document.getElementById('login-root')!).render(
    <React.StrictMode>
      <LoginScript />
    </React.StrictMode>,
  )
  