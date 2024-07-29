import React from 'react'
import ReactDOM from 'react-dom/client'
import PasswordScript from './PasswordScript';
import '../index/index.css'
import { initializeIcons } from '@fluentui/react/lib/Icons';
initializeIcons();

ReactDOM.createRoot(document.getElementById('password-root')!).render(
    <React.StrictMode>
      <PasswordScript />
    </React.StrictMode>,
  )
  