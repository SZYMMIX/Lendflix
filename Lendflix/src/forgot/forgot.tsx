import React from 'react'
import ReactDOM from 'react-dom/client'
import ForgotScript from './ForgotScript';
import '../index/index.css'
import { initializeIcons } from '@fluentui/react/lib/Icons';
initializeIcons();

ReactDOM.createRoot(document.getElementById('forgot-root')!).render(
    <React.StrictMode>
      <ForgotScript />
    </React.StrictMode>,
  )