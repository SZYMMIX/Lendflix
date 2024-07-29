import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index/index.css'
import { initializeIcons } from '@fluentui/react/lib/Icons';
import LockScript from './LockScript';
initializeIcons();

ReactDOM.createRoot(document.getElementById('lock-root')!).render(
    <React.StrictMode>
      <LockScript />
    </React.StrictMode>,
  )
  